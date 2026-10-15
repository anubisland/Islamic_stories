// Extracts the Arabic narration text of every slide from story1..9.html and
// prints it as JSON: { "story1": ["...", ...], ... }. The text logic mirrors
// getNarration() in the story pages so the MP3 for slide i matches slide i.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function slidesOf(file) {
  const html = fs.readFileSync(path.join(ROOT, file), "utf8");
  const start = html.indexOf("var SLIDES = [");
  const end = html.indexOf("];", start);
  const ctx = {};
  vm.runInNewContext(html.slice(start, end + 2) + "; this.SLIDES = SLIDES;", ctx);
  return ctx.SLIDES;
}

function narrationAr(s) {
  if (s.type === "cover") return s.title + ". " + s.subtitle;
  if (s.type === "intro") return s.lines.map((l) => l.ar).join(" ");
  if (s.type === "scene") return s.ar;
  if (s.type === "morals") return s.items.map((m) => m.ar).join(" ");
  if (s.type === "closing") return "نلتقي في القصة القادمة";
  return "";
}

const out = {};
for (let n = 1; n <= 9; n++) out["story" + n] = slidesOf("story" + n + ".html").map(narrationAr);
process.stdout.write(JSON.stringify(out));
