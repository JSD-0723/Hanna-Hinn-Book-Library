# Hanna-Hinn-typescript

Create a book library using TypeScript:  

- Create a JSON file containing an array of objects for books details, an example of an object: { name: 'book_name', author: 'book_author', ISBN: '123456' }  
- Create a GET request that accepts a string in the query, and returns all books whose names start with that string.  
- Create database schema on draw.io [DB schema](https://drive.google.com/file/d/1q4P8nNFmcixGAUkwcnQkyNUh7eMstp1o/view?usp=sharing)
- Set up the database connection and create database models (let Sequelize create your tables then).
- Create the following request handlers:
  * Create a new book: POST: /books
  * Get a book by id: GET: /books/:id
  * Get all books: GET: /books
  * Update book: PUT: /books/:id
  * Delete book: DELETE: /books/:id
- Your data should be saved in the database you built.
