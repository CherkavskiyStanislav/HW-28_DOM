// // Task 1
document.querySelector('h2').nextElementSibling.innerHTML = 'DOM method description';

// // Task 2

function getUaLinks() {
    const links = document.querySelectorAll('a[href^="site.ua/ua/"]');
    return links;
}
const uaLinks = getUaLinks();
for (let i = 0; i < uaLinks.length; i++){
    console.log(uaLinks[i]);
}

// // Task 3

const zero = document.createElement('li');
zero.innerText = '0';
zero.id = 'null';
document.getElementById('first').before(zero);

const second = document.createElement('li');
second.innerText = '2';
second.id = 'second';
document.getElementById('first').after(second);

const fourth = document.createElement('li');
fourth.innerText = '4';
fourth.id = 'fourth';
document.getElementById('third').after(fourth);

// // Task 4

const ul = document.getElementById('ul');
const link = document.createElement('a');
link.id = 'link';
link.href = 'https//dom.spec.whatwg.org/';

link.append(ul.nextElementSibling);
ul.after(link);

