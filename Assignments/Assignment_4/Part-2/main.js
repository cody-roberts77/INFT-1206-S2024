const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const name = {'pic1.jpg': 'eye', 'pic2.jpg': 'swirl', 'pic3.jpg': 'flower', 'pic4.jpg': 'thoth', 'pic5.jpg': 'moth'}

/* Looping through images */

for(const image in pics){

const newImage = document.createElement('img');

newImage.setAttribute('src', 'images/${image}');
newImage.setAttribute('alt', name[image]);
thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
