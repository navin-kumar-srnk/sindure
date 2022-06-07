import './Home.scss'

import Navbar from '../../components/Header/Navbar';
import CompanyDescription from '../../components/companyDescription/companyDescription'
import testimg from '../../images/test.png'
import landPageVid from '../../videos/Assembly Language in 100 Seconds.mp4'
import Highlights from '../../components/highlights/highlights';
import WhySindhur from '../../components/WhySindhur/WhySindhur';
import HomeCaption from '../../components/homeCaption/homeCaption'
import Testimonial from '../../components/testimonials/testimonial'
import ClientSection from '../../components/clientSection/clientSection';
function Home() {
    return (
      <div className="App">
         {/* <Navbar></Navbar> */}
   
           
        <div className='vidCon' >
       <div className='landCapCon'>
       <h1>
         Redefining Auto Component
  Manufacturing
         </h1>
       </div>
          <video className="landingVideo" autoPlay="autoplay" muted loop>
            <source type="video/mp4" src={landPageVid}></source>
          </video>
        </div>
  
   
  
  <div className='position-relative' style={{height:'150vh'}}>
  <CompanyDescription/>
  </div>
  <div style={{height:'70vh'}}>
  <WhySindhur/>
  </div>

     
  <div style={{height:'90vh'}}>
<HomeCaption/>
</div>
{/* <div style={{height:'100vh'}}>
  <Highlights/>
  </div> */}
     
<div style={{height:'100vh'}}>
<Testimonial></Testimonial>

</div>

<div className='m-2'>
<ClientSection/>
</div>
  
    
      </div>
    );
  }

  export default Home