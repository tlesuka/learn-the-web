const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redp = document.createElement('p');
redp.classList.add('redp');
redp.textContent = 'Hey I`m red!';
redp.style.color = 'red';
container.appendChild(redp);

const blueh3 = document.createElement('h3');
blueh3.classList.add('blueh3');
blueh3.textContent = 'I`m a blue h3!';
blueh3.style.color = 'blue';
container. appendChild(blueh3);

const blackdiv = document.createElement('div');
blackdiv.classList.add('blackdiv');
blackdiv.setAttribute('style', 'background: black');
container. appendChild(blackdiv);


const divh1 = document.createElement('h1');
divh1.classList.add('divh1');
divh1.textContent = 'I`m a div!';
divh1.style.color = 'white';
blackdiv.appendChild(divh1);

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Me too!';
p.style.color = 'white';
blackdiv.appendChild(p);

