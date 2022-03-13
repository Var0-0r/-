// Promise 
// 实例化promise对象
// p有三个状态 初始化 成功 失败
// resolve 成功怎样执行
// reject 失败怎样执行
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let date = "数据库中的数据";
        resolve(date);

        let err = "数据读取失败";
        reject(err);
    }, 1000);
});
// 调用promise对象的then方法
// 成功输出value的值，失败输出reason
p.then(function (value) {
    console.log(value);
}, function (reason) {
    console.log(reason);
})