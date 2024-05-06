function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const clave = [];
let intento = [];
let tri = 0;
for (let i = 0; i < 5; i++) {
  clave.push(getRandomInt(10));
}
function adivinar(clave, prueba) {
  const trying = [];
  console.log(prueba);
  console.log(clave);
  for (let j = 0; j < 5; j++) {
    const claveI = clave[j];
    const pruebaI = prueba[j];
    if (claveI === pruebaI) {
      // console.log('Has acertado la posición', j + 1);
      colourBoxes(tri, j, 'green');
      trying.push(1);
    } else {
      trying.push(0);
    }
  }

  for (let j = 0; j < 5; j++) {
    const pruebaI = prueba[j];
    for (let i = 0; i < 5; i++) {
      if (pruebaI === clave[i] && trying[j] === 0) {
        colourBoxes(tri, j, 'yellow');
        trying[j] = 2;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const intentos = trying[i];
    if (intentos === 0) {
      colourBoxes(tri, i, 'red');
    }
  }
  let ganador = 0;
  for (let i = 0; i < 5; i++) {
    const element = trying[i];
    if (element === 2) {
      colourNumber(prueba[i],'yellow');
    }
    if (element === 1) {
      colourNumber(prueba[i],'green');
      ganador++;
    }
    if (element === 0) {
      colourNumber(prueba[i],'red');
    }
  }

  if (ganador === 5) {
    console.log('you win');
    hasGanado();
  }
  intento = [];
}

function hasGanado() {
  const win = document.createElement('div');
  win.setAttribute('id', 'win');
  win.setAttribute('class', 'box');
  win.innerText = 'HAS GANADO';
  main.appendChild(win);
}

// function adivinar(clave, prueba) {
//   console.log(prueba);
//   console.log(clave);
//   for (let j = 0; j < 5; j++) {
//     const claveI = clave[j];
//     const pruebaI = prueba[j];
//     colourBoxes(tri, j, 'red');
//     for (let i = 0; i < 5; i++) {
//       if (pruebaI === clave[i]) {
//         colourBoxes(tri, j, 'yellow');
//       }
//     }
//     if (claveI === pruebaI) {
//       console.log('Has acertado la posición', j + 1);
//       colourBoxes(tri, j, 'green');
//     }
//   }
//   intento = [];
// }
// }
// const intentos = 0;
// while (intentos < 6) {
//   adivinar(clave, [1,2,3,4,5,]);
//   intentos++;
// }
// console.log(clave);
const myElement = document.getElementById('root');

// Titulo
const header = document.createElement('header');
root.appendChild(header);
const titulo = document.createElement('h1');
titulo.innerHTML = 'NUMBERLE';
header.appendChild(titulo);

// Cuerpo
const main = document.createElement('main');
root.appendChild(main);

for (let i = 0; i < 6; i++) {
  const linea = document.createElement('div');
  linea.setAttribute('class', 'inputGroup');
  for (let j = 0; j < 5; j++) {
    const numberInput = document.createElement('div');
    numberInput.setAttribute('id', 'number' + j + i);
    numberInput.setAttribute('class', 'box');

    linea.appendChild(numberInput);
  }
  main.appendChild(linea);
}


// Teclado
const teclado = document.createElement('teclado');
root.appendChild(teclado);
teclado.setAttribute('class', 'inputGroup');

const borrar = document.createElement('button');
borrar.setAttribute('id', 'borrar');
borrar.setAttribute('class', 'box');
borrar.innerText = 'BORRAR';
borrar.onclick = delEventFunction;
teclado.appendChild(borrar);

for (let i = 0; i < 10; i++) {
  const tecladoInput = document.createElement('button');
  tecladoInput.setAttribute('id', 'teclado' + i);
  tecladoInput.setAttribute('class', 'box');
  tecladoInput.innerText = i;
  tecladoInput.onclick = onEventFunction;
  // tecladoInput.addEventListener('click', onEventFunction);
  teclado.appendChild(tecladoInput);
}

const enter = document.createElement('button');
enter.setAttribute('id', 'enter');
enter.setAttribute('class', 'box');
enter.innerText = 'ENTER';
enter.onclick = entEventFunction;
teclado.appendChild(enter);

function onEventFunction(ev) {
  // const myElement = document.getElementById('teclado'+param);
  // console.log('onEventFunction', ev.target.innerText);
  if (intento.length < 5) {
    const num = writeParams(ev.target.innerText);
    intento.push(parseInt(num));
  }
  // const num = writeParams(ev.target.innerText);
  // intento.push(parseInt(num));
  // if (intento.length === 5) {
  //   adivinar(clave, intento);
  //   tri++;
  //   // colourBoxes(correcta);
  // }
}

function colourBoxes(i, j, color) {
  const cuadrado = document.getElementById('number' + j + i);
  if (color === 'green') {
    cuadrado.setAttribute('class', 'correct');
  }
  if (color === 'yellow') {
    cuadrado.setAttribute('class', 'casi');
  }
  if (color === 'red') {
    cuadrado.setAttribute('class', 'mal');
  }
}

function colourNumber(i, color) {
  const cuadrado = document.getElementById('teclado' + i);
  if (color === 'green') {
    cuadrado.setAttribute('class', 'correct');
  }
  if (color === 'yellow') {
    cuadrado.setAttribute('class', 'casi');
  }
  if (color === 'red') {
    cuadrado.setAttribute('class', 'mal');
  }
}

function writeParams(numero) {
  for (let i = 0; i < 6; i++) {
    // const element = array[i];
    for (let j = 0; j < 5; j++) {
      // const element = array[j];
      const cuadrado = document.getElementById('number' + j + i);
      if (cuadrado.innerHTML === '') {
        cuadrado.innerHTML = numero;
        // console.log(`|${cuadrado.innerHTML}|`);
        return numero;
      }
    }

  }
}
function entEventFunction(ev) {
  if (intento.length === 5) {
    adivinar(clave, intento);
    tri++;
    // colourBoxes(correcta);
  }
}

function delEventFunction(ev) {
  // const myElement = document.getElementById('teclado'+param);
  // console.log('onEventFunction', ev.target.innerText);

  const num = deleteParams(ev.target.innerText);
  intento.pop(parseInt(num));
  // colourBoxes(correcta);
}


function deleteParams(numero) {
  // for (let i = 5; i >= 0; i--) {
  // const element = array[i];
  for (let j = 4; j >= 0; j--) {
    // const element = array[j];
    const cuadrado = document.getElementById('number' + j + tri);
    if (cuadrado.innerHTML !== '') {
      cuadrado.innerHTML = '';
      // console.log(`|${cuadrado.innerHTML}|`);
      return numero;
    }
  }

  // }
}