function setYearToMovies() {
    const titles = [
        'Terminátor',
        'Űrcowboyok',
        'Örökké',
        'Titanic',
        'Gran Torino',
        'Jurassic Park',
        'Avatar',
        'A szív hídjai',
        'Hadak útján',
        'Aliens'
    ]

    titles.forEach((title, index) => {
        const year = Math.floor(Math.random() * 10) + 1980 + (index % 3) * 10;
        db.movies.updateOne({ title: titles[index] }, { $set: { releaseYear: year } });
    })
};

setYearToMovies();