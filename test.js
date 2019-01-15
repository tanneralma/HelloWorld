function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("imageSource", dragevent.target.src);
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("imageSource");
    dropevent.target.src = data;
}