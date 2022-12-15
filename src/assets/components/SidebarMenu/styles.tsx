import {keyframes, styled} from "@stitches/react"
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const overlayShow =keyframes({
  'from': {
    opacity: '0'},
  'to':{
    opacity: '1'}
});

const contentShow=keyframes({
  'from':{
    opacity: '0',
    transform: 'translate(-50%) scale(0.96)'
  },
  'to':{
    opacity: '1',
    transform: 'translate(0%) scale(1)'
  }
});

export const StyledOverlay = styled(AlertDialog.Overlay,{
  backgroundColor:"rgba(255, 255, 255, 0.5)",
  position:'fixed',
  inset:'0',
  animation:`${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
});

export const StyledOverlayContent = styled(AlertDialog.Content,{
  backgroundColor:'white',
  boxShadow:'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position:'fixed',
  top:'0',
  left:'0',
  transform:'translate(0%)',
  width:'100%',
  height:'100vh',
  padding:'25px',
  animation:`${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
});