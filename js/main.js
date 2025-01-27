window.addEventListener("DOMContentLoaded", docReady);


function docReady() {
    window.addEventListener("mousemove", handleMouseMove);
    //window.addEventListener("wheel", debugForScrollWheel);
    /*
    var headerWidth = document.getElementById("header").getBoundingClientRect().width;
    var headerHeight = document.getElementById("header").getBoundingClientRect().height;

    const gapX = headerWidth / 6;
    const gapY = headerHeight / 3;

    var buttons = document.getElementsByClassName("button");
    console.log(buttons.length);
    */


    /*
    // places the icon
    buttons[3].style.marginTop = headerHeight / 10 + "px";
    buttons[3].style.marginLeft = headerHeight / 10 + "px";

    for (let x = 0; x < 3; x++) {
        let but = buttons[x];
        let butX = ((headerWidth / 2) + (headerWidth / 6) * x) + "px";
        let butY = ((headerHeight / 10) + (headerHeight / 3) * x) + "px";


        but.style.transform = "translate(" + butX + "," + butY + ")";
    }

    let buttonBound = buttons[1].getBoundingClientRect();

    let rect1x = buttonBound.left + buttonBound.width / 2;
    let rect1y = buttonBound.top + buttonBound.height / 2;
    let rect1h = buttonBound.height / 2;

    */

    //let rect = document.createElement('span');
    //rect.classList.add("rect");
    //rect.style.height = rect1h + "px";

    //rect.style.transformOrigin = "center";
    //rect.style.transform = "translate(" + rect1x + "px," + rect1y + "px)";

    // rise over run shit??? i hate this. help
    //let gap = Math.hypot(gapX, gapY) * -1;

    //rect.style.transform = "rotate(" + gap + "deg)";

    //document.getElementById("header").appendChild(rect);


    //var letter = document.createElement('span'); // creates a new span for the letter
    //letter.classList.add("letter"); // adds the letter class to the new span
    // letter.style.left = (hMargin + (100 - hMargin * 2) / matrix[row].length * col) + "%";
    //letter.style.top = (vMargin + (100 - vMargin * 2) / matrix.length * row) + "%";
    //letter.innerText =

    //letters = document.getElementsByClassName("letter"); // gets all the letter spans
    //for (var row = 0; row < matrix.length; row++) { // iterates through each row of the word matrix
    //    index = matrix[row].indexOf(word); // searches for the index of the given word
    //document.getElementById("watchFace").appendChild(letter);

    /*
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    {
    width: 960,
    height: 71,
    top: 603,
    bottom: 674,
    left: 360,
    right: 1320
    }
    */
}

function handleMouseMove(mouseEvent) {
    var xRatio = mouseEvent.pageX / window.innerWidth;
    var yRatio = mouseEvent.pageY / window.innerHeight;
    debugForMouse(xRatio, yRatio);
}

function debugForMouse(xRatio, yRatio) {

}

function debugForScrollWheel(e) {
    const delta = Math.sign(e.deltaY);
}