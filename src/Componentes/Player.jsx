import React, { useState, useEffect, createRef } from 'react';
import { motion } from "framer-motion";
import ReactAudioPlayer from 'react-audio-player';

const Player = ({musica, cerrar}) => {


  const {letra, cancion,nombre, imagen, luigiin, titulo} = musica
  const textTimings = letra
  const [versoTime, setVersoTime] = useState(0);
  const [text, setText] = useState('');
  const [luigi, setLuigi] = useState(false);



 const lyrics = (e)=>{

  let tiempo = e.target.currentTime;
setVersoTime(tiempo);

    // Recorremos el objeto de texto y tiempos
    textTimings.forEach(timing => {
      // Si el tiempo del audio es mayor o igual al tiempo definido, mostramos el texto
      if (tiempo>= timing.time) {
        setText(timing.text);
      }
      if (tiempo>= luigiin) {
        setLuigi(true)
      }
      if (tiempo>= 174) {
        setLuigi(false)
      }
      
    });
  

 }

  return (
   
    <div className='space-y-3 w-full flex justify-center items-center flex-col '>
      <h1>{titulo}</h1>
      <div className='portada '>
    <img  src={imagen} alt="" />
  </div>
      
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

      <div className='flex justify-center items-center w-full'>
      <audio className='w-full' id={nombre} onTimeUpdate={(e)=>lyrics(e)} src={cancion} controls autoPlay={true}  />
      
      </div>
      <p className='text-white'>{versoTime}</p>
      <button 
      onClick={()=>{cerrar(false); document.getElementById(nombre).pause()}}
      className='bg-slate-50 py-1 px-3 rounded-lg font-semibold hover:rounded-3xl transition-all ease-in-out'>Volver</button>
    
      
    </div>

 
  )
}

export default Player;





