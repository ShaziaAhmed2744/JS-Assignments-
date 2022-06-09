LudoGame = () =>{
    const Play1 = Math.floor(Math.random() * 6) + 1;
    const Play1Dice ="images/D1"+Play1+".png";
    document.getElementById('check1').setAttribute('src' , Play1Dice);

    const Play2 = Math.floor(Math.random() * 6) + 1;
    const Play2Dice ="images/D1"+Play2+".png";
    document.getElementById('check2').setAttribute('src' , Play2Dice);
  
if(Play1 > Play2)
   {document.querySelector('h1').innerHTML="Player 1 Won" ;
}else if(Play1 <Play2){
    document.querySelector('h1').innerHTML="Player 2 Won" ;
}else{document.querySelector("h1").innerHTML="DRAW";}
}


