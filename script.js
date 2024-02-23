let gradovi = [];

//      DUGME ZA DODAVANJE GRADOVA U NIZ

document.querySelector('#dodajGrad').addEventListener('click', function() {
    
    let userInput = prompt('Unesite neki grad');
    userInput = userInput.split(" ")
    
    let privremeni = {
        ime: userInput[0],
        temperatura: userInput[1]
    }

    gradovi.push(privremeni);

})


//      DUGME ZA PRIKAZIVANJE TOPLIH GRADOVA

document.querySelector('#topliGradovi').addEventListener('click', function() {
    
    document.querySelector('#prikaziTopleGradove').innerHTML = '';
    
    gradovi.forEach(grad => {
        if(grad['temperatura'] >= 12){
            let gradInfo = `${grad['ime']} ${grad['temperatura']}°C`
            let p = document.createElement('p');
             //p.classList.add('crvena'),пробај; nece
            p.classList.add('crvena');
            let poruka = document.createTextNode(gradInfo);
            p.append(poruka);
            prikaziTopleGradove.append(p);
            prikaziTopleGradove.classList.add('leto')
            prikaziTopleGradove.classList.add('slikaToplo')
         }
    })
})


//      DUGME ZA PRIKAZIVANJE HLADNIH GRADOVA

document.querySelector('#hladniGradovi').addEventListener('click', function() {
    
    document.querySelector('#prikaziHladneGradove').innerHTML = '';

    gradovi.forEach(grad => {
        if(grad['temperatura'] < 12) {
            let gradInfo = `${grad['ime']} ${grad['temperatura']}°C`
            let p = document.createElement('p');
            p.classList.add('plava');
            let poruka = document.createTextNode(gradInfo);
            p.append(poruka);
            prikaziHladneGradove.append(p);
            prikaziHladneGradove.classList.add('zima')
            prikaziHladneGradove.classList.add('slikaHladno')
         }
    })    
 })

