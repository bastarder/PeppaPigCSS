window.onload = function(){
  const $ = document.querySelector.bind(document);
  let pig = $('.draw');
  let head = $('.head');
  
  pig.addEventListener('mousemove', function({x, y}) {
    let transform = x > 0 && x < 114 ? "rotateY(0deg) " : "rotateY(180deg) ";

    head.style.transform = transform + "rotate(-" +  Math.min(Math.max(y - 38, 0), 60) + "deg)";
  })
}