window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
/*var configuracion = {
numCirculos:149,
radio:4,
colorCirculos:'#e5249e',
randomTam:true,
circulosConexion:false,
lineasConexion:true,
circulosMouse:false,
lineasMouse:true,
opacidadCirculo:1,
colision:true,
colorConexion:'#b64994',
rellenoInteraccion:false,
opacidadCircunferencia:1,
distanciaConexion:93,
distanciaMouse:143,
anchoCircunferencia:1,
anchoConexion:0.3,
masaRandom:true,
colorRandom:false
}*/
var configuracion = {
numCirculos:151,
radio:16,
colorCirculos:'#e5249e',
randomTam:false,
circulosConexion:false,
lineasConexion:false,
circulosMouse:false,
lineasMouse:true,
opacidadCirculo:1,
colision:true,
colorConexion:'#b64994',
rellenoInteraccion:true,
opacidadCircunferencia:1,
distanciaConexion:93,
distanciaMouse:143,
anchoCircunferencia:1,
anchoConexion:0.3,
masaRandom:false,
colorRandom:true
}
if (window.mobileCheck()) {
  var maxCircles = 150;
  var maxRadius = 15;
  configuracion.numCirculos = configuracion.numCirculos < maxCircles? configuracion.numCirculos : maxCircles;
  configuracion.radio = configuracion.radio < maxRadius? configuracion.radio : maxRadius;
}
const random = (n, m) =>  {
 return Math.floor(Math.random() * (m - n) + n);
};
function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

function distancia(x1,y1,x2,y2){
  var dx = Math.pow(x2-x1,2);
  var dy = Math.pow(y2-y1,2);
  return Math.sqrt(dx+dy);
}
function medio(x1,y1,x2,y2){
  var x = (x1+x2)/2;
  var y = (y1+y2)/2;
  return new Array(x,y);
}

function rota(velocidad, angulo) {
    const velocidadesRotadas = {
        x: velocidad.x * Math.cos(angulo) - velocidad.y * Math.sin(angulo),
        y: velocidad.x * Math.sin(angulo) + velocidad.y * Math.cos(angulo)
    };

    return velocidadesRotadas;
}

function resuelveColision(circulo, otroCirculo) {
   const xVelocityDiff = circulo.velocidad.x - otroCirculo.velocidad.x;
   const yVelocityDiff = circulo.velocidad.y - otroCirculo.velocidad.y;

   const xDist = otroCirculo.x - circulo.x;
   const yDist = otroCirculo.y - circulo.y;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist <= 0){
      // Grab angulo between the two colliding circulos
      const angulo = -Math.atan2(otroCirculo.y - circulo.y, otroCirculo.x - circulo.x);

      // Store mass in var for better readability in collision equation
      const m1 = circulo.masa;
      const m2 = otroCirculo.masa;

      // Velocity before equation
      const u1 = rota(circulo.velocidad, angulo);
      const u2 = rota(otroCirculo.velocidad, angulo);

      // Velocity after 1d collision equation
      const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
      const v2 = { x: u2.x * (m2 - m1) / (m1 + m2) + u1.x * 2 * m1 / (m1 + m2), y: u2.y };

      // Final velocity after rotating axis back to original location
      const vFinal1 = rota(v1, -angulo);
      const vFinal2 = rota(v2, -angulo);

      // Swap circulo velocities for realistic bounce effect
      circulo.velocidad.x = vFinal1.x;
      circulo.velocidad.y = vFinal1.y;

      otroCirculo.velocidad.x = vFinal2.x;
      otroCirculo.velocidad.y = vFinal2.y;
    }

}

function randomColor(opacidad){
  return 'rgba('+random(0,256)+','+random(0,256)+','+random(0,256)+','+opacidad+')';
}
var posX = 0;
var posY = 0;
window.addEventListener('mousemove',function(event){
  posX = event.clientX;
  posY = event.clientY;
})

const canvas = document.querySelector('canvas') // Grab canvas from DOM
canvas.width = window.innerWidth // Set canvas' width to full width of window
canvas.height = window.innerHeight
const c = canvas.getContext('2d') // Get context to access 2D canvas functions
c.globalCompositeOperation='destination-over';


var cm;
function Circulo (x,y,radio,dx,dy,color,masa,circulosConexion,lineas,circulosMouse,
  lineasMouse,opacidadCirculo,colision,colorConexion,rellenoInteraccion,
  opacidadCircunferencia,distanciaConexion,distanciaMouse,anchoCircunferencia,
anchoConexion){
 this.x=x;
 this.y=y;
 this.velocidad = {
   x: dx,
   y: dy
 };
 this.radio=radio;
 this.color = color;
 this.masa = masa;
 this.circulosConexion = circulosConexion;
 this.lineas = lineas;
 this.circulosMouse = circulosMouse;
 this.lineasMouse = lineasMouse;
 this.opacidadCirculo = opacidadCirculo;
 this.colision = colision;
 this.colorConexion = colorConexion;
 this.rellenoInteraccion = rellenoInteraccion;
 this.rellenoOpacidad =  0;
 this.opacidadCircunferencia = opacidadCircunferencia;
 this.distanciaConexion = distanciaConexion;
 this.distanciaMouse=distanciaMouse;
 this.anchoCircunferencia = anchoCircunferencia;
 this.anchoConexion = anchoConexion;

 this.dibuja = function(){
   c.beginPath();

   if (!this.rellenoInteraccion) {
     c.beginPath();
     c.arc(this.x,this.y, this.radio, 0, 2 * Math.PI);
     c.save();
     c.globalAlpha = this.opacidadCirculo;
     c.fillStyle = this.color;
     c.fill();
     c.restore();
     c.save();
     c.lineWidth = this.anchoCircunferencia;
     c.globalAlpha = this.opacidadCircunferencia;
     c.strokeStyle = this.color;
     c.stroke();
     c.restore();
   }else{
     c.beginPath();
     c.arc(this.x,this.y, this.radio, 0, 2 * Math.PI);
     c.save();
     c.globalAlpha = this.rellenoOpacidad;
     c.fillStyle = this.color;
     c.fill();
     c.restore();
     c.save();
     c.lineWidth = this.anchoCircunferencia;
     c.globalAlpha = this.opacidadCircunferencia;
     c.strokeStyle = this.color;
     c.stroke();
     c.restore();
   }


 }
 this.actualiza = function(circulos){
   for (var i = 0; i < circulos.length; i++) {

     if(this==circulos[i])
       continue;
     if (distancia(this.x,this.y,circulos[i].x,circulos[i].y) - (this.radio + circulos[i].radio) < 0) {
       if(this.colision){
        resuelveColision(this,circulos[i]);
      }
       // Color random si colisionan
       //this.color = randomColor(0.5);
       //circulos[i].color = randomColor(0.5);
     }
     if (distancia(this.x,this.y,circulos[i].x,circulos[i].y) - (this.radio + circulos[i].radio) < this.distanciaConexion) {
        c.beginPath();
        if (this.lineas) {
          //c.strokeStyle = this.color;
          c.save();
          c.lineWidth = this.anchoConexion;
          c.strokeStyle = this.colorConexion;
          c.moveTo(this.x,this.y)
          c.lineTo(circulos[i].x,circulos[i].y);
          c.closePath();
          c.stroke();
          c.restore();
        }
        if(this.circulosConexion){
          var med = medio(this.x,this.y,circulos[i].x,circulos[i].y);
          c.save();
          c.lineWidth = this.anchoConexion;
          c.beginPath();
          c.strokeStyle = this.colorConexion;
          c.arc(med[0],med[1], 3, 0, 2 * Math.PI);
          c.stroke();
          c.restore();
        }
     }

   }
   if (distancia(posX,posY,this.x,this.y) - this.radio * 2 < this.distanciaMouse) {
     if (this.lineasMouse) {
       //c.lineWidth = 0.5;
       c.save();
       c.lineWidth = this.anchoConexion;
       c.beginPath();
       c.strokeStyle = this.colorConexion;
       c.moveTo(posX,posY);
       c.lineTo(this.x,this.y);
       c.closePath();
       c.stroke();
       c.restore();
     }
     if (this.circulosMouse) {
       var med = medio(posX,posY,this.x,this.y);
       c.save();
       c.lineWidth = this.anchoConexion;
       c.beginPath();
       c.strokeStyle = this.colorConexion;
       c.arc(med[0],med[1], 3, 0, 2 * Math.PI);
       c.stroke();
       c.restore();
     }if (this.rellenoInteraccion && this.rellenoOpacidad <0.5) {
       this.rellenoOpacidad +=0.02;
     }

   }else if(this.rellenoInteraccion) {
     this.rellenoOpacidad -= 0.02;
     this.rellenoOpacidad = Math.max(this.rellenoOpacidad,0);

   }
   if(this.x +this.radio >innerWidth || this.x-this.radio < 0){
     this.velocidad.x*=-1;
   }
   if(this.y +this.radio >innerHeight || this.y-this.radio < 0){
     this.velocidad.y*=-1;
   }
   this.y-=this.velocidad.y;
   this.x-=this.velocidad.x;
   this.dibuja();
 }
}

var circulos =[];
for (var i = 0; i < configuracion.numCirculos; i++) {
  var radio = random(1,configuracion.radio);
  var colorC = configuracion.colorRandom ? randomColor(1): configuracion.colorCirculos;
  var x = random(radio,innerWidth-configuracion.radio);
  var y = random(radio,innerHeight-configuracion.radio);
  var dx = random(-1,2) == 0? 1: -1;
  var dy = random(-1,2) == 0? 1: -1;
  //var masa = radio;
  var masa = configuracion.masaRandom ? random(1,radio+1): radio;
  masa = configuracion.randomTam ? radio : masa;
  //var masa = random(1,500);
  if (circulos.length!=0) {
    for (var j = 0; j < circulos.length; j++) {
      if (distancia(x,y,circulos[j].x,circulos[j].y)-(radio*2)<=0) {
        x = random(configuracion.radio,innerWidth-configuracion.radio);
        y = random(configuracion.radio,innerHeight-configuracion.radio);
        j=-1
      }

    }
  }
  circulos.push(new Circulo(x,y,configuracion.randomTam ? random(1,configuracion.radio): configuracion.radio,dx,dy,colorC,masa,
  configuracion.circulosConexion,configuracion.lineasConexion,configuracion.circulosMouse,configuracion.lineasMouse,
  configuracion.opacidadCirculo,configuracion.colision,configuracion.colorConexion,
  configuracion.rellenoInteraccion,configuracion.opacidadCircunferencia,
  configuracion.distanciaConexion,configuracion.distanciaMouse,
  configuracion.anchoCircunferencia,configuracion.anchoConexion));
}


function anima(){
 requestAnimationFrame(anima);
 c.clearRect(0,0,innerWidth,innerHeight);
 circulos.map((circulo) => circulo.actualiza(circulos));
}

console.log("llegue a aquí")
anima();
