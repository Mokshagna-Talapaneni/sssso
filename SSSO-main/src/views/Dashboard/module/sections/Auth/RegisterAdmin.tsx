import React, { useState, useEffect } from "react";
import { 
  Container, TextField, Button, Typography, Paper, Box, Alert, 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, IconButton, Tooltip, Divider 
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

// ✅ Default Import (Corrected path to shared/theme)
import NonMuiColors from "../../../../../shared/theme/MuiThemeV1";

const RegisterAdmin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userList, setUserList] = useState<any[]>([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/users", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      if (res.ok) {
        const data = await res.json();
        setUserList(data);
      }
    } catch (err) { console.error("Sairam - Fetch Error:", err); }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5001/api/auth/register-admin", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${localStorage.getItem("token")}` 
      },
      body: JSON.stringify({ email: email.trim(), password, role: "admin" }),
    });
    if (res.ok) {
      setMessage("Sairam! Admin created successfully.");
      setEmail(""); setPassword("");
      fetchUsers();
    } else { setMessage("Failed to create admin."); }
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: NonMuiColors.WHITE, py: 15 }}>
      <Container maxWidth="md">
        <Paper 
          elevation={2} 
          sx={{ p: 4, borderRadius: 4, mb: 4, position: "relative", border: `1px solid ${NonMuiColors.SECONDARY}` }}
        >
          <Box sx={{ position: "absolute", top: 16, right: 16 }}>
            <Tooltip title="Home">
              <IconButton onClick={() => navigate("/home")} sx={{ color: NonMuiColors.PRIMARY }}>
                <HomeIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
          
          <Typography variant="h2Bold" sx={{ color: NonMuiColors.PRIMARY }} gutterBottom>
            Register Admin
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
          
          <Box component="form" onSubmit={handleRegister} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField fullWidth label="Email" value={email} required onChange={e => setEmail(e.target.value)} />
            <TextField fullWidth label="Initial Password" type="password" value={password} required onChange={e => setPassword(e.target.value)} />
            <Button 
              type="submit" variant="contained" size="large" 
              sx={{ bgcolor: NonMuiColors.PRIMARY, '&:hover': { bgcolor: NonMuiColors.RED }, py: 1.5 }}
            >
              Add Admin
            </Button>
          </Box>
        </Paper>

        <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 4 }}>
          <Box sx={{ p: 2, bgcolor: NonMuiColors.PRIMARY, color: NonMuiColors.WHITE }}>
            <Typography variant="h4Bold">Active Admin List</Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="right">
                    {user.role !== 'superadmin' && (
                      <IconButton 
                        sx={{ color: NonMuiColors.RED }} 
                        onClick={async () => { 
                          if(window.confirm("Remove this admin?")) { 
                            await fetch(`http://localhost:5001/api/auth/users/${user._id}`, { 
                              method: "DELETE", 
                              headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } 
                            }); 
                            fetchUsers(); 
                          } 
                        }}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default RegisterAdmin;