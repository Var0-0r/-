const { request } = require("express");
const { response } = require("express");
const express = require("express");
const app = express();
app.get("/home", (request, response) => {
    response.sendfile(__dirname + 'index.html');
});
app.get("data", (request, response) => {
    response.send("用户数据");
})
app.listen(9000, () => {
    console.log("dididi");
})