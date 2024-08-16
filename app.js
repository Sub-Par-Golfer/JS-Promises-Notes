// fetch('https://jsonplaceholder.typicode.com/users/1')
// const emailRef = document.querySelector(".email");
// // 1. Then
// // Promises used = 3 
// // first is the fetch.then(response => 
// // second make that promise readablke by the frontend with.json added to the response.
// // third is adding .then(data => to access the data from the second promise
// // fetch('https://jsonplaceholder.typicode.com/users/1').then(response => {
// //     response.json().then(data => {
// //         emailRef.innerHTML = data.email;
// //     })
// // })
// // Cleaner version
// // fetch('https://jsonplaceholder.typicode.com/users/1')
// //     .then(response => {
// //         return response.json()
// //     })
// //     .then(data => {
// //         console.log(data)
// //         emailRef.innerHTML = data.email
// //     })


// // // 2. Async/Await
// // async function main() {
// // const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
// // const data = await response.json()
// // console.log(data)
// // emailRef.innerHTML = data.email
// // }

// // main() 

// // Creating a Promise
// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('VIP')
//         }, 2000); //set a waiting period of 2 seconds before it fulfills the Promise.
//     })
// }
// // calling on the Promise async
// async function main() {
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }
// main()
// // then method 
// // .json isnt necessary because our function isn't a backend so the frontend already understands it. JSON is so the frontend can understand the backend.
// // getSubscriptionStatus().then(response => console.log(response))
// const statusRef = document.querySelector(".status");

// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(undefined)
//         }, 2000); //set a waiting period of 2 seconds before it fulfills the Promise.
//     })
// }
// const statusRef = document.querySelector(".status");
// const videoRef = document.querySelector(".video"); //added to show no video from reject

// function getVideo(subscriptionStatus) {
//     return new Promise((resolve, reject) => {
//         if (subscriptionStatus === 'VIP') {
//             resolve('show video')
//         } 
//         else if (subscriptionStatus === 'FREE') {
//             resolve('show trailer')
//         }
//         else {
//             reject('no video')
//         }
//     })
// }

// async function main() {
//     const status = await getSubscriptionStatus();
//     statusRef.innerHTML = status;
//     try { //added to show no video from reject
//         console.log(await getVideo(status))
//     }
//     catch (e) { //added to show no video from reject
//         console.log(e)
//         videoRef.innerHTML = e;
//     }
// }

// main()