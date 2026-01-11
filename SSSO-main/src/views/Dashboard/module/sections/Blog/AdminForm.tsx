import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "", content: "", imageUrl: "", startDate: "",
    district: "", contactPerson: "", designation: "", phoneNumber: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5001/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    navigate("/blog");
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h2Bold" color="primary" gutterBottom>Event Details</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}><TextField fullWidth label="Event Title" onChange={e => setFormData({...formData, title: e.target.value})} required /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Image URL (Paste link here)" onChange={e => setFormData({...formData, imageUrl: e.target.value})} /></Grid>
            <Grid item xs={6}><TextField fullWidth type="date" label="Start Date" InputLabelProps={{ shrink: true }} onChange={e => setFormData({...formData, startDate: e.target.value})} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="District" onChange={e => setFormData({...formData, district: e.target.value})} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Contact Person" onChange={e => setFormData({...formData, contactPerson: e.target.value})} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Designation" onChange={e => setFormData({...formData, designation: e.target.value})} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Phone Number" onChange={e => setFormData({...formData, phoneNumber: e.target.value})} /></Grid>
            <Grid item xs={12}><TextField fullWidth multiline rows={4} label="Event Description" onChange={e => setFormData({...formData, content: e.target.value})} required /></Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3 }} fullWidth>Publish Event</Button>
        </form>
      </Paper>
    </Container>
  );
};
export default AdminForm;