const text = document.getElementsByClassName("text");
let delay = 0;

for(let i = 0;i < text.length; i++){
    const p = text[i].getElementsByTagName("p");

    for(let j = 0; j < p.length ;j++){
        p[j].style.animationName = "appear";
        p[j].style.animationDuration = "1s";
        p[j].style.animationDelay = `${delay}s`;
        p[j].style.animationFillMode = "forwards";
        delay += 1;
    }
}