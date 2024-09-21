// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Gracias por enseñarme a perder", time: 1 },
  { text: "Por dejarme ir para no volver", time: 5 },
  { text: "Gracias (uh, uh, uh)", time: 7 },
  { text: "Gracias", time: 9 },
  { text: "Gracias a tu mano sosteniendo mi voz", time: 11 },
  { text: "Aunque la he soltado, me quedó el valor", time: 13 },
  { text: "Gracias (uh, uh, uh)", time: 16 },
  { text: "Gracias", time: 17 },
  { text: "De lo malo, me guardé lo bueno", time: 19 },
  { text: "De lo que murió, nací de nuevo", time: 21 },
  { text: "Y la mitad de lo que soy", time: 23 },
  { text: "Es por lo que un día fuimos", time: 35 },
  { text: "Y la mitad de lo que doy", time: 37 },
  { text: "Es por lo que nos dimos, oh", time: 39 },
  { text: "Lo sabes y lo sé", time: 41 },
  { text: "Y a los lugares donde voy", time: 43 },
  { text: "Llegué por donde fuimos", time: 45 },
  { text: "Inevitable desprenderte", time: 47 },
  { text: "De lo que vivimos, oh", time: 49 },
  { text: "Gracias", time: 51 },
  { text: "Y por entregarme", time: 53 },
  { text: "Más de una verdad", time: 55 },
  { text: "Y por enseñarle", time: 57 },
  { text: "A mi deseo que no hay poder", time: 59 },
  { text: "Sin voluntad, ay", time: 61 },
  { text: "Por hablar por mí", time: 63 },
  { text: "Cuando me daba miedo hablar", time: 65 },
  { text: "Por soñar por mí", time: 67 },
  { text: "Cuando yo no quería soñar", time: 69 },
  { text: "Gracias", time: 71 },
  { text: "Gracias", time: 73 },
  { text: "De lo malo, me guardé lo bueno", time: 75 },
  { text: "De lo que murió, nací de nuevo", time: 77 },
  { text: "Y la mitad de lo que soy", time: 79 },
  { text: "Es por lo que un día fuimos", time: 81 },
  { text: "Y la mitad de lo que doy", time: 83 },
  { text: "Es por lo que nos dimos", time: 85 },
  { text: "Lo sabes y lo sé", time: 87 },
  { text: "Y a los lugares donde voy", time: 89 },
  { text: "Llegué por donde fuimos", time: 91 },
  { text: "Inevitable desprenderte", time: 93 },
  { text: "De lo que vivimos", time: 95 },
  { text: "Ay, gracias", time: 97 },
  { text: "Y gracias", time: 99 },
  { text: "Oh", time: 101 },
  { text: "Y gracias", time: 103 },
  { text: "Uh-oh-uh-oh-uh-oh", time: 105 },
  { text: "Y gracias", time: 107 },
  { text: "Ay, gracias", time: 109 },
  { text: "Uh-oh-uh-oh", time: 111 },
  { text: "Gracias", time: 113 },
  { text: "Y gracias", time: 115 },
  { text: "Gracias", time: 117 },
  { text: "Y gracias", time: 119 },
  { text: "Gracias", time: 121 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);