import { Request, Response } from "express";

interface booksInterface {
  id: number;
  title: string;
  author: string;
}

const books: booksInterface[] = [
  { id: 1, title: "Rok 1984", author: "George Orwell" },
  { id: 2, title: "Dziady cz. III", author: "Adam Mickiewicz" },
];

export const listBooks = (req: Request, res: Response) => {
  res.status(200).json(books);
};

export const addBook = (req: Request, res: Response) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }

  const newBook: booksInterface = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
  };

  books.push(newBook);

  res.status(201).json(newBook);
};

export const getBookById = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  const chosenBook = books.find((book) => book.id === bookId);

  if (!chosenBook) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.status(200).json(chosenBook);
};

export const updateBook = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const chosenBookIndex = books.findIndex((book) => book.id === id);

  if (chosenBookIndex === -1) {
    return res.status(404).json({ error: "Book not found." });
  }

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }

  books[chosenBookIndex].title = title;
  books[chosenBookIndex].author = author;

  res.status(200).json(books[chosenBookIndex]);
};

export const deleteBook = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const chosenBookIndex = books.findIndex((book) => book.id === id);

  if (chosenBookIndex === -1) {
    return res.status(404).json({ error: "Book not found." });
  }

  const deletedBook = books.splice(chosenBookIndex, 1)[0];

  res.status(200).json(deletedBook);
};
