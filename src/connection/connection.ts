import { Sequelize } from "sequelize-typescript"; 
import { Product } from "../models/product"; 
import { Company } from "../models/company";
import { Service } from "../models/service";

const connection = new Sequelize({ 
database: 'sisweb_db', 
dialect: 'postgres', 
username: 'sisweb_user', 
password: 'HDK#$%Ljkwerff.89', 
storage: ':memory:', 
models: [ 
Product, 
Company,
Service
] 
}); 

async function connectionDB(){ 
try{ 
await connection.sync(); 
}catch(e){ 
console.log(e); 
} 
} 
export default connectionDB; 