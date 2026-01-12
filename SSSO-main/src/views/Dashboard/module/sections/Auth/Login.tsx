import React, { useState } from "react";
import { 
  Container, TextField, Button, Typography, Paper, Box, Alert, InputAdornment, IconButton 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";

// ✅ Default Import (Corrected path to shared/theme)
import NonMuiColors from "../../../../../shared/theme/MuiThemeV1";

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
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        navigate("/home"); 
        window.location.reload(); 
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Sairam. Connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        width: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        // ✅ Solid White Background
        backgroundColor: NonMuiColors.WHITE 
      }}
    >
      <Container maxWidth="xs">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            borderRadius: 4, 
            textAlign: 'center', 
            border: `1px solid ${NonMuiColors.SECONDARY}` 
          }}
        >
          <Box mb={2}>
            <LockOpenIcon sx={{ fontSize: 40, color: NonMuiColors.PRIMARY }} />
          </Box>
          <Typography variant="h2Bold" sx={{ color: NonMuiColors.PRIMARY }} gutterBottom>
            Admin Portal
          </Typography>
          <Typography variant="body2" sx={{ color: NonMuiColors.BLACK_FADE_MEDIUM, mb: 3 }}>
            Sairam. Please enter your credentials.
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
              sx={{ 
                mt: 4, py: 1.5, bgcolor: NonMuiColors.PRIMARY, 
                '&:hover': { bgcolor: NonMuiColors.RED } 
              }}
            >
              {loading ? "Verifying..." : "Login"}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;