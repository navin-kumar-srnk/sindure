import { useEffect } from 'react'
import './highlights.scss'



function Highlights(){
    let sliderContainer
    let slideRight 
    let slideLeft 
    let upButton 
    let downButton 
    let slidesLength 

useEffect(()=>{
    sliderContainer = document.querySelector('.slider-container')
    slideRight = document.querySelector('.right-slide')
    slideLeft = document.querySelector('.left-slide')
    upButton = document.querySelector('.up-button')
    downButton = document.querySelector('.down-button')
    slidesLength = slideRight.querySelectorAll("div").length

    slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
    upButton.addEventListener('click', () => changeSlide('up'))
    downButton.addEventListener('click', () => changeSlide('down'))
},[])

   

  

    let activeSlideIndex = 0
    
  
    
  
    
    const changeSlide = (direction) => {
       
        const sliderHeight = sliderContainer.clientHeight
        if(direction === 'up') {
            activeSlideIndex++
            if(activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
        } else if(direction === 'down') {
            activeSlideIndex--
            if(activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1
            }
        }
    
        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    }

    
    return (
        <div className="slider-container">
      <div className="left-slide">
        <div style={{"backgroundColor": "#fde"}}>
          <h1>Pink Cherrish</h1>
          <p>to evolve into care</p>
        </div>
        <div style={{"backgroundColor": "rgb(254,160,0)"}}>
          <h1>Yellow Luck</h1>
          <p>Shinning the clouds</p>
        </div>
        <div style={{"backgroundColor":" rgb(231, 58, 95)"}}>
          <h1>Redness Lust</h1>
          <p>in the wilderness</p>
        </div>
        <div style={{"backgroundColor":" rgb(176, 136, 240)"}}>
          <h1>Lavanda Love</h1>
          <p>in the sunset</p>
        </div>
      </div>
      <div className="right-slide">
        {/* <div style={{"backgroundImage":"url('https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60')"}}></div> */}
        <div style={{"backgroundImage":"url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60')"}}></div>
        <div style={{"backgroundImage":"url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60')"}}></div>
        <div style={{"backgroundImage":"url('https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80')"}}></div>
      </div>
      <div className="action-buttons">
        <button className="down-button">
          <i className="fas fa-arrow-down"></i>
        </button>
        <button className="up-button">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
    )

}

export default Highlights