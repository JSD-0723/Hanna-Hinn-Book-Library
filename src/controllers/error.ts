export const get404 = (req, res, next) => {
  res.status(404).send("404 Not Found");
};

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: `Something Went Wrong: ${err.message}` });
};
