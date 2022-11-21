import express from "express";
import dotenv from "dotenv";
import ct from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";

dotenv.config();

ct();

const app = express();
const port = 3000;

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.json());

app.use(pageRoute);
app.use('/photos',photoRoute);

// app.get('/',(req,res)=>{
//     res.render('index');
// });
// app.get('/about',(req,res)=>{
//     res.render('about');
// });

app.listen(port,()=>{
    console.log("succesfully");
});