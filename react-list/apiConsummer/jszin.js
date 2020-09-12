// Replace ./data.json with your JSON feed
fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {

        let datas = response.json()
        return datas;
    })
    .then((datas) => {
        datas.forEach(movie => {

            const card = document.createElement('div');
            card.className = 'card';

            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300)

            p.textContent = `${movie.description}...`

            // Append the cards to the container element
            container.appendChild(card)

            // Each card will contain an h1 and a p
            card.appendChild(h1)
            card.appendChild(p)

            console.log(movie.title)
            console.log(movie.description);
        });
    })
    .catch((err) => {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!, ${err}`
        app.appendChild(errorMessage)

    })

const container = document.createElement('div')
container.className = "container"

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.png'




app.appendChild(logo)
app.appendChild(container)