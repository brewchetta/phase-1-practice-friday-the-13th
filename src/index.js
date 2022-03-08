fetch('http://localhost:3000/movies')
.then(res => res.json())
.then(data => {
    createMovieImages(data)
    createMovieDetails(data[0])
})

function createMovieImages(movieArray) {
    console.log('movieArray: ', movieArray)
    movieArray.forEach(movieInfo => {
        const movieList = document.querySelector('#movie-list')
        const img = document.createElement('img')
        img.src = movieInfo.image
        movieList.append(img)
        img.addEventListener('click', () => createMovieDetails(movieInfo))
    })
}

function createMovieDetails(movie) {
    const detailImg = document.querySelector('#detail-image')
    detailImg.src = movie.image

    const detailTitle = document.querySelector('#title')
    detailTitle.textContent = movie.title

    const year = document.querySelector('#year-released')
    year.textContent = movie.release_year

    const description = document.querySelector('#description')
    description.textContent = movie.description

    const bloodAmount = document.querySelector('#amount')
    bloodAmount.textContent = movie.blood_amount

    const watchedButton = document.querySelector('#watched')
    watchedButton.textContent = movie.watched ? 'Watched' : "Didn't watch"

    watchedButton.addEventListener('click', () => {
        if (movie.watched === true) {
            movie.watched = false
        } else {
            movie.watched = true
        }
        watchedButton.textContent = movie.watched ? 'Watched' : "Didn't watch"
    })
}

// Challenge 4
// When you click on the button in the details it should toggle between Watched or Unwatched depending on the value of watched for the movie currently being displayed.