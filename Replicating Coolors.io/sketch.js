//define empty arrays that store colours,names and the actual colour codes

let palette = [];
let hex = [];
let colourNames = [];
let shades = [];

//modify these variables for dramatic colour shifts
var hueStep = 4;
const clhStep = 3;

function setup() {
  //load fonts

  nblack = loadFont("nordica/NordicaBlack.otf");
  nhairLine = loadFont("nordica/NordicaHairline.otf");
  nregular = loadFont("nordica/NordicaRegular.otf");
  nthin = loadFont("nordica/NordicaThin.otf");

  //generate colours to the current window size
  createCanvas(windowWidth, windowHeight);

  //background as black
  background(255);

  //make the colours not have any edges
  noStroke();
  //generate colours until no duplicates
  do {
    colourCreator();
  } while (hasDuplicates(colourNames) === true);

  mouseChecker();
}

//colourCreator will be of size 5 (any size can theoretically be used)
function colourCreator(paletteSize = 5) {
  //ensure arrays are empty
  palette = [];
  hex = [];
  colourNames = [];

  //begins by generating hue,chroma and lightness
  let h = random(360);
  let c = randomGaussian(60, 1);
  let l = randomGaussian(40, 1);

  //increase variety in l and c values
  if (random() > 0.5) {
    c = random(100, 150) - c;
  }
  if (random() > 0.5) {
    l = random(100, 150) - l;
  }

  //second filter for hcl values to increase variety
  const hChange = randomGaussian(11, 3.6) * (random() > 0.5 ? 1 : -1);
  const cChange = randomGaussian(15, 6) * (c < 60 ? 1 : -1);
  const lChange = randomGaussian(15, 6) * (l < 60 ? 1 : -1);

  for (let i = 0; i < paletteSize; i++) {
    //generator colour palette based on above using chroma library
    const newColor = chroma.lch(l, c, h);
    //hex line to only use codes
    const colourHex = newColor.hex().toUpperCase();
    //const colourHex = newColor.hex().replace("#", "").toUpperCase();

    //using the ntc library to generate the nearest colour name
    const colourName = ntc.name(newColor.hex());

    //push values to array
    palette.push(newColor);
    hex.push(colourHex);
    colourNames.push(colourName[1]);

    //step changes to generate next set of colours
    h += randomGaussian(hChange, hueStep);
    c += randomGaussian(cChange, clhStep);
    l += randomGaussian(lChange, clhStep);
  }

  palette = palette.sort((c1, c2) => c1.get("lch.l") < c2.get("lch.l"));
}

function draw() {
  const stepWidth = width / palette.length;

  //scaler for the text
  const tSizeHex = stepWidth / 6;
  const tSizeNames = stepWidth / 12;

  palette.forEach((c, i) => {
    fill(c.css());
    rect(stepWidth * i, 0, stepWidth, height);
  });

  //native HTML5 Canvas functionality for text drop shadows
  drawingContext.shadowColor = color(0, 0, 0, 100);
  drawingContext.shadowBlur = 5;
  drawingContext.shadowOffsetY = 4;
  drawingContext.shadowOffsetX = 8;

  hex.forEach((hexID, iteration) => {
    textSize(tSizeHex);
    step = stepWidth * iteration;
    stephalf = stepWidth / 2;
    cWidth = textWidth(hexID) / 2;

    textFont(nblack);
    fill("white");
    text(hexID, step + stephalf - cWidth, height / 2);
  });

  colourNames.forEach((name, i) => {
    textSize(tSizeNames);
    st = stepWidth * i;
    ste = stepWidth / 2;
    cWid = textWidth(name) / 2;

    ypos = height / 2.5;
    fill("white");
    textFont(nregular);
    text(name, st + ste - cWid, ypos);
  });
  mouseChecker(tSizeHex);
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function mouseChecker() {
  drawingContext.shadowColor = color(0, 0, 0, 0);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      const stepWidth2 = width / palette.length;
      const stepArray = [];
      for (var i = 0; i < palette.length; i++) {
        stepArray.push(i * stepWidth2);
      }
      const lowerBound = binarySearch(stepArray, mouseX);
      //console.log(colourNames[lowerBound], hex[lowerBound]);

      //fill(palette[lowerBound].css());
      //rect(stepArray[lowerBound], 0, stepWidth2, windowHeight);

      generateShades(
        stepArray[lowerBound],
        stepWidth2,
        palette[lowerBound].css()
      );
    }
  }
}

function binarySearch(array, el) {
  var m = 0;
  var n = array.length - 1;
  while (m <= n) {
    var k = (n + m) >> 1;
    var cmp = el - array[k];
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return [k, k + 1];
    }
  }
  return n;
}

function keyPressed() {
  if (key === " ") colourCreator();
}

function generateShades(startPos, stWidth, stepColour) {
  drawingContext.shadowColor = color(0, 0, 0, 0);
  const stepHeight = height / 25;

  let shadeHolders = [];
  let shadeNames = [];

  const colourChecker = chroma(stepColour).get("hsl.l");
  var colourToUse;
  var fontColour = "white";

  if (colourChecker >= 0.5) {
    colourToUse = "black";
    //fontColour = "white";
  } else {
    colourToUse = "White";
    //fontColour = "black";
  }

  const colourScale = chroma.scale([stepColour, colourToUse]).colors(25);

  for (let i = 0; i < colourScale.length; i++) {
    var shadeName = ntc.name(colourScale[i]);
    var shadeHex = colourScale[i].toUpperCase();
    shadeNames.push(shadeName[1]);
    shadeHolders.push(shadeHex);
  }

  for (let i = 0; i < 25; i++) {
    drawingContext.shadowColor = color(0, 0, 0, 0);
    textSize(stepHeight / 2);
    let step = stepHeight * i;
    shSt = stWidth;
    shSte = stWidth / 2;
    shadeWid = textWidth(shadeHolders[i]) / 2;
    let baseX = shSte - shadeWid + startPos;

    fill(colourScale[i]);
    rect(startPos, stepHeight * i, stWidth, stepHeight + 1);
    fill(fontColour);
    textFont(nregular);
    drawingContext.shadowColor = color(0, 0, 0, 100);
    text(shadeHolders[i], baseX, step + 3 * (stepHeight / 4.5));
  }
}
