import React from 'react'

const Sections = () => {
  return (
    <div>
      <section class="px-4 py-24 mx-auto max-w-7xl">
  <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Bringing Classes To Shelters</h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      The Hope In Art Association is a business on a mission to empower homeless women living in shelters by providing them with access to art classes. Through their program, they hope to inspire creativity, boost self-esteem, and create a positive community for those who may feel disconnected and marginalized. See how you can help today!
      </p>
      <a href="#" class="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
    </div>
    <div class="w-full h-full bg-gray-200">
        <img src='./AboutUs.jpg'/>
    </div>
  </div>
  <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div class="order-none md:order-2">
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Decide how you integrate Payments</h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
        scratch.
      </p>
      <a href="#" class="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
    </div>
    <div class="w-full h-full py-48 bg-gray-200"></div>
  </div>
</section>

    </div>
  )
}

export default Sections
