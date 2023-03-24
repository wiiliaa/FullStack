const { TreeRepository } = require("typeorm");
const Book = require("../model/Book");

exports.getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ books });
};

exports.findBookName = async (req, res, next) => {
  const bookName = req.params.bookName;
  let book;
  try {
    book = await Book.findOne({ name: bookName });
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({ book });
};
exports.findLikeBookName = async (req, res, next) => {
  const bookName = req.params.bookName;
  let books;
  try {
    books = await Book.find({ name: { $regex: bookName, $options: "i" } });
  } catch (err) {
    console.log(err);
  }
  if (!books || books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};

exports.deleteBook = async (req, res, next) => {
  const bookName = req.params.bookName;
  let result = await this.findBookName({ name: bookName });
  try {
    result = await Book.deleteOne;
  } catch (err) {
    console.log(err);
  }
  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({ message: "Book deleted successfully" });
};

exports.updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable To Update" });
  }
  return res.status(200).json({ book });
};

exports.addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

exports.deleteBook = async (req, res, next) => {};
