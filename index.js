function getFirstSelector(el) {
  return document.querySelector(el)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function deepestChild() {
  let parent = document.getElementsById("grand-node")
  let child = parent.querySelectorAll('div')

  for (let i = 0; i < child.length; i++) {
    if ()
  }

  return node
}
