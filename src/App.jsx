
import "./App.css";
import picoimg from "./assets/pico.jpeg";
import besosimg from "./assets/besos.jpg";
import ciudadimg from "./assets/ciudadgris.jpg";
import costumbreimg from "./assets/costumbre.png";
import Player from "./Componentes/Player";
import { Portada } from "./Componentes/Portada";
import { useState } from "react";
//Importamos la canción desde assets

function App() {

const [cancion, setCancion] = useState("nada")

const Pico = {

  titulo:"Pico de Bolsillo",
  artista:"Luigy Leonardo",
  nombre: "picos",
  imagen:picoimg,
  luigiin:150,
  letra: [
    { text: '...', time: 0 },
    { text: 'Amor vente para acá 🤗', time: 4 },
    { text: 'No es justo que pases frio por allá ❄️', time: 10 },
    { text: 'yo no puedo controlar... 🤷‍♂️', time: 16 },
    { text: 'las ganas de... ', time: 22.7 },
    { text: 'poderte besar 💋', time: 25 },
    { text: 'Es que si te soy sincero 🤭', time: 28 },
    { text: 'desde que te fuiste ☹️', time: 34 },
    { text: 'Se me ha hecho eterno enero 📅', time: 37 },
    { text: 'y el pico de Bolsillo 💼', time: 40 },
    { text: 'Lo tengo desgastao 😓', time: 44 },
    { text: 'de tantas veces niña 😔', time: 47 },
    { text: 'que yo te extrañado.. 🥺', time: 50 },
    { text: 'Sabes que el tiempo suele ser cruel 💔', time: 53 },
    { text: 'Cuando la distancia 👨‍💻 _____ 👩‍⚕️', time: 59 },
    { text: 'nos tiene de rehén. 🕊', time: 62 },    
    { text: 'Ay quisiera un super poder 🦸‍♂️', time: 66 },
    { text: 'Teletransportarme pa poderte ver 🌌', time: 72 },
    { text: 'Ay mirarme mírame 👀', time: 78 },
    { text: 'Cada vez más tonto 🥴', time: 84 },
    { text: 'Cada vez más enamorado... 💕💞', time: 86 },
    { text: 'de ute 🙇', time: 89 },
    { text: 'Lo que intento  decir 🤔', time: 102 },
    { text: 'Es q mi linda yo contigo soy feli 😁', time: 108 },
    { text: 'y el pico de Bolsillo 💼', time: 114.5 },
    { text: 'Lo tengo desgastao 😓', time: 117 },
    { text: 'de tantas veces niña 😔', time: 121 },
    { text: 'que yo te extrañado.. 🥺', time: 124 },
    { text: 'Ay ay vente yaa 🙏', time: 128 },
    { text: 'Vamonos a turistiar 🚀', time: 134 },
    { text: 'pa donde tu quieras, no importa nena 💃', time: 140 },
    { text: 'Solo contigo yo quiero estar. 👩‍❤️‍👨 ', time: 146 },
    { text: 'Y es que no me dejas de encantar 💖', time: 151.1 },
    { text: '💕💖💕💞💕', time: 156 },
  ],
  cancion:"https://od.lk/s/MjFfNDc0MzI5Nzlf/7b5d1e24-c71d-48e4-a4ac-bb3a24693888.m4a"
}

const Costumbre = {

  titulo:"Amor o Costumbre",
  artista:"Luigy Leonardo",
  nombre: "costumbre",
  imagen:costumbreimg,
  luigiin:5,
  letra: [
    { text: '...', time: 0},
    { text: 'Esta no tiene letra pero baila luigi', time: 4},
 ,
  ],
  cancion:"https://od.lk/s/MjFfNDc0MzMzMTdf/audioclip-1656997496000-210000.mp3"
}

const BesosSaborRon = {
  titulo:"Besos Sabor Ron",
  artista:"Luigy Leonardo",
  nombre: "BesosSaborRon",
  imagen:besosimg,
  letra: [
    { text: 'Señorita buenas noches 🌃', time: 21 },
    { text: '¡Dígame usted cómo está 🤔!', time: 25.6 },
    { text: 'Tomaré el atrevimiento 💪', time: 31 },
    { text: 'y la invitaré a bailar 💃', time: 36 },
    { text: 'Señorita, qué bonita 😉', time: 41 },
    { text: 'no se me vaya a asustar 😬', time: 46 },
    { text: 'Tomaré el atrevimiento 🤞', time: 51 },
    { text: 'y me tiraré a besar 💋', time: 54.5 },
    { text: 'Besos con sabor a ron 🥃', time: 61 },
    { text: '¿Qué fue lo que pasó? 🤯', time: 65.5 },
    { text: 'Besos de borracho 🤪', time: 70 },
    { text: 'no fue lo mejor 😢', time: 75.5 },
    { text: 'Tan poco tiempo 📆', time: 81 },
    { text: 'tan buenos recuerdos 🤗', time: 86 },
    { text: 'tan lindos momentos 🥰', time: 92 },
    { text: 'Si tengo que ir a chupar frío ❄️', time: 98 },
    { text: 'si tengo que ir a "tirar río" 🌊', time: 103 },
    { text: 'si me tengo que "ir a los tiros.." 🔫', time: 108 },
    { text: 'Vente que me gusta estar contigo 🤗', time: 112.5 },
    { text: 'Vente que me gusta estar contigo. 💖', time: 117.2 },
    { text: 'Besos con sabor a ron... 🥃', time: 127 },
    { text: '¡Qué bonito fue.. 🥰!', time: 132 },
    { text: 'Lo que nos pasó 💕💞💖', time: 138 },
  ],
  cancion:"https://od.lk/s/MjFfNDc0MzMxMzJf/WhatsApp-Audio-2023-02-11-at-6.36.33-PM.mp3"
}

const CiudadGris = {

  titulo:"Ciudad Gris",
  artista:"Luigy Leonardo",
  nombre: "CiudadGris",
  imagen:ciudadimg,
  luigiin:200,
  letra: [
    { text: '...', time: 0},
    { text: 'La distancia nos separó', time: 3},
    { text: 'y parece que el tiempo se paró ⏳', time: 10},
    { text: 'Pasan ya los días y no sé en que pensar 📅', time: 16.5},
    { text: 'Si esperarte más o empezarme a resignar', time: 23.5},
    { text: 'y yo.. siguo aquí', time: 32},
    { text: 'en una noche fría y tu en una ciudad tan gris', time: 38},
    { text: 'y yo... sigo aquí', time: 44.5},
    { text: 'cantando solo al aire y no pa ti 🌪', time: 52},
    { text: 'ya van 3 veces que dices lo mismo', time: 60.5},
    { text: 'niña se me ha vuelto un poco vicio', time: 67},
    { text: 'que si puedees manipular', time: 73},
    { text: 'si eso piensas? yo no digo', time: 80},
    { text: 'que ya, no te gusta tanto el chat 📩', time: 86.5},
    { text: 'lastima, yo no puedo hacer más', time: 93},
    { text: 'y yo... sigo aquí', time: 99},
    { text: 'en una noche fria y tú', time: 106},
    { text: 'en una ciudad muy gris.', time: 108},
   
 ,
  ],
  cancion:"https://od.lk/s/MjFfNDc0MzMzNThf/ciudadgtus.mp3"
}


const [isPlaying, setIsPlaying] = useState(false);


  return (
    <>


{/* creacion de un componente modal: */}
{isPlaying? (
  <article className={` ${isPlaying?"flex":"hidden"} z-20   flex-col top-0 left-0 absolute min-w-full items-center justify-center bg-[#0C0C0E] h-full p-3`}>
<div className="flex gap-2 w-full">
<Player cerrar={setIsPlaying}  musica={cancion} />
</div>
</article>

):
(

<div className="flex gap-3 flex-col items-center justify-center bg-[#0C0C0E] min-h-screen p-3">
<h1 className="text-white">Lista de Exitos:</h1>
<div className="flex gap-2 flex-wrap">
<Portada musica={BesosSaborRon} setCancion={setCancion} setIsPlaying={setIsPlaying}></Portada>
<Portada musica={Pico} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
<Portada musica={CiudadGris} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
</div>
<h1 className="text-white">Otras Canciones:</h1>
<div className="flex gap-2">
<Portada musica={Costumbre} setCancion={setCancion} setIsPlaying={setIsPlaying}></Portada>

</div>


</div>

)

}



</>
  );
}

export default App;