import express from "express";
import posts from "./data/post.js";

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.send("Server del mio blog");
});

app.get("/bacheca", (request, response) => {
    response.json({
        posts: posts
    });
});

app.listen(1000, (error) => {
    if (error) {
        console.error("Il server ha riscontrato un errore");
    } else {
        console.log("Server in ascolto sulla porta 1000");
    }
});