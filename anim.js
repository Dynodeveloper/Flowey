// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "un sweater violeta y", time: 0 },
  { text: "un pantalón de corderoy", time: 3 },
  { text: "la pasó a buscar en su nuevo renault fuego", time: 7 },
  { text: "sonaban los planetas y la furia de la autopista", time: 11 },
  { text: "de pronto ya estaba en el auto", time: 15 },
  { text: "y sin apuro preguntó", time: 19 },
  { text: "ey, dónde me llevás", time: 22 },
  { text: "y cuánto más vas a tardar", time: 25 },
  { text: "es que necesito volver a casa para cenar", time: 29 },
  { text: "la pasaron bien un rato", time: 34 },
  { text: "dos horas para ser exactos", time: 38 },
  { text: "él le dio un poco de pánico", time: 42 },
  { text: "y ella se quedó pensando", time: 46 },
  { text: "ey, dónde me llevás", time: 50 },
  { text: "y cuánto más vas a tardar", time: 53 },
  { text: "es que necesito volver a casa para cenar", time: 57 },
  { text: "puede que no haya un auto y", time: 62 },
  { text: "que casi todo sea inventado", time: 65 },
  { text: "es mejor inventar un buen final", time: 69 },
  { text: "para no poder pensar en...", time: 73 },
  { text: "ey, dónde te fuiste", time: 78 },
  { text: "y cuánto más vas a tardar", time: 82 },
  { text: "es que necesito decirte que en verdad me gustas", time: 87 },
  { text: "en verdad me gustabas", time: 92 },
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