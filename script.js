// script.js

function changeColor(boxId, codeId, color) {
    document.getElementById(boxId).style.backgroundColor = color;
    document.getElementById(codeId).textContent = color;
  }
  
  function changeColorByCode(boxId, codeId, color) {
    if (/^#[0-9A-F]{6}$/i.test(color)) {
      document.getElementById(boxId).style.backgroundColor = color;
      document.getElementById(codeId).textContent = color;
    }
  }
  