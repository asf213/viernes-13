// Seleccionar el elemento de audio y las letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición y su duración en pantalla (en segundos)
var lyricsData = [
  { text: "Tu tienes todo lo que busco", time: 0, duration: 2 },
  { text: "Conocerte para mi es todo un gusto", time: 3, duration: 3 },
  { text: "Tienes algo en particular", time: 5, duration: 3 },
  { text: "Algo que te hace más", time: 7, duration: 3 },
  { text: "Algo que no entiendo que no me para de enamorar", time: 10, duration: 4 },
  { text: "Tú sabes bien que eres la que me mancha de labial", time: 12, duration: 5 },
  { text: "La que se duerme sin despedir y sin avisar", time: 13, duration: 7 },
  { text: "La que le encanta molestar y fregar", time: 15, duration: 8 },
  { text: "La más bella del lugar", time: 24, duration: 3 },
  { text: "Y me llevas lentamente a imaginar", time: 27, duration: 6 },
  { text: "A una vida donde tú puedas estar", time: 31, duration: 9 },
  { text: "Y me llevas lentamente a imaginar", time: 35, duration: 10 },
  { text: "A una vida donde te pueda cuidar", time: 39, duration: 13 },
  { text: "Yo sé que te he dicho mil veces que nadie te va querer", time: 44, duration: 12 },
  { text: "Como yo lo voy hacer", time: 49, duration: 8 },
  { text: "Que tú pones buena suerte en mi viernes  13", time: 52, duration: 8 },
  { text: "Que tengo tu nombre tatuado en mi piel", time: 55, duration: 7 },
  { text: "Que ya te extraño aunque te haya visto ayer", time: 58, duration: 6 },
  { text: "Sostente fuerte yo siento lo mismo que tú sientes", time: 62, duration: 5 },
  { text: "Miradas que no mienten", time: 67, duration: 1 },
  { text: "Sonrisas que muestran dientes", time: 69, duration: 2 },
  { text: "Contigo todo es más que suficiente", time: 71, duration: 2 },
  { text: "No ocupo de alguien más", time: 72, duration: 2 },
  { text: "Solo a ti presente", time: 74, duration: 4 },
  { text: "Y me llevas lentamente a imaginar...", time: 76, duration: 8 },
  { text: "A una vida donde tú puedas estar", time: 80, duration: 9 },
  { text: "Y me llevas lentamente a imaginar...", time: 84, duration: 10 },
  { text: "A una vida donde te pueda cuidar", time: 87, duration: 12 },
  { text: "Porque si no es contigo no es con nadie más.", time: 101, duration: 4 },
  { text: "Es algo que tú nunca nunca entenderás", time: 103, duration: 5 },
  { text: "Con alguien más yo no me puedo conformar", time: 105, duration: 5 },
  { text: "Sabiendo que alguien va tomar mi lugar", time: 108, duration: 5 },
  { text: "Nadie te verá como yo te voy a ver", time: 111, duration: 4 },
  { text: "Quiero cumplir las cosas que acordamos en hacer", time: 114, duration: 5 },
  { text: "Y si la vida me da a escoger", time: 117, duration: 4 },
  { text: "¡TE ESCOJO A TI OTRA VEZ!   🩷", time: 120, duration: 5 }
];

// Función para actualizar las letras de la canción
function updateLyrics() {
  var time = audio.currentTime;  // Obtener el tiempo actual del audio

  // Encontrar la línea actual en función del tiempo y duración
  var currentLine = lyricsData.find(line => time >= line.time && time < line.time + line.duration);

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1;  // Mostrar las letras
  } else {
    lyrics.innerHTML = "";
    lyrics.style.opacity = 0;  // Ocultar letras si no hay nada que mostrar
  }

  // Continuar la actualización en el siguiente frame
  requestAnimationFrame(updateLyrics);
}

// Iniciar la actualización de las letras
requestAnimationFrame(updateLyrics);
