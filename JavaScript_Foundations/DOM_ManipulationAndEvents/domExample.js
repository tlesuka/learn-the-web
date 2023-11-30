const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(
    '- the premier source for web development knowledge.',
);
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

//sect.appendChild(linkPara); moves the node to the bottom of the section
//sect.removeChild(linkPara); - removes the node


//manipulating styles:
//para.style.color = 'white'; para.style.background = 'black'; para.style.padding = '10px'; para.style.width = '250px'; para.style.textAlign = 'center';
para.setAttribute('class', 'highlight'); //the CSS is still applied to the paragraph, but this time by giving it a class that is selected by our CSS rule, not as inline CSS styles.