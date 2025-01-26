import { verifyToken } from "../utilities/token.js";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization || req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json("error: ", error.message);
  }
};
