import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Paper, Button, TextField, Divider, Stack, Card } from "@mui/material";
// import { NonMuiColors } from "../../../../../config/theme/theme";

const ReviewBlogs: React.FC = () => {
  const [pendingBlogs, setPendingBlogs] = useState<any[]>([]);
  const [editingBlog, setEditingBlog] = useState<any>(null);

  const fetchPending = async () => {
    const res = await fetch("http://localhost:5001/api/blogs/pending", {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    });
    const data = await res.json();
    setPendingBlogs(data);
  };

  useEffect(() => { fetchPending(); }, []);

  const handlePublish = async () => {
    const res = await fetch(`http://localhost:5001/api/blogs/approve-edit/${editingBlog._id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}` 
      },
      body: JSON.stringify({
        title: editingBlog.title,
        content: editingBlog.content,
        status: 'approved'
      })
    });

    if (res.ok) {
      alert("Sairam! Blog published successfully.");
      setEditingBlog(null);
      fetchPending();
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", background: `linear-gradient(135deg, ${NonMuiColors.DARK_BROWN} 0%, ${NonMuiColors.PRIMARY} 100%)`, py: 15 }}>
      <Container maxWidth="md">
        <Typography variant="h2Bold" sx={{ color: NonMuiColors.WHITE, mb: 4 }}>
          Content Review Center
        </Typography>

        {!editingBlog ? (
          <Stack spacing={2}>
            {pendingBlogs.map((blog) => (
              <Card key={blog._id} sx={{ p: 3, backgroundColor: NonMuiColors.FADE }}>
                <Typography variant="h5Bold" color={NonMuiColors.PRIMARY}>{blog.title}</Typography>
                <Typography variant="body2" mb={2}>Submitted by: {blog.author?.email}</Typography>
                <Button 
                  variant="contained" 
                  sx={{ bgcolor: NonMuiColors.PRIMARY }}
                  onClick={() => setEditingBlog(blog)}
                >
                  Edit & Publish
                </Button>
              </Card>
            ))}
          </Stack>
        ) : (
          <Paper sx={{ p: 4, backgroundColor: NonMuiColors.FADE, borderRadius: 4 }}>
            <Typography variant="h4Bold" color={NonMuiColors.PRIMARY} mb={3}>Reviewing: {editingBlog.title}</Typography>
            <TextField
              fullWidth
              label="Title"
              value={editingBlog.title}
              onChange={(e) => setEditingBlog({...editingBlog, title: e.target.value})}
              sx={{ mb: 3, bgcolor: NonMuiColors.WHITE }}
            />
            <TextField
              fullWidth
              multiline
              rows={10}
              label="Content"
              value={editingBlog.content}
              onChange={(e) => setEditingBlog({...editingBlog, content: e.target.value})}
              sx={{ mb: 3, bgcolor: NonMuiColors.WHITE }}
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ bgcolor: NonMuiColors.PRIMARY, flex: 1 }}
                onClick={handlePublish}
              >
                Approve & Publish Now
              </Button>
              <Button 
                variant="outlined" 
                sx={{ color: NonMuiColors.PRIMARY, borderColor: NonMuiColors.PRIMARY }}
                onClick={() => setEditingBlog(null)}
              >
                Cancel
              </Button>
            </Box>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default ReviewBlogs;