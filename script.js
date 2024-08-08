alert("HEY LISTEN");

let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()

typewriter
  .pauseFor(2500)
  .typeString('HEY LISTEN')
  .pauseFor(300)
  .deleteAll()
  .typeString('The Legend Of Zelda')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

