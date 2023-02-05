// Write your code here!
// selecting #main via query selector
const mainElementByQuery = document.querySelector("#main");
mainElementByQuery.remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = "Jack is the champion";
document.body.prepend(newHeader);

