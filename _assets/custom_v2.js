// Cache DOM elements
const hx5 = document.querySelectorAll('.hx5 > div');
const hx1 = document.querySelectorAll('.hx1 > div');
const mx5 = document.querySelectorAll('.mx5 > div');
const mx1 = document.querySelectorAll('.mx1 > div');

const updateClock = () => {
    const time = new Date();
    const year = time.getFullYear().toString().substring(2,4);
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    
    const monthCorrected = month.toString().padStart(2, '0');
    const dayCorrected = day.toString().padStart(2, '0');
    
    const hoursX5 = Math.floor(hours / 5);
    const hoursX1 = hours % 5;
    const minsX5 = Math.floor(minutes / 5);
    const minsX1 = minutes % 5;

    // Update hour blocks (x5)
    Array.from(hx5).forEach((block, index) => {
        block.classList.toggle('on', index < hoursX5);
    });

    // Update hour blocks (x1)
    Array.from(hx1).forEach((block, index) => {
        block.classList.toggle('on', index < hoursX1);
    });

    // Update minute blocks (x5)
    Array.from(mx5).forEach((block, index) => {
        block.classList.toggle('on', index < minsX5);
    });

    // Update minute blocks (x1)
    Array.from(mx1).forEach((block, index) => {
        block.classList.toggle('on', index < minsX1);
    });

    // Update date display
    document.querySelector('.black').textContent = year;
    document.querySelector('.red').textContent = monthCorrected;
    document.querySelector('.yellow').textContent = dayCorrected;
}

// Initial update
updateClock();

// Update every minute
setInterval(updateClock, 60000);