const panels = getAllElements('.panel');

function getAllElements(element) {
  let listOfElements = document.querySelectorAll(`${element}`);
  return Array.from(listOfElements);
}

panels.forEach(panel =>
  addClickEvent(panel)
);

function addClickEvent(element) {
  element.addEventListener('click', toggleTransition);
}

function toggleTransition() {
  this.classList.toggle('open');
  this.classList.toggle('open-active');
}
