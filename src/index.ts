import express, { Request, Response } from "express";
import booksRouter from "./routes/books/routes";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
