const express=require("express")
const path=require("path")
const app = express();
const port = 80;
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))
app.get("/",(req,res)=>{
    res.render("test.pug")
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
}); 