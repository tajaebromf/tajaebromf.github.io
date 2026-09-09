"use client";

/**
 * "use client" marks this as a Client Component: it ships JS to the browser and
 * can hold state. Everything else on this site is a Server Component, rendered
 * once at build time into static HTML. We only opt in here because we need to
 * react to an event — the image failing to load.
 *
 * That fallback means the layout still looks intentional before
 * public/headshot.jpg exists, instead of showing a broken-image icon.
 */

import Image from "next/image";
import { useState } from "react";

type HeadshotProps = {
  src: string;
  name: string;
  size?: number;
};

export default function Headshot({ src, name, size = 176 }: HeadshotProps) {
  // useState gives this component memory across re-renders.
  // `failed` starts false; setFailed(true) re-renders with the monogram.
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  const shared =
    "rounded-2xl object-cover ring-1 ring-zinc-200 dark:ring-zinc-800";

  if (failed) {
    return (
      <div
        className={`${shared} flex items-center justify-center bg-gradient-to-br from-sky-100 to-zinc-100 text-4xl font-semibold text-sky-800 dark:from-sky-950 dark:to-zinc-900 dark:text-sky-300`}
        style={{ width: size, height: size }}
        aria-label={name}
        role="img"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`Portrait of ${name}`}
      width={size}
      height={size}
      // priority: this is above the fold, so load it eagerly rather than lazily.
      priority
      className={shared}
      onError={() => setFailed(true)}
      style={{ width: size, height: size }}
    />
  );
}
