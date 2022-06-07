import './companyDetails.scss';
import AnimatedText from 'react-animated-text-content';
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounceInDown: {
        animation: 'x 2s',
        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    }
}

function CompanyDescription() {


    let imageList = [
        "https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg",
        "https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg",
        "https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg",
        "https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg",
        "https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg",
        "https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg",
        "https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg",

    ]



    return (
        <div className='h-100'>
            <StyleRoot className='h-100'>
                <div className='container-fluid h-100'>
                    <div className='row h-100'>
                        <div className='col-lg-12 col-md-12 col-sm-12 h-25'>
                            <h1 className='text-center m-4' style={styles.bounceInDown}>Sample Title</h1>


                            <AnimatedText
                                style={{ "text-align": "center" }}
                                type="words" // animate words or chars
                                animation={{
                                    x: '200px',
                                    y: '-20px',
                                    scale: 1.1,
                                    ease: 'ease-in-out',
                                }}
                                animationType="float"
                                interval={0.01}
                                duration={0.8}
                                tag="p"
                                className="animated-paragraph"
                                includeWhiteSpaces
                                threshold={0.1}
                                rootMargin="20%"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </AnimatedText>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 h-75 position-relative' style={{ overflow: "hidden" }}>
          
                       
                            <div className="wrapper-images">

                                <div className="images-line">
                                    <div className="line" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>
                                        <div className="img" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>
                                </div>
                                <div className="images-line">
                                    <div className="line" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>
                                        <div className="img" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>
                                </div>

                                <div className="images-line">
                                    <div className="line" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>
                                        <div className="img" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>
                                </div>

                                <div className="images-line">
                                    <div className="line" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>
                                        <div className="img" style={{ "background-image": "url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)" }}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>

                                    <div className="line" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>
                                        <div className="img" style={{"background-image":"url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)"}}>as</div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}>
                                        <div className="img" style={{"background-image":"url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"}}></div>
                                    </div>
                                    <div className="line" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}>
                                        <div className="img" style={{"background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"}}></div>
                                    </div>
                                </div>

                             
{/* 
                                <div className="images-line">
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)"></div>
                                    </div>
                                </div>

                                <div className="images-line">
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)"></div>
                                    </div>
                                </div>


                                <div className="images-line">
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)">as</div>
                                    </div>
                                    <div className="line" style="background-image:url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)">
                                        <div className="img" style="background-image:url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)">as</div>
                                    </div>
                                    <div className="line" style="background-image:url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)">
                                        <div className="img" style="background-image:url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084)">as</div>
                                    </div>
                                    <div className="line" style="background-image:url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)">
                                        <div className="img" style="background-image:url(https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU)"></div>
                                    </div>
                                </div>

                                <div className="images-line">
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706c0000bebb65e86abb75d81c55b6567ecb)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU)"></div>
                                    </div>
                                </div>

                                <div className="images-line">
                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)"></div>
                                    </div>

                                    <div className="line" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)">
                                        <div className="img" style="background-image:url(https://i.scdn.co/image/ab67706f00000003c564c5b82a20d60aa93b74e4)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nJ-tODFGkLEA9CbTZYZFUAdLhqcbS-sIMl76cL67j7YANBaI3COYwD9iaV5SlI3UB70&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf7p-3D5BofHiu5Ish8O7XLCsljqoQclX6i4L-bAOjwtFYaMsekvUpp7iUJrep95aX0A&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp-gCHBNWCeL-JL8ypeP-5bqHQSYTPKyAdNv_Nit38i6EeusrtIekiTdSIrRtIJt3dmo&usqp=CAU)"></div>
                                    </div>
                                    <div className="line" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)">
                                        <div className="img" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6SzQFYpzLRahb-WpPIRduJJyqsaKO2OgmIvLcTdYYQazVQ3lfSQStSaVE7wZ9qL9fAo&usqp=CAU)"></div>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </StyleRoot>
        </div>

    );
}

export default CompanyDescription