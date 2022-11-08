const express = require ("express");
const app = express();
const dotenv = require ("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const usersRoute = require("./Routes/users"); 
const postsRoute = require("./Routes/posts");  
const CategoriesRoute = require("./Routes/categories"); 


dotenv.config();
app.use(express.json());
 mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  

}).then(console.log("Connected to MongoDB"))
.catch ((err) => console.log(err));


app.use("blog/auth", authRoute)
app.use("blog/users", usersRoute)
app.use("blog/posts", postsRoute)
app.use("blog/categories", CategoriesRoute)


app.listen(3000, () => {
    console.log("Server has started")
});  