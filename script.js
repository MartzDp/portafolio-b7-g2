//alert("Hola Mundo");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//reconoces una acción porque tiene paréntesis, después del nombre de la acción 
//a veces tiene el operador punto
typewriter
  .pauseFor(2500) //milisegundos 2.5 segundos
  .typeString('Diana Martínez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FrontEnd Jr.')
  .pauseFor(1000)
  .start();


  let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

//reconoces una acción porque tiene paréntesis, después del nombre de la acción 
//a veces tiene el operador punto
typewriterFrase
  .pauseFor(2500) //milisegundos 2.5 segundos
  .typeString('"El éxito no se logra solo con cualidades especiales. Es, sobre todo, un trabajo de constancia, de método y de organización."')
  .pauseFor(300)
  .deleteAll()
  .typeString('Víctor Hugo.')
  .pauseFor(1000)
  .start();
