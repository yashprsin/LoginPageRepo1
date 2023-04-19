const row = document.querySelector('.row');
const images = document.querySelectorAll('.image');
const imageCount = images.length;

// Clone the original set of images and append them to the end of the container
for (let i = 0; i < imageCount; i++) {
  const clone = images[i].cloneNode(true);
  row.appendChild(clone.parentNode);
}

row.style.display = 'flex';
row.style.animation = `scroll ${imageCount * 4}s linear infinite`;

// Set the width of each column to be a percentage based on the number of images in a sequence
const colWidth = 100 / imageCount;
const cols = document.querySelectorAll('.col');
cols.forEach((col) => {
  col.style.width = `${colWidth}%`;
});