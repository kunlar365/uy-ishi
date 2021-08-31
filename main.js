let box = document.getElementsByTagName('div')


function count(){
     let i = 0
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
    }, 2000);
    
}

count()

