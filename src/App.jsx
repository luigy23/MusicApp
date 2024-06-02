
import "./App.css";
import picoimg from "./assets/pico.jpeg";
import besosimg from "./assets/besos.jpg";
import ciudadimg from "./assets/ciudadgris.jpg";
import costumbreimg from "./assets/costumbre.png";
import floresimg from "./assets/5.webp";
import perdonimg from './assets/perdon.jpg';
import paraimg from './assets/parair.jpeg';
import Player from "./Componentes/Player";
import { Portada } from "./Componentes/Portada";
import { useState } from "react";
import cancionmp3 from "./assets/parair.mp3";
import floresmp3 from "./assets/Musica/flores2.mp3";
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
    { text: 'Dígame usted cómo está 🤔', time: 25.6 },
    { text: 'Tomaré el atrevimiento 💪', time: 31 },
    { text: 'y la invitaré a bailar 💃', time: 36 },
    { text: 'Señorita, qué bonita 😉', time: 41 },
    { text: 'no se me vaya a asustar 😬', time: 46 },
    { text: 'Tomaré el atrevimiento 🤞', time: 51 },
    { text: 'y me tiraré a besar 💋', time: 54.5 },
    { text: 'Besos con sabor ron 🥃', time: 61 },
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
    { text: 'Besos con sabor ron... 🥃', time: 127 },
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

const Perdon = {

  titulo:"Otra vez Perdón",
  artista:"Luigy Leonardo",
  nombre: "perdon",
  imagen:perdonimg,
  luigiin:5,
  letra: [
    { text: 'ay por favor', time: 1},
    { text: 'otra vez perdón?', time: 1.8},
    { text: 'ese cuentico ya cansó', time: 3},
    { text: 'o tal vez el cansón soy yo', time: 7},
    { text: 'y no tengo la razón', time:11},
    { text: 'pero da igual', time: 14},
    { text: 'yo ya me cansé', time: 15.8},
    { text: 'pues cada quien', time: 17},
    { text: 'yo ya no discutiré', time: 22},
    { text: 'no digo na, e intentaré', time: 28},
    { text: 'que todo me de igual', time: 31},
    { text: 'ay, por favor ¿otra vez perdón?', time: 35},
    


 ,
  ],
  cancion:"https://od.lk/s/MjFfNDc0MzMzMTZf/WhatsApp-Audio-2023-02-11-at-9.02.28-PM.mp3"
}

const ParaIrABuscarte = {
  titulo:"Para Ir A Buscarte",
  artista:"Luigy Leonardo",
  nombre: "ParaIrABuscarte",
  imagen:paraimg,
  luigiin:200,
  letra:[
    {text: "[Música]", time: 0},
    {text: "No soy adivino", time: 9},
    {text: "Me imagino ya lo sabes", time: 11},
    {text: "No veo el futuro", time: 14},
    {text: "Pero de algo estoy seguro", time: 16},
    {text: "Que está destinado", time: 19},
    {text: "Que tu estés a mi lado", time: 21},
    {text: "Y aunque no es el tiempo", time: 24},
    {text: "No hay afanes ni frenado", time: 26},
    {text: "Pero tu tranquila", time: 29},
    {text: "Que yo le canto al aire", time: 31},
    {text: "Pa' no confundirte", time: 34},
    {text: "Para no agobiarte", time: 36},
    {text: "Solo espero ansioso", time: 39},
    {text: "El volver a encontrarte", time: 41},
    {text: "Que el tiempo se acabe", time: 44},
    {text: "Para ir a buscarte", time: 46},
    {text: "[Música]", time: 49},
    {text: "Y cuando te encuentre", time: 49},
    {text: "Te seré sincero", time: 53},
    {text: "Y con la mirada", time:55 },
  {text:"Te diré te quiero",time :57 },
  {text:"Quiero que te quedes",time :60 },
  {text:"Lo que dure el cielo",time :62 },
  {text:"Dime que me esperas",time :65 },
  {text:"Que si no me muero",time :67 },
  {text:"No me cambiarás por un made in China",time :70 },
  {text:"Producto original sacado de la vitrina",time :73 },
  {text:"O eso, al menos, es lo que mi mente imagina",time :76 },
  {text:"Pero soy consiente que no es el momento para involucrar todo el sentimiento",time :80 },
  {text:"Aunque yo te extrañe",time :84 },
  {text:"Aunque yo te pienso",time :86 },
  {text:"Disimularé por solo por un tiempo",time :89 },
  {text:"Tiempo que no pare",time :92 },
  {text:"El tiempo pausa el sufrimiento",time :94 },
  {text:"Por solo un instante sacame este trance",time :97 },
  {text:"Para ya tu magia que me hace amarte",time :100 },
  {text:"Odio la distancia esta circustancia que no da ganancia me aleja de tu frangracia",time :103 },
  {text:"No doy importancia porque por ahí dicen que el que persevera alcanza.",time :107 }
  ]
  ,
  // la cancion está localmente en assets
  cancion:cancionmp3
  
}

const FLores = {
  titulo:"Flores",
  artista:"Luigy Leonardo",
  nombre: "flores",
  imagen:floresimg,
  letra: [
    { text: '...', time: 0},
    { text: '', time: 4},
 ,
  ],
  cancion:floresmp3

}


const [isPlaying, setIsPlaying] = useState(false);


  return (
    <>


{/* creacion de un componente modal: */}
{isPlaying? (
<article
   className={` ${isPlaying?"flex":"hidden"} article`}>
<div className="flex gap-2 w-full filter-none z-40">
<Player cerrar={setIsPlaying}  musica={cancion} />
</div>
</article>

):
(

<div className="flex gap-3 flex-col items-center justify-center bg-[#0C0C0E] min-h-screen p-3">
<h1 className="text-white">Lista de Exitos:</h1>
<div className="flex gap-2 flex-wrap items-center justify-center">
<Portada musica={BesosSaborRon} setCancion={setCancion} setIsPlaying={setIsPlaying}></Portada>
<Portada musica={Pico} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
<Portada musica={CiudadGris} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
<Portada musica={Perdon} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
<Portada musica={ParaIrABuscarte} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
<Portada musica={Costumbre} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
<Portada musica={FLores} setCancion={setCancion} setIsPlaying={setIsPlaying}  ></Portada>
</div>
<h1 className="text-white">Proximamente más Canciones</h1>



</div>

)

}



</>
  );
}

export default App;