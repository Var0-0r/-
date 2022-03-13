export let name = "rr";
export function con() {
    console.log("My name");
}

//统一暴露
let sheName = "rr"
function fu() {
    console.log("yl");
}
export {
    sheName,
    fu
};

//默认暴露
export default {
    sName: "rr",
    fn: function () {
        console.log("aaa");
    }
}