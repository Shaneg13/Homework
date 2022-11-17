document.querySelector('.nav-bar').addEventListener('click', event => {
    console.log("event", event);
}); 

document.querySelector('.nav-bar').addEventListener('mouseover', event => {
    console.log("event.target", event.target);
}); 

document.querySelector('body').addEventListener('keyup', event => {
    console.log("event.key", event);
}); 

// document.querySelector('.nav-bar').addEventListener('click', event => {
//     console.log("event", event);
//     // event.target.style.backgroundColor = "green";
//     event.target.classList.toggle('back-green');
//   }); // Target interacts with the element you click