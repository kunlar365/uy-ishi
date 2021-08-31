let box = document.getElementsByTagName('div');
let timer = document.getElementById('seconds');


function count(){
    let i = 0;
    setInterval(() => {
        if(i == box.length){
            i=0;
            for(el of box) {
                el.style.opacity = '0';
            }
        }
        box[i].style.opacity = '1';
        i++;
        console.log(i,box.length);
    }, 10000);
    
    let seconds = 10;
    setInterval(() => {
        if(seconds > 0) seconds--; else seconds = 10;
        timer.innerText = seconds;
    }, 1000)
}

count();