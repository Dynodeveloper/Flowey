// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "un sweater violeta y", time: 20 },
  { text: "un pantalón de corderoy", time: 23 },
  { text: "la pasó a buscar en su nuevo renault fuego", time: 27 },
  { text: "sonaban los planetas y la furia de la autopista", time: 31 },
  { text: "de pronto ya estaba en el auto", time: 36 },
  { text: "y sin apuro preguntó", time: 39 },
  { text: "ey, dónde me llevás", time: 42 },
  { text: "y cuánto más vas a tardar", time: 45 },
  { text: "es que necesito volver a casa para cenar", time: 47 },
  { text: "la pasaron bien un rato", time: 66 },
  { text: "dos horas para ser exactos", time: 68 },
  { text: "él le dio un poco de pánico", time: 70 },
  { text: "y ella se quedó pensando", time: 72 },
  { text: "ey, dónde me llevás", time: 74 },
  { text: "y cuánto más vas a tardar", time: 76 },
  { text: "es que necesito volver a casa para cenar", time: 78 },
  { text: "puede que no haya un auto y", time: 97 },
  { text: "que casi todo sea inventado", time: 99 },
  { text: "es mejor inventar un buen final", time: 102 },
  { text: "para no poder pensar en...", time: 104 },
  { text: "ey, dónde te fuiste", time: 106 },
  { text: "y cuánto más vas a tardar", time: 108 },
  { text: "es que necesito decirte que en verdad me gustas", time: 110 },
  { text: "en verdad me gustabas", time: 112 },
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