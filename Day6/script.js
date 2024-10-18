//map
// let ar=[1, 2, 2, 3, 35, 45];
// let newar = ar.map((x) => x*2);
// console.log(newar)

//filter
// let ar=[1, 2, 2, 3, 34, 35, 45];
// let newar = ar.filter((x) => x % 2 == 0);
// console.log(newar);

//map and filter
// let ar=[3,5,2,7,9,4,3]
// let newar = ar.filter((x) => x%2!=0).map((x) => x+1);
// console.log(newar)


//reduce
// let ar = [3,5,2,7,6,8]
// let newar = ar.reduce((x,y) => x+y, 0);
// console.log(newar)


//filter then map then reduce
let ar = [2,5,3,8,6,9]
newar = ar.filter((x) => x%2==0).map((x)=> x*4).reduce((x,y) => x+y, 0)
console.log(newar)


//filter then map then reduce
// const students=[
// {name: "Alice", score: 64},
// {name: "Bob", score: 50},
// {name: "Charlie", score: 55},
// {name: "David", score: 66}];
// let ns = students.filter((student) => student.score < 60).map((x) => x.score*2).reduce((x,y) => x+y,0);
// console.log(ns);
