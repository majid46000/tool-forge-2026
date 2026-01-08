import { Sparkles } from "lucide-react";
import { getTotalTools } from "@/data/toolHubs";

export function FreeBanner() {
  const totalTools = getTotalTools();
  
  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 py-3 px-4 text-center">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
        <span className="text-white font-bold text-sm md:text-base">
          All {totalTools.toLocaleString()}+ tools 100% FREE forever – no limits, no signup!
        </span>
        <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
      </div>
    </div>
  );
}
