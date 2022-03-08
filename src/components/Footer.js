import React from 'react'

function Footer() {
    return (
        <>
            <footer class="hidden md:flex w-[98%] m-auto bg-[#020916] shadow items-center justify-between p-6 border-t-[1px] border-opacity-50 border-t-gray-400">
                <span class="text-sm  sm:text-center text-gray-400">© 2022 <a href="#" class="hover:underline">SeeMovies™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer