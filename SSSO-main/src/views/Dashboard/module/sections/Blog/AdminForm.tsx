import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "@shared/config/apiConfig";
import { 
  Container, TextField, Button, Typography, Box, Paper, Grid, Alert, CircularProgress, MenuItem 
} from "@mui/material";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const AdminForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const editId = id || queryParams.get("edit");

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
    startDate: "",
    district: "",
    contactPerson: "",
    designation: "",
    phoneNumber: "",
    category: "One Time Activity" // ✅ Initializing with the exact name
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (editId) {
      setFetching(true);
      fetch(`${API_BASE_URL}/blogs/${editId}`)
        .then((res) => res.json())
        .then((data) => {
          const formattedDate = data.startDate ? new Date(data.startDate).toISOString().split('T')[0] : "";
          
          setFormData({
            title: data.title || "",
            content: data.content || "",
            imageUrl: data.imageUrl || "",
            startDate: formattedDate,
            district: data.district || "",
            contactPerson: data.contactPerson || "",
            designation: data.designation || "",
            phoneNumber: data.phoneNumber || "",
            category: data.category || "One Time Activity" // ✅ Load existing category
          });
          setFetching(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setErrorMsg("Sairam. Failed to load event data for editing.");
          setFetching(false);
        });
    }
  }, [editId]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const token = localStorage.getItem("token");
      const method = editId ? "PATCH" : "POST";
      const url = editId 
        ? `${API_BASE_URL}/blogs/${editId}` 
        : '${API_BASE_URL}/blogs';

      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error);
      }

      alert(editId ? "Sairam! Event updated successfully." : "Sairam! Event published for approval.");
      navigate("/admin/blog-approval");
    } catch (err: any) {
      setErrorMsg("Failed to save: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ SX Style helper for visibility
  const textFieldStyles = {
    "& .MuiInputBase-input": { color: "black !important" },
    "& .MuiInputLabel-root": { color: "black !important" },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": { borderColor: "primary.main" }
    }
  };

  if (fetching) return <Box display="flex" justifyContent="center" py={10}><CircularProgress /></Box>;

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h2Bold" color="primary" gutterBottom>
          {editId ? "Edit Activity Details" : "Add New Seva Event"}
        </Typography>

        {errorMsg && <Alert severity="error" sx={{ mb: 2 }}>{errorMsg}</Alert>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* ✅ NEW: Dropdown for One Time vs Regular Activity */}
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Type of Activity"
                required
                value={formData.category}
                onChange={e => handleChange("category", e.target.value)}
                sx={textFieldStyles}
              >
                <MenuItem value="One Time Activity">One Time Activity</MenuItem>
                <MenuItem value="Regular Activities">Regular Activities</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth label="Event Title" required
                value={formData.title} onChange={e => handleChange("title", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth label="Image URL" placeholder="https://..."
                value={formData.imageUrl} onChange={e => handleChange("imageUrl", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth type="date" label="Start Date" InputLabelProps={{ shrink: true }}
                value={formData.startDate} onChange={e => handleChange("startDate", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth label="District"
                value={formData.district} onChange={e => handleChange("district", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth label="Contact Person"
                value={formData.contactPerson} onChange={e => handleChange("contactPerson", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth label="Designation"
                value={formData.designation} onChange={e => handleChange("designation", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth label="Phone Number"
                value={formData.phoneNumber} onChange={e => handleChange("phoneNumber", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth multiline rows={6} label="Full Description" required
                value={formData.content} onChange={e => handleChange("content", e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>
          </Grid>

          <Button
            type="submit" variant="contained" color="primary" fullWidth
            sx={{ mt: 4, py: 1.5, fontWeight: 'bold' }} disabled={loading}
          >
            {loading ? "Processing..." : editId ? "Save Changes" : "Submit for Approval"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminForm;