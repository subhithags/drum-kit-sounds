var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", sound);
}

function sound() 
{
    var buttoninnerhtml=this.innerHTML;
    switch(buttoninnerhtml)
    {
        case 'w':
            var tom1=new audio("tom-1.mp3")
            tom1.play();
            break;
        case 'a':
            var tom2=new audio("tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3=new audio("tom-3.mp3");
             tom3.play();
            break;
        case 'd':
            var tom4=new audio("tom-4.mp3");
             tom4.play();
            break;
        case 'j':
            var crash=new audio("crash.mp3");
             crash.play();
            break;
        case 'k':
            var snare=new audio("snare.mp3");
             snare.play();
            break;
        case 'l':
            var kick=new audio("kick.mp3");
             kick.play();
            break;
        default:
            console.log("buttoninnerhtml");
    }

}
