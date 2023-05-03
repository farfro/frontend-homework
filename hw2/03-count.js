// Add your code here

//https://stackoverflow.com/questions/74904016/how-to-highlight-all-matching-words-in-a-paragraph-when-searching-multiple-words

let input = document.querySelector('#word');
let para = document.querySelector('#find');
let body = document.querySelector('body').style.backgroundColor = 'rgb(0,95,63)';

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        let word = new RegExp('\\b' + input.value + '\\b', "g");
        let find = para.textContent;
        para.innerHTML = find.replace(word, `<span style="background-color: yellow;">${input.value}</span>`);
    }
});


