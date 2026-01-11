import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box, Alert } from "@mui/material";

const RegisterAdmin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    try {
      const res = await fetch("http://localhost:5001/api/auth/register-admin", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({ email, role: "admin" }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Failed to register user.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Paper sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h2Bold" color="primary" gutterBottom>Register New Admin</Typography>
        <Typography variant="body1" mb={3}>Enter the Gmail address of the person you want to grant access to.</Typography>
        {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}
        <form onSubmit={handleRegister}>
          <TextField fullWidth label="User Gmail Address" required onChange={e => setEmail(e.target.value)} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>Send Invite & Credentials</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterAdmin;