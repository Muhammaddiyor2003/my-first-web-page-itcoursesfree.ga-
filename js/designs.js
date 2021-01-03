let c = document.getElementById('pixelCanvas');

let d = document.getElementById('colorPicker');
document.body.addEventListener('submit', function (event) {
  event.preventDefault();
 
  makeGrid();
});
function clearGrid() {
    const tr = document.querySelectorAll('tbody');
    tr.forEach(function(w) {
      w.remove();
    })
}
function makeGrid() {
  const tra = document.querySelectorAll('tbody');
    tra.forEach(function(w) {
      w.remove();
    })
  let a = document.getElementById('inputHeight');
  let b = document.getElementById('inputWidth');
    for (var i = 0; i < a.value; i++) {
      c.insertAdjacentHTML('afterbegin', '<tr>');
      for (var r = 0; r < b.value; r++) {
        const td = document.querySelectorAll('tr');
        td[i].insertAdjacentHTML('afterbegin', '<td>');
        const tr = document.querySelectorAll('td');
        tr[r].addEventListener('click', color);
        
      }
    }
}
