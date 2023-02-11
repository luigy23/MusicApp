import React, { useState, useEffect, createRef } from 'react';
import { motion, AnimatePresence, anticipate } from "framer-motion";

const Player = ({letra, cancion}) => {

  const textTimings = letra
  const [versoTime, setVersoTime] = useState(0);
  const [text, setText] = useState('');
  const [luigi, setLuigi] = useState(false);

const clicVerso = ()=>{
  console.log(versoTime);
}

 const lyrics = (e)=>{

  let tiempo = e.target.currentTime;
//etVersoTime(tiempo);

    // Recorremos el objeto de texto y tiempos
    textTimings.forEach(timing => {
      // Si el tiempo del audio es mayor o igual al tiempo definido, mostramos el texto
      if (tiempo>= timing.time) {
        setText(timing.text);
      }
      if (tiempo>= 156) {
        setLuigi(true)
      }
      if (tiempo>= 174) {
        setLuigi(false)
      }
      
    });
  

 }

  return (
   
    <div className='space-y-3 w-full flex justify-center items-center flex-col '>
      
    {
      luigi&&
      <motion.img  className='w-44' 
    animate={{
      x:0,
      scale: 1,
      opacity: 1,

    }}
    initial={{
      x:-100,
      scale: 0,
      opacity: 0,

    }}

    transition={{
      delay: 0.5,
      duration: 1,
      type: "spring",
      stiffness: 100,
    }}

    src="https://media.giphy.com/media/iIGA9qQ8CaJLLmi0Bh/giphy.gif" alt="" />
   
  }
    <motion.h1 
key={text}
      animate={{
        x:0,
        scale: 1,
        opacity: 1,
        
      }}
      initial={{
        x:-100,
        scale: 0,
        opacity: 0,
        
      }}
      className='text-white text-center'>{text}</motion.h1>

      <div className='flex justify-center items-center'>
      <audio onTimeUpdate={(e)=>lyrics(e)} src={cancion} controls />
      </div>
     
      <button onClick={clicVerso} className='bg-white rounded-md px-4 py-1'>Verso</button>
    </div>
 
  )
}

export default Player;





