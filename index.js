const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//setando engine, e arquivos estaticos
app.set('view engine', 'ejs');
app.use(express.static('public'));
//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/perguntar", (req, res)=>{
    res.render('perguntar')
});

app.post("/salvarpergunta",(req, res)=>{
	let titulo = req.body.titulo;
	let descricao = req.body.descricao;
	res.send(`Formulário recebido! Titulo: ${titulo} Descrição: ${descricao}`);
});


//criando servidor
app.listen(8080, ()=>{
    console.log("App rodando!");
});