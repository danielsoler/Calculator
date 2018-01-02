var num1 = num1
var num2 = num2
var oper = prompt("que operacion vas a hacer (suma, resta, multiplicacion o division)")

num1 = prompt("por favor escriba un numero")
num2 = prompt("por favor escriba otro numero")

if (oper == "suma") {
	document.write(parseInt(num1)+parseInt(num2))
} else if (oper == "resta") {
	document.write(parseInt(num1)-parseInt(num2))
} else if (oper == "multiplicacion") {
	document.write(parseInt(num1)*parseInt(num2))
} else if (oper == "division") {
	document.write(parseInt(num1)/parseInt(num2))
};