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
        backgroundColor: `${NonMuiColors.WHITE} !important` 
      }}
    >
      <Container maxWidth="xs">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            borderRadius: 4, 
            textAlign: 'center', 
            border: `1px solid ${NonMuiColors.SECONDARY}`,
            backgroundColor: "white !important"
          }}
        >
          <Box mb={2}>
            <LockOpenIcon sx={{ fontSize: 40, color: NonMuiColors.PRIMARY }} />
          </Box>
          <Typography variant="h2Bold" sx={{ color: `${NonMuiColors.PRIMARY} !important` }} gutterBottom>
            Admin Portal
          </Typography>
          <Typography variant="body2" sx={{ color: "#333333 !important", mb: 3 }}>
            Sairam. Please enter your credentials.
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <form onSubmit={handleLogin}>
            <TextField 
              fullWidth 
              label="Email Address" 
              variant="outlined" 
              margin="normal" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              sx={{ 
                "& .MuiInputBase-input": { 
                  color: "black !important", 
                  WebkitTextFillColor: "black !important" 
                },
                "& .MuiInputLabel-root": { color: "black !important" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23) !important" },
                  "&:hover fieldset": { borderColor: "black !important" },
                  "&.Mui-focused fieldset": { borderColor: `${NonMuiColors.PRIMARY} !important` }
                }
              }}
            />
            <TextField 
              fullWidth 
              label="Password" 
              variant="outlined" 
              margin="normal" 
              required 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              sx={{ 
                "& .MuiInputBase-input": { 
                  color: "black !important", 
                  WebkitTextFillColor: "black !important" 
                },
                "& .MuiInputLabel-root": { color: "black !important" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23) !important" },
                  "&:hover fieldset": { borderColor: "black !important" },
                  "&.Mui-focused fieldset": { borderColor: `${NonMuiColors.PRIMARY} !important` }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff sx={{ color: "black" }} /> : <Visibility sx={{ color: "black" }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              disabled={loading} 
              sx={{ 
                mt: 4, 
                py: 1.5, 
                bgcolor: `${NonMuiColors.PRIMARY} !important`, 
                '&:hover': { bgcolor: `${NonMuiColors.RED} !important` },
                // Force text inside button to be white
                "& .MuiTypography-root": { color: "white !important" }
              }}
            >
              <Typography variant="h4Bold" sx={{ color: "white !important" }}>
                {loading ? "Verifying..." : "Login"}
              </Typography>
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;