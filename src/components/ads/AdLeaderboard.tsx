import { useEffect, useRef } from "react";

export function AdLeaderboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    // Set atOptions on window
    (window as any).atOptions = {
      key: 'c40e008867bc4032566e0401ba250b08',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/c40e008867bc4032566e0401ba250b08/invoke.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="hidden md:flex w-full justify-center py-2 bg-secondary/30">
      <div ref={containerRef} />
    </div>
  );
}
