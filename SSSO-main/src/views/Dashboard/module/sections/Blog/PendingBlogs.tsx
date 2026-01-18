import { useEffect, useState } from "react";
import { API_BASE_URL } from "@shared/config/apiConfig";
import {
  Container, Typography, Button, Card, CardContent, Stack
} from "@mui/material";

const PendingBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const token = localStorage.getItem("token");

  const fetchPending = async () => {
    const res = await fetch("${API_BASE_URL}/blogs/pending", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    setBlogs(data);
  };

  const publishBlog = async (id: string) => {
    await fetch(`${API_BASE_URL}/blogs/${id}/publish`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    fetchPending();
  };

  const deleteBlog = async (id: string) => {
    await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    fetchPending();
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3Bold" gutterBottom>
        Pending Blog Approvals
      </Typography>

      {blogs.map(blog => (
        <Card key={blog._id} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h4Bold">{blog.title}</Typography>
            <Typography sx={{ mb: 2 }}>{blog.content}</Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => publishBlog(blog._id)}
              >
                Publish
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteBlog(blog._id)}
              >
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default PendingBlogs;
