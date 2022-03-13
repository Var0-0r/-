// Set
// 声明一个set
let s = new Set();
let s2 = new Set(["rr", "ll"]);

// 元素个数s2.size
// 添加元素
s2.add("yr");
// 元素删除
s2.delete("yr");
//检测
s2.has("rr");
// 清空
s2.clear();

console.log(s2, s2.size);
// 遍历
for (let v of s2) {
    console.log(v);
}
