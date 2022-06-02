import './About.scss'

function About(){
return (
   
    

     <div className='container-fluid ' style={{marginTop:'100px'}}>
<div className="row p-0">
    <div className="col-lg-5 bg-primary" style={{height:'90vh'}}>
<div className="container d-flex align-content-start align-items-start justify-content-start flex-column" style={{paddingTop:'10rem',paddingLeft:'3rem'}}>
   
        <h4>WHOS SINDHUR</h4>
          <h1 style={{width:'35vw',fontSize:'2.5rem'}}>
          AN END-To-To SOLUTION IN COLD FORGING AND MACHINING
          </h1>
          <h4> ONE MORE TAG LINE</h4>
</div>
    </div>
    <div className="col-lg-7 p-0 bg-primary" style={{height:'90vh'}}>
        <img src='https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg' alt="" width='70%' style={{height:'100vh'}} />
    </div>
</div>

<div className='container p-5'>
<div className='d-flex justify-content-left p-5'>
    <h1>OUR VISION</h1>
</div>
<div className='d-flex justify-content-left p-5 pt-0'>
<h1 style={{fontSize:'2.5rem',textAlign:'left',width:'40rem'}}>
To Excel in Cold Forging & Machining and Expand the Business Globally”
</h1>
</div>
</div>

<div className="container-fluid  bg-secondary text-uppercase" style={{height:'50vh'}}>
    <div className='pt-5 '>
        <h1 className='display-4'>Our Mission </h1>
    </div>
    <div className='p-5 mt-5'>
      <h1 className='h4'>
      “To create an ethos required to excel in cold forging & machining and commit ourselves to the ethics of fair deals”.
      </h1>
    </div>
</div>
<div className="container-fluid  text-uppercase p-0" >
<section class="section--brands with-mask--triangle animate-on-scroll p-0">
  <div class="wrapper p-0 ">
    <ul class="block">
      <li>
        <h1 class="fz-bigger" data-animate="fadeInLeft" data-animate-delay="">
          <span class="color-invert"></span>
          Our Values
        </h1>

        <strong data-animate="fadeInLeft" data-animate-delay=".2">Real experience interactive experience</strong>

        {/* <p data-animate="fadeInLeft" data-animate-delay=".3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}
      </li>

      <li>
     <span className='valuesCaption'>
     Integrity 
     </span>
        <a data-animate="fadeInUp" data-animate-delay=".2" href="brands.html">
          <img class="brand-cover" src="https://source.unsplash.com/WGN6ZEFEZbs/416x356" alt="Stockphoto" />
          <i class="brand-logo fi fi-behance"></i>
        </a>
      </li>

      <li>
      <span className='valuesCaption'>
     Customer-centricity 
     </span>
        <a data-animate="fadeInUp" data-animate-delay=".3" href="brands.html">
          <img class="brand-cover" src="https://source.unsplash.com/d3bYmnZ0ank/416x356" alt="Stockphoto" />
          <i class="brand-logo fi fi-scorp"></i>
        </a>
      </li>

      <li>
      <span className='valuesCaption'>
     Customer-centricity 
     </span>
        <a data-animate="fadeInUp" data-animate-delay=".4" href="brands.html">
          <img class="brand-cover" src="https://source.unsplash.com/cvGPSaoemuw/416x356" alt="Stockphoto" />
          <i class="brand-logo fi fi-pingdom"></i>
        </a>
      </li>

      <li>
      <span className='valuesCaption'>
     Customer-centricity 
     </span>
        <a data-animate="fadeInUp" data-animate-delay=".5" href="brands.html">
          <img class="brand-cover" src="https://source.unsplash.com/7QYd1VxLRbM/416x356" alt="Stockphoto" />
          <i class="brand-logo fi fi-swift"></i>
        </a>
      </li>

      <li>
      <span className='valuesCaption'>
     Customer-centricity 
     </span>
        <a data-animate="fadeInUp" data-animate-delay=".6" href="brands.html">
          <img class="brand-cover" src="https://source.unsplash.com/0-hB59n1m94/416x356" alt="Stockphoto" />
          <i class="brand-logo fi fi-sass"></i>
        </a>
      </li>

      <li>
      <span className='valuesCaption'>
     Customer-centricity 
     </span>
        <a data-animate="fadeInUp" data-animate-delay=".7" href="brands.html">
          <img class="brand-cover" src="https://source.unsplash.com/tg5jQpN5dZM/416x356" alt="Stockphoto" />
          <i class="brand-logo fi fi-dockers"></i>
        </a>
      </li>
    </ul>
  </div>
</section>

</div>
     </div>
)
}

export default About