class planet {
  constructor(dimensi, jarak, sudut, kecepatan){
    this.dimensi = dimensi;
    this.jarak = jarak;
    this.sudut = sudut;
    this.kecepatan = kecepatan;
  }
}

const matahari = new planet(40,0,0,0);




//planet
const planetsatu = new planet(20,30,1,1)
const planetdua = new planet(15,50,1,3/4)
const planettiga = new planet(20,75,1,1/2)
const planetempat = new planet(15,90,1,1/80)


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0,51,102);
  translate(width/2,height/2);
  
  matahariShow();
  planetsatuShow();
  planetduaShow();
  planettigaShow();
  planetempatShow();
}
//pusat
function matahariShow(){
  noStroke();
  fill(255,255,0);
  circle(matahari.jarak,matahari.jarak,matahari.dimensi);
}


//planetsatu
function planetsatuShow(){
  push();
  
  //orbit
  strokeWeight(2);
  stroke(300);
  noFill();
  circle(0,0,85);

  //planet
  rotate(planetsatu.sudut);
  noStroke();
  fill(255,51,180);
  circle(planetsatu.jarak,planetsatu.jarak,planetsatu.dimensi);
  pop();
  planetsatu.sudut += planetsatu.kecepatan;
}

//planetdua
function planetduaShow(){
  push();
  
  //orbit
  strokeWeight(2);
  stroke(300);
  noFill();
  circle(0,0,142);

  //planet
  rotate(planetdua.sudut);
  noStroke();
  fill(255,153,51);
  circle(planetdua.jarak,planetdua.jarak,planetdua.dimensi);
  pop();  
  planetdua.sudut += planetdua.kecepatan;
}
//planettiga
function planettigaShow(){
  push();
    //orbit
  strokeWeight(2);
  stroke(300);
  noFill();
  circle(0,0,212);
  //planet
  rotate(planettiga.sudut);
  noStroke();
  fill(0,128,255);
  circle(planettiga.jarak,planettiga.jarak,planettiga.dimensi);
  planettiga.sudut += planettiga.kecepatan;
  
 
}
//planetempat
function planetempatShow(){
  push();
  
  //orbit
  strokeWeight(3);
  stroke(300);
  noFill();
  circle(0,0,254);

  //planet
  rotate(planetempat.sudut);
  noStroke();
  fill(204,0,0);
  circle(planetempat.jarak,planetempat.jarak,planetempat.dimensi);
  pop();
  planetempat.sudut += planetempat.kecepatan;
}