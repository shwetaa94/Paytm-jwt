const express = require("express");
const rootRouter = require("./routes/index");
const { connectToDB } = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

// DB Connection
app.get('/',(req, res )=>{
  res.send("i am backened");

})

connectToDB();

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
