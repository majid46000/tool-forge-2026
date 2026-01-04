import { useEffect, useRef } from "react";

export function AdNativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "https://pl28394288.effectivegatecpm.com/ae8e60685d4f3dfc18d569907654acea/invoke.js";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <div 
        ref={containerRef}
        id="container-ae8e60685d4f3dfc18d569907654acea"
      />
    </div>
  );
}
