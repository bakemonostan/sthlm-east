"use client";
import { CircularProgress } from "@nextui-org/react";

export default function CircularProgressComp() {
  return (
    <div className="border border-red-400">
      <CircularProgress
        classNames={{
          svg: "w-24 h-24 drop-shadow-md",
          indicator: "stroke-white",
          track: "stroke-white/40",
          value: "text-xl font-bold text-white",
        }}
        value={77}
        strokeWidth={4}
        showValueLabel={true}
        className="border h-full w-full"
        disableAnimation={true}
      />
    </div>
  );
}
