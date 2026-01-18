import React, { useEffect, useState } from "react";
import { 
  Typography, Button, Box, CircularProgress, IconButton, Grid, Chip, Paper 
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeIcon from "@mui/icons-material/Home"; // ✅ Added Home Icon
import { useNavigate } from "react-router-dom";

interface IBlog {
  _id: string;
  title: string;
  content: string;
  startDate?: string;
  district?: string;
  contactPerson?: string;
  status?: string; 
}

const AdminBlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Sairam - Fetch Error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5001/api/blogs/approve/${id}`, {
        method: "PATCH",
      });
      if (res.ok) {
        alert("Sairam! Event has been approved and is now live.");
        fetchBlogs();
      } else {
        alert("Failed to approve event.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const res = await fetch(`http://localhost:5001/api/blogs/${id}`, { method: "DELETE" });
        if (res.ok) {
          setBlogs(blogs.filter(blog => blog._id !== id));
        } else {
          alert("Failed to delete blog");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return <Box display="flex" justifyContent="center" py={10}><CircularProgress /></Box>;

  return (
    <Box sx={{ p: 5 }}>
      <Box display="flex" justifyContent="space-between" mb={4} alignItems="center">
        <Box>
          <Typography variant="h3Bold">Admin Management Dashboard</Typography>
          <Typography variant="body1" sx={{ opacity: 0.7 }}>Review and approve activities for the West Bengal wing.</Typography>
        </Box>
        
        {/* ✅ Grouped Buttons: Home and Write New Event */}
        <Box display="flex" gap={2}>
          <Button 
            variant="outlined" 
            startIcon={<HomeIcon />} 
            onClick={() => navigate("/home")}
            sx={{ borderRadius: 2, textTransform: 'none' }}
          >
            Home
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate("/blog/write")} 
            sx={{ borderRadius: 2, textTransform: 'none' }}
          >
            + Write New Event
          </Button>
        </Box>
      </Box>

      {blogs.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 10 }}>No blogs found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {blogs.map(blog => (
            <Grid item xs={12} md={6} key={blog._id}>
              <Paper elevation={2} sx={{ 
                p: 3, 
                borderRadius: 3, 
                position: 'relative', 
                border: blog.status === "approved" ? '1px solid #4caf50' : '1px solid #ff9800' 
              }}>
                
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                  {/* Title with overflow protection */}
                  <Typography 
                    variant="h5Bold" 
                    color="primary"
                    sx={{ 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      display: '-webkit-box', 
                      WebkitLineClamp: 1, 
                      WebkitBoxOrient: 'vertical',
                      maxWidth: '70%'
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Chip 
                    label={blog.status === "approved" ? "Approved" : "Pending Approval"} 
                    color={blog.status === "approved" ? "success" : "warning"} 
                    size="small" 
                    variant="filled"
                  />
                </Box>

                <Box display="flex" gap={1} my={2}>
                  {blog.startDate && <Chip label={new Date(blog.startDate).toLocaleDateString()} size="small" variant="outlined" />}
                  {blog.district && <Chip label={blog.district} size="small" variant="outlined" />}
                </Box>

                <Typography sx={{ mb: 3, opacity: 0.8, height: '3em', overflow: 'hidden' }}>
                  {blog.content.substring(0, 120)}...
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box display="flex" gap={1}>
                    <Button variant="outlined" size="small" onClick={() => navigate(`/blog/${blog._id}`)}>View</Button>
                    <Button variant="outlined" size="small" onClick={() => navigate(`/blog/write?edit=${blog._id}`)}>Edit</Button>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    {userRole === "superadmin" && blog.status !== "approved" && (
                      <Button 
                        variant="contained" 
                        color="success" 
                        size="small" 
                        startIcon={<CheckCircleIcon />}
                        onClick={() => handleApprove(blog._id)}
                      >
                        Approve
                      </Button>
                    )}
                    <IconButton color="error" onClick={() => handleDelete(blog._id)} sx={{ bgcolor: 'rgba(255,0,0,0.05)' }}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AdminBlogSection;