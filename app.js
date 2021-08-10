// ? Task:Нужно написать функцию, возвращающую массив, состоящий из самых больших значений вложенных массивов.
// В статье приведены несколько способов, которые не являются единственно-верными.

// Solution 1
const initArr = [[1, 4, 32, 0, -23, 34, 67, 3], [100, 14, 32, 0, -23, 34, 43, 1], [12, 79, 321, 33, -123, 34, 67, 3]];
const  createArrMaxVals=arr=> {
  let arrayOfMaxValues = [];
  arr.forEach((subArr) => {
    let maxSubArrVal = subArr[0];
    subArr.forEach(item => {
      if (item > maxSubArrVal) {
        maxSubArrVal = item;
      }
    });
    arrayOfMaxValues.push(maxSubArrVal);
  });
  return arrayOfMaxValues;
}

// Solution 2
// вариант Math.max(...spreadOperator) с методом array.map()

const createArrMaxVals2=arr=>arr.map(subArr => Math.max(...subArr));


console.log(createArrMaxVals(initArr));
console.log(createArrMaxVals2(initArr));
// ! Explanation:
// Первый - решение с помощью вложенных циклов. Для каждого элемента во внешнем массиве перебираем его вложенный массив и найдём наибольшее значение, а затем вставим его в новый массив. Используем forEach(). выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

// Второй - использование метода Math.max(...spreadOperator) с методом array.map() для циклического перебора каждого элемента во внешнем массиве, возврата максимального значения из вложенного массива и прямого возврата этого вновь созданного массива. Если вдруг кто-то забыл, то метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.