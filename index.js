const containerEl = document.querySelector(".container")

const arr = ["Web Developer", "Programmer", "Freelancer", "Instructor", "Youtuber"]

let index = 0;
let ch = 0;
updateText();
function updateText() {
    ch++
    containerEl.innerHTML = `<h1>I am ${arr[index].slice(0,1)=="I"? "an" : "a"} ${arr[index].slice(0,ch)}</h1>`
    if(ch==arr[index].length){
        index++
        ch=0
    }
    if (index== arr.length) {
        index=0
    }
    
    setTimeout(() => {
        updateText();
    },150);
}

