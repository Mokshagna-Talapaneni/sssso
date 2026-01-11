import React, { useState } from "react";
import { 
  Container, TextField, Button, Typography, Paper, Box, Alert, InputAdornment, IconButton 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        navigate("/"); // Redirect to home after successful login
        window.location.reload(); // Refresh to update Navbar state
      } else if (res.status === 404) {
        // Handle unregistered user as requested
        alert("Sairam. You are not a registered user. Access is restricted to authorized admins.");
        navigate("/"); 
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Cannot connect to server. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ py: 15 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, textAlign: 'center' }}>
        <Box mb={2}><LockOpenIcon color="primary" sx={{ fontSize: 40 }} /></Box>
        <Typography variant="h2Bold" color="primary" gutterBottom>Admin Portal</Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Enter credentials to manage SSSO activities
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth label="Email Address" variant="outlined" margin="normal" required
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth label="Password" variant="outlined" margin="normal" required
            type={showPassword ? "text" : "password"}
            value={password} onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit" variant="contained" fullWidth disabled={loading}
            sx={{ mt: 4, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;