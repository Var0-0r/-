// 1.引入express
const { response } = require("express");
const { request } = require("express");
const express = require("express");

// 创建应用对象
const app = express();

// 3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    response.send("hello AJAX");
});
app.all('/axios-sever', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    response.send("hello AJAX");
});
// app.post('/server', (request, response) => {
//all可以接收任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //响应头
    //所有类型的头信息都可以接受
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    response.send("hello AJAX !!!");
});
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    response.send("hello IE3");
});
app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    setTimeout(() => {
        response.send("hello IE3");
    }, 3000);
});
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //响应头
    //所有类型的头信息都可以接受
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    response.send("hello axios !!!");
});
app.listen(5500, () => {
    console.log("服务已启动，5500端口监听中");
})