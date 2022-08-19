document.querySelector('.i-11').value = ''
function t11(e) {
  document.querySelector('.i-11').value = ''
  let num = document.querySelectorAll('.num')
  let str = document.querySelectorAll('.key')
  let func = document.querySelectorAll('.func')
  console.log(e);
  for (let key of num) {
    if (key.getAttribute('data-num') == e.key) {
      key.classList.add("active")
    }
    else {
      key.classList.remove("active")
    }
  }

  for (let key of str) {
    if (key.getAttribute('data-key') == e.key) {
      key.classList.add("active")
    }
    else {
      key.classList.remove("active")
    }

  }
  for (let key of func) {
    if (key.getAttribute('data-func') == e.code) {
      key.classList.add("active")
    }
    else {
      key.classList.remove("active")
    }
  }
  if (e.code.startsWith('Digit')) {
    document.querySelector('.out-11').innerHTML += e.code.replace('Digit', '') + ' '
  }
  else if (e.code.startsWith('Key')) {
    document.querySelector('.out-11').innerHTML += e.code.replace('Key', '') + ' '
  }

}
document.querySelector('.i-11').onkeydown = t11;