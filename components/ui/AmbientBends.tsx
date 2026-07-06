"use client";

import { useEffect, useState } from "react";
import PrismaticBurst from "@/components/PrismaticBurst";

/**
 * AmbientBends
 *
 * George's site-wide atmosphere, v2: PrismaticBurst light rays in brand
 * teal and yellow, fixed over every page as a non-interactive layer.
 * mix-blend lighten means the rays glow over dark sections and colour
 * floods and stay out of the way of white panels. Desktop pointer
 * devices only (WebGL); mobile, touch and reduced-motion skip it.
 */
export default function AmbientBends() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallOrTouch =
      window.matchMedia("(max-width: 1023px)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (reduced || smallOrTouch) return;
    // Skip on software WebGL (SwiftShader/llvmpipe): those machines pay a
    // main-thread price a glow layer never earns.
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return;
      const info = gl.getExtension("WEBGL_debug_renderer_info");
      const renderer = info
        ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL))
        : "";
      if (/swiftshader|llvmpipe|software/i.test(renderer)) return;
    } catch {
      return;
    }
    setOn(true);
  }, []);

  if (!on) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden opacity-[0.35]"
    >
      {/* Rendered at half resolution and scaled up: it is a glow, and this
          halves the GPU cost with no visible loss. */}
      <div className="absolute left-0 top-0 h-1/2 w-1/2 origin-top-left scale-[2]">
      <PrismaticBurst
        animationType="rotate3d"
        intensity={1.6}
        speed={0.4}
        distort={1.0}
        paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={24}
        mixBlendMode="lighten"
        colors={["#00B0BE", "#55f7f1", "#FFC72C"]}
      />
      </div>
    </div>
  );
}
