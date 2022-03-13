// DOM文档对象模型
// 节点： 常见节点分为四类
// 文档节点：整个html文档
// 元素节点：html文档中的html元素
// 属性节点：元素的属性
// 文本节点：html标签中的文本内容

// <p></p>元素节点
// <p id="属性节点"></p>
// <p>文本节点</p>
// 浏览器为我们提供了文档节点对象这个对象是window属性，可以在页面中直接使用，文档节点代表的是整个网页
// 事件 就是文档或者浏览器窗口中发生的一些特定的交互瞬间
// 用户和浏览器之间的交互行为 比如：点击按钮，鼠标移动，关闭窗口
// 我们可以在事件的对应属性中设置一些js代码，这样当事件被触发时，这些代码将会执行
// 获取元素节点 document
// .getElementById 通过id属性获取一个元素节点对象
// .getElementsByTagName 通过标签名获取一组元素节点对象
// 这个方法会给我们返回一个类数组对象，所有查询到的元素都会封装到对象中
// .getElementsByName 通过name属性获取一组元素节点对象
// innerHTML用于获取元素内部的HTMl代码 对于自结束标签没有意义
// innerText 该属性可以获取到元素内部的文本内容 ，和innerHTML类似，但是它会自动将Html去除
// 如果需要读取元素节点属性，直接使用元素.属性名
// 例如 元素.id .name .value
// 但是clss属性值不能采用这样的方式，但是可以采用.className
// 通过具体的元素节点调用
// getElementsByTagName() 方法，返回当前的节点指定标签后代节点
// childNodes当前节点的所有子节点
// 会获取包括文本节点在内的所有子节点，根据dom标签标签间的空白也会当成文本节点 注意在IE8及以下的浏览器，不会将空白文本当成
// 子节点，所以该属性在Ie8中会返回四个子元素，而其他浏览器是九个
// children 可以获取当前元素的所有子元素  推荐使用 兼容性好
// firstChild当前节点的第一个子节点 包括空白文本  可以使用.childNodes[0]
// 不兼容IE8及以下
// lastChild当前节点的最后一个子节点
// 获取父节点和兄弟节点
// parentNode 表示当前节点的父节点
// previousSibling表示当前节点的前一个兄弟节点
// 也可能是空白文本
// previousElementSibling 获取前一个兄弟元素 IE8不支持
// nextSibling表示当前节点的后一个兄弟节点
//  当需要绑定多个点击事件时，我们可以定义一个函数，专门用来为指定元素绑定单击响应函数
// function myClick(idStr,fun){
//     var btn=document.getElementById(idStr);
//     btn.oncilck=fun;
// }
// body标签
var body = document.body;
// html标签
var html = document.documentElement;
// document.all代表页面中所有元素
var all = document.all;
console.log(all);
//等同于上面all
all = document.getElementsByTagName("*");
//根据元素的class属性查询到一组元素节点对象 IE8及以下不支持
var box = document.getElementsByClassName("box");
//根据css选择器获取到对象  
<div class="box1">
    <div>获取到我</div>
</div>
// 使用该方法只会返回唯一的一个元素，如果满足条件的元素有多个，那么它只会返回第一个
var div = document.querySelector(".box1  div");
console.log(div.innerHTML);
// IE8及以下不支持 该方法和上述类似，但是它会将符合的元素封装到类数组返回
div = document.querySelectorAll(".box1  div");

// dom增删改的方法
//创建一个<li>广州</li>
// 首先 创建一个li元素节点 
// document.createElement可以创建一个元素节点对象，他需要一个标签名作为参数，将会根据标签名来创建元素节点对象，
//并将创建好的对象作为返回值返回
var li = document.createElement("li");
//然后创建一个文字节点
// document.createTextNode可以用来创建一个文本对象节点，需要一个文本内容作为参数，会将新的节点返回
var text = document.createTextNode("广州");
// 将广州设置为li的子节点
// appendChild() 向一个父节点中添加一个新的子节点
// 用法 父节点.appendChild(子节点);
li.appendChild(text);
//添加到网页中  
// 例如添加到网页中的city下
// 首先获取city节点
var city = document.getElementById("city");
//添加到city下
city.appendChild(li);


// 在已有的节点前插入新节点 <li>广州</li>
<div id="city">
    <li class="bj"></li>
</div>
// 首先创建
var li = document.createElement("li");
var gz = document.createTextNode("广州");
li.appendChild(gz);
//获取父节点
var bj = document.getElementById("city");
// insertBefore() 
// 可以在指定节点前插入新的子节点
city.insertBefore(li, bj);

// 使用innerHTML也可以完成添加  但是这样操作动作较大
city.innerHTML += "<li>广州</li>"
// 一般采取两种相结合
li.innerHTML = "广州";
city.appendChild(li);


// 替换子节点
// replaceChild() 可以使用指定的子节点替换已有子节点
// 语法：父节点.replaceChild(新节点，旧节点);
city.replaceChild(li, bj);
// 删除子节点
// removeChild 可以删除指定子节点 
// 语法：父节点.removeChild(子节点);
city.removeChild(bj);
// 这个同理 常用 
bj.parentNode.removeChild(bj);

// 点击超链接后，超链接会跳转页面，这个是超链接默认的行为；
    // 如果不希望出现这种默认行文可以在响应函数的最后return false 取消默认行为

