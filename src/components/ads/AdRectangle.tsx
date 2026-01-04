import { useEffect, useRef } from "react";

export function AdRectangle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    (window as any).atOptions = {
      key: 'dafe39e04e51ab976c9e4bbcfb243b66',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/dafe39e04e51ab976c9e4bbcfb243b66/invoke.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <div ref={containerRef} />
    </div>
  );
}
