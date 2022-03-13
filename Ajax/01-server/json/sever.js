// 1.引入express
const { response } = require("express");
const { request } = require("express");
const express = require("express");
const { json } = require("express/lib/response");

// 创建应用对象
const app = express();

// 3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/json-sever', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    const data = {
        name: "rr"
    }
    let str = JSON.stringify(data);
    response.send(str);
});
// app.post('/server', (request, response) => {
//可以接收任意类型的请求
app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //响应头
    //所有类型的头信息都可以接受
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    response.send("hello AJAX !!!");
});
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中");
})