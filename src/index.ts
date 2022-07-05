import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    status: "ok",
    api: "Teste",
  });
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
