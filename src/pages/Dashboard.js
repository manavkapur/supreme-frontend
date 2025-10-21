import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
  TextField,
} from "@mui/material";

function Dashboard() {
  const [quotes, setQuotes] = useState([]);
  const [archivedQuotes, setArchivedQuotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [archivedContacts, setArchivedContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [archivedBlogs, setArchivedBlogs] = useState([]);

  const [newBlog, setNewBlog] = useState({ title: "", content: "" });

  const fetchData = async () => {
    try {
      const resQuotes = await axios.get("http://localhost:8080/quotes");
      const resContacts = await axios.get("http://localhost:8080/contact");
      const resBlogs = await axios.get("http://localhost:8080/blogs");

      setQuotes(resQuotes.data.filter((q) => !q.archived));
      setArchivedQuotes(resQuotes.data.filter((q) => q.archived));

      setContacts(resContacts.data.filter((c) => !c.archived));
      setArchivedContacts(resContacts.data.filter((c) => c.archived));

      setBlogs(resBlogs.data.filter((b) => !b.archived));
      setArchivedBlogs(resBlogs.data.filter((b) => b.archived));
    } catch (error) {
      console.error("Error fetching dashboard data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ===== Archive & Delete Actions =====
  const archiveQuote = async (id) => {
    if (window.confirm("Archive this quote?")) {
      await axios.put(`http://localhost:8080/quotes/${id}/archive`);
      fetchData();
    }
  };

  const archiveContact = async (id) => {
    if (window.confirm("Archive this contact?")) {
      await axios.put(`http://localhost:8080/contact/${id}/archive`);
      fetchData();
    }
  };

  const archiveBlog = async (id) => {
    if (window.confirm("Archive this blog post?")) {
      await axios.put(`http://localhost:8080/blogs/${id}/archive`);
      fetchData();
    }
  };

  const deleteQuote = async (id) => {
    if (window.confirm("Delete this quote permanently?")) {
      await axios.delete(`http://localhost:8080/quotes/${id}`);
      fetchData();
    }
  };

  const deleteContact = async (id) => {
    if (window.confirm("Delete this contact permanently?")) {
      await axios.delete(`http://localhost:8080/contact/${id}`);
      fetchData();
    }
  };

  const deleteBlog = async (id) => {
    if (window.confirm("Delete this blog post permanently?")) {
      await axios.delete(`http://localhost:8080/blogs/${id}`);
      fetchData();
    }
  };

  const createBlog = async () => {
    if (!newBlog.title || !newBlog.content) {
      alert("Title and Content are required!");
      return;
    }
    try {
      await axios.post("http://localhost:8080/blogs", newBlog, {
        auth: { username: "admin", password: "password123" }, // 🔑 secure
      });
      setNewBlog({ title: "", content: "" });
      fetchData();
    } catch (err) {
      console.error("Failed to create blog", err);
      alert("Failed to create blog");
    }
  };

  // ===== Reusable Table Renderer =====
  const renderTable = (title, rows, type, archived = false) => (
    <Box mb={5}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              {type === "quote" && (
                <>
                  <TableCell><b>ID</b></TableCell>
                  <TableCell><b>Name</b></TableCell>
                  <TableCell><b>Email</b></TableCell>
                  <TableCell><b>Service</b></TableCell>
                  <TableCell><b>Details</b></TableCell>
                  {!archived && <TableCell><b>Actions</b></TableCell>}
                </>
              )}
              {type === "contact" && (
                <>
                  <TableCell><b>ID</b></TableCell>
                  <TableCell><b>Name</b></TableCell>
                  <TableCell><b>Email</b></TableCell>
                  <TableCell><b>Message</b></TableCell>
                  {!archived && <TableCell><b>Actions</b></TableCell>}
                </>
              )}
              {type === "blog" && (
                <>
                  <TableCell><b>ID</b></TableCell>
                  <TableCell><b>Title</b></TableCell>
                  <TableCell><b>Content</b></TableCell>
                  {!archived && <TableCell><b>Actions</b></TableCell>}
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                {type === "quote" && (
                  <>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.service}</TableCell>
                    <TableCell>{row.details}</TableCell>
                  </>
                )}
                {type === "contact" && (
                  <>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.message}</TableCell>
                  </>
                )}
                {type === "blog" && (
                  <>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.content}</TableCell>
                  </>
                )}
                {!archived && (
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="warning"
                      size="small"
                      onClick={() =>
                        type === "quote"
                          ? archiveQuote(row.id)
                          : type === "contact"
                          ? archiveContact(row.id)
                          : archiveBlog(row.id)
                      }
                      sx={{ mr: 1 }}
                    >
                      Archive
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() =>
                        type === "quote"
                          ? deleteQuote(row.id)
                          : type === "contact"
                          ? deleteContact(row.id)
                          : deleteBlog(row.id)
                      }
                    >
                      Delete
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Admin Dashboard
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Quotes Section */}
      {renderTable("Active Quotes", quotes, "quote")}
      {renderTable("Archived Quotes", archivedQuotes, "quote", true)}

      {/* Contacts Section */}
      {renderTable("Active Contact Messages", contacts, "contact")}
      {renderTable("Archived Contact Messages", archivedContacts, "contact", true)}

      {/* Blogs Section */}
      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        Create Blog
      </Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={createBlog}>
          Add Blog
        </Button>
      </Paper>

      {renderTable("Active Blog Posts", blogs, "blog")}
      {renderTable("Archived Blog Posts", archivedBlogs, "blog", true)}
    </Container>
  );
}

export default Dashboard;
