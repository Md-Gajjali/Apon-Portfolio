import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { MdSms } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
// import { FloatingDock } from './floating-dock';
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
// } from "@tabler/icons-react";
// import { NavLink } from 'react-router';


const Navber = () => {
//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <NavLink to="/" end>
//           <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//         </NavLink>
//       ),
//       href: "#",
//     },

//     {
//       title: "About",
//       icon: (
//         <NavLink to="/about" end>
//           <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       </NavLink>
//       ),
//       href: "#",
//     },
//     {
//       title: "Components",
//       icon: (
//         <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "Aceternity UI",
//       icon: (
//         <img
//           src="https://assets.aceternity.com/logo-dark.png"
//           width={20}
//           height={20}
//           alt="Aceternity Logo"
//         />
//       ),
//       href: "#",
//     },
//     {
//       title: "Changelog",
//       icon: (
//         <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },

//     {
//       title: "Twitter",
//       icon: (
        
//         <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "GitHub",
//       icon: (
//         <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//   ];


  return (
    < >
    <nav>

      <Container>

        {/* <div className="flex fixed items-center justify-center z-40  bottom-3 right-0 text-center h-35rem w-full">
          <FloatingDock
            mobileClassName="translate-y-20 " // only for demo, remove for production
            items={links}
          />
        </div> */}
        <div className='flex justify-center  '>
            <ul className='flex animate-blurred-fade-in gap-10 fixed round mt-20 z-80 text-2xl px-5 py-4 backdrop-blur-2xl bg-black/50 rounded-2xl  text-DarkBlue  bottom-10 '>
                <li><HiHome/></li>
                <li><FaUser/></li>
                <li><FaBook/></li>
                <li><MdOutlineWork/></li>
                <li><MdSms/></li>
                <li><FaSquareGithub/></li>
            </ul>
        </div>

        

      </Container>
    </nav>

    </>
  )
}

export default Navber
