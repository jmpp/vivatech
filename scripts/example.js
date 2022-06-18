
// S'exécute une seule fois lors du démarrage du programme
function setup() {
  createCanvas(windowWidth, windowHeight)

  createText()
  createBulles()
}

// S'exécute continuellement, pour l'animation à ~60fps
function draw() {
  blendMode(BLEND)
  background(255)
  blendMode(MULTIPLY)

  drawBulles()
  drawText()
}

// ==============================
// === FONCTIONS DU PROGRAMME ===
// ==============================

let vivatech = {}
let bulles = []

function createText() {
	vivatech.text = 'VivaTech\nCode'
	vivatech.x = width / 2
  vivatech.y = height / 2
  vivatech.speed = 1
	vivatech.width = textWidth('VivaTech\nCode')
	vivatech.top = textAscent('VivaTech\nCode')
	vivatech.bottom = textDescent('VivaTech\nCode')
}

function createBulles() {
	for (let i = 0; i < 50; i++) {
    let size = random(5, 40)
    let speed = norm(size, 5, 40) + 2

    bulles.push({
      x: random(0, width),
      y: random(0, height),
      size: size,
      speed: speed,
      color: random([
        'indigo',
        'deeppink',
        'deepskyblue',
        'darkturquoise',
        'greenyellow',
        'gold',
        'crimson',
      ]),
    })
  }
}


function drawText() {
  vivatech.x += vivatech.speed

  /* let gradient = drawingContext.createLinearGradient(
    vivatech.x - vivatech.width / 2,
    vivatech.y - vivatech.top,
    vivatech.x - vivatech.width / 2 + vivatech.width,
		vivatech.y
  ) */
  let gradient = drawingContext.createLinearGradient(
    0, 0, width, height
  )

	gradient.addColorStop(1 / 7, 'darkviolet')
	gradient.addColorStop(2 / 7, 'deeppink')
	gradient.addColorStop(3 / 7, 'deepskyblue')
	gradient.addColorStop(4 / 7, 'darkturquoise')
	gradient.addColorStop(5 / 7, 'greenyellow')
	gradient.addColorStop(6 / 7, 'gold')
	gradient.addColorStop(7 / 7, 'crimson')

  if (vivatech.x + vivatech.width / 2 > width) vivatech.speed *= -1
  if (vivatech.x - vivatech.width / 2 < 0) 		vivatech.speed *= -1
  if (vivatech.y + vivatech.bottom > height) 		textSpeedY *= -1
  if (vivatech.y - vivatech.top < 0) 					textSpeedY *= -1

	blendMode(BLEND)
  drawingContext.fillStyle = gradient
	// fill('black')
  textSize(64)
  textAlign(CENTER)
  textStyle(BOLD)
  text(vivatech.text, width / 2, height / 2)
}

function drawBulles() {
  bulles.forEach((b) => {
    b.y -= b.speed
    b.x += random(-1, 1)

    if (b.y <= 0) {
      b.y = height
    }

    fill(b.color)
    noStroke()
    ellipse(b.x, b.y, b.size, b.size)
  })
}


