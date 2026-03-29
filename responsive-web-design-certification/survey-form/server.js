import express from "express";
import bodyParser from "body-parser";

const PORT = 3001;

export const main = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  app.post("/submit", (req, res) => {
    console.log(req.body);
    return res.json({ message: "Success" });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

main();
