import { useEffect, useRef } from "react";

export function AdSkyscraper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    (window as any).atOptions = {
      key: '98f950ef17bb4feb540b2f9e7f022b4b',
      format: 'iframe',
      height: 600,
      width: 160,
      params: {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/98f950ef17bb4feb540b2f9e7f022b4b/invoke.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="hidden lg:block sticky top-24">
      <div ref={containerRef} />
    </div>
  );
}
