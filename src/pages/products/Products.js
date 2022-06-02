import './Products.scss'
import {useEffect} from 'react'

// import {Animated} from "react-animated-css";

function Products(){

let images=[
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
  "https://placeimg.com/200/200/tech",
]

let sliders

const appearOptions={
    threshold:0,
    rootMargin:"0px 0px -100px 0px"
}
useEffect(()=>{
 
    sliders = document.querySelectorAll(".slide-in")

    const apperaOnScroll= new IntersectionObserver( (entires , apperaOnScroll) =>{
        entires.forEach((entry)=>{
            console.log(entry);
           if(!entry.isIntersecting){
               return;
           }else{
               entry.target.classList.add("appear")
               apperaOnScroll.unobserve(entry.target)
           }
        })
        
        },appearOptions)


        sliders.forEach((slider)=>{
            apperaOnScroll.observe(slider)
        
        })
        
})


// let sliders = document.querySelectorAll(".slide-in")



    return (
        <>

          <div style={{height:"100vh"}}>

          </div>

          <div className="container">
           
           <div className="row text-center">

             <h1 className='p-4'>Products</h1>
                   
                       {images.map((ele,index)=>{
                           return  <div key={index} className="col-lg-4 col-md-4 col-sm-6 slide-in from-left">
                           <div className="card box-shadow m-2" style={{borderRadius:"50px 20px"}} >
                         <img src={ele} alt="Product" style={{borderRadius:"50px 20px"}}></img>
                         </div>
                          </div>
                       })}
                  
   

           </div>
           
        </div>
        </>
      
    )
}

export default Products