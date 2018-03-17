function getFirstSelector(el) {
  return document.querySelector(el)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function deepestChild() {
  let parent = document.getElementById("grand-node")
  return parent.querySelector('div div div div')
}
