// 声明Map
let m = new Map();

// 添加元素
m.set("name", "rr");
m.set("fun", function () {
    console.log("我是荣荣");
});
let key = "yl";
m.set(key, [1, 2, 3]);

console.log(m);

// Map长度
m.size();

//删除Map
m.delete("name");

// 获取
m.get("fun");

// 清空
m.clear();

// 遍历
for (let v of m) {
    console.log(v);
}
