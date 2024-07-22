//Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
  ];
const groupBy = (array, groupFn) => {
    return array.reduce((acc, item) => {
        const key = groupFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

  const groupedByAge = groupBy(data, item => item.age);
  
  console.log(groupedByAge);