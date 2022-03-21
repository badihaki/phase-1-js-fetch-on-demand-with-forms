const init = () => {
    // get the form
    const inputForm = document.querySelector('form');
    // add an event listener to the form
    inputForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const userInput = document.querySelector('input#searchByID');

        console.log(userInput.value);

        fetch(`http://localhost:3000/movies/${userInput.value}`).then(
            response => response.json()
        ).then(
            (data) => {
                const title = document.querySelector(`section#movieDetails h4`);
                const summary = document.querySelector(`section#movieDetails p`)

                title.innerText = data.title;
                summary.innerText = data.summary;
            }
        )
    });
}

document.addEventListener('DOMContentLoaded', init);