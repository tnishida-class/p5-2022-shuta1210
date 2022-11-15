// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

  let s;
  
  rect(10,10,s,s)

  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      fill(200)
      rect(i * 10, j * 10, 5, 5);}
  }
}
// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

  let s;
  
  rect(10,10,s,s)

  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 3; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

if(((i+j)%2)==1){fill(200);
      rect(i * 10, j * 10, 10, 10);
                 fill(255,0,0);ellipse(i*10+5,j*10+5,10)}


  }
}

 for(let i = 0; i < 8; i++){
    for(let j = 3; j < 5; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

if(((i+j)%2)==1){fill(200);
      rect(i * 10, j * 10, 10, 10);
                 noFill();ellipse(i*10+5,j*10+5,10)}

    }
 }

 for(let i = 0; i < 8; i++){
    for(let j = 5; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

if(((i+j)%2)==1){fill(200);
      rect(i * 10, j * 10, 10, 10);
                 fill(0);ellipse(i*10+5,j*10+5,10)}

}
 }
}