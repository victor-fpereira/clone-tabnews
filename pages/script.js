const originalWord = document.getElementById('originalWord');
const startButton = document.getElementById('startButton');

const words = ['Amigável','Empático','Pancadão','Carismático','Responsável','Arretado','Danado de bom','Moleque doido','Cheroso','Arroxado','Zika','Paciente','Fulozinha','Solidário','Determinado','Otimista','Engraçado','Sincero','Pestana','Poderoso','Zoiudo','Bão demais da conta','Moleque','Maneiro','Massa','Delicinha','Mandacaru quando fulora']


startButton.addEventListener('click', () => { startAnimation(); });

function startAnimation() {
    let i = 0;

    function iterate() {
        if (i < words.length) {
            setTimeout(() => {
                const randomInteger = Math.floor(Math.random() * words.length);
                originalWord.textContent = words[randomInteger];

                // Change the CSS color property
                originalWord.style.color = getRandomColor(); // You can define getRandomColor()

                i++;
                iterate(); // Call the function recursively for the next iteration
            }, 150);
        } else {
            // After the iterations are complete, change the CSS color property
            originalWord.style.color = '#000'; // You can define getRandomColor()
        }
    }

    iterate();
}

// Function to generate a random color (e.g., for text)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
