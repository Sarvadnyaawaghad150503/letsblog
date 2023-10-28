import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import bodyParser from 'body-parser';
import BlogRouter from "./routes/blog-routes.js";
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/user", router);
app.use("/api/blog", BlogRouter)

mongoose.connect('mongodb+srv://sarvadnyaawaghad10:fpROzx1t7jNucYTj@cluster0.a8ggxue.mongodb.net/BLOGAPP?retryWrites=true&w=majority')
.then(() =>app.listen(5000))
.then(() => 
console.log('database connected listenig to 4100'))
.catch((err) => console.log('foun error', err) )



app.listen(4100);

// fpROzx1t7jNucYTj