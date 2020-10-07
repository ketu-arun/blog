const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to DB
connectDB();

//Models import
require("./models/Post");
require("./models/Category");
require("./models/Comment");

// Init middleware
app.use(express.json());

//Define Routes
app.use("/api/", require("./routes/posts"));
app.use(require("./routes/comments"));
app.use(require("./routes/categories"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
