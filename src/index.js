let db = require("./db");
let pizza = require("./model/pizza");

async function sincronizar() {
    await db.sync({force:true});
}
sincronizar();

async function inserir(obj) {
    let res = await pizza.create(obj)
    console.log(res);
}
 let lista = [];

 let p1 = {nome: "chocolate", tamanho: "grande"};

  let p2 = {nome: "sertaneja", tamanho: "media"};

  let p3 = {nome: "camarao", tamanho: "pequena"};

  let p4 = {nome: "marguerita", tamanho: "pequena"};

  let p5 = {nome: "queijo", tamanho: "grande"};
 
 lista.push(p1, p2, p3, p4, p5);

 for(b of list){
  inserir(b);
}
 async function consultar() {
    let resultado = await pizza.findAll();
    console.log(resultado);
}
consultar();





