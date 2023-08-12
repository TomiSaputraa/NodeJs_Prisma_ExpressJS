const { morganMiddleware } = require("./middleware/middleware");
const routerUsers = require("./routes/userRoutes");
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;
app.use(express.json());

app.use("/", morganMiddleware);

// users routes
app.use("/users", routerUsers);

app.listen(port, () => {
  console.log(`server running on port${port}`);
});
