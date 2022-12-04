// Your code goes here

document.addEventListener("DOMContentLoaded",showNewElement);


function showNewElement() {
  let intialParagraph = document.querySelector('p');
  let updatedParagraph = document.createElement('p');
  updatedParagraph.id = "text";
  updatedParagraph.innerHTML = "This is really cool!"
  document.body.replaceChild(updatedParagraph,intialParagraph);

}