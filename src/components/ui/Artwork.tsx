import Image from "next/image";
import type { CSSProperties } from "react";

import type { Artwork as ArtworkData, ArtworkTone } from "@/content/types";

/**
 * Cove's artwork system.
 *
 * Every treatment, retreat, article and practitioner references an `Artwork`
 * entry. By default that entry describes one of seven locally drawn SVG
 * motifs, so the template ships with zero stock photography and no external
 * image requests.
 *
 * To use a real photograph instead, change the content entry to:
 *
 *   artwork: { image: "/images/deep-rest.jpg", alt: "..." }
 *
 * Nothing in this component needs to change — it renders an optimised
 * <Image> for `image` entries and the SVG motif for everything else.
 *
 * Colours come from CSS custom properties, so every motif re-paints itself
 * correctly when the theme changes.
 */

/** Maps a tone name onto the four artwork variables the motifs draw with. */
const toneVars: Record<ArtworkTone, CSSProperties> = {
  sage: {
    "--a-bg": "var(--art-sage-bg)",
    "--a-1": "var(--art-sage-1)",
    "--a-2": "var(--art-sage-2)",
    "--a-3": "var(--art-sage-3)",
  },
  clay: {
    "--a-bg": "var(--art-clay-bg)",
    "--a-1": "var(--art-clay-1)",
    "--a-2": "var(--art-clay-2)",
    "--a-3": "var(--art-clay-3)",
  },
  sand: {
    "--a-bg": "var(--art-sand-bg)",
    "--a-1": "var(--art-sand-1)",
    "--a-2": "var(--art-sand-2)",
    "--a-3": "var(--art-sand-3)",
  },
  olive: {
    "--a-bg": "var(--art-olive-bg)",
    "--a-1": "var(--art-olive-1)",
    "--a-2": "var(--art-olive-2)",
    "--a-3": "var(--art-olive-3)",
  },
  stone: {
    "--a-bg": "var(--art-stone-bg)",
    "--a-1": "var(--art-stone-1)",
    "--a-2": "var(--art-stone-2)",
    "--a-3": "var(--art-stone-3)",
  },
} as Record<ArtworkTone, CSSProperties>;

/** A single pointed leaf, reused by the botanical and bloom motifs. */
const LEAF = "M0 0C15-22 15-54 0-74C-15-54-15-22 0 0Z";

function Ripple() {
  return (
    <>
      <rect width="400" height="400" fill="var(--a-bg)" />
      <ellipse cx="200" cy="286" rx="188" ry="66" fill="var(--a-1)" opacity="0.4" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <ellipse
          key={i}
          cx="200"
          cy="248"
          rx={22 + i * 24}
          ry={(22 + i * 24) * 0.4}
          fill="none"
          stroke={i % 2 === 0 ? "var(--a-3)" : "var(--a-2)"}
          strokeWidth={i % 2 === 0 ? 1.6 : 1}
          opacity={1 - i * 0.09}
        />
      ))}
      <ellipse cx="200" cy="248" rx="11" ry="4.5" fill="var(--a-3)" />
      <circle cx="200" cy="112" r="42" fill="var(--a-2)" opacity="0.5" />
    </>
  );
}

function Botanical() {
  const stems = [
    "M140 400C140 300 118 250 106 196",
    "M204 400C204 286 208 214 214 158",
    "M268 400C268 312 288 262 302 216",
  ];
  const leaves = [
    { x: 106, y: 200, r: -34, s: 0.8, fill: "var(--a-2)" },
    { x: 128, y: 258, r: 46, s: 0.62, fill: "var(--a-1)" },
    { x: 214, y: 162, r: -12, s: 1.05, fill: "var(--a-3)" },
    { x: 208, y: 244, r: 40, s: 0.78, fill: "var(--a-2)" },
    { x: 210, y: 312, r: -52, s: 0.6, fill: "var(--a-1)" },
    { x: 302, y: 220, r: 26, s: 0.86, fill: "var(--a-2)" },
    { x: 288, y: 300, r: -40, s: 0.58, fill: "var(--a-1)" },
  ];

  return (
    <>
      <rect width="400" height="400" fill="var(--a-bg)" />
      <circle cx="286" cy="96" r="58" fill="var(--a-1)" opacity="0.55" />
      {stems.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--a-3)"
          strokeWidth="1.6"
          opacity="0.8"
        />
      ))}
      {leaves.map((leaf, i) => (
        <path
          key={i}
          d={LEAF}
          fill={leaf.fill}
          transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}
        />
      ))}
      <rect y="378" width="400" height="22" fill="var(--a-2)" opacity="0.35" />
    </>
  );
}

function Stone() {
  const stones = [
    { cx: 200, cy: 322, rx: 116, ry: 44, rot: -3, fill: "var(--a-3)" },
    { cx: 196, cy: 254, rx: 88, ry: 38, rot: 4, fill: "var(--a-2)" },
    { cx: 204, cy: 194, rx: 62, ry: 30, rot: -6, fill: "var(--a-1)" },
    { cx: 200, cy: 148, rx: 36, ry: 20, rot: 8, fill: "var(--a-2)" },
  ];

  return (
    <>
      <rect width="400" height="400" fill="var(--a-bg)" />
      <circle cx="120" cy="92" r="46" fill="var(--a-1)" opacity="0.5" />
      {stones.map((s, i) => (
        <ellipse
          key={i}
          cx={s.cx}
          cy={s.cy}
          rx={s.rx}
          ry={s.ry}
          fill={s.fill}
          transform={`rotate(${s.rot} ${s.cx} ${s.cy})`}
        />
      ))}
      <path
        d="M150 138C168 126 232 126 250 140"
        fill="none"
        stroke="var(--a-bg)"
        strokeWidth="2"
        opacity="0.6"
      />
      <ellipse cx="200" cy="372" rx="150" ry="16" fill="var(--a-2)" opacity="0.35" />
    </>
  );
}

function Horizon() {
  return (
    <>
      <rect width="400" height="400" fill="var(--a-bg)" />
      <circle cx="252" cy="150" r="54" fill="var(--a-1)" />
      <path
        d="M0 214C74 178 128 214 196 202C264 190 324 154 400 178V400H0Z"
        fill="var(--a-1)"
        opacity="0.75"
      />
      <path
        d="M0 268C82 234 136 272 210 258C284 244 332 216 400 240V400H0Z"
        fill="var(--a-2)"
      />
      <path
        d="M0 326C90 296 140 330 216 318C292 306 340 288 400 306V400H0Z"
        fill="var(--a-3)"
      />
      <path
        d="M0 190C74 154 128 190 196 178"
        fill="none"
        stroke="var(--a-3)"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </>
  );
}

function Bloom() {
  const outer = [0, 45, 90, 135, 180, 225, 270, 315];
  const inner = [22, 67, 112, 157, 202, 247, 292, 337];

  return (
    <>
      <rect width="400" height="400" fill="var(--a-bg)" />
      <g transform="translate(200 200)">
        {outer.map((angle) => (
          <path
            key={`o-${angle}`}
            d={LEAF}
            fill="var(--a-1)"
            transform={`rotate(${angle}) translate(0 -6) scale(1.55)`}
          />
        ))}
        {inner.map((angle) => (
          <path
            key={`i-${angle}`}
            d={LEAF}
            fill="var(--a-2)"
            transform={`rotate(${angle}) translate(0 -4) scale(1)`}
          />
        ))}
        <circle r="26" fill="var(--a-3)" />
        <circle r="12" fill="var(--a-bg)" opacity="0.55" />
      </g>
    </>
  );
}

function Mineral() {
  return (
    <>
      <rect width="400" height="400" fill="var(--a-bg)" />
      <polygon points="200,52 288,168 200,400 112,168" fill="var(--a-2)" />
      <polygon points="200,52 288,168 200,208" fill="var(--a-1)" />
      <polygon points="200,52 112,168 200,208" fill="var(--a-3)" />
      <polygon points="112,168 200,208 200,400" fill="var(--a-1)" opacity="0.85" />
      <polygon points="58,232 118,296 58,400" fill="var(--a-1)" opacity="0.7" />
      <polygon points="342,214 292,282 342,400" fill="var(--a-3)" opacity="0.65" />
      <path
        d="M200 52V400"
        stroke="var(--a-bg)"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </>
  );
}

function Flow() {
  const lines = [
    { d: "M-20 128C88 82 172 190 244 150C316 110 372 118 420 142", w: 1.2, c: "var(--a-2)" },
    { d: "M-20 172C84 124 176 236 248 194C320 152 374 162 420 188", w: 2.4, c: "var(--a-3)" },
    { d: "M-20 218C80 168 180 282 252 238C324 194 376 206 420 234", w: 1.2, c: "var(--a-2)" },
    { d: "M-20 264C76 212 184 328 256 282C328 236 378 250 420 280", w: 3.2, c: "var(--a-3)" },
    { d: "M-20 312C72 258 188 374 260 326C332 278 380 294 420 326", w: 1.2, c: "var(--a-2)" },
  ];

  return (
    <>
      <rect width="400" height="400" fill="var(--a-bg)" />
      <rect y="60" width="400" height="300" fill="var(--a-1)" opacity="0.45" />
      {lines.map((line, i) => (
        <path
          key={i}
          d={line.d}
          fill="none"
          stroke={line.c}
          strokeWidth={line.w}
          strokeLinecap="round"
        />
      ))}
      <circle cx="256" cy="282" r="7" fill="var(--a-3)" />
    </>
  );
}

const motifs = {
  ripple: Ripple,
  botanical: Botanical,
  stone: Stone,
  horizon: Horizon,
  bloom: Bloom,
  mineral: Mineral,
  flow: Flow,
};

type ImageArtwork = Extract<ArtworkData, { image: string }>;

/** True when the content entry points at a real image file rather than a motif. */
function isImageArtwork(art: ArtworkData): art is ImageArtwork {
  return typeof art.image === "string" && art.image.length > 0;
}

interface ArtworkProps {
  art: ArtworkData;
  /** Aspect ratio / sizing utilities for the frame, e.g. "aspect-[4/5]". */
  className?: string;
  /** Passed through to <Image> when the entry uses a real photograph. */
  sizes?: string;
  priority?: boolean;
}

export function Artwork({
  art,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: ArtworkProps) {
  if (isImageArtwork(art)) {
    return (
      <div className={`relative overflow-hidden bg-bg-soft ${className}`}>
        <Image
          src={art.image}
          alt={art.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const Motif = motifs[art.motif];

  return (
    <div
      className={`grain relative overflow-hidden ${className}`}
      style={toneVars[art.tone]}
    >
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={art.alt}
        className="absolute inset-0 h-full w-full"
      >
        <Motif />
      </svg>
    </div>
  );
}
