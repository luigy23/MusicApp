import React from 'react'

export const Portada = ({musica, setCancion, setIsPlaying}) => {

  

  const {imagen, nombre, artista, titulo} = musica
  const audio = document.getElementById(nombre)

    const clic = (e) => {
      setCancion(musica)
      setIsPlaying(true)
      audio.play()
    }
  return (
<>

<div className='cancion' onClick={clic}>
<div className='portada '>
    {/* overlay: */}
   
    <div className='overlay'>
    
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
    </svg>
    </div>
    <img  src={imagen} alt="" />
   
   
</div>
<h3 className='text-green-300 font-semibold pt-2'>{titulo}</h3>
<p className='text-zinc-500 text-sm'>{artista}</p>
</div>


</>
  )
}
