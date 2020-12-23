
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");

function clickNoProjetos() {
    text2.style.display = "block";
    text1.style.display = "none";
}

function clickNoSobre() {
    text1.style.display = "block";
    text2.style.display = "none";
}