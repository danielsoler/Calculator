var num1 = num1
var num2 = num2
var oper = prompt("Para sumar marque 1.\nPara restar marque 2.\nPara multiplicar marque 3.\nPara dividir marque 4.")

num1 = prompt("por favor escriba un numero")
num2 = prompt("por favor escriba otro numero")

if (oper == "1") {
	document.write(parseInt(num1)+parseInt(num2))
} else if (oper == "2") {
	document.write(parseInt(num1)-parseInt(num2))
} else if (oper == "3") {
	document.write(parseInt(num1)*parseInt(num2))
} else if (oper == "4") {
	document.write(parseInt(num1)/parseInt(num2))
};