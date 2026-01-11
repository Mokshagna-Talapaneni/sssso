import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Typography, CircularProgress, Container, Box, Button, 
  Paper, Divider, Avatar, Grid, Stack 
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure port matches your backend (5001)
    fetch(`http://localhost:5001/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Box display="flex" justifyContent="center" py={10}><CircularProgress /></Box>;
  if (!post) return <Typography variant="h2" align="center">Event Not Found</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/blog")} sx={{ mb: 4 }}>
        Back to Events
      </Button>

      <Grid container spacing={5}>
        {/* LEFT SIDE: Content and Image */}
        <Grid item xs={12} md={8}>
          {post.imageUrl && (
            <Box 
              component="img" 
              src={post.imageUrl} 
              sx={{ width: '100%', borderRadius: 4, mb: 4, boxShadow: 3 }} 
            />
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

        {/* RIGHT SIDE: Contact Business Card */}
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 4, position: 'sticky', top: 100, borderLeft: '6px solid #1a237e' }}>
            <Typography variant="h3Bold" sx={{ mb: 3 }}>Contact Information</Typography>
            
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                <PersonIcon fontSize="large" />
              </Avatar>
              <Box>
                <Typography variant="h3Bold">{post.contactPerson || "Incharge"}</Typography>
                <Typography variant="body2" color="text.secondary">{post.designation || "SSSO Volunteer"}</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <PhoneIcon color="primary" fontSize="small" />
                <Typography variant="h4Medium">{post.phoneNumber || "No contact provided"}</Typography>
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

            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 4, py: 1.5, borderRadius: 2 }}
              onClick={() => window.print()} // Optional print feature
            >
              Save Event Details
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostDetail;