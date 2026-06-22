// ============================================================
// SVG Scene Illustrations — صغار الصحابة
// Desert/Arabian 7th‑century cartoon vector scenes
// All figures shown in full Islamic dress (thobes, head coverings)
// ============================================================
(function () {
  'use strict';

  var DEFS = '<defs>' +
    '<linearGradient id="skySunset" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#0D1B3E"/><stop offset="45%" stop-color="#2D1B0E"/><stop offset="100%" stop-color="#C49A3C"/>' +
    '</linearGradient>' +
    '<linearGradient id="skyNight" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#0A0F24"/><stop offset="100%" stop-color="#1A2A4A"/>' +
    '</linearGradient>' +
    '<linearGradient id="skyFire" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#3D0C0C"/><stop offset="60%" stop-color="#8B2500"/><stop offset="100%" stop-color="#D4601A"/>' +
    '</linearGradient>' +
    '<radialGradient id="sunGlow"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFD700" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="fireGlow"><stop offset="0%" stop-color="#FF8C00" stop-opacity="0.4"/><stop offset="100%" stop-color="#FF8C00" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="lampGlow"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.15"/><stop offset="100%" stop-color="#FFD700" stop-opacity="0"/></radialGradient>' +
    '<linearGradient id="sandGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D4AF37"/><stop offset="100%" stop-color="#A0782A"/></linearGradient>' +
    '<linearGradient id="tentGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7A4E2D"/><stop offset="100%" stop-color="#5C3A1E"/></linearGradient>' +
    '</defs>';

  function svg(inner) {
    return '<svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">' +
      DEFS + inner + '</svg>';
  }

  function stars() {
    var s = '';
    var p = [[50,18],[90,30],[140,12],[180,25],[220,15],[270,28],[310,10],[350,22],[380,32],[30,40],[110,8],[160,35],[200,20],[250,35],[300,18],[340,35],[370,15]];
    for (var i = 0; i < p.length; i++) s += '<circle cx="' + p[i][0] + '" cy="' + p[i][1] + '" r="' + (0.8 + i % 3 * 0.3) + '" fill="#FFF" opacity="' + (0.3 + i % 5 * 0.12) + '"/>';
    return s;
  }
  function moon(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#FFE4A0" opacity="0.85"/>' +
      '<circle cx="' + (cx + r * 0.3) + '" cy="' + (cy - r * 0.2) + '" r="' + (r * 0.85) + '" fill="#0D1B3E"/>';
  }
  function sun(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 1.6) + '" fill="url(#sunGlow)"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#FFD700" opacity="0.9"/>';
  }
  function palm(x, gy, sc) {
    sc = sc || 1; var th = 38 * sc, fs = 22 * sc, by = gy, ty = by - th;
    return '<path d="M' + (x - 2*sc) + ',' + by + ' Q' + (x - sc) + ',' + (ty + th*0.3) + ' ' + x + ',' + ty + ' Q' + (x + sc) + ',' + (ty + th*0.3) + ' ' + (x + 2*sc) + ',' + by + '" fill="#5C3A1E" stroke="#4A2A0A" stroke-width="' + (0.5*sc) + '"/>' +
      '<path d="M' + x + ',' + ty + ' Q' + (x - fs*1.4) + ',' + (ty - fs*0.3) + ' ' + (x - fs*1.6) + ',' + (ty + fs*0.4) + ' Q' + (x - fs*0.5) + ',' + (ty + fs*0.1) + ' ' + x + ',' + ty + '" fill="#2D5A27"/>' +
      '<path d="M' + x + ',' + ty + ' Q' + (x + fs*1.4) + ',' + (ty - fs*0.3) + ' ' + (x + fs*1.6) + ',' + (ty + fs*0.4) + ' Q' + (x + fs*0.5) + ',' + (ty + fs*0.1) + ' ' + x + ',' + ty + '" fill="#3A7A33"/>' +
      '<path d="M' + x + ',' + ty + ' Q' + (x - fs*0.8) + ',' + (ty - fs*0.7) + ' ' + (x - fs*0.2) + ',' + (ty - fs*0.9) + ' Q' + (x + fs*0.3) + ',' + (ty - fs*0.5) + ' ' + x + ',' + ty + '" fill="#4A8A43"/>' +
      '<path d="M' + x + ',' + ty + ' Q' + (x + fs*0.8) + ',' + (ty - fs*0.7) + ' ' + (x + fs*0.2) + ',' + (ty - fs*0.9) + ' Q' + (x - fs*0.3) + ',' + (ty - fs*0.5) + ' ' + x + ',' + ty + '" fill="#3A7A33"/>';
  }
  function dunes() {
    return '<path d="M0,65 Q60,52 120,62 Q180,48 240,58 Q300,50 360,55 L400,52 L400,110 L0,110 Z" fill="#A0782A" opacity="0.5"/>' +
      '<path d="M0,76 Q80,64 160,73 Q220,62 280,70 Q340,60 400,66 L400,110 L0,110 Z" fill="#8B6914" opacity="0.6"/>' +
      '<path d="M0,88 Q100,76 200,85 Q300,74 400,82 L400,110 L0,110 Z" fill="#C49A3C" opacity="0.4"/>' +
      '<path d="M0,97 Q80,88 160,94 Q260,84 340,92 L400,90 L400,110 L0,110 Z" fill="#D4AF37" opacity="0.25"/>';
  }

  // Clothed figure in thobe (full Islamic dress)
  // color: thobe color, headColor: skin/head cover color, x/y: position
  function thobeFig(x, y, thobeColor, headColor, beltColor) {
    beltColor = beltColor || '#8B6914';
    return '' +
      // Thobe body (long garment from neck to ground)
      '<path d="M' + (x - 6) + ',' + (y - 10) + ' L' + (x - 9) + ',' + (y + 20) + ' L' + (x + 9) + ',' + (y + 20) + ' L' + (x + 6) + ',' + (y - 10) + ' Z" fill="' + thobeColor + '" stroke="#000" stroke-width="0.3" opacity="0.9"/>' +
      // Neck area
      '<rect x="' + (x - 3) + '" y="' + (y - 12) + '" width="6" height="4" fill="' + headColor + '" rx="1"/>' +
      // Head (covered - kufi/ghutra shape)
      '<circle cx="' + x + '" cy="' + (y - 16) + '" r="5" fill="' + headColor + '"/>' +
      // Head covering top
      '<path d="M' + (x - 5) + ',' + (y - 17) + ' Q' + x + ',' + (y - 24) + ' ' + (x + 5) + ',' + (y - 17) + '" fill="' + headColor + '" opacity="0.8"/>' +
      // Belt/sash
      '<rect x="' + (x - 7) + '" y="' + (y - 3) + '" width="14" height="2.5" fill="' + beltColor + '" rx="0.5" opacity="0.7"/>';
  }

  // ============================================================
  // Scene 1: Desert Panorama
  // ============================================================
  window.sceneDesert = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(330, 38, 16) + dunes() + palm(75, 88, 1) + palm(320, 85, 0.8));
  };

  // ============================================================
  // Scene 2: Night Sky (tent, moon, campfire)
  // ============================================================
  window.sceneNight = function () {
    return svg('<rect width="400" height="110" fill="url(#skyNight)"/>' + stars() + moon(320, 28, 12) +
      '<path d="M0,75 Q100,65 200,72 Q300,62 400,68 L400,110 L0,110 Z" fill="#2D1B0E" opacity="0.8"/>' +
      '<path d="M130,80 L170,40 L210,80 Z" fill="url(#tentGrad)" stroke="#4A2A0A" stroke-width="0.5"/>' +
      '<path d="M130,80 L170,40 L170,80 Z" fill="#5C3A1E"/>' +
      '<path d="M148,80 L170,58 L192,80 Z" fill="#1A0E06"/>' +
      '<ellipse cx="240" cy="82" rx="10" ry="4" fill="#3D1C00"/>' +
      '<circle cx="240" cy="80" r="8" fill="url(#fireGlow)"/>' +
      '<path d="M236,80 Q240,68 244,80" fill="#FF8C00" opacity="0.9"/>' +
      '<path d="M238,80 Q240,72 242,80" fill="#FFD700" opacity="0.7"/>' +
      '<line x1="236" y1="82" x2="244" y2="82" stroke="#4A2A0A" stroke-width="2" stroke-linecap="round"/>' +
      palm(60, 78, 0.9) + palm(310, 76, 0.8));
  };

  // ============================================================
  // Scene 3: Battlefield (swords, shields, fiery sky)
  // ============================================================
  window.sceneBattle = function () {
    return svg('<rect width="400" height="110" fill="url(#skyFire)"/>' +
      '<ellipse cx="80" cy="45" rx="40" ry="20" fill="#C49A3C" opacity="0.12"/>' +
      '<ellipse cx="250" cy="55" rx="50" ry="18" fill="#C49A3C" opacity="0.08"/>' +
      '<ellipse cx="350" cy="40" rx="35" ry="15" fill="#C49A3C" opacity="0.1"/>' +
      '<path d="M0,65 Q100,55 200,62 Q300,52 400,58 L400,110 L0,110 Z" fill="#5C3A1E" opacity="0.7"/>' +
      '<path d="M0,78 Q80,70 180,76 Q280,66 400,72 L400,110 L0,110 Z" fill="#4A2A0A" opacity="0.6"/>' +
      // Crossed swords
      '<g transform="translate(200,55)">' +
      '<rect x="-2" y="-30" width="4" height="55" fill="#C0C0C0" rx="1" transform="rotate(-30)"/>' +
      '<rect x="-2" y="-30" width="4" height="55" fill="#E0E0E0" rx="1" transform="rotate(30)"/>' +
      '<rect x="-5" y="-2" width="10" height="5" fill="#8B6914" rx="1"/>' +
      '<rect x="-2" y="23" width="4" height="4" fill="#8B6914" rx="0.5"/>' +
      '<rect x="-2" y="23" width="4" height="4" fill="#8B6914" rx="0.5" transform="rotate(30)"/>' +
      '<circle cx="0" cy="-32" r="4" fill="#FFD700" opacity="0.6"/>' +
      '</g>' +
      '<circle cx="140" cy="62" r="12" fill="#8B4513" stroke="#D4AF37" stroke-width="1.5"/>' +
      '<circle cx="140" cy="62" r="6" fill="#A0782A" opacity="0.5"/>' +
      '<circle cx="260" cy="60" r="10" fill="#8B4513" stroke="#D4AF37" stroke-width="1.5"/>' +
      palm(60, 72, 0.7) + palm(340, 70, 0.7));
  };

  // ============================================================
  // Scene 4: Madinah (mosque, palms, sunset)
  // ============================================================
  window.sceneMadinah = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(50, 32, 14) +
      '<g transform="translate(200,40)">' +
      '<path d="M-20,40 Q-20,15 0,8 Q20,15 20,40 Z" fill="#E8D5A3" stroke="#D4AF37" stroke-width="0.8"/>' +
      '<path d="M0,8 L0,4" stroke="#FFD700" stroke-width="1.5"/><circle cx="0" cy="3" r="2" fill="#FFD700"/>' +
      '<rect x="-22" y="40" width="44" height="20" fill="#D4B88C" stroke="#C49A3C" stroke-width="0.5"/>' +
      '<path d="M-8,60 Q0,40 8,60" fill="#2D1B0E"/>' +
      '<rect x="-30" y="15" width="4" height="45" fill="#E8D5A3"/><circle cx="-28" cy="15" r="3" fill="#D4AF37"/>' +
      '<rect x="26" y="15" width="4" height="45" fill="#E8D5A3"/><circle cx="28" cy="15" r="3" fill="#D4AF37"/>' +
      '</g>' + dunes() + palm(80, 82, 1) + palm(320, 80, 0.9));
  };

  // ============================================================
  // Scene 5: Family Tent (interior view - carpet, lamp, cushions)
  // ============================================================
  window.sceneTent = function () {
    return svg('<rect width="400" height="110" fill="#1A0E06"/>' +
      // Tent fabric roof
      '<path d="M0,0 Q200,25 400,0 L400,35 Q200,55 0,35 Z" fill="#5C3A1E" opacity="0.6"/>' +
      '<path d="M0,35 Q200,55 400,35 L400,110 L0,110 Z" fill="#2D1B0E" opacity="0.9"/>' +
      // Floor rug
      '<rect x="40" y="85" width="320" height="25" fill="#7A4E2D" rx="2" opacity="0.6"/>' +
      '<rect x="45" y="87" width="310" height="18" fill="#8B5E3C" rx="1" opacity="0.4"/>' +
      // Cushions (sitting area)
      '<rect x="80" y="78" width="30" height="12" fill="#A0782A" rx="3"/>' +
      '<rect x="290" y="78" width="30" height="12" fill="#A0782A" rx="3"/>' +
      // Lamp hanging
      '<line x1="200" y1="30" x2="200" y2="55" stroke="#8B6914" stroke-width="1"/>' +
      '<ellipse cx="200" cy="58" rx="6" ry="3" fill="#D4AF37"/>' +
      '<rect x="197" y="52" width="6" height="6" fill="#E8D5A3"/>' +
      '<path d="M199,52 L200,46 L201,52" fill="#FF8C00" opacity="0.8"/>' +
      '<circle cx="200" cy="48" r="12" fill="url(#lampGlow)"/>' +
      // Tent pole
      '<line x1="100" y1="35" x2="100" y2="85" stroke="#4A2A0A" stroke-width="2"/>' +
      '<line x1="300" y1="35" x2="300" y2="85" stroke="#4A2A0A" stroke-width="2"/>' +
      palm(360, 80, 0.8));
  };

  // ============================================================
  // Scene 6: Study (book on rehal, oil lamp)
  // ============================================================
  window.sceneStudy = function () {
    return svg('<rect width="400" height="110" fill="#1A0E06"/>' +
      '<ellipse cx="200" cy="60" rx="180" ry="60" fill="#8B6914" opacity="0.08"/>' +
      '<ellipse cx="200" cy="60" rx="120" ry="40" fill="#C49A3C" opacity="0.06"/>' +
      '<rect x="0" y="85" width="400" height="25" fill="#2D1B0E"/>' +
      // Rehal (book stand)
      '<g transform="translate(200,55)">' +
      '<polygon points="-8,28 0,20 8,28 0,35" fill="#5C3A1E"/>' +
      '<polygon points="-20,30 0,15 20,30" fill="#7A4E2D" stroke="#4A2A0A" stroke-width="0.5"/>' +
      '<polygon points="-18,30 0,17 18,30" fill="#FFF8E7"/>' +
      '<line x1="-10" y1="24" x2="10" y2="24" stroke="#1A0E06" stroke-width="0.5" opacity="0.3"/>' +
      '<line x1="-11" y1="27" x2="11" y2="27" stroke="#1A0E06" stroke-width="0.5" opacity="0.3"/>' +
      '</g>' +
      // Oil lamp
      '<g transform="translate(100,55)">' +
      '<rect x="-2" y="0" width="4" height="25" fill="#D4AF37"/>' +
      '<ellipse cx="0" cy="-2" rx="8" ry="3" fill="#D4AF37"/>' +
      '<ellipse cx="0" cy="-5" rx="4" ry="5" fill="#E8D5A3"/>' +
      '<path d="M-2,-5 L0,-10 L2,-5" fill="#FF8C00" opacity="0.8"/>' +
      '<circle cx="0" cy="-10" r="6" fill="url(#fireGlow)"/>' +
      '<path d="M0,-5 L0,-12" stroke="#FFD700" stroke-width="1.5" opacity="0.6"/>' +
      '</g>' +
      palm(310, 80, 1) +
      '<circle cx="60" cy="20" r="0.8" fill="#FFF" opacity="0.4"/>' +
      '<circle cx="150" cy="15" r="1" fill="#FFF" opacity="0.3"/>' +
      '<circle cx="280" cy="22" r="0.8" fill="#FFF" opacity="0.4"/>');
  };

  // ============================================================
  // Scene 7: Prayer / Dua
  // ============================================================
  window.scenePrayer = function () {
    return svg('<rect width="400" height="110" fill="#0D1B3E"/>' +
      '<polygon points="200,0 80,110 320,110" fill="#FFD700" opacity="0.05"/>' +
      '<polygon points="200,0 140,110 260,110" fill="#FFD700" opacity="0.08"/>' +
      '<polygon points="200,0 170,110 230,110" fill="#FFD700" opacity="0.04"/>' +
      '<path d="M0,85 Q200,78 400,85 L400,110 L0,110 Z" fill="#2D1B0E" opacity="0.8"/>' +
      // Hands raised in dua
      '<g transform="translate(200,68)">' +
      '<path d="M-6,10 Q-10,-5 -8,-15 Q-6,-20 -3,-18 Q0,-15 -3,5 Z" fill="#D4B88C" stroke="#A0782A" stroke-width="0.5"/>' +
      '<path d="M6,10 Q10,-5 8,-15 Q6,-20 3,-18 Q0,-15 3,5 Z" fill="#D4B88C" stroke="#A0782A" stroke-width="0.5"/>' +
      '<ellipse cx="0" cy="-8" rx="6" ry="10" fill="#FFD700" opacity="0.1"/>' +
      '</g>' +
      // Mosque silhouette
      '<g transform="translate(200,85)" opacity="0.3">' +
      '<path d="M-30,0 Q-30,-15 0,-20 Q30,-15 30,0 Z" fill="#FFE4A0"/>' +
      '<rect x="-25" y="0" width="50" height="10" fill="#FFE4A0"/>' +
      '<rect x="-35" y="-5" width="4" height="15" fill="#FFE4A0"/>' +
      '<rect x="31" y="-5" width="4" height="15" fill="#FFE4A0"/>' +
      '</g>' +
      '<circle cx="330" cy="25" r="1.5" fill="#FFD700" opacity="0.6"/>' +
      '<circle cx="60" cy="30" r="1" fill="#FFF" opacity="0.4"/>' +
      '<circle cx="140" cy="18" r="0.8" fill="#FFF" opacity="0.5"/>');
  };

  // ============================================================
  // Scene 8: Wrestling — figures in FULL THOBES (dignified dress)
  // ============================================================
  window.sceneWrestle = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(340, 28, 11) +
      '<path d="M0,70 Q200,60 400,68 L400,110 L0,110 Z" fill="#C49A3C" opacity="0.5"/>' +
      '<path d="M0,78 Q200,70 400,76 L400,110 L0,110 Z" fill="#A0782A" opacity="0.5"/>' +
      // Arena circle
      '<ellipse cx="200" cy="82" rx="55" ry="10" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.35"/>' +
      // Dust particles
      '<ellipse cx="170" cy="76" rx="6" ry="2" fill="#C49A3C" opacity="0.15"/>' +
      '<ellipse cx="230" cy="74" rx="4" ry="1.5" fill="#C49A3C" opacity="0.12"/>' +

      // RIGHT FIGURE — thobe + head cover — positioned slightly left, reaching right
      // Thobe body (white/cream)
      '<path d="M165,52 L158,80 L178,80 L175,52 Z" fill="#F5F0E0" stroke="#000" stroke-width="0.3" opacity="0.9"/>' +
      // Belt
      '<rect x="162" y="60" width="12" height="2" fill="#8B6914" rx="0.5" opacity="0.7"/>' +
      // Neck
      '<rect x="167" y="50" width="5" height="4" fill="#D4B88C" rx="1"/>' +
      // Head with ghutra
      '<circle cx="170" cy="46" r="4.5" fill="#D4B88C"/>' +
      '<path d="M165,45 Q170,39 175,45" fill="#FFF" opacity="0.9"/>' +
      // Right arm reaching toward opponent
      '<path d="M174,56 Q186,52 190,58" stroke="#D4B88C" stroke-width="2.5" stroke-linecap="round" fill="none"/>' +
      '<path d="M190,58 L193,57" stroke="#D4B88C" stroke-width="2" stroke-linecap="round"/>' +
      // Left arm reaching
      '<path d="M167,56 Q160,62 156,58" stroke="#D4B88C" stroke-width="2.5" stroke-linecap="round" fill="none"/>' +
      '<path d="M156,58 L153,57" stroke="#D4B88C" stroke-width="2" stroke-linecap="round"/>' +
      // Thobe hemline detail
      '<path d="M158,80 L178,80" stroke="#DDD5C5" stroke-width="0.5"/>' +

      // LEFT FIGURE — thobe + head cover — positioned slightly right, reaching left
      // Thobe body (brown/tan for contrast)
      '<path d="M225,52 L218,80 L238,80 L235,52 Z" fill="#E8D5A3" stroke="#000" stroke-width="0.3" opacity="0.9"/>' +
      // Belt
      '<rect x="222" y="60" width="12" height="2" fill="#8B6914" rx="0.5" opacity="0.7"/>' +
      // Neck
      '<rect x="227" y="50" width="5" height="4" fill="#C49A3C" rx="1"/>' +
      // Head with ghutra
      '<circle cx="230" cy="46" r="4.5" fill="#C49A3C"/>' +
      '<path d="M225,45 Q230,39 235,45" fill="#E8D5A3" opacity="0.9"/>' +
      // Left arm reaching toward opponent
      '<path d="M226,56 Q214,52 210,58" stroke="#C49A3C" stroke-width="2.5" stroke-linecap="round" fill="none"/>' +
      '<path d="M210,58 L207,57" stroke="#C49A3C" stroke-width="2" stroke-linecap="round"/>' +
      // Right arm reaching
      '<path d="M233,56 Q240,62 244,58" stroke="#C49A3C" stroke-width="2.5" stroke-linecap="round" fill="none"/>' +
      '<path d="M244,58 L247,57" stroke="#C49A3C" stroke-width="2" stroke-linecap="round"/>' +
      // Thobe hemline detail
      '<path d="M218,80 L238,80" stroke="#D4B88C" stroke-width="0.5"/>' +

      palm(60, 72, 0.8) + palm(340, 70, 0.8));
  };

  // ============================================================
  // Scene 9: Scribe / Writing
  // ============================================================
  window.sceneScribe = function () {
    return svg('<rect width="400" height="110" fill="#1A0E06"/>' +
      '<ellipse cx="200" cy="55" rx="180" ry="55" fill="#C49A3C" opacity="0.05"/>' +
      '<rect x="0" y="82" width="400" height="28" fill="#2D1B0E"/>' +
      '<rect x="100" y="82" width="200" height="28" fill="#5C3A1E" opacity="0.4" rx="3"/>' +
      '<g transform="translate(200,55)">' +
      '<rect x="-25" y="-10" width="50" height="35" fill="#FFF8E7" rx="2" stroke="#D4AF37" stroke-width="0.5"/>' +
      '<line x1="-18" y1="-2" x2="18" y2="-2" stroke="#1A0E06" stroke-width="0.4" opacity="0.3"/>' +
      '<line x1="-18" y1="2" x2="18" y2="2" stroke="#1A0E06" stroke-width="0.4" opacity="0.3"/>' +
      '<line x1="-18" y1="6" x2="12" y2="6" stroke="#1A0E06" stroke-width="0.4" opacity="0.3"/>' +
      '<line x1="-18" y1="10" x2="15" y2="10" stroke="#1A0E06" stroke-width="0.4" opacity="0.3"/>' +
      '<line x1="-18" y1="14" x2="8" y2="14" stroke="#1A0E06" stroke-width="0.4" opacity="0.3"/>' +
      '</g>' +
      '<line x1="210" y1="35" x2="225" y2="50" stroke="#8B6914" stroke-width="2.5" stroke-linecap="round"/>' +
      '<line x1="225" y1="50" x2="228" y2="52" stroke="#1A0E06" stroke-width="1" stroke-linecap="round"/>' +
      '<g transform="translate(240,62)">' +
      '<ellipse cx="0" cy="5" rx="6" ry="3" fill="#4A2A0A"/>' +
      '<rect x="-6" y="-5" width="12" height="10" fill="#3D1C00" rx="1"/>' +
      '<ellipse cx="0" cy="-5" rx="6" ry="3" fill="#1A0E06"/>' +
      '<ellipse cx="0" cy="-5" rx="3" ry="1.5" fill="#0A0A0A"/>' +
      '</g>' +
      '<g transform="translate(90,50)">' +
      '<rect x="-2" y="0" width="4" height="25" fill="#D4AF37"/>' +
      '<ellipse cx="0" cy="-2" rx="6" ry="2.5" fill="#D4AF37"/>' +
      '<ellipse cx="0" cy="-4" rx="3" ry="4" fill="#E8D5A3"/>' +
      '<path d="M-1,-4 L0,-8 L1,-4" fill="#FF8C00" opacity="0.8"/>' +
      '<circle cx="0" cy="-8" r="5" fill="url(#fireGlow)"/>' +
      '</g>' +
      '<circle cx="50" cy="18" r="0.8" fill="#FFF" opacity="0.4"/>' +
      '<circle cx="320" cy="22" r="1" fill="#FFF" opacity="0.3"/>' +
      '<circle cx="370" cy="15" r="0.8" fill="#FFF" opacity="0.4"/>');
  };

  // ============================================================
  // Scene 10: Camel
  // ============================================================
  window.sceneCamel = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(50, 32, 14) + dunes() +
      '<g transform="translate(200,55)">' +
      '<ellipse cx="0" cy="10" rx="22" ry="10" fill="#8B6914"/>' +
      '<ellipse cx="-2" cy="2" rx="10" ry="8" fill="#8B6914"/>' +
      '<path d="M18,5 Q25,-8 22,-18 L26,-18 Q28,-5 22,8" fill="#8B6914" stroke="#7A5E12" stroke-width="0.5"/>' +
      '<ellipse cx="26" cy="-20" rx="6" ry="4" fill="#8B6914"/>' +
      '<ellipse cx="22" cy="-23" rx="2" ry="1" fill="#7A5E12"/>' +
      '<circle cx="28" cy="-21" r="1" fill="#1A0E06"/>' +
      '<rect x="-14" y="18" width="4" height="18" fill="#7A5E12" rx="1"/>' +
      '<rect x="-6" y="18" width="4" height="18" fill="#7A5E12" rx="1"/>' +
      '<rect x="6" y="18" width="4" height="18" fill="#7A5E12" rx="1"/>' +
      '<rect x="14" y="18" width="4" height="18" fill="#7A5E12" rx="1"/>' +
      '<path d="M-22,5 Q-28,10 -26,15" stroke="#7A5E12" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '</g>' + palm(80, 82, 1) + palm(340, 80, 0.8));
  };

  // ============================================================
  // Scene 11: Oasis
  // ============================================================
  window.sceneOasis = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(330, 30, 12) + dunes() +
      '<ellipse cx="200" cy="90" rx="100" ry="12" fill="#2D5A8A" opacity="0.5"/>' +
      '<ellipse cx="200" cy="90" rx="80" ry="8" fill="#4A8ABD" opacity="0.3"/>' +
      '<line x1="170" y1="88" x2="230" y2="88" stroke="#FFD700" stroke-width="0.5" opacity="0.15"/>' +
      palm(100, 78, 1) + palm(300, 78, 1) +
      '<path d="M155,65 Q160,55 165,65" fill="#4A8A43"/><path d="M235,62 Q240,52 245,62" fill="#4A8A43"/>');
  };

  // ============================================================
  // Scene 12: Madinah City Street
  // ============================================================
  window.sceneCity = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(330, 30, 12) +
      '<g transform="translate(0,40)">' +
      '<rect x="30" y="15" width="35" height="45" fill="#D4B88C" rx="1"/>' +
      '<rect x="42" y="25" width="10" height="12" fill="#2D1B0E" rx="0.5"/>' +
      '<rect x="70" y="10" width="30" height="50" fill="#C49A3C" rx="1"/>' +
      '<rect x="78" y="20" width="8" height="10" fill="#2D1B0E" rx="0.5"/>' +
      '<rect x="110" y="20" width="40" height="40" fill="#E8D5A3" rx="1"/>' +
      '<rect x="120" y="30" width="10" height="12" fill="#2D1B0E" rx="0.5"/>' +
      '<rect x="160" y="25" width="30" height="35" fill="#D4B88C" rx="1"/>' +
      '<path d="M170,20 Q185,0 200,20 Z" fill="#FFE4A0" stroke="#D4AF37" stroke-width="0.5"/>' +
      '<rect x="195" y="5" width="4" height="40" fill="#E8D5A3"/><circle cx="197" cy="5" r="3" fill="#D4AF37"/>' +
      '</g>' +
      '<path d="M0,85 Q200,80 400,85 L400,110 L0,110 Z" fill="#C49A3C" opacity="0.4"/>' +
      '<path d="M0,90 Q200,86 400,90 L400,110 L0,110 Z" fill="#A0782A" opacity="0.4"/>' +
      palm(280, 78, 1) + palm(360, 76, 0.9));
  };

  // ============================================================
  // Scene 13: Military Camp (tents, banners, army setting)
  // ============================================================
  window.sceneArmy = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(50, 30, 13) +
      '<path d="M0,70 Q100,62 200,67 Q300,60 400,65 L400,110 L0,110 Z" fill="#C49A3C" opacity="0.4"/>' +
      '<path d="M0,78 Q80,70 180,76 Q280,68 400,73 L400,110 L0,110 Z" fill="#A0782A" opacity="0.5"/>' +
      // Large command tent
      '<path d="M80,72 L120,30 L160,72 Z" fill="url(#tentGrad)" stroke="#4A2A0A" stroke-width="0.8"/>' +
      '<path d="M80,72 L120,30 L120,72 Z" fill="#6B4226"/>' +
      '<path d="M100,72 L120,48 L140,72 Z" fill="#1A0E06"/>' +
      // Banner on command tent
      '<line x1="120" y1="30" x2="120" y2="18" stroke="#4A2A0A" stroke-width="1.5"/>' +
      '<rect x="114" y="18" width="12" height="8" fill="#D4AF37" rx="0.5"/>' +
      // Small tent right
      '<path d="M260,74 L290,48 L320,74 Z" fill="#7A4E2D" stroke="#4A2A0A" stroke-width="0.5"/>' +
      '<path d="M260,74 L290,48 L290,74 Z" fill="#5C3A1E"/>' +
      // Banner
      '<line x1="290" y1="48" x2="290" y2="38" stroke="#4A2A0A" stroke-width="1"/>' +
      '<rect x="286" y="38" width="8" height="6" fill="#C49A3C" rx="0.5"/>' +
      // Soldier figures standing guard (clothed in thobes)
      thobeFig(190, 65, '#E8D5A3', '#D4B88C') +
      thobeFig(210, 65, '#F0E8D0', '#C49A3C', '#5C3A1E') +
      palm(40, 72, 0.8) + palm(370, 70, 0.8));
  };

  // ============================================================
  // Scene 14: Archery Target
  // ============================================================
  window.sceneTarget = function () {
    return svg('<rect width="400" height="110" fill="url(#skySunset)"/>' + sun(330, 28, 12) +
      '<path d="M0,75 Q100,66 200,72 Q300,64 400,70 L400,110 L0,110 Z" fill="#C49A3C" opacity="0.4"/>' +
      '<path d="M0,84 Q80,75 180,82 Q280,72 400,78 L400,110 L0,110 Z" fill="#A0782A" opacity="0.5"/>' +
      // Target (circular)
      '<g transform="translate(280,52)">' +
      '<circle cx="0" cy="0" r="18" fill="#8B4513" stroke="#5C3A1E" stroke-width="2"/>' +
      '<circle cx="0" cy="0" r="14" fill="#A0782A" stroke="#D4AF37" stroke-width="1"/>' +
      '<circle cx="0" cy="0" r="10" fill="#5C3A1E"/>' +
      '<circle cx="0" cy="0" r="5" fill="#FFD700" opacity="0.8"/>' +
      '<circle cx="0" cy="0" r="2" fill="#8B2500"/>' +
      // Arrow in target
      '<line x1="5" y1="-2" x2="28" y2="-15" stroke="#8B6914" stroke-width="1.5" stroke-linecap="round"/>' +
      '<path d="M28,-15 L32,-21 L26,-13 Z" fill="#8B6914"/>' +
      '<line x1="24" y1="-17" x2="28" y2="-15" stroke="#8B6914" stroke-width="1" stroke-linecap="round"/>' +
      // Arrow feathers
      '<path d="M22,-18 L28,-15 L25,-12" fill="#5C3A1E" opacity="0.6"/>' +
      '</g>' +
      // Bow (placed on ground)
      '<g transform="translate(160,65)">' +
      '<path d="M0,10 Q-15,-10 0,-18 Q15,-10 0,10" fill="none" stroke="#8B6914" stroke-width="2.5" stroke-linecap="round"/>' +
      '<line x1="0" y1="10" x2="0" y2="-18" stroke="#5C3A1E" stroke-width="0.5"/>' +
      // Bowstring
      '<line x1="0" y1="10" x2="0" y2="-18" stroke="#8B6914" stroke-width="0.5"/>' +
      '</g>' +
      palm(60, 72, 0.8) + palm(370, 70, 0.7));
  };

})();
