
document.addEventListener('keydown',event =>{
    if(event.key==='ArrowRight') {
        changeSlide('right')
    }
    else if(event.key==='ArrowLeft'){
        changeSlide('left')
    }
})
function slidesPlugin(activeSlide = 0){
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () =>{
            clearActiveClasses()

            slide.classList.add('active')
        } )
    }

    function clearActiveClasses(){
        slides.forEach((slide) =>{
            slide.classList.remove('active')
        })
    }
    function changeSlide(direction){
        if (direction==='right'){
            slides[activeSlide+1].classList.add('active')
            clearActiveClasses()
            if(activeSlide>slides.length){
                slides[0].classList.add('active')
                
            }
        }
        else if(direction==='left'){
            slides[activeSlide-1].classList.add('active')
            clearActiveClasses()
            if(activeSlide<0){
                clearActiveClasses
                slides[activeSlide].classList.add('active')
                
            }
        }
    }

}




slidesPlugin()
