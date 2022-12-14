import { RxTriangleDown } from "react-icons/rx";
import React, { useRef, useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import './drawer.css';

const NavBar = () => {
  const menu = useRef<HTMLDivElement>(null);
  type Props = { onClick:React.MouseEventHandler<SVGSVGElement> }

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
    if(menu.current!==null) menu.current.classList.toggle('hidden');
  }

  const Drawer = () =>{
    return(
      <AlertDialog.Root>
        <AlertDialog.Trigger>Open essa merda</AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay"/>
          <AlertDialog.Content className="AlertDialogContent">
            
            <AlertDialog.Title className="AlertDialogTitle">Fodasse</AlertDialog.Title>
            
            <AlertDialog.Description className="AlertDialogDescription"> porra tem que funcionar puta trabalho pra nada</AlertDialog.Description>
            <div>Tentando Fazer essa merda funcionar</div>
            
            <AlertDialog.Cancel>
              Cancel
            </AlertDialog.Cancel>
            
            <AlertDialog.Action>
              Salvar
            </AlertDialog.Action>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    );
  }

  return (
    <header>
      <nav className="flex flex-wrap items-center w-full py-4 md:py-4 px-4 text-blue-400 bg-black" id="menu">
        <div>
          <a href="#" className="w-3/6 md:w-1/12 p-3 logo">KeepItSimple</a>
        </div>

        <HamburguerIcon onClick={toggleMenuMobile}/>

        <div className=" hidden w-full md:flex md:flex-1 md:w-auto md:justify-between ">
          <ul className="text-base pt-4 md:flex md:items-center md:pt-0">
            <li className=" py-2 flex items-center md:p-3 md:m-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-100 hover:text-blue-900">
              Cursossss
              <RxTriangleDown/>
            </li>
            <li>
              <input 
                type="text" 
                className="rounded p-3 m-2 w-full md:w-80 text-center text-blue-900 border-none" 
                placeholder="O que você deseja aprender?"/>
            </li>
            <li className="block p-2 m-2 hover:text-blue-200"> <a href="#">  Carreiras </a></li>
          </ul>
          
          <div className=" md:w-4/12 md:flex md:flex-row flex-col md:place-content-end items-center ">
            <button className="w-full md:w-auto rounded px-6 py-3 m-2 bg-blue-500 text-white hover:text-blue-900 hover:bg-blue-200">Login</button>
            <button className="w-full md:w-auto rounded px-6 py-3 m-2 bg-slate-700  hover:text-blue-900 hover:bg-blue-200">Cadastrar-se</button>
          </div>
        </div>

        <div className="hidden" ref={menu}>
            DONT NEED IT
        </div>
      </nav>

      <Drawer/>
    </header>
  );  
}

export default NavBar;