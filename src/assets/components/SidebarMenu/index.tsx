import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Children, ReactNode } from "react";
import './drawer.css';

type Props = { 
  children:ReactNode,
  description:string,
  className:string,
  title:ReactNode
} 

const SideBarMenu = ({children, description, className, title}:Props) =>{
  const HamburguerIcon =() => (
      <svg 
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

  return(
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <HamburguerIcon/>
        </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay"/>
        <AlertDialog.Content className={`AlertDialogContent overflow-scroll p-0 ${className}`}>
            
          <AlertDialog.Title className="AlertDialogTitle text-center bg-main p-8 text-secondary stick w-full">
            {title}
            <AlertDialog.Cancel className=" float-right font-bold text-1xl ">
              X
            </AlertDialog.Cancel>
          </AlertDialog.Title>
            
          <AlertDialog.Description className="AlertDialogDescription">
            {description}
          </AlertDialog.Description>
          
          <div className="my-4">
            {children}         
          </div>
        
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default SideBarMenu;