


//this is a set sequence for the colours to appear in. This allows it to go through a sequence, which wouldnt happen if it just cycled through them.//
var colors = ["red", "#656565", "#656565", "red", "yellow", "#656565", "#656565", "#656565", " green", "#656565", "#DAA520", "#656565", "red", "#656565", "#656565"];
//this establishes the n variable for use later//
var n = 0;
//this determines the order of colours. it is based on the n variable which by increasing moves the sequence on//
function sequence() {
   one.style.backgroundColor = colors[n];
  two.style.backgroundColor = colors[n + 1];
  three.style.backgroundColor = colors[n + 2];

  n += 3;
  //this stops the n variable getting too high by resetting it to 3 if it is equal to 15//
  if (n == 15){
    n = 3;
  }
}

setInterval(function(){ sequence(); }, 1300);



          //red is  FF4500//
          //green is ADFF2F//
          //orange is DAA520//
          //neutral is 656565//        
          //lights named from top//
     //----------------------------//
 
                
