import React, { useState } from "react";
import { 
  Container, TextField, Button, Typography, Box, Paper, Grid, Alert 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminForm: React.FC = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
    startDate: "",
    district: "",
    contactPerson: "",
    designation: "",
    phoneNumber: ""
  });

  // For showing success/error
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5001/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const error = await res.text();
      alert("Failed to save blog: " + error);
      return;
    }

    alert("Event published successfully!");
    navigate("/admin/blog-approval");
  } catch (err) {
    console.error(err);
    alert("Something went wrong while saving.");
  }
};



  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h2Bold" color="primary" gutterBottom>
          Add New Event
        </Typography>

        {errorMsg && <Alert severity="error" sx={{ mb: 2 }}>{errorMsg}</Alert>}
        {successMsg && <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Title"
                value={formData.title}
                onChange={e => handleChange("title", e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                placeholder="Paste image link here"
                value={formData.imageUrl}
                onChange={e => handleChange("imageUrl", e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Start Date"
                InputLabelProps={{ shrink: true }}
                value={formData.startDate}
                onChange={e => handleChange("startDate", e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="District"
                value={formData.district}
                onChange={e => handleChange("district", e.target.value)}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Contact Person"
                value={formData.contactPerson}
                onChange={e => handleChange("contactPerson", e.target.value)}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Designation"
                value={formData.designation}
                onChange={e => handleChange("designation", e.target.value)}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={e => handleChange("phoneNumber", e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Event Description"
                value={formData.content}
                onChange={e => handleChange("content", e.target.value)}
                required
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? "Saving..." : "Publish Event"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminForm;
