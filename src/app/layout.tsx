"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SessionProvider } from "next-auth/react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ThemeRegistry from "@/components/ThemeRegistry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <AppRouterCacheProvider>
            <ThemeProvider defaultTheme="dark" enableSystem={true}>
              <ThemeRegistry>
                <Box sx={{ display: "flex" }}>
                  <Header />
                  <Sidebar />
                  <Box
                    component="main"
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      mt: 8,
                    }}
                  >
                    {children}
                  </Box>
                </Box>
              </ThemeRegistry>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
