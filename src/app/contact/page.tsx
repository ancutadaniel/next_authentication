"use client";

import { Box, Typography, Paper, TextField, Alert } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useActionState } from "react";
import FormSubmit from "@/components/FormSubmit";
import { contactAction } from "./actions";

export default function Contact() {
  const [state, formAction] = useActionState(contactAction, {});

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Have a question or want to work together? Send us a message!
        </Typography>

        <form action={formAction}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" name="name" required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormSubmit />
            </Grid>
          </Grid>
        </form>

        {state.errors && (
          <Box sx={{ mt: 2 }}>
            {state.errors.map((error: string) => (
              <Alert key={error} severity="error" sx={{ mb: 1 }}>
                {error}
              </Alert>
            ))}
          </Box>
        )}

        {state.message && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {state.message}
          </Alert>
        )}
      </Paper>
    </Box>
  );
}
