var t_button = document.querySelectorAll(".drum").length;
// thi is for buttonpress
for (var i = 0; i < t_button; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button_html = this.innerHTML;
    drum_sound(button_html);
    key_animation(button_html);
    
  });
}
// this is for keypress
  document.addEventListener("keydown", function(event) {
    drum_sound(event.key);
    key_animation(event.key);
  });

  function drum_sound(key) {
    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      default:
        break;
    }
  }

  function key_animation(currentkey) {
    var active_key=document.querySelector("."+currentkey);
    active_key.classList.add("pressed");
  }

