import { Category, Book, Author, BookAuthor } from "../models";

// Fetch Book with Author and Category
export const fetchAllBooksData = () => {
  return new Promise((resolve) => {
    Book.findAll({
      include: [{ model: Category }, { model: Author }],
    })
      .then((books) => {
        console.log("Fetched all books data");
        resolve({
          success: true,
          message: "Book fetched ssuccessfully",
          books: books,
        });
      })
      .catch((err) => {
        console.log("Error while fetching books data", err.message);
        resolve({
          success: false,
          message: "Error while fetching books data",
          books: [],
        });
      });
  });
};

// Fetch Book with including any associations
export const fetchBooks = () => {
  return new Promise((resolve) => {
    Book.findAll()
      .then((books) => {
        console.log("Fetched all books data");
        resolve({
          success: true,
          message: "Book fetched successfully",
          books: books,
        });
      })
      .catch((err) => {
        console.log("Error while fetching books data", err.message);
        resolve({
          success: false,
          message: "Error while fetching books data",
          books: [],
        });
      });
  });
};

// Fetch One Book based on tge id
export const fetchBookById = (id: number) => {
  return new Promise((resolve) => {
    Book.findByPk(id)
      .then((book) => {
        if (!book) {
          return resolve({
            success: false,
            message: "Book not found",
            books: {},
          });
        } else {
          return resolve({
            success: true,
            message: "Book fetched Successfully",
            book: book,
          });
        }
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

export const deleteBookById = (id: number) => {
  return new Promise((resolve) => {
    Book.findByPk(id)
      .then((book) => {
        if (!book) {
          console.log("Requested Book does not exists: ");
          resolve({
            success: false,
            message: "Requested Book does not exist",
          });
        }
        return book.destroy();
      })
      .then((result) => {
        console.log("Delete product successfully");
        return resolve({
          success: true,
          message: "Delete product successfully",
          result: result,
        });
      })
      .catch((error: Error) => {
        resolve({
          success: false,
          message: "Error adding Book",
          error: error,
        });
      });
  });
};

export const rentBookById = () => {};
