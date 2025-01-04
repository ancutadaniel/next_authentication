"use client";

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { useTheme } from "next-themes";
import { darkTheme, lightTheme } from "@/theme/theme";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MUIThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
