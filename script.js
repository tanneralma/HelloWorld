// Open on click
function openShareModal() {
    //G et the share link
    var shareLink = document.getElementById('shareModalText');
    
    // Get the modal
    var shareModal = document.getElementById('share-modal');

    // Get the <span> element that closes the modal
    var spanModal = document.getElementsByClassName('closeModal')[0];

    // When the user clicks the button, open the modal 
    shareModal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    spanModal.onclick = function() {
        shareModal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == shareModal) {
            shareModal.style.display = "none";
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