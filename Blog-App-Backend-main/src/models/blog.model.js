import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String 
  },
  startDate: { 
    type: Date 
  },
  district: { 
    type: String 
  },
  contactPerson: { 
    type: String 
  },
  designation: { 
    type: String 
  },
  phoneNumber: { 
    type: String 
  },
  
  // ✅ UPDATED: Exact naming for segregation
  category: { 
    type: String, 
    enum: ["One Time Activity", "Regular Activities"], 
    default: "One Time Activity",
    required: true
  },

  // Field for Superadmin Approval workflow
  status: { 
    type: String, 
    enum: ["pending", "approved"], 
    default: "pending" 
  },
  
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;