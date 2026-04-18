"use client";

import { cn } from "@/lib/utils";

type CornerColor = "blue" | "gold" | "green" | "slate";

type ComicPanelProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  label?: string;       // small top-left mono label e.g. "SECTOR 01"
  cornerColor?: CornerColor;
  noBorder?: boolean;
};

const cornerColorMap: Record<CornerColor, string> = {
  blue: "border-[#5ba0c0]",
  gold: "border-[#c4932e]",
  green: "border-[#4a9e7a]",
  slate: "border-slate-500",
};

export default function ComicPanel({
  children,
  className,
  style,
  label,
  cornerColor = "blue",
  noBorder = false,
}: ComicPanelProps) {
  const cc = cornerColorMap[cornerColor];

  return (
    <div style={style} className={cn("relative", !noBorder && "border border-slate-600/55", className)}>
      {/* Corner marks */}
      <span className={cn("pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-[3px] border-t-[3px]", cc)} />
      <span className={cn("pointer-events-none absolute -right-px -top-px h-4 w-4 border-r-[3px] border-t-[3px]", cc)} />
      <span className={cn("pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-[3px] border-l-[3px]", cc)} />
      <span className={cn("pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-[3px] border-r-[3px]", cc)} />

      {/* Optional panel label */}
      {label && (
        <span className="comic-label absolute left-3 top-2 text-[#5ba0c0]/55">
          {label}
        </span>
      )}

      {children}
    </div>
  );
}
