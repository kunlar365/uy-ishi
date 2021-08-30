let box = document.getElementsByTagName('div')

for (let i = 0; i < box.length; i++) {
    setTimeout(() => {
        box[i].style.opacity = '1'
    }, (i+1)*1000) 
}