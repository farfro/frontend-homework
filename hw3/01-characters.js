// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
let div, img, fname, title;
let sect = document.querySelector('section');

const create = (element) => {
    div = document.createElement('div');
    img = document.createElement('img');
    fname = document.createElement('p');
    title = document.createElement('p');
    div.style.width = '180px';
    img.src = element.imageUrl;
    img.alt = element.fullName;
    fname.textContent = element.fullName;
    title.textContent = element.title;
    title.style.marginBottom = '40px';
    div.append(img);
    div.append(fname);
    div.append(title);
    sect.append(div);
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            create(element);
        });
    })
    .catch(error => console.log(error))


