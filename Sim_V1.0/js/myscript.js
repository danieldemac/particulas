 m = document.getElementById("life").getContext("2d");

let trailLength = 3; // comprimento do rastro

	draw = (x, y, c, s) => {
	  m.fillStyle = c;
	  m.fillRect(x, y, s, s);
	};

	drawParticle = (x, y, c, s) => {
	  m.fillStyle = 'rgba(0, 255, 255, 0.2)';
	  m.beginPath();
	  m.arc(x + s/2, y + s/2, s/2 + trailLength, 0, 2*Math.PI); 



	  m.fill();

	  m.fillStyle = c;
	  m.beginPath();
	  m.arc(x + s/2, y + s/2, s/2 * 1.2, 0, 2*Math.PI);;
	  m.fill();
	};
	drawGradient = (x, y, gradientColor) => {
  let gradient = m.createRadialGradient(x, y, 0, x, y, s/2);
  gradient.addColorStop(0, gradientColor);
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  m.fillStyle = gradient;
  m.fillRect(x, y, s, s);
};




		atoms = [];
	  atom = (x, y, c, gradientColor) => {
	  return { x: x, y: y, vx: 0, vy: 0, color: c, gradientColor: gradientColor };
	};
	  random = () => {
	    return Math.random() * 800;
	  };
	  create = (number, color) => {
	    group = [];
	    for (let i = 0; i < number; i++) {
	      group.push(atom(random(), random(), color));
	      atoms.push(group[i]);
	    }
	    return group;
	  };
	  rule = (atoms1, atoms2, g) => {

  for (let i = 0; i < atoms1.length; i++) {
    fx = 0;
    fy = 0;
    a = atoms1[i];
    if (a.x <= 0) { a.x = 0; }
    if (a.x >= 800) { a.x = 800; }
    if (a.y <= 0) { a.y = 0; }
    if (a.y >= 600) { a.y = 600; }
    if (a.x <= 5 || a.x >= (800-5)) { a.vx *= -2; }
    if (a.y <= 5 || a.y >= (600-5)) { a.vy *= -2; }
    
    for (let j = 0; j < atoms2.length; j++) {
      b = atoms2[j];
      dx = a.x - b.x;
      dy = a.y - b.y;
      d = Math.sqrt(dx * dx + dy * dy);
      if (d > 0 && d < 80) {
        F = (g * 1) / d;
        fx += F * dx;
        fy += F * dy;
      }
      // Verificar se as partículas estão muito próximas uma da outra
      if (d < 6  && d > 0) {
        a.x += dx/d * 1.1; // Empurrar a partícula a
        a.y += dy/d * 1.1; // Empurrar a partícula a
        b.x -= dx/d * 1.1; // Empurrar a partícula b
        b.y -= dy/d * 1.1; // Empurrar a partícula b
      }
      
    }
    z = 0.5;
    a.vx = (a.vx + fx) * z;
    a.vy = (a.vy + fy) * z;
    a.x += a.vx;
    a.y += a.vy;
  }
};
// Adicionar interação com o mouse
let isMouseDown = false;
const canvas = document.getElementById("life");

canvas.addEventListener("mousedown", () => {
  isMouseDown = true;
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});

canvas.addEventListener("mousemove", (event) => {
  if (!isMouseDown) {
    return;
  }
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  for (let i = 0; i < atoms.length; i++) {
    const a = atoms[i];
    const dx = mouseX - a.x;
    const dy = mouseY - a.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 100) {
      const F = (100 - d) / 100 * 5;
      a.vx -= dx * F;
      a.vy -= dy * F;
    }
  }
});
	  yellow = create(200, "yellow");
	  red = create(150, "red");
	  green = create(150, "green");
	  blue = create(150, "blue");
	  white = create(75, "rgba(0, 255, 255, .1)");
	  black = create(15, "rgba(0, 0, 0, .3)");

	  /*Interação Base*/

			greenGreen = -0.32;
	  	greenRed = -0.17;
	  	greenYellow = 0.34;
	  	greenBlue = 0;
	  	
	  	redRed = -0.1;
	  	redGreen = -0.34;
	  	redBlue = 0;
	  	redYellow = 0;

	  	yellowYellow = 0.15;
	  	yellowGreen = -0.2;
	  	yellowRed = 0;
	  	yellowBlue = 0;

	  	blueBlue = -1;
	  	blueGreen = -1;
	  	blueRed = -1;
	  	blueYellow = 0.75;

	  	whiteWhite = 0.01;
	  	whiteGreen = 0.05;
	  	whiteRed = 0.01;
	  	whiteYellow = 0.05;
	  	whiteBlue = 0.01;
	  	whiteBlack = 0.01;

	    blackBlack = -0.01;
	    blackGreen = 0.01;
	    blackRed = 0.01;
	    blackYellow = 0.01;
	    blackBlue = 0.01;
	    blackWhite = -0.01;




	 function updateRules() {


	  greenGreen = document.getElementById("greenGreen").valueAsNumber;
	  greenRed = document.getElementById("greenRed").valueAsNumber;
	  greenYellow = document.getElementById("greenYellow").valueAsNumber;
	  greenBlue = document.getElementById("greenBlue").valueAsNumber;
	  

	  redRed = document.getElementById("redRed").valueAsNumber;
	  redGreen = document.getElementById("redGreen").valueAsNumber;
	  redYellow = document.getElementById("redYellow").valueAsNumber;
	  redBlue = document.getElementById("redBlue").valueAsNumber;
	  
	  
	  yellowYellow = document.getElementById("yellowYellow").valueAsNumber;
	  yellowGreen = document.getElementById("yellowGreen").valueAsNumber;
	  yellowRed = document.getElementById("yellowRed").valueAsNumber;
	  yellowBlue = document.getElementById("yellowBlue").valueAsNumber;


	  blueBlue = document.getElementById("blueBlue").valueAsNumber;
	  blueGreen = document.getElementById("blueGreen").valueAsNumber;
	  blueRed = document.getElementById("blueRed").valueAsNumber;
	  blueYellow = document.getElementById("blueYellow").valueAsNumber;

	}

	  update = () => {

	    rule(black, black, blackBlack);
	    rule(black, green, blackGreen);
	    rule(black, red, blackRed);
	    rule(black, yellow,blackYellow);
	    rule(black, blue, blackBlue);
	    rule(black, white, blackWhite);


	    rule(green, green, greenGreen);
	    rule(green, red, greenRed);
	    rule(green, yellow, greenYellow);
	    rule(green, blue, greenBlue);
	    
	    rule(red, red, redRed);
	    rule(red, green, redGreen);
	    rule(red, yellow, redYellow);
	    rule(red, blue, redBlue);
	    
	    rule(yellow, yellow, yellowYellow);
	    rule(yellow, green, yellowGreen);
	    rule(yellow, red, yellowRed);
	    rule(yellow, blue, yellowBlue);
	    
	    rule(blue, blue, blueBlue);
	    rule(blue, green, blueGreen);
	    rule(blue, red, blueRed);
	    rule(blue, yellow, blueYellow);

	    rule(white, white, whiteWhite);
	    rule(white, green, whiteGreen);
	    rule(white, red, whiteRed);
	    rule(white, yellow,whiteYellow);
	    rule(white, blue, whiteBlue);
	    rule(white, black, whiteBlack);


	    
	   m.clearRect(0, 0, 800, 600);
var gradient = m.createLinearGradient(0, 0, 0, 600);
gradient.addColorStop(1, "rgba(0, 0, 0, 0.5)"); // preto
gradient.addColorStop(0, "rgba(100, 5, 180, 0.5)"); // roxo

draw(0, 0, gradient, 800, 600);
for (i = 0; i < atoms.length; i++) {
  drawParticle(atoms[i].x, atoms[i].y, atoms[i].color, 5);
}
	    requestAnimationFrame(update);
	    
	  };
	  update();