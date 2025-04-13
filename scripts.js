// When the heart is clicked, hide it and reveal the love letter
document.getElementById('heart').addEventListener('click', function() {
    this.style.display = "none";
    document.getElementById('letter').style.display = "block";
  });

// // Add a heartbeat animation to the heart element
// document.getElementById('heart').style.animation = "heartbeat 1s infinite";

// // Define the heartbeat animation in CSS
// var style = document.createElement('style');
// style.innerHTML = `
//     @keyframes heartbeat {
//         0% { transform: scale(1); }
//         30% { transform: scale(1.2); }
//         60% { transform: scale(1); }
//         100% { transform: scale(1); }
//     }
// `;
// document.head.appendChild(style);

// // When the gift box is clicked, ask for the user's name and show the birthday message
// document.getElementById('gift').addEventListener('click', function() {
//         var name = prompt("What is your name?");
//         document.getElementById('message').style.display = "block";
//         document.getElementById('message').innerHTML = `Happy Birthday, ${name}! May your day be filled with love and joy!`;
// });
    