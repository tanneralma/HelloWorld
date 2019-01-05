function openShareModal() {
    //Get the share link
    var shareLink = document.getElementById('shareModalText');
    
    // Get the modal
    var shareModal = document.getElementById('shareModal');

    // Get the <span> element that closes the modal
    var spanModal = document.getElementsByClassName('closeModal')[0];

    // When the user clicks the button, open the modal 
    shareLink.onclick = function() {
        shareModal.style.display = "block";
    }

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