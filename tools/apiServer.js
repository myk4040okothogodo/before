const jsonServer = require("json-server");
const Server = jsonServer.create();
const path = require("path");
const { serialize } = require("v8");
const router = jsonServer.router(path.join(__dirname, "db.json"));

//can pass a limited number of options to this to override(some) defaults
const middlewares = jsonServer.defaults();

//set default middlewares (logger, static, cors and no-cache)
Server.use(middlewares);

//To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyparser
Server.use(jsonServer.bodyParser);

//simulate delay on all requests
Server.use(function (req, res, next) {
  setTimeout(next, 2000);
});

//Declaring custom routes below. Add custom routes before json Server router

//Add createdAt to all POSTS
Server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // continue to JSON Server router
  next();
});

Server.post("/courses/", function (req, res, next) {
  const error = validateCourse(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.title); // Generate a slug for new courses
    next();
  }
});

//Use default router
Server.use(router);

//Start server
const port = 3001;
Server.listen(port, () => {
  console.log("JSON Server is running on port ${port}");
});

//centralized logic

///Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateCourse(course) {
  if (!course.title) return "Title is required.";
  if (!course.authorId) return "Author is required";
  if (!course.category) return "Category is required.";
  return "";
}
