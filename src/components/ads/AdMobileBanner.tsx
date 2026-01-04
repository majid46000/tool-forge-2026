import { useEffect, useRef } from "react";

export function AdMobileBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    (window as any).atOptions = {
      key: '04c90aac5b1ea20d7027e772078ce7ab',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/04c90aac5b1ea20d7027e772078ce7ab/invoke.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="md:hidden w-full flex justify-center py-2">
      <div ref={containerRef} />
    </div>
  );
}
