const authKey = '563492ad6f91700001000001965ae25965174d42b1fbe34a89c50c3e';
const input = document.querySelector('#explore-search-bar');
const searchButton = document.querySelector('.search-btn');
const gallery = document.querySelector('#picture-gallery');
const overlay = document.querySelector('.overlay');

let pageNum = 1;
let search = false;
let query = '';

input.addEventListener('input', (e) => {
  e.preventDefault();
  query = e.currentTargtet.value;
})

//Generates random number for horizontal
//  and vertical area within the grid for each photo
function generateRandomNum(maxNum){
  return Math.ceil(Math.random() * maxNum);
}

// Makes a GET request to Pexels api for images
// and populates the gallery with response
async function getPictures (pageNum){
  const data = await fetch(`https://api.pexels.com/v1/curated?per_page=36&page=${pageNum}`,{
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: authKey,
    }
  });
  const result = await data.json();
  // console.log(result);
  result.photos.forEach((photo) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add(`picture-container`);
    imageDiv.classList.add(`h${generateRandomNum(4)}`);
    imageDiv.classList.add(`v${generateRandomNum(4)}`);
    imageDiv.innerHTML= `<img src="${photo.src.large}"class="picture">
      <div class="picture-overlay">
        <a href=${photo.src.original} class="download-btn">View</a>
      </div>
    `
    gallery.appendChild(imageDiv);
  });
}

getPictures(pageNum);

gallery.addEventListener('click', openFullImage);

function openFullImage(e){
  const children = Array.from(e.currentTarget.childNodes);
  children.forEach(child => {
    child.addEventListener('click', console.log(child))
  })
  console.log(children)
}