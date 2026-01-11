import React, { useEffect, useState } from "react";
import { 
  Typography, 
  CircularProgress, 
  Box, 
  Button, 
  IconButton, 
  Grid, 
  Chip 
} from "@mui/material";
import { BlogContainer, BlogGrid, BlogCard } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { OutlinedButtonTransparent } from "@views/Dashboard/styles/styled";
import { useNavigate } from "react-router-dom";

// 1. Define the Interface to include your new fields
interface IBlog {
  _id: string;
  title: string;
  content: string;
  imageUrl?: string;
  startDate?: string;
  district?: string;
  contactPerson?: string;
  designation?: string;
  phoneNumber?: string;
  createdAt: string;
}

const Component: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 2. Fetch Data from Backend (Port 5001)
  const fetchBlogs = () => {
    setLoading(true);
    fetch("http://localhost:5001/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 3. Handle Delete functionality
  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // Prevents navigating to detail page when clicking delete
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(`http://localhost:5001/api/blogs/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          // Refresh the list after successful deletion
          setBlogs(blogs.filter(blog => blog._id !== id));
        } else {
          alert("Failed to delete the post.");
        }
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  if (loading) {
    return (
      <BlogContainer style={{ justifyContent: "center", alignItems: "center", minHeight: "400px" }}>
        <CircularProgress />
      </BlogContainer>
    );
  }

  return (
    <BlogContainer>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Typography variant="h4Bold" color="primary">Latest Updates</Typography>
          <Typography variant="h1Bold">Events & Activity Blogs</Typography>
        </Box>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate("/blog/write")}
          sx={{ borderRadius: '20px', px: 4 }}
        >
           + Write New Event
        </Button>
      </Box>
      
      {/* Grid Section */}
      <BlogGrid>
        {blogs.length === 0 ? (
          <Typography variant="h3" sx={{ mt: 4, textAlign: 'center', width: '100%' }}>
            No events found. Click "Write New Event" to get started!
          </Typography>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog._id} sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
              
              {/* Event Image */}
              {blog.imageUrl && (
                <Box 
                  component="img"
                  src={blog.imageUrl}
                  alt={blog.title}
                  sx={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    mb: 2 
                  }}
                />
              )}

              {/* Title & Delete Icon */}
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Typography variant="h3Bold" color="primary" sx={{ mb: 1 }}>
                  {blog.title}
                </Typography>
                <IconButton 
                  size="small" 
                  color="error" 
                  onClick={(e) => handleDelete(e, blog._id)}
                  sx={{ backgroundColor: 'rgba(255,0,0,0.05)', ml: 1 }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>

              {/* Event Metadata (Date & Location) */}
              <Box display="flex" gap={1} mb={2} flexWrap="wrap">
                {blog.startDate && (
                  <Chip 
                    icon={<CalendarMonthIcon fontSize="small" />} 
                    label={new Date(blog.startDate).toLocaleDateString()} 
                    size="small" 
                    variant="outlined" 
                  />
                )}
                {blog.district && (
                  <Chip 
                    icon={<LocationOnIcon fontSize="small" />} 
                    label={blog.district} 
                    size="small" 
                    variant="outlined" 
                  />
                )}
              </Box>

              {/* Content Preview */}
              <Typography variant="h4" className="preview-text" sx={{ mb: 3, flexGrow: 1 }}>
                {blog.content.length > 120 ? `${blog.content.substring(0, 120)}...` : blog.content}
              </Typography>

              {/* Footer Actions */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <OutlinedButtonTransparent to={`/blog/${blog._id}`}>
                  <Typography variant="h4Medium">Read Full Story</Typography>
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                </OutlinedButtonTransparent>
                
                {/* Small indicator for contact person availability */}
                {blog.contactPerson && (
                  <Typography variant="caption" color="text.secondary">
                    Contact: {blog.contactPerson}
                  </Typography>
                )}
              </Box>
            </BlogCard>
          ))
        )}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Component;