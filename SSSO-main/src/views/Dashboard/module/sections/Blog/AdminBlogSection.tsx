import React, { useEffect, useState } from "react";
import { 
  Typography, Button, Box, CircularProgress, IconButton, Grid, Chip 
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

interface IBlog {
  _id: string;
  title: string;
  content: string;
  startDate?: string;
  district?: string;
  contactPerson?: string;
}

const AdminBlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Typography variant="h3Bold">Admin Blog Dashboard</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/blog/write")}>
          + Write New Event
        </Button>
      </Box>

      {blogs.length === 0 ? (
        <Typography>No blogs found.</Typography>
      ) : (
        <Grid container spacing={2}>
          {blogs.map(blog => (
            <Grid item xs={12} md={6} key={blog._id}>
              <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2, position: 'relative' }}>
                <Typography variant="h5Bold">{blog.title}</Typography>
                <Box display="flex" gap={1} my={1}>
                  {blog.startDate && <Chip label={new Date(blog.startDate).toLocaleDateString()} size="small" />}
                  {blog.district && <Chip label={blog.district} size="small" />}
                </Box>
                <Typography sx={{ mb: 2 }}>{blog.content.substring(0, 100)}...</Typography>
                <Box display="flex" justifyContent="flex-end" gap={1}>
                  <Button variant="outlined" size="small" onClick={() => navigate(`/blog/${blog._id}`)}>View</Button>
                  <Button variant="outlined" size="small" onClick={() => navigate(`/blog/write?edit=${blog._id}`)}>Edit</Button>
                  <IconButton color="error" onClick={() => handleDelete(blog._id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AdminBlogSection;
