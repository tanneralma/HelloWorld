// Open modal on click
function openModal(modal, spanModal) {
    // Get the modal
    var modal = document.getElementById(modal);

    // Get the <span> element that closes the modal
    var spanModal = document.getElementById(spanModal);

    // When the user clicks the button, open the modal 
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    spanModal.onclick = function() {
        modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Copy to clipboard on click
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
}
//word randomizer
var myArrayOne = [
    "Apples",
    "Bananas",
    "Pears"
  ];
  
  var randomItem = myArrayOne[Math.floor(Math.random()*myArray.length)];
    document.footer.innerHTML = randomItem;
// Drag and drop grid

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("./drop/Horizontal Hallway.jpg", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("./drop/Horizontal Hallway.jpg");
    ev.target.appendChild(document.getElementById(data));
  } 
