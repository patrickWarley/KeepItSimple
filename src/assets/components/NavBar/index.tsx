import { RxTriangleDown } from "react-icons/rx";
import React, { useRef, useState } from "react";
import SideBarMenu from "../SidebarMenu";

const NavBar = () => {
  const courses =[
    {
      title:'Desenvolvimento web',
      courses:['Javascript', 'React', 'Java']},
    {
      title:'Design',
      courses:['UX', 'Desenho']},
    {
      title:'Desenvolvimento de Games',
      courses:['Unity', 'Unreal Engine', 'C++']},
    {
      title:'Pastelaria',
      courses:['Flango', 'Carne', 'Queijo']}
  ]

  type Props ={
    className:string
  };

  const Menu =({className}:Props) => {
    return(
      <div className={`w-full md:flex md:flex-1 md:w-auto md:justify-between ${className}`}>
          <div className="hidden md:block py-2 flex items-center md:p-3 md:m-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-100 hover:text-blue-900">
            Cursos
            <RxTriangleDown/>
          </div>
          
        <ul className="text-base pt-4 md:flex md:items-center md:pt-0">
          <li>
            <input 
              type="text" 
              className="rounded p-3 m-2 w-full md:w-80 text-center text-blue-900 border-none" 
              placeholder="O que você deseja aprender?"/>
          </li>
            
          {courses.map(category => {
            return( 
            <li className="block p-2 m-2 hover:text-blue-200"> 
              <a href="#">{category.title}</a>
              <ul>
                {category.courses.map(course => <li className="block p-2 m-2 hover:text-blue-200">{course}</li>)}
              </ul>
            </li>
            );
          })}
          <li className="block p-2 m-2 hover:text-blue-200"> <a href="#"></a></li>
        
        </ul>
          
        <div className=" md:w-4/12 md:flex md:flex-row flex-col md:place-content-end items-center ">
          <button className="w-full md:w-auto rounded px-6 py-3 m-2 bg-blue-500 text-white hover:text-blue-900 hover:bg-blue-200">Login</button>
          <button className="w-full md:w-auto rounded px-6 py-3 m-2 bg-slate-700  hover:text-blue-900 hover:bg-blue-200">Cadastrar-se</button>
        </div>
      </div>
    );
  }
  
  return (
    <header>
      <nav className="flex flex-wrap items-center w-full py-4 md:py-4 px-4 text-blue-400 bg-black" id="menu">
        <div>
          <a href="#" className="w-3/6 md:w-1/12 p-3 logo">KeepItSimple</a>
        </div>

        <div className="md:hidden">
          <SideBarMenu title="KeepItSimple" description="">
            <Menu className="menu"/>
          </SideBarMenu>
        </div>

        <Menu className="hidden md:block"/>

      </nav>
    </header>
  );  
}

export default NavBar;