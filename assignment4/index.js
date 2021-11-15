console.log("// Creation of Object in js ::module.exports=Product;");

const product1=require('./calc');

const p2=new product1((10,20),(20,10),(10,20),(20,10));

console.log(p2.display());