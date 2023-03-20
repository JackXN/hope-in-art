import React from 'react'
import {Image} from '@chakra-ui/react';
const HopeCard = () => {
  return (
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
     
    
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <Image class="w-100 h-100 mb-3  rounded-lg shadow-lg" src="./Kassidy.jpeg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Kassidy Ricks</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Founder</span>
        <p class="text-sm text-gray-500 dark:text-gray-400 text-center p-5">At the age of 24, Emily had a vision of creating a non-profit organization that would empower women and girls in her community. Despite facing many challenges and obstacles, she took the leap of faith and started her own organization. Her passion for the cause and dedication to helping others fueled her drive to make a difference. As she navigates the ups and downs of running a non-profit, Emily discovers that she is capable of achieving great things and inspiring others to do the same.</p>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="https://www.linkedin.com/in/kassidy-ricks/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LinkedIn</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Email</a>
        </div>
    </div>
</div>

  )
}

export default HopeCard
