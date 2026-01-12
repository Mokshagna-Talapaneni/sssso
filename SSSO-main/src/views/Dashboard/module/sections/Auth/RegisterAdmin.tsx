import React, { useState, useEffect } from "react";
import { 
  Container, TextField, Button, Typography, Paper, 
  Box, Alert, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, IconButton 
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const RegisterAdmin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userList, setUserList] = useState<any[]>([]);

  // ✅ Fetch current admins to display in the table
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5001/api/auth/users", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      if (Array.isArray(data)) setUserList(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
        body: JSON.stringify({ email, password, role: "admin" }),
      });
      
      if (res.ok) {
        setMessage("Sairam! New Admin Registered successfully.");
        setEmail("");
        setPassword("");
        fetchUsers(); // Refresh list after adding
      } else {
        setMessage("Failed to register. Check if user already exists.");
      }
    } catch (err) {
      setMessage("Failed to connect to server.");
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Paper sx={{ p: 4, borderRadius: 4, mb: 4 }}>
        <Typography variant="h2Bold" color="primary" gutterBottom>Register New Admin</Typography>
        <Typography variant="body1" mb={3}>Assign access credentials for lab/website management.</Typography>
        
        {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}
        
        <Box component="form" onSubmit={handleRegister} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField 
            fullWidth 
            label="Gmail Address" 
            value={email}
            required 
            onChange={e => setEmail(e.target.value)} 
          />
          <TextField 
            fullWidth 
            label="Temporary Password" 
            type="password"
            value={password}
            required 
            onChange={e => setPassword(e.target.value)} 
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Create Admin Account
          </Button>
        </Box>
      </Paper>

      {/* ✅ User Management Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 4 }}>
        <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4Bold">Existing Access List</Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell align="right">
                  {user.role !== 'superadmin' && (
                    <IconButton color="error">
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
  );
};

export default RegisterAdmin;