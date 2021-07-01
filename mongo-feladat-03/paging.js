(function () {
    const films = db.movies.find();
    films.toArray().forEach((film, i) => {
        if (i != 0 && i % 3 === 0) print('--page over--');
        print(`${film.title} : ${film.category.toLowerCase()} movie`);
    })
})();

//load("D:\\Training360-FullstackAPI\\Gyakorló_feladatok_github\\str-hgk-sajat-munka\\mongo-feladat-03")
//load("D:/Training360-FullstackAPI/Gyakorló_feladatok_github/str-hgk-sajat-munka/mongo-feladat-03")