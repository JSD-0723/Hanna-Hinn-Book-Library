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
export const createBook = (newBookData) => {
  const { name, authorId, isbn, category } = newBookData;

  return new Promise((resolve) => {
    // Author.findOne({ where: { id: authorId } }).then((authors) => {
    //   console.log("Authors", authors);
    //   Category.findOne({ where: { type: category } }).then((category) => {
    //     console.log(category);
    //     Book.create({
    //       name: name,
    //       isbn: isbn,
    //       Category: category,
    //       Authors: authors,
    //     })
    //       .then((result) => {
    //         console.log("Book Successfully Added", result);
    //         resolve(true);
    //       })
    //       .catch((err) => {
    //         console.log("Book Creation Failed", err.message);
    //         resolve(false);
    //       });
    //   });
    // });
  });
};
