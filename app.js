var modelBtn = document.querySelector('.modelBtn')
console.log(modelBtn)

var modelBtn2 = document.querySelector('.modelBtn2')
console.log(modelBtn2)

var modelBtn3 = document.querySelector('.modelBtn3')
console.log(modelBtn3)

var hidden = document.querySelector('.hidden')
console.log(hidden)

var closeBtn = document.querySelector('.closeBtn')
console.log(closeBtn)

var overlay = document.querySelector('.overlay')
console.log(overlay)

// Pehla button //

modelBtn.addEventListener('click',showModel)
function showModel(){
    hidden.classList.add('showHidden')
    overlay.classList.add('showOverlay')


}
// Dosra button //

modelBtn2.addEventListener('click',showModel)
function showModel(){
    hidden.classList.add('showHidden')
    overlay.classList.add('showOverlay')
}

//Thesraa Button // 

modelBtn3.addEventListener('click',showModel)
function showModel(){
    hidden.classList.add('showHidden')
    overlay.classList.add('showOverlay')
}


// Close Button // 

closeBtn.addEventListener('click',closeModel)
function closeModel(){
    hidden.classList.remove('showHidden')
    overlay.classList.remove('showOverlay')


}
