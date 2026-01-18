import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: String,
  startDate: Date,
  district: String,
  contactPerson: String,
  designation: String,
  phoneNumber: String,
  // ✅ NEW: Status field for Approval Workflow
  status: { 
    type: String, 
    enum: ["pending", "approved"], 
    default: "pending" 
  },
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;