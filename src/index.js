// write your code here
const imageContainer = document.querySelector('#ramen-menu')


function addRamenToTopMenu( ramen ) {
    const ramenImage = document.createElement('img')
    ramenImage.addEventListener('click', () => {
        showRamen(ramen) 
    })
    ramenImage.src = ramen.image
    imageContainer.append(ramenImage)
}
// Get fetch data
fetch('http://localhost:3000/ramens')
    .then( resp => resp.json() )
    .then( ramensArray => {
        showRamen(ramensArray[1])
        //load all the ramen to the top menu
        ramensArray.forEach( addRamenToTopMenu )
    })


//display a ramen in the main area
function showRamen( ramen ) {

    const imageElement = document.querySelector('.detail-image')
    imageElement.src = ramen.image
    imageElement.alt = ramen.name

    const nameElement = document.querySelector('.name')
    nameElement.innerText = ramen.name

    const restaurantElement = document.querySelector('.restaurant')
    restaurantElement.innerText = ramen.restaurant

    const ratingElement = document.getElementById('rating-display')
    ratingElement.textContent = ramen.rating

    const commentElement = document.getElementById('comment-display')
    commentElement.textContent = ramen.comment
}


// add a new ramen from the form
const formElement = document.getElementById("new-ramen")

formElement.addEventListener('submit', event => {

    event.preventDefault()

    const { 
        name, restaurant, image, rating, "new-comment":comment 
    } = event.target

    const newRamen = {
        name: name.value, 
        restaurant: restaurant.value,
        image: image.value,
        rating: rating.value,
        comment: comment.value
    }

    addRamenToTopMenu(newRamen)
})