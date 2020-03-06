//使用commonJs规范导出
function sum(num, num2) {
    return num + num2;
}
function mul(num, num2) {
    return num * num2;
}
module.exports = {
    sum, mul
}