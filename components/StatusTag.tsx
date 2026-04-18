import { cn } from "@/lib/utils";

type Status = "ACTIVE" | "STABLE" | "READY" | "OFFLINE" | "BUILDING";

const statusStyles: Record<Status, { border: string; bg: string; text: string; dot: string }> = {
  ACTIVE:   { border: "border-[#4a9e7a]/45", bg: "bg-[#4a9e7a]/10", text: "text-[#5ab890]", dot: "bg-[#5ab890] animate-pulse" },
  STABLE:   { border: "border-[#5ba0c0]/35", bg: "bg-[#5ba0c0]/8",  text: "text-[#5ba0c0]", dot: "bg-[#5ba0c0]" },
  READY:    { border: "border-[#c4932e]/35", bg: "bg-[#c4932e]/8",  text: "text-[#c4932e]", dot: "bg-[#c4932e] animate-pulse" },
  OFFLINE:  { border: "border-slate-600/40", bg: "bg-slate-800/30", text: "text-slate-500",  dot: "bg-slate-500" },
  BUILDING: { border: "border-[#7b5c9e]/35", bg: "bg-[#7b5c9e]/8",  text: "text-[#9b7cc0]", dot: "bg-[#9b7cc0] animate-pulse" },
};

export default function StatusTag({ status, className }: { status: Status; className?: string }) {
  const s = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.2em]",
        s.border, s.bg, s.text,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      {status}
    </span>
  );
}
