"use client";

import { Button, CircularProgress } from "@mui/material";
import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="contained"
      size="large"
      fullWidth
      disabled={pending}
      startIcon={
        pending ? <CircularProgress size={20} color="inherit" /> : null
      }
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}
