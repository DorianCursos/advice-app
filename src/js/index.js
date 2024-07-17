// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const buttonGenerateElement = document.getElementById('button-generate');

const printAdvide = (id, advice) => {
  adviceIdElement.textContent = `ADVICE #${id}`;
  adviceTextElement.textContent = advice;
};

const requestAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const id = data.slip.id;
    const advice = data.slip.advice;
    printAdvide(id, advice);
  } catch (error) {
    console.log(error);
  }
};

requestAdvice();

buttonGenerateElement.addEventListener('click', requestAdvice);
