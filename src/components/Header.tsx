"use client";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTheme } from "next-themes";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (!mounted) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Tooltip title="Home">
            <Link href="/">
              <Image
                src="/globe.svg"
                alt="Globe Logo"
                width={24}
                height={24}
                className={theme === "dark" ? "invert" : ""}
              />
            </Link>
          </Tooltip>
        </Box>

        <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {session ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title={session.user?.name || "Account settings"}>
              <IconButton onClick={handleMenuOpen} size="small" sx={{ ml: 2 }}>
                <Avatar
                  alt={session.user?.name || "User"}
                  src={session.user?.image || ""}
                  sx={{
                    width: 32,
                    height: 32,
                    border: "2px solid white",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem disabled>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {session.user?.name}
                </Typography>
              </MenuItem>
              <MenuItem disabled>
                <Typography variant="body2" color="text.secondary">
                  {session.user?.email}
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => signOut()}>
                <Typography variant="body2">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button color="inherit" onClick={() => signIn("google")}>
            Login with Google
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
