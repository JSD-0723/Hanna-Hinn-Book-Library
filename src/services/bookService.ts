import { Category, Book, Author, BookAuthor } from "../models";

// Fetch Book with Author and Category
export const fetchAllBooksData = () => {
  return new Promise((resolve) => {
    Book.findAll({
      include: [{ model: Category }, { model: Author }],
    })
      .then((books) => {
        console.log("Fetched all books data");
        resolve(books);
      })
      .catch((err) => {
        console.log("Error while fetching books data", err.message);
        resolve([]);
      });
  });
};

// Fetch Book with including any associations
export const fetchBooks = () => {
  return new Promise((resolve) => {
    Book.findAll()
      .then((books) => {
        console.log("Fetched all books data");
        resolve(books);
      })
      .catch((err) => {
        console.log("Error while fetching books data", err.message);
        resolve([]);
      });
  });
};

// Create Book
export const createBook = (
  name: String,
  authorId: Number,
  isbn: Number,
  categoryId: Number
) => {
  console.log("Creating Book", name, authorId, isbn, categoryId);
  return new Promise((resolve) => {
    Book.create({
      name: name,
      isbn: isbn,
    })
      .then((book) => {
        Author.findAll({ where: { id: authorId } }).then((author) => {
          if (!author) {
            return resolve({
              success: false,
              message: "Author Id not valid",
            });
          }
          book.addAuthors(author);
          Category.findOne({ where: { id: categoryId } }).then((category) => {
            if (!category) {
              return resolve({
                success: false,
                message: "Category Id not valid",
              });
            } else {
              book.setCategory(category);
              return resolve({
                success: true,
                message: "Book added successfully",
                book: book,
              });
            }
          });
        });
      })
      .catch((err) => {
        resolve({
          success: false,
          message: "Error adding Book",
          error: err,
        });
      });
  });
};
