"""Generate Arabic narration MP3s (voice: ar-EG-ShakirNeural) for every slide.

Usage:  python tools/generate_audio.py [--force]
Output: audio/storyN/NN.mp3  (NN = zero-based slide index, 2 digits)
Existing files are skipped unless --force is given.
"""
import asyncio
import json
import pathlib
import subprocess
import sys

import edge_tts

VOICE = "ar-EG-ShakirNeural"
RATE = "-10%"
ROOT = pathlib.Path(__file__).resolve().parent.parent


def load_narration():
    raw = subprocess.run(
        ["node", str(ROOT / "tools" / "extract-narration.js")],
        check=True, capture_output=True,
    ).stdout
    return json.loads(raw.decode("utf-8"))


async def synth(text, dest):
    await edge_tts.Communicate(text, VOICE, rate=RATE).save(str(dest))


async def main(force):
    for story, texts in load_narration().items():
        folder = ROOT / "audio" / story
        folder.mkdir(parents=True, exist_ok=True)
        for i, text in enumerate(texts):
            dest = folder / f"{i:02d}.mp3"
            if not text or (dest.exists() and not force):
                continue
            await synth(text, dest)
            print(f"{story}/{dest.name}")


if __name__ == "__main__":
    asyncio.run(main("--force" in sys.argv))
