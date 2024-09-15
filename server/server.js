const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const User = require("./models/User");
const { signToken }  = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // REST endpoint for user registration
  app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;

      // Checking is username exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      // Create a new user
      const newUser = await User.create({ username, password });
      const token = signToken(newUser);
      res.json({ token, user: newUser });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //REST endpoint for user login
  app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
    
      // Find the user by username
      const user = await User.findOne({ username });

      // If the user is not found or password is wrong
      if (!user || !(await user.isCorrectPassword(password))) {
        return res.status(400).json({ message: 'Invalid username or password' });
       }

       // If login is successful
       const token = signToken(user);
       res.json({ token, user });
      } catch (err) {
        res.status(500).json(err);
      }
  });

  // GraphQL middleware
  app.use("/graphql", expressMiddleware(server));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
