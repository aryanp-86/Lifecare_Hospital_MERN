import React from 'react'
import {Link} from "react-router-dom"
import 'C:/Users/LEGION/Desktop/Project_ LifeCare_ Hospital/my-lch/src/App.css'
export default function Modulesmain() {
  return (
      <>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 ">
      <div class="p-4 lg:w-1/3 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-grey-500 duration-300 ...">
        <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative ">
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Admin Login</h1>
          <p class="leading-relaxed mb-3 ">Dashboard login for Admin.</p>
          <div class="rounded-sm shadow my-11">
          <Link to="/login">
            <label for="my-modal-4" class="btn modal-button w-auto button-new flex-sm items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-black md:py-4 md:text-sm md:px-10 my-8">Login for Dashboard</label>
          </Link>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-grey-500 duration-300 ...">
        <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Doctor Login</h1>
          <p class="leading-relaxed mb-3">Dashbaord login for doctors</p>
          <div class="rounded-sm shadow my-11">
          <Link to="/login">
            <label for="my-modal-4" class="btn modal-button w-auto button-new flex-sm items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-black md:py-4 md:text-sm md:px-10 my-8">Login for Dashboard</label>
          </Link>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-grey-500 duration-300 ...">
        <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Patient Register</h1>
          <p class="leading-relaxed mb-3">Register yourself and book an appointment for world class doctors</p>
          <div class="rounded-sm shadow my-8 ">
          <Link to="/signup">
            <label for="my-modal-4" class="btn modal-button w-auto button-new flex-sm items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-black md:py-4 md:text-sm md:px-10 my-8">Book an Appointment</label>
            </Link>
          </div>
         
          
          </div>
        </div>
      </div>
    </div>
    
            
        
    
 
  </section>
  



<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer" >
  <label class="modal-box w-10/11 max-w-4xl" for="">


<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Book an Appointment</h1>

    <p class="mt-4 text-gray-500">
    Register yourself and book an appointment for world class doctors
    </p>
  </div>

  <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
    <div>
      
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          placeholder="Enter email"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>
      <div class="relative">
        <input
          type="password"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          placeholder="Enter password"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
        No account?
        <a class="underline" href="">Sign up</a>
      </p>

      <button
        type="submit"
        class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
      >
        Sign in
      </button>
    </div>
  </form>
</div>
  </label>
</label>
</>
  )
}
