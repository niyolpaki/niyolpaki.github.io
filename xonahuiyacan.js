
// xon ahuiyacan - Nezahualcóyotl

let xon_xspacing = 90; // How far apart should each horizontal position be spaced
let xon_w; // Width of entire wave
let xon_maxwaves = 300; // total # of waves to add together

var xon_lines, xon_markov;

let xon_theta = 0;
let xon_amplitude = []; // Height of wave
let xon_dx = []; // Value for incrementing X, to be calculated as a function of period and xon_xspacing
let xon_yvalues; // Using an array to store height values for the wave (not entirely necessary)

var xon_contador = 1;

var xon_font,
  xon_fontsize = 13;

var xon_contacolor = 0;
var xon_dato = 1;

var xon_giro = 1;

function preload(){

  tloquenahuaque = loadImage("img/tloquenahuaque.svg")

}

function setup() {
  //console.log(txt);
  createCanvas(windowWidth, windowHeight);
  xon_w = width;

//  textxon_Font("Marta-Italic");
  textFont("Varela Round");
//textxon_Font("Didact Gothic");

// create a xon_markov model w' n=4


  for (let i = 0; i < xon_maxwaves; i++) {
    xon_amplitude[i] = 1;
    let xon_period = 500; // How many pixels before the wave repeats
    xon_dx[i] = (TWO_PI / xon_period) * xon_xspacing;
  }
  xon_yvalues = [];
}

function draw() {

    xon_ahuiyacan();

}

function xon_ahuiyacan() {

    xon_giro++;

    xon_contacolor = xon_contacolor + xon_dato;

    if (xon_contacolor <= 0) {
        xon_dato = 0.5;
        xon_contacolor+=0.5;
    }

    if (xon_contacolor >= 255) {
        xon_dato = -0.5;
        xon_contacolor-=0.5;
    }


    xon_contador++;
    //background(183, 245, 255);
    //background(67, 58, 103);
    //background(xon_contacolor, 241, 245, 120);
    //background(157, 223, 255);
    //background(78, 62, 100);
    //background(57, 49, 67);
    background(0);
    xon_calcWave();

    push();
        xon_weft();
    pop();

    if (xon_contador <= 600) {

        tloquenahuaquee();

    }


    if (xon_contador >= 601 && xon_contador <= 1000) {


        ahuiyacan();
 
    }


    if (xon_contador >= 1001 && xon_contador <= 1400) {


        teotl();
 
    }


    if (xon_contador >= 1401 && xon_contador <= 2000) {

        cuicatl();
 
    }
  
  
    if (xon_contador >= 2001) {

        xon_contador = 1;
  
    }
}


// amoxohtoca, compuesta de 'toca', seguir, oh de oh-tli, 'camino' y amox-(tli), 'libro'




