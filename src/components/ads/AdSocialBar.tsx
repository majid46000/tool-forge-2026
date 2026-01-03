import { useEffect } from "react";

interface AdSocialBarProps {
  position: "top" | "bottom";
}

export function AdSocialBar({ position }: AdSocialBarProps) {
  useEffect(() => {
    const scriptId = `adsterra-social-bar-${position}`;
    
    // Check if script already exists
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://pl28394176.effectivegatecpm.com/17/da/7e/17da7eef544e8d5c8f5daf9fcd5a0f45.js";
    script.async = true;
    
    // Append to body based on position
    if (position === "top") {
      document.body.insertBefore(script, document.body.firstChild);
    } else {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [position]);

  return null;
}
