import client from "./connection.js";

console.log(await client.db("bd_password_manager").collection("users").findOne({
    email: "oliver.inzunza244748@potros.itson.edu.mx"
})) ;