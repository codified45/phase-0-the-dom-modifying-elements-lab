// Write your code here!

// for (let i = 0; i < 3; i++) { const li = document.createElement('li'); li.textContent = (i + 1).toString(); ul.append(li)

const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Jack is the champion";
document.body.append(newHeader);

