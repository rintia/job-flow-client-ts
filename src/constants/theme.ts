export const THEME = {
    colors: {
      primary: "#2563EB",      // Blue 600
      primaryHover: "#1D4ED8", // Blue 700
  
      secondary: "#0F172A",    // Slate 900
      secondaryLight: "#334155",
  
      accent: "#F59E0B",       // Amber 500
  
      background: "#F8FAFC",   // Slate 50
      surface: "#FFFFFF",
  
      border: "#E2E8F0",
  
      text: {
        primary: "#0F172A",
        secondary: "#475569",
        muted: "#64748B",
        white: "#FFFFFF",
      },
  
      success: "#16A34A",
      warning: "#F59E0B",
      danger: "#DC2626",
    },
  
    radius: {
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
    },
  
    shadow: {
      sm: "0 1px 2px rgba(0,0,0,.05)",
      md: "0 4px 12px rgba(0,0,0,.08)",
      lg: "0 10px 25px rgba(0,0,0,.12)",
    },
  } as const;