
var paper = document.querySelector(".paper");
var html = document.querySelector("html")

function setRootFontSize() {
    
    if (paper!=null)  html.style.fontSize = parseFloat(getComputedStyle(paper).getPropertyValue('height'))/100 +'px';
    //console.log(html.style.fontSize);
}
  addEventListener("load",setRootFontSize);
  addEventListener("resize", setRootFontSize);
  