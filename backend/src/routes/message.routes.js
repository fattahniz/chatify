import express from "express";

const router = express.Router();

// Example unique routes
router.get("/send", (req, res) => {
  res.send("Send message endpoint");
});

router.get("/all", (req, res) => {
  res.send("Get all messages endpoint");
});

router.post("/send", (req, res) => {
  res.send("Send message via POST endpoint");
});

export default router;
