function task1 (number1, number2){
    let result = 0;
    let arr = [...arguments]
    arr.forEach( number => {
        for (let i = 0; i <=number.toString().length; i++) {
            result += number % 10;
            number = parseInt(number / 10);
        }
    }
)
    return result
}

function task3 (number1, number2){
    let count=0
    let array = (number1.toString()+number2.toString()).split('').map(number => +number)
    array.forEach(x => { if (x===Math.max(...array))count++})
    return count
}

function task2 (number1, number2){
    let array = (number1.toString()+number2.toString()).split('').map(number => +number)
   return Math.min(...array)
}

function task4(n) {
    return n <= 1 ? n : task4(n - 1) + task4(n - 2);
}

function task5(number, n) {
    return Math.pow(number, n)
}

function task6(number) {
    return (number !== 1) ? number * task6(number - 1) : 1;
}

function task7(number) {
    return (number < 100) ? number: "error";
}

function task8(num1, num2, operator) {
    switch (operator) {
    case '*':
        return  num1 * num2
    case "-":
        return  num1 - num2
    case "+":
        return  num1 + num2
    case "/":
        return  num1/num2
    }
}

function task9(number) {
return Number(number.toString().split('').reverse().join(''))
}

function task10(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false
    }
    return true
}

function task11(number) {
    let variable = 0
    for (let i = 1; i < number; i++) {
        if (number % i === 0) variable+=i
    }
    return (variable === number)
}

function task12(number) {
    return (number % 2 === 0)
}

function task13(number) {
    let str = ''
    for (let i = 1; i < number; i++) {
        str = str+"*"
        console.log(str+"\n")
    }
}

function task14(number) {
    let i=0;
    while (i < number) {
        let spaces = ""
        let stars=""
        for (let j = 0; j < number - i; j++)
            spaces += " ";
        for (let j = 0; j < 2 * i + 1; j++)
            stars += "*";
        console.log(spaces + stars);
        i++;
    }
}

function task15(number) {
    return  parseInt(number.toString(), 2);
}

function task16(n,m) {
    return Math.random() * (m - n) + n;
}

function task17(n,m) {
    return Math.floor(Math.random() * (m - n) + n);
}

function task18(n) {
    return (Math.random()*100).toFixed(n);
}

function task19(number, n) {
    return Number.isInteger(Math.log(number) / Math.log(n))
}

function task20 (number, number2, number3) {
 if (!Number.isFinite(number)||!Number.isFinite(number2)||!Number.isFinite(number3)) return "ошибка, не число"
 else if (number===number2||number===number3||number2===number3) return "равнобедренный"
 else if (number===number2&&number2===number3&&number===number3) return "равносторонний"
 else return "обычный треугольник"

}

function task21 (number, course ) {
    return number/course.toString() + "$"
}

function task22 (a, b, c){
    let p = (a+b+c)/2
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}

function task23 (sum, monthCount){
for (let i=0; i<monthCount; i++)
    sum+=sum*0.4
    return sum
}

function task24 (number){
    switch (number) {
        case 1:
            return "Понедельник"
        case 2:
            return "Вторник"
        case 3:
            return "Среда"
        case 4:
            return "Четверг"
        case 5:
            return "Пятница"
        case 6:
            return "Cуббота"
        case 7:
            return "Воскресенье"
    }
}

function task25 (number) {
    for (i=2; i<number; i++) {
        if (number % i === 0)
        return false
        else continue
    }
    return true
}

function task26 (count, S) {
    return S/count
}

function task27 (count, S) {
    return -b/a
}

function task28 (X, Y) {
 return `Average - ${X/Y}, Tania's - ${X - X/Y}, Mitty's - ${Y - X/Y}`
}

function task29 (v1, v2, S) {
    return S/(v1+v2)
}

function task30 (x) {
    return (x>0)?Math.sin(x):Math.cos(x)
}

function task31 (x) {
    return Math.max(...x.toString().split('').map(x=>+x))
}

function task32 (x) {
    switch (x){
        case 1:
            return "пики"
        case 2:
            return "трефы"
        case 3:
            return "бубны"
        case 4:
            return "червы"
    }
}

function task33 () {
    let sum=0;
    for (let i=100; i<=500; i++)
        sum+=i
    return sum
}

function task34 (...arguments) {
    return arguments.reduce((a,b)=>a+b)
}

console.log(task34(4, 5, 6, 8))