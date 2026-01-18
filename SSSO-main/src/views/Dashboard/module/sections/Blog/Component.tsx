import React, { useEffect, useState } from "react";
import { 
  Typography, 
  CircularProgress, 
  Box, 
  Button, 
  IconButton, 
  Chip 
} from "@mui/material";
import { BlogContainer, BlogGrid, BlogCard } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { OutlinedButtonTransparent } from "@views/Dashboard/styles/styled";
import { useNavigate } from "react-router-dom";

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
  status?: string;
  createdAt: string;
}

const Component: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role");

  const fetchBlogs = () => {
    setLoading(true);
    fetch("http://localhost:5001/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (userRole === "superadmin") {
          setBlogs(data);
        } else {
          setBlogs(data.filter((blog: IBlog) => blog.status === "approved" || !blog.status));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, [userRole]);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(`http://localhost:5001/api/blogs/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setBlogs(blogs.filter(blog => blog._id !== id));
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
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          {/* <Typography variant="h4Bold" color="primary">Latest Updates</Typography> */}
          <Typography variant="h1Bold">Events & Activity Blogs</Typography>
        </Box>
        {userRole && (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate("/blog/write")}
            sx={{ borderRadius: '20px', px: 4 }}
          >
             + Write New Event
          </Button>
        )}
      </Box>
      
      <BlogGrid>
        {blogs.length === 0 ? (
          <Typography variant="h3" sx={{ mt: 4, textAlign: 'center', width: '100%' }}>
            No events found.
          </Typography>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog._id} sx={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              {userRole === "superadmin" && (
                <Box sx={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
                  <Chip 
                    label={blog.status === "approved" ? "Approved" : "Pending Approval"} 
                    color={blog.status === "approved" ? "success" : "warning"}
                    size="small"
                  />
                </Box>
              )}

              {blog.imageUrl && (
                <Box 
                  component="img"
                  src={blog.imageUrl}
                  alt={blog.title}
                  sx={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', mb: 2 }}
                />
              )}

              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                {/* ✅ FIX: Title Overflow handled with line clamping */}
                <Typography 
                  variant="h3Bold" 
                  color="primary" 
                  sx={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minHeight: '3.6rem', // Ensures card heights stay consistent
                    lineHeight: '1.8rem'
                  }}
                >
                  {blog.title}
                </Typography>
                {userRole && (
                  <IconButton 
                    size="small" 
                    color="error" 
                    onClick={(e) => handleDelete(e, blog._id)}
                    sx={{ backgroundColor: 'rgba(255,0,0,0.05)', ml: 1 }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                )}
              </Box>

              <Box display="flex" gap={1} mb={2} flexWrap="wrap">
                {blog.startDate && (
                  <Chip icon={<CalendarMonthIcon fontSize="small" />} label={new Date(blog.startDate).toLocaleDateString()} size="small" variant="outlined" />
                )}
                {blog.district && (
                  <Chip icon={<LocationOnIcon fontSize="small" />} label={blog.district} size="small" variant="outlined" />
                )}
              </Box>

              <Typography variant="h4" sx={{ mb: 3, flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {blog.content}
              </Typography>

              <Box display="flex" justifyContent="space-between" alignItems="center">
                <OutlinedButtonTransparent to={`/blog/${blog._id}`}>
                  <Typography variant="h4Medium">Read Full Story</Typography>
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                </OutlinedButtonTransparent>
              </Box>
            </BlogCard>
          ))
        )}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Component;