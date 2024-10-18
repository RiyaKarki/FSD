// sayhello = () =>{
//     console.log("Hello Function")
// };
// console.log("start");
// setTimeout(sayhello, 4000);
// console.log("end");


// console.log("start")
// setTimeout(() => {
//     console.log("first task completed");
//     setTimeout(() => {
//         console.log("second task completed");
//         setTimeout(() => {
//             console.log("third task completed");
//         }, 3000)
//     }, 2000)
// }, 1000)
// console.log('end')


// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("problem is solved")
//     }
//     else{
//         reject("problem failed");
//     }
// });
// myPromise
//     .then((message) => console.log("Success: "+ message))
//     .catch((error) => console.log("Error fetching data "+error))


// function task(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         },delay);
//     })
// }   
// task("First Task completed", 1000)
// .then(() => task("Second Task is completed", 2000))
// .then(() => task("third task is completed", 3000));



function fetchdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const data=[
                {name: "Alice", score: 64},
                {name: "Bob", score: 50},
                {name: "Charlie", score: 55},
                {name: "David", score: 66}];
            resolve(data);    
        }, 3000);
    });
}
fetchdata()
    .then((data) => {
        // console.log("Data received: ",data);
        data.filter((data)=> data.score>60).forEach((data)=>{
            console.log(data.name+" "+data.score)
        })
    })
    .catch((error) => {
        console.error("Error: ", error)
    })