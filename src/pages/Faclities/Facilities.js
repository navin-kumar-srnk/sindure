import './Facilities.scss'
import {useEffect} from 'react'


function Facilities(){


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




    return (
        <>
        <div style={{height:"100vh"}}></div>
        <div className='container'>
            <div className='row m-4'>
                <div className='col-lg-6'>
                <img className='from-left slide-in' style={{width: "100%",
    height: "100%"}}src='https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg'></img>
         
                </div>
                <div className='col-lg-6'   style={{display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
                   <p className='from-right slide-in'>Get the highest quality components at cost-effective rates to meet
                        your specific needs. Our use of the latest and cutting-edge technology
                         in our manufacturing process renders our products the ultimate quality. Our customer-centricity with 
                         an ever-supporting approach helps retain the major industry players for decades with the delivery of 
                         optimum quality consistently, at cost-effective rates. </p>
                </div>
            </div>
            <div className='row m-4'>
            <div className='col-lg-6' style={{display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
                   <p className='from-left slide-in'>Get the highest quality components at cost-effective rates to meet
                        your specific needs. Our use of the latest and cutting-edge technology
                         in our manufacturing process renders our products the ultimate quality. Our customer-centricity with 
                         an ever-supporting approach helps retain the major industry players for decades with the delivery of 
                         optimum quality consistently, at cost-effective rates. </p>
                </div>
                <div className='col-lg-6'>
                <img className='from-right slide-in' style={{width: "100%",
    height: "100%"}}src='https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg'></img>
                </div>
               
            </div>
            <div className='row m-4'>
                <div className='col-lg-6'>
                <img className='from-left slide-in' style={{width: "100%",
    height: "100%"}}src='https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg'></img>
         
                </div>
                <div className='col-lg-6'  style={{display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
                   <p className='from-right slide-in'>Get the highest quality components at cost-effective rates to meet
                        your specific needs. Our use of the latest and cutting-edge technology
                         in our manufacturing process renders our products the ultimate quality. Our customer-centricity with 
                         an ever-supporting approach helps retain the major industry players for decades with the delivery of 
                         optimum quality consistently, at cost-effective rates. </p>
                </div>
            </div>
        </div>
          
        </>
    )
}


export default Facilities