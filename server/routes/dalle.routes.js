import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from dalle routes" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = response.data[0].b64_json;
    res.status(200).json({ image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
