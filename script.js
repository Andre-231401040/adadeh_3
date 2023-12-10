const targetedDate = new Date("1 January 2024 00:00:00").getTime();

let timer = setInterval(function(){
    let now = new Date().getTime();

    let distance = targetedDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);

    document.getElementById("countdown").textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    if(distance < 0){
        clearInterval(timer);
        document.getElementById("countdown").textContent = `It's time to celebrate new year!!!`;
        const button = document.querySelector(".next-button");
        button.style.display = 'inline-block';
        console.log(distance);
    }
}, 1000);
