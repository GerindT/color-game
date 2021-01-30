var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn= document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");


init();

function init (){
    //mode buttons
    setupModeButton();
    setupSquares();
    reset();
}

function setupModeButton(){
    for(var i=0; i< mode.length; i++){
        mode[i].addEventListener("click",function()
        {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares =3: numberOfSquares=6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i<squares.length ; i++){
        //listeners
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            //compare color
            if(clickedColor === pickedColor){
                messageDisplay.textContent="Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor= clickedColor;
                resetBtn.textContent="Play Again?";
            }
            else{
               this.style.backgroundColor="#232323";
               messageDisplay.textContent="Try Again";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numberOfSquares);

    pickedColor = pickColor();
 
    messageDisplay.textContent="";
    colorDisplay.textContent=pickedColor;
    resetBtn.textContent = "New Colors";
    for(var i = 0; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.display = colors[i];
        }
        else{
            squares[i].style.display="none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";

}

resetBtn.addEventListener("click", function(){
  reset();
})

function changeColors(color){
    //loop
    for(var i = 0; i<squares.length ; i++)
    {
        //change color
        squares[i].style.backgroundColor= color;
    };
}

function pickColor(){
var random=Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
    //make arr
    var arr=[];
    //add random
    for(i=0;i<num;i++){
        //get random and push 
    arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    //pick red
    var r=Math.floor(Math.random() * 256);
    //pick green
    var g=Math.floor(Math.random() * 256);
    //pick blue
    var b=Math.floor(Math.random() * 256);
    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}