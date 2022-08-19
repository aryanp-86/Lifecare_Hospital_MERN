import React from 'react'
import n1 from './n1.png'
import n2 from './n2.jpg'
import n3 from './n3.jpg'

export default function Buttoncomp() {
  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 border-opacity-40 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={n1} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-lg font-sans title-font font-medium text-white">WHY CHOOSE LIFECARE HOSPITAL?</h2>
            <p className="leading-relaxed mb-3 mt-3">We are multispecialty hospital with more than 20 years of experience in this sector.</p>
            <div className="flex items-center flex-wrap ">
                
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 border-opacity-40 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={n2} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-lg title-font font-sans font-medium text-white">WHAT'S NEW?</h2>
            <p className="leading-relaxed mb-3 mt-3">Click on learn more to know more about new events and news about LifeCare Hospital.</p>
            <div className="flex items-center flex-wrap">
                
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 border-opacity-40 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={n3} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-lg font-sans title-font font-medium text-white">EVENT CALENDER</h2>
            <p className="leading-relaxed mb-3 mt-3">Mark your calender with upcoming health awareness days,camps and events at LifeCare Hospital.</p>
            <div className="flex items-center flex-wrap ">
               
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
