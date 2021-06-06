require("dotenv").config();
const express = requiere("express");
const userRouter = require("./routes/userRouter");
// Path para multer
const path = require("path");

const PORT = process.env.PORT || 8080;

const server = express();

// "Public"?
server.use(express.static(path.join(__dirname, "private")));

server.use("/users", userRouter);

server.listen(PORT, () => console.log(`Server is running in Port ${PORT}`));
