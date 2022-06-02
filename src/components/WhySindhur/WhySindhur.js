import { useEffect } from 'react'
import './WhySindhur.scss'







function WhySindhur(){



    useEffect(()=>{

    })





    return (
        <div className="container-fluid h-100" style={{backgroundColor:"#ebebe9"}}>
        <div className="row h-100">
            <div className="col-lg-5 h-100" style={{display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
            {/* <div class="typewriter">
                  <h1>The cat and the hat.</h1>
            </div> */}
            <div>
            <h1 className='text-center'>Why Sindhur Forge ?</h1> 
             <p className='text-center'>Get the highest quality components at cost-effective rates to meet your specific needs. Our use of the latest and cutting-edge technology in our manufacturing process renders our products the ultimate quality. Our customer-centricity with an ever-supporting approach helps retain the major industry players for decades with the delivery of optimum quality consistently, at cost-effective rates. 
</p>
            </div>
         
                
            </div>
            <div className="col-lg-7 p-0 h-100">
                 <img style={{width: "100%",
    height: "100%"}}src='https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg'></img>
             </div>

        </div>

    </div>
    )
}

export default WhySindhur