var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Crear al jugador Sofía
var Sofia = createSprite(50, 50, 10, 10);
Sofia.shapeColor = "orange";

//Crear las paredes del laberinto (wall1 - wall22)
  var wall1 = createSprite(13, 200, 25, 400);
  var wall2 = createSprite(200, 387, 400, 25);
  var wall3 = createSprite(387, 200, 25, 400);
  var wall4 = createSprite(200, 13, 400, 25);
 // Paredes internas
  var wall5 = createSprite(175, 67, 10, 85);
  var wall6 = createSprite(53, 100, 54, 10);
  var wall7 = createSprite(125, 125, 10, 200);
  var wall8 = createSprite(75, 100, 10, 100);
  var wall9 = createSprite(275, 300, 100, 10);
  var wall10 = createSprite(103, 225, 54, 10);
  var wall11 = createSprite(75, 275, 10, 150);
  var wall12 = createSprite(120, 300, 100, 10);
  var wall13 = createSprite(125, 300, 10, 100);
  var wall14 = createSprite(175, 250, 10, 200);
  var wall15 = createSprite(200, 250, 50, 10);
  var wall16 = createSprite(275, 250, 10, 200);
  var wall17 = createSprite(230, 365, 10, 35);
  var wall18 = createSprite(290, 150, 130, 10);
  var wall19 = createSprite(315, 125, 10, 200);
  var wall20 = createSprite(225, 150, 10, 70);
  var wall21 = createSprite(285, 75, 50, 10);
  var wall22 = createSprite(225, 50, 10, 50);
  
//Crear la copa.
var cup = createSprite(350, 50, 20, 20);
cup.shapeColor = "yellow";
    
function draw() {
//Coloca el fondo y color.
  background("brown");
  
wall1.shapeColor = "green";
wall2.shapeColor = "green";
wall3.shapeColor = "green";
wall4.shapeColor = "green";
wall5.shapeColor = "green";
wall6.shapeColor = "green";
wall7.shapeColor = "green";
wall8.shapeColor = "green";
wall9.shapeColor = "green";
wall10.shapeColor = "green";
wall11.shapeColor = "green";
wall12.shapeColor = "green";
wall13.shapeColor = "green";
wall14.shapeColor = "green";
wall15.shapeColor = "green";
wall16.shapeColor = "green";
wall17.shapeColor = "green";
wall18.shapeColor = "green";
wall19.shapeColor = "green";
wall20.shapeColor = "green";
wall21.shapeColor = "green";
wall22.shapeColor = "green";

//Controles de Sofia.
  if (keyDown("w")) 
{
Sofia.y=Sofia.y-2;
}
  if (keyDown("s")) 
{
Sofia.y=Sofia.y+2;
}  
  if (keyDown("d")) 
{
Sofia.x=Sofia.x+2;
}  
  if (keyDown("a")) 
{
Sofia.x=Sofia.x-2;
}  


drawSprites();
checkwin();
resetSofia();


}



function resetSofia()
{
Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("black");
  background("white");
  text("¡Ganaste!", 100,200);
  
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
