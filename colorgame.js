var numberofsquares=6;
var colors=generateRandomColors(numberofsquares);//function which will different color to all the square
var pickedcolor=pickcolor();
var squares = document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");//diffrence bw querySelector and querySelectorAll in js
var reset=document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")
//var h1too=document.querySelector(".")
easyBtn.addEventListener("click",function()
{
      easyBtn.classList.add("selected")//a way to add or manipulate things 
      hardBtn.classList.remove("selected")
      numberofsquares=3;
      colors=generateRandomColors(numberofsquares);//generate color
      pickedcolor=pickcolor();//color to be picked
      colordisplay.textContent=pickedcolor;//display colors to be picked
      for(var i=0;i<squares.length;i++)
      {
         if(colors[i])//this means that it exist or is true	
            {
            	squares[i].style.background=colors[i];//to change colors of square
     }
     else{
     	squares[i].style.display="none"
     }
      }
      h1.style.background="steelblue";
})

hardBtn.addEventListener("click",function()
{
	 easyBtn.classList.remove("selected")
     hardBtn.classList.add("selected")
     numberofsquares=6;
     colors=generateRandomColors(numberofsquares);//generate color
     pickedcolor=pickcolor();//color to be picked
     colordisplay.textContent=pickedcolor;//display colors to be picked
      for(var i=0;i<squares.length;i++)
      {
          squares[i].style.background=colors[i];//to change colors of square
          squares[i].style.display="block"
    }
    h1.style.background="steelblue";
}     
)


for(var i=0;i<squares.length;i++)
{  
	squares[i].style.background=colors[i];
//add initial color to squares
  
     
	squares[i].addEventListener("click",function()
	{
	  //grab color of clicked square
	  var clickedcolor = this.style.background;
	  //compare color to pickedcolor
	  if(clickedcolor === pickedcolor)
	  {
	  	//console.log(clickedcolor)
	 	message.textContent="Correct"
	 	changecolors(clickedcolor);
	 	h1color(clickedcolor);
	 	reset.textContent="playAgain"

	 }
	 else
	  {  
	  	this.style.background="#232323"
	  	message.textContent="Try again Noob"
	  }
	});	
};
function changecolors(color)
{//for all colors to change to the same color
    for(var i=0;i<colors.length;i++)
    {squares[i].style.background=color;//to change all the square color and this function is called in the for loop
    }
}
function pickcolor()//used to pick a color form total colors present
{
	var random= Math.floor(Math.random()*colors.length)
	return colors[random];
}
 function generateRandomColors(num)//function used to push color generated in the the arr
 {
     var arr=[]
     for(var i=0;i<num;i++)
     {//get random color
         arr.push(randomcolor())//
     }
     return arr;
 }
function randomcolor()//function used to generate different color
{
    //pick a "red" from 0-255
    //pick a "green" from 0-255
    //pick a "blue" from 0-255
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    "rgb(r,g,b)"
     return "rgb(" + r + ", " + g +  ", " + b + ")";
}
function h1color(color)
{
	h1.style.background=color;
}
reset.addEventListener("click",function()
{
	//generate all new color 
	colors=generateRandomColors(numberofsquares);
	//pick a new color fron array
	pickedcolor=pickcolor();
	//change colordisplay to be matched 
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	message.textContent=""
	h1.style.background="steelblue"//color given to h1 when we click newcolor 
    this.textContent="New color "

})