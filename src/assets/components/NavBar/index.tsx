import { RxTriangleDown } from "react-icons/rx";
import React, { useRef } from "react";

const NavBar = () => {
  const menuMobile = useRef(null);
  type Props = {
    onClick:React.MouseEventHandler<SVGSVGElement>
  }
  const HamburguerIcon =({onClick}:Props) => (
      <svg 
        onClick={onClick}
        className="md:hidden block w-6 h-6 cursor-pointer" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor"
        id="menu-button">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
  );

  const toggleMenuMobile = (evt : React.MouseEventHandler<SVGSVGElement>) => {
   return console.log("Oh my good this sucks");
  }

  return (
    <header className="flex items-center w-full p-4 text-lg bg-black text-blue-400">
      <a href="#" className="w-3/6 md:w-1/12 p-3 logo">KeepItSimple</a>
      <nav className="hidden w-full md:flex md:items-start md:w-7/12" ref={menuMobile} id="menu">
        <ul className=" text-base pt-4 md:flex md:items-center md:pt-0">
          <li className=" py-2 flex items-center md:p-3 md:m-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-100 hover:text-blue-900">
            Cursos
            <RxTriangleDown/>
          </li>
          <li>
            <input type="text" className="rounded p-3 m-2 w-80 text-center text-blue-900 border-none" placeholder="O que você deseja aprender?"/>
          </li>
          <li className="block p-2 m-2 hover:text-blue-200"> <a href="#">  Carreiras </a></li>
        </ul>
      </nav>
      <HamburguerIcon onClick={toggleMenuMobile}/>
      <div className="w-3/6 md:w-4/12 flex items-center justify-end">
        <button className="rounded px-6 py-3 m-2 bg-blue-500 text-white hover:text-blue-900 hover:bg-blue-200">Login</button>
        <button className="rounded px-6 py-3 m-2 bg-slate-700  hover:text-blue-900 hover:bg-blue-200">Cadastrar-se</button>
      </div>
    </header>
  );  
}

export default NavBar;