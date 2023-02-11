
import "./App.css";

import Player from "./Componentes/Player";
//Importamos la canción desde assets

function App() {


const letraPico = [
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
];

  return (
<div className="flex gap-3 flex-col items-center justify-center bg-slate-800 min-h-screen p-3">

<Player letra={letraPico} cancion={"https://od.lk/s/MjFfNDc0MzI5Nzlf/7b5d1e24-c71d-48e4-a4ac-bb3a24693888.m4a" }/>


</div>


  );
}

export default App;