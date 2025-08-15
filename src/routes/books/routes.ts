import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBookById,
  listBooks,
  updateBook,
} from "./controller";

const router = Router();

router.get("/", listBooks);

router.get("/:id", getBookById);

router.post("/", addBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;
