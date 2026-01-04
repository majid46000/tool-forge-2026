import { useEffect } from "react";

export function AdPopunder() {
  useEffect(() => {
    const scriptId = "adsterra-popunder";
    
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://pl28394261.effectivegatecpm.com/c3/7e/9e/c37e9e933c893dbb35ee78f6dd1076c7.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
