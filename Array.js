function task1(array){
    let count=0
    array.forEach( elem => {
        if (elem<0) count++}
    )
    return count
}

function task2 (array) {
    let newArr=[]
for (let i=0; i<array.length-1; i++){
    newArr.push(array[i])
}
newArr.unshift(array[array.length-1])
return newArr
}

function task3(array) {
    return `Max elem - ${Math.max(...array)}; Index - ${array.indexOf(Math.max(...array))}`
}

function task4(array) {
    array.forEach( x => {
        if (x%2===0) array.splice(array.indexOf(x), 1)
        }
    )
    return array
}

function task5(array) {
    return array.reduce((sum, elem) => {
        if (elem >= 0 && Number.isInteger(elem)) {
            return sum + elem;
        } else {
            return sum;
        }
    });
}

function task6(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return array
}

function task7 (array) {
    return array.reduce((sum, elem) => {return (elem <= 0)?sum * elem:sum}, 1);
}

function task8 (array) {
    for (let i = 0; i< array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            return true
        }
    }
    return false
}

function task9 (array) {
    let newArr = []
    for (let i = 0; i < array.length; i++){
        newArr[i] = array[(array.length - 1) - i]
    }
    return newArr
}

function task10 (array) {
    console.log(array[0])
    array.splice(0, 1);
    if (array.length > 0) {
        task10(array);
    }
}

function task11 (array) {
 return array.sort()
}

function task12 (array) {
    for (let i = 1, l = array.length; i < l; i++) {
        const current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    return array;
}

function task13 (array, N, number) {
    array.splice(N, 0, number)
    return array
}

function task14 (array, N) {
    array.splice(N, 1)
    return array
}

function task15 (array) {
    array.splice(array.indexOf(Math.min(...array)), 1)
    return Math.min(...array)
}

function task16 (array, array2) {
    return array.filter(x => array2.indexOf(x) === -1);
}

function task17 (array) {
    return array.slice(0)
}

function task18 (array) {
    return Array.from(new Set (array))
}

function task19 (array1, array2) {
    return Array.from(new Set (array1.concat(array2)))
}

function task20 (array) {
    return array.map(x => Math.pow(x, 2))
}

function task21 (array) {
    return array.filter(x => !(x===false||x===null||x===undefined||x===0||x===0||isNaN(x)||x===""));
}

function task22 () {
    const books = [
   { author: "Хэленка", title: "Улетела" },
   { author: "Коул", title: "Аркан" },
   { author: "Райчел М", title: "Золотая" },
   ];

    return books.sort((a, b) => a.title > b.title ? 1 : -1)
}

function task23 (property) {
    const books = [
        { author: "Хэленка", title: "Улетела" },
        { author: "Коул", title: "Аркан" },
        { author: "Райчел М", title: "Золотая" },
    ];

    let array = []

    books.forEach( x => {
        for (let key in x) {
            if (key===property) array.push(x[key])
        }
    })
    return array
}

function task24 (array, N) {
    return array.filter(x => !(x===N));
}

function task25 (array) {
    return array[Math.round(Math.random()*array.length)];
}

function task27 (array, N, M) {
    let elem = array[N]
    array.splice(N, 1)
    array.splice(M, 0, elem)
    return array
}

function task28 (length, N, M) {
    let  array = []
    for (let i=0; i<length; i++)
        array.push(Math.floor(Math.random() * (M - N) + N))
    return array
}

function task29 (array) {
    return array.map(x => x.length)
}

function task30 (str) {
    let arr = []
    str.replace(/(^|\s)\S/g, a=> {arr.push(a)})
    return arr
}

function task31 (array) {
    return Array.isArray(array)
}

function task32 (array) {

}

console.log(task31([]))