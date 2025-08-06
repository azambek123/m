let a = prompt('text color')
let b = prompt('bg color')


let h1 = document.querySelector('h1')
let body = document.querySelector('body')

body.appendChild(h1)
h1.style.color = a
body.style.backgroundColor = b