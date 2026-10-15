// Narrator: reads each slide in ONE language, chosen by the viewer.
//  - Arabic: pre-recorded MP3 (audio/storyN/NN.mp3, voice ar-EG-ShakirNeural);
//    falls back to the device's Arabic voice only if the MP3 can't be played.
//  - English: the device's own speech-synthesis voice.
(function () {
  var LANG_KEY = 'narrationLang';
  function narrationLang() {
    try { return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; }
  }
  window.toggleNarrationLang = function () {
    try { localStorage.setItem(LANG_KEY, narrationLang() === 'ar' ? 'en' : 'ar'); } catch (e) {}
  };
  window.narrationLangLabel = function () {
    return narrationLang() === 'en' ? '🔊 English' : '🔊 عربي';
  };

  function pickVoice(re) {
    if (!('speechSynthesis' in window)) return null;
    return window.speechSynthesis.getVoices().find(function (v) { return re.test(v.lang); }) || null;
  }

  function speakDevice(text, langRe, lang, rate, done) {
    if (!text || !('speechSynthesis' in window)) { done(); return; }
    var u = new SpeechSynthesisUtterance(text), v = pickVoice(langRe);
    u.lang = v ? v.lang : lang; u.rate = rate; if (v) u.voice = v;
    u.onend = done; u.onerror = done;
    try { window.speechSynthesis.speak(u); } catch (e) { done(); }
  }

  window.createNarrator = function (opts) {
    // opts: story ("story1"), total, arText(i), enText(i), onSlide(i), onEnd()
    var audio = new Audio(), gen = 0;

    function playArabic(i, g, done) {
      var src = 'audio/' + opts.story + '/' + (i < 10 ? '0' : '') + i + '.mp3';
      var fallback = function (why) {
        if (g !== gen) return;
        console.warn('narrator: MP3 unavailable, using device voice', src, why || (audio.error && audio.error.code));
        speakDevice(opts.arText(i), /^ar/i, 'ar', 0.85, done);
      };
      audio.onended = function () { if (g === gen) done(); };
      audio.onerror = fallback;
      audio.src = src;
      var p = audio.play();
      if (p && p.catch) p.catch(function (e) { if (e && e.name !== 'AbortError') fallback(e.name); });
    }

    function step(i, g) {
      if (g !== gen) return;
      if (i >= opts.total) { opts.onEnd(); return; }
      var english = narrationLang() === 'en';
      if (!(english ? opts.enText(i) : opts.arText(i))) { step(i + 1, g); return; }
      opts.onSlide(i);
      var next = function () { if (g === gen) step(i + 1, g); };
      if (english) speakDevice(opts.enText(i), /^en/i, 'en-US', 0.9, next);
      else playArabic(i, g, next);
    }

    function stop() {
      gen++;
      audio.onended = audio.onerror = null;
      audio.pause();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }

    return {
      play: function (from) { stop(); step(from, gen); },
      stop: stop
    };
  };
})();
