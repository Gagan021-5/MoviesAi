import { Router } from "express";
import "dotenv/config";
import fetch from "node-fetch";

const router = Router();
const myapi = process.env.APIKEY;
const myomdb = process.env.OMDBKEY;

router.post("/ai", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "no prompt exist" });
  }

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${myapi}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );
    const result = await geminiResponse.json();
    const ans = result.candidates[0].content.parts[0].text;
    console.log("Extracted answer:", ans);

    if (!ans) {
      return res
        .status(400)
        .json({ error: "Could not generate a valid response" });
    }

    const movies = ans //main replace
      .split("\n")
      .map((val) => {
        const name =
          val.match(/["“”](.*?)["“”]/)?.[1] ||
          val.match(/\*\*(.*?)\*\*/)?.[1] ||
          val;

        return name.replace(/^\d+[\).\- ]*/, "").trim(); 
      })
      .map((name) => name.replace(/\s*\(\d{4}\)/, "").trim()) 
      .filter((name) => name && name.length < 100);

    const getmovies = [];

    for (let name of movies) {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${myomdb}&t=${encodeURIComponent(
          name
        )}`
      );
      const data = await response.json();
      console.log("Fetched movie:", data);
      if (data.Response === "True" && data.Poster !== "N/A") {
        getmovies.push(data); 
      }
    }

    return res.status(200).json({ movies: getmovies });
  } catch (error) {
    console.log("Some error is occuring ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
