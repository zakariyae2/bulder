"use client";

import { useUndo, useRedo } from "@/liveblocks.config";
import { useRef } from "react";

export default function Room() {
  const undo = useUndo();
  const redo = useRedo();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Your canvas-related logic here...

  return (
    <div>
      <h1>Room Page</h1>
      <canvas ref={canvasRef} />
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}