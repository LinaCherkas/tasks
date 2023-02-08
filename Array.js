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
    let totalCount = 1
    let count = 0
    let elem
    for (let i=0; i<array.length; i++)
    {
        for (let j=i; j<array.length; j++)
        {
            if (array[i] === array[j]) count++;
            if (totalCount<count)
            {
                totalCount=count;
                elem = array[i];
            }
        }
        count=0;
    }
    return `${elem} - ${totalCount} times`
}

function task34 (startYear, endYear) {
    const allYears = [];
    let result = [];
    for (let i = startYear; i <= endYear; i++) {
            allYears.push(i);
    }

    allYears.forEach(year => {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0))
            result.push(year);
    });

    return result;
}

function task35 (number, value) {
    let arr = []
    for (let i=0; i<number; i++) {
        arr.push(value)
    }
    return arr
}

function task36 (first, second) {
    return JSON.stringify(first) === JSON.stringify(second);
}

function task37 (array) {
    return array.flat(Infinity)
}

function task38 (array, size) {
    let result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, size + index));
        index += size;
    }
    return result;
}

function task39 (array) {
    return array.reduce(function(sum, elem) {return sum + elem;}, 0)/array.length;
}

function task40 (array) {
    let max = array.indexOf(Math.max(...array))
    let min = array.indexOf(Math.min(...array))
    return (max>min)?max-min-1:min-max-1
}

function task41 (array1, array2) {
    return (array1.length > array2.length)
}

function task42 (array, element) {
    return array.indexOf(element) !== -1
}

function task43 (array, A) {
    return array.map(x => x - A)
}

function task44 (array) {
    return array.reduce((sum, elem) => {return sum + elem;}, 0)
}

function task45 (array, m) {
    return array.reduce((sum, elem) => {return sum + elem;}, 0)>m
}

function task46 (array) {
    let averageGirls = array.filter(item => item>0).reduce((sum, elem) => {return sum + elem;}, 0)/array.filter(item => item>0).length
    let averageBoys = array.filter(item => item<0).reduce((sum, elem) => {return sum + Math.abs(elem)}, 0)/array.filter(item => item<0).length
    return `Average girls - ${averageGirls}, average boys - ${averageBoys}`
}

function task47 (array) {
    let arr=array.slice(0, 3)
    return arr.concat(array.slice(17,20))
}

function task48 (array) {
    let max=Math.max(...array)
    array.splice(array.indexOf(max), 1)
    return array
}

function task49 (array) {
    let newArr=[]
    let sumArr=[]
    let nameArray=[]
    array.forEach( elem => {
            newArr.push(elem.split(" | "))
        }
    )
    newArr.forEach(elem => {
        nameArray.push(elem[0].substring(2))
        sumArr.push(+elem[1])
    })

    return `${nameArray.join(',')} = ${sumArr.reduce((sum, elem) => {return sum + elem;}, 0)}`
}

function task50 (array) {
    let nameArr=[]
    let sumArr=[]
    for (let i=0; i<array.length; i+=2){
        nameArr.push(array[i])
    }
    for (let i=1; i<array.length; i+=2){
        sumArr.push(array[i])
    }
    return `You purchased ${nameArr.join(', ')} for a total sum of ${sumArr.reduce((sum, elem) => {return sum + elem;}, 0)}`
}

function task51 (array) {
    let newArray=[]
    let newArray2=[]
    let result = []
    array.forEach(item => {
        newArray.push(item.split('@'))
    })
    newArray.forEach( item => {
        item[1]=item[1].split('.')
    })
    newArray.forEach(item => {
        newArray2.push(item[1].map(x=> x[0]).join(''))
    })
    for (let i=0; i<newArray.length; i++) {
       result.push(newArray[i][0]+"."+newArray2[i])
    }
    return result
}

function task52 (array) {
    let str = array.shift()
    array.forEach(
        item => {str = str.replace(item, "-".repeat(item.length))}
    )
    return str
}

console.log(task52(['roses are red, violets are blue', ', violets are', ' red']))