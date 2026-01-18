import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Typography, CircularProgress, Container, Box, Button, 
  Paper, Divider, Avatar, Grid, Stack, Alert 
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const userRole = localStorage.getItem("role");

  const fetchPost = () => {
    setLoading(true);
    fetch(`http://localhost:5001/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (userRole === "superadmin" || data.status === "approved" || !data.status) {
          setPost(data);
        } else {
          setPost(null);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchPost();
  }, [id, userRole]);

  const handleApprove = async () => {
    const res = await fetch(`http://localhost:5001/api/blogs/approve/${id}`, {
      method: "PATCH"
    });
    if (res.ok) {
      alert("Sairam! Event Approved.");
      fetchPost();
    }
  };

  if (loading) return <Box display="flex" justifyContent="center" py={10}><CircularProgress /></Box>;
  
  if (!post) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h2">Event Not Found</Typography>
        <Button variant="contained" onClick={() => navigate("/blog")} sx={{ mt: 2 }}>Back to Events</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/blog")}>
          Back to Events
        </Button>
        {userRole === "superadmin" && post.status === "pending" && (
          <Button variant="contained" color="success" startIcon={<CheckCircleIcon />} onClick={handleApprove}>
            Approve This Event
          </Button>
        )}
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          {post.imageUrl && (
            <Box component="img" src={post.imageUrl} sx={{ width: '100%', borderRadius: 4, mb: 4, boxShadow: 3 }} />
          )}
          <Typography variant="h1Bold" color="primary" gutterBottom>{post.title}</Typography>
          
          <Stack direction="row" spacing={3} sx={{ mb: 4, opacity: 0.8 }}>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarMonthIcon color="primary" />
              <Typography variant="h4">{post.startDate ? new Date(post.startDate).toLocaleDateString() : 'N/A'}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon color="primary" />
              <Typography variant="h4">{post.district || 'All Districts'}</Typography>
            </Box>
          </Stack>

          <Divider sx={{ mb: 4 }} />
          <Typography variant="h4" sx={{ lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
            {post.content}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 4, position: 'sticky', top: 100, borderLeft: '6px solid #1a237e' }}>
            <Typography variant="h3Bold" sx={{ mb: 3 }}>Contact Information</Typography>
            
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}><PersonIcon fontSize="large" /></Avatar>
              <Box>
                <Typography variant="h3Bold">{post.contactPerson || "Incharge"}</Typography>
                <Typography variant="body2" color="text.secondary">{post.designation || "SSSO Volunteer"}</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Stack spacing={2}>
              {/* ✅ FIX: Click-to-Call implementation */}
              <Box display="flex" alignItems="center" gap={2}>
                <PhoneIcon color="primary" fontSize="small" />
                {post.phoneNumber ? (
                   <Typography 
                    variant="h4Medium" 
                    component="a" 
                    href={`tel:${post.phoneNumber}`}
                    sx={{ 
                      textDecoration: 'none', 
                      color: 'primary.main', 
                      fontWeight: 'bold',
                      '&:hover': { textDecoration: 'underline' } 
                    }}
                  >
                    {post.phoneNumber}
                  </Typography>
                ) : (
                  <Typography variant="h4Medium">No contact provided</Typography>
                )}
              </Box>
              
              <Box display="flex" alignItems="center" gap={2}>
                <BadgeIcon color="primary" fontSize="small" />
                <Typography variant="h4Medium">{post.designation || "Official"}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <LocationOnIcon color="primary" fontSize="small" />
                <Typography variant="h4Medium">{post.district || "Regional"}</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostDetail;