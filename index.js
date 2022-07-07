const express = require("express");
const app = express();

//setando engine, e arquivos estaticos
app.set('view engine', 'ejs');
app.use(express.static('public'));

//rotas
app.get("/", (req, res)=>{
    res.render("index")
});
app.get("/perguntar", (req, res)=>{
    res.render('perguntar')
});

//criando servidor
app.listen(8080, ()=>{
    console.log("App rodando!");
});