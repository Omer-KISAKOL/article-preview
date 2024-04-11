const btn = document.getElementById('share-btn');
const box = document.getElementById('share-box');

btn.addEventListener('click', (e) => {
    if (box.style.display === 'flex') {box.style.display = 'none';}
    else {box.style.display = 'flex';}
});