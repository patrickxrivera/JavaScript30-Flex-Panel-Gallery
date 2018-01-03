const panels = getAllElements('.panel');

function getAllElements(element) {
  let listOfElements = document.querySelectorAll(`${element}`);
  return Array.from(listOfElements);
}

panels.forEach(panel => {
  addClickEvent(panel);
  addTransitionEndEvent(panel);
});

function addClickEvent(element) {
  element.addEventListener('click', toggleOpen);
}

function addTransitionEndEvent(element) {
  element.addEventListener('transitionend', toggleActive);
}

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
