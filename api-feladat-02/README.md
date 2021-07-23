Gyakorlófeladat
Egészítsd ki az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást CRUD-műveletekkel!

Implementáld a GET /person/:id/vaccinated végpontot, amely visszaadja, hogy az adott id-val rendelkező személy rendelkezik-e oltással! (Tipp: használd a parseInt() függvényt!)
Implementáld a POST /person végpontot, amellyel új személyt vehetünk fel a nyilvántartásba! (Ne felejtsd el telepíteni a body-parser csomagot!)
Implementáld a PUT /person/:id/:vaccine végpontot, amellyel megadhatjuk, hogy az adott id-val rendelkező személy vaccine típusú oltást kapott.
Implementáld a DELETE /person/:vaccine végpontot, amely a vaccine típusú oltással rendelkező személyeket törli az adatbázisból.
Minden elkészült végpontot tesztelj böngésző segítségével!

//create POST
fetch('http://localhost:3000/person', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({firstName: 'László', lastName: 'Németh', vaccine: 'Pfizer'})
    }).then(r => r.json()).then(d => console.log(d));

//update PUT
fetch('http://localhost:3000/person/1/Sinopharm', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },    
}).then(r => r.json()).then(d => console.log(d));

//delete DELETE
fetch('http://localhost:3000/person/Pfizer', {
        method: 'DELETE',
}).then(r => r.json()).then(d => console.log(d));

