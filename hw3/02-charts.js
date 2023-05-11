const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(109, 169, 159, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(180, 169, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(45, 152, 200, 0.8)',
  'rgba(255, 190, 66, 0.8)',
  'rgba(245, 80, 120, 0.8)',
  'rgba(95, 152, 102, 0.8)',
  'rgba(103, 120, 245, 0.8)',
  'rgba(230, 109, 64, 0.8)',
  'rgba(78, 109, 186, 0.8)',
  'rgba(83, 162, 200, 0.8)',
  'rgba(140, 190, 102, 0.8)',
  'rgba(110, 129, 109, 0.8)',
  'rgba(78, 192, 119, 0.8)',
  'rgba(122, 119, 164, 0.8)',
  'rgba(58, 119, 106, 0.8)',
  'rgba(183, 112, 180, 0.8)',
  'rgba(140, 195, 172, 0.8)',
  'rgba(160, 129, 109, 0.8)',
  'rgba(178, 102, 119, 0.8)'
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
  'rgba(45, 152, 200, 1)',
  'rgba(255, 190, 66, 1)',
  'rgba(245, 80, 120, 1)',
  'rgba(95, 152, 102, 1)',
  'rgba(103, 120, 245, 1)',
  'rgba(230, 109, 64, 1)',
  'rgba(78, 109, 186, 1)',
  'rgba(83, 162, 200, 1)',
  'rgba(140, 190, 102, 1)',
  'rgba(110, 129, 109, 1)',
  'rgba(78, 192, 119, 1)',
  'rgba(122, 119, 164, 1)',
  'rgba(58, 119, 106, 1)',
  'rgba(183, 112, 180, 1)',
  'rgba(140, 195, 172, 1)',
  'rgba(160, 129, 109, 1)',
  'rgba(178, 102, 119, 1)'
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const renderChart = (obj) => {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: Object.getOwnPropertyNames(obj),
      datasets: [
        {
          label: 'My First Dataset',
          data: Object.values(obj),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

//renderChart();

const families = {
  "Stark": 0,
  "Lannister": 0,
  "Snow": 0,
  "Tarly": 0,
  "Baratheon": 0,
  "Greyjoy": 0,
  "Clegane": 0,
  "Baelish": 0,
  "Seaworth": 0,
  "Drogo": 0,
  "Tyrell": 0,
  "Targaryan": 0,
  "Bolton": 0,
  "Naharis": 0,
  "Mormont": 0,
  "Tarth": 0,
  "Sparrow": 0,
  "Martell": 0,
  "The Red Woman": 0,
  "H'ghar": 0,
  "Sand": 0,
  "Giantsbane": 0,
  "Hodor": 0,
  "Pycelle": 0,
  "Worm": 0,
  "Grand Maester": 0,
  "Bronn": 0,
  "Others": 0
}

async function create() {
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
   }catch(err){
     console.error(err); 
   }
 }

async function count() {
  const data = await create();
  let fix = data.findIndex((element) => element.lastName === 'Targaryen');
  data[fix].lastName = 'Targaryan';
  data.forEach(element => {
    if(element.lastName === 'Unknown' || element.lastName === 'None' || element.lastName === '')
      families["Others"] += 1;
    else
      families[element.lastName] += 1;
  });
  renderChart(families);
}

count();

