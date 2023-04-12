const elem = document.querySelector('input');
const result = document.querySelector('p+div');
const notPal = document.createElement('p');
notPal.innerText = 'No, Try again.';
notPal.style.color = 'red';
const pal = document.createElement('p');
pal.innerText = 'Yes, this is Palindrome!';
pal.style.color = 'green';
pal.style.display = 'none';
notPal.style.display = 'none';
result.append(notPal);
result.append(pal);

const process = function the_result(value) {
    switch (value) {
      case 0: {
        pal.style.display = 'none';
        notPal.style.display = 'block';
        break;
      }
      case 1: {
        pal.style.display = 'block';
        notPal.style.display = 'none';
        break;
      }
      case 2: {
        pal.style.display = 'none';
        notPal.style.display = 'none';
        console.log('Error...Enter a positive number.');
        alert('Only enter positive numbers.');
        break;
      }
      default: {
        pal.style.display = 'none';
        notPal.style.display = 'none';
      }
    }
  }
  

const handleInput = function processInput() {
  const pali = () => {
    const input = elem.value;
    const patt = /^[0-9]*$/g;
    const check = input.match(patt);

    const work = check !== null ? check[0] : "";

    if (input !== '') {
      if (work === '') {
        return 2;
      } else {
        let len = work.length;
        for (let i = 0; i < len / 2; i += 1) {
          if (work[i] !== work[len - 1 - i]) {
            return 0;
          }
        }
        return 1;
      }
    } else return -1;
  };

  process(pali());
}

elem.addEventListener('input', handleInput);
