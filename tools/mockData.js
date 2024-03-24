const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "Javascript",
  },
  {
    id: 2,
    title: "React: The big picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "Javascript",
  },
  {
    id: 3,
    title: "Creating Reusable React components",
    slug: "react-creating-reusable-components",
    authorId: 3,
    category: "Javascript",
  },
  {
    id: 4,
    title: "Building a Javascript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "Javascript",
  },
  {
    id: 5,
    title: "Up and Running with Redux",
    slug: "up-running-redux",
    authorId: 2,
    category: "Javascript",
  },
  {
    id: 6,
    title: "React: The best parts",
    slug: "react-best-parts",
    authorId: 3,
    category: "Javascript",
  },
  {
    id: 7,
    title: "Creating Composable UI using react",
    slug: "react-compossble-UI",
    authorId: 1,
    category: "Javascript",
  },
  {
    id: 8,
    title: "Building a service using PHPO",
    slug: "javascript-development-environment",
    authorId: 2,
    category: "Javascript",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

//using CommonJS export so we can consume via Node(without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
