var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", sound);
}
function sound() 
{
    var buttoninnerhtml=this.innerHTML;
    makesound(buttoninnerhtml);
    buttonlight(buttoninnerhtml);
}
document.addEventListener("keypress",keysound);
function keysound(event)
{
    makesound(event.key);
    buttonlight(event.key);
}
function makesound(buttoninnerhtml)
{
    switch(buttoninnerhtml)
    {
        case 'w':
            var tom1=new Audio("tom-1.mp3")
            tom1.play();
            break;
        case 'a':
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3=new Audio("tom-3.mp3");
             tom3.play();
            break;
        case 'd':
            var tom4=new Audio("tom-4.mp3");
             tom4.play();
            break;
        case 'j':
            var crash=new Audio("crash.mp3");
             crash.play();
            break;
        case 'k':
            var snare=new Audio("snare.mp3");
             snare.play();
            break;
        case 'l':
            var kick=new Audio("kick-bass.mp3");
             kick.play();
            break;
        default:
            console.log(buttoninnerhtml);
    }
}
function buttonlight(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed"),100});
}
