import React from 'react';
import {AiFillHeart as Heart} from 'react-icons/ai';

const ContentFive = () => {
  return (
      <section>
    <div class=" flex flex-col items-center px-5 py-8 mx-auto">
        <div class="flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-2xl">
            <div class="w-full mx-auto">
                <div class='flex'>
                <h1 class='text-5xl font-bold mb-10 font-lato ' style={{fontFamily: 'Lato !important'}}>We Help People Heal Through Their Own Creative Process </h1>
           <Heart color='red' fontSize='50px'/>
           </div>
                <h2 class='text-3xl font-bolder pb-5' >Empowering Homeless Women Through Creative Expression</h2>
                <p>Are you passionate about using the power of art to make a difference in the lives of homeless women? If so, consider supporting a non-profit organization dedicated to providing art classes and resources to women living in shelters.</p>
            </div>
        </div>
    </div>
    <div class=" items-center w-full px-5">
        <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div class="relative justify-center lg:px-4">
                <div class="lg:grid lg:grid-cols-2">
                    <div class="p-8">
                        <h1 className="pb-5 text-2xl">Submit Your Artwork to Us</h1>
                        <p>view and appreciate the diverse works of talented artists from around our community. We believe that art has the power to inspire and connect people, and thats why were thrilled to showcase the works of emerging and established artists alike.
</p>
                      <div className='py-10'>
                        <a href="#_" data-aos='fade-right' data-aos-duration='2000' data-aos-delay='20' class="relative px-10 py-3 font-bold text-black group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
<span class="relative">Upload Your Work</span>
</a>
</div>
                    </div>
                    <div class="p-8">
                        <h1 className="pb-5 text-2xl">Contribute Today</h1>
                        <p>We have several way you can contribute to our cause and no matter how you choose to contribute, your support can make a real difference in empowering homeless women through the power of creativity.</p>
                        <div className='py-10'> 
                        <a href="#_" data-aos='fade-right' data-aos-duration='2000' data-aos-delay='20' class="relative px-10 py-3 font-bold text-black group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
<span class="relative" >Learn More</span>
</a>
</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContentFive
