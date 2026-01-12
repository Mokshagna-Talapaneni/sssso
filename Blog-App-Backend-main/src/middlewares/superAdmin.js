import jwt from "jsonwebtoken";

export const superAdminOnly = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "superadmin") {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const superAdminOnly = (req, res, next) => {
  if (req.user.role !== "superadmin") {
    return res.status(403).json({ message: "Superadmin access only" });
  }
  next();
};

export default superAdminOnly;
