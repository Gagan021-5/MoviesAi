import express from "express";
const app = express();
const PORT = process.env.PORT;
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";

app.use(express.static("public")); //for converting thh object into the actual words for the generated text
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://moviesfront-q1wi.onrender.com/"],
    credentials: true,
  })
);

//router
import router from "./router/ai.js";
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Port is listening at ${PORT}`);
});
