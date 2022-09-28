const express = require("express");
const cors = require("cors");
const app = express();
const port = 4001 || process.env.PORT;
const { add, multi, divide, sub } = require("./localModules");
app.use(cors());

console.log(add(4, 5));
console.log(multi(3, 5));
console.log(divide(10, 5));
console.log(sub(10, 5));

const globalMid = (req, res, next) => {
  console.log("im global middleware works for all routes");
  next();
};

app.use(globalMid);

app.get("/", (req, res) => {
  res.send("Home Route");
  res.end();
});
app.get("/about", (req, res) => {
  res.send("About");
  res.end();
});

app.listen(port, () => {
  console.log(`Connected to Port ${port}✅`);
})
