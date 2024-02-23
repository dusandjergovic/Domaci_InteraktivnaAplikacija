let gradovi = [];

document.querySelector('#dodajGrad').addEventListener('click', function() {
    let userInput = prompt('Unesite neki grad');
    userInput = userInput.split(" ")
    
    let privremeni = {
        ime: userInput[0],
        temperatura: userInput[1]
    }
    gradovi.push(privremeni);
    console.log(gradovi);
    
})

document.querySelector('#topliGradovi').addEventListener('click', function() {
    
    document.querySelector('#prikaziTopleGradove').innerHTML = '';
    
    gradovi.forEach(grad => {
        if(grad['temperatura'] >= 12){
            let gradInfo = `${grad['ime']} ${grad['temperatura']}°C`
            let p = document.createElement('p');
            p.classList.add('crvena');
            let poruka = document.createTextNode(gradInfo);
            p.append(poruka);
            prikaziTopleGradove.append(p);
         }
    })
})

document.querySelector('#hladniGradovi').addEventListener('click', function(){
    
    document.querySelector('#prikaziHladneGradove').innerHTML = '';

    gradovi.forEach(grad => {
        if(grad['temperatura'] < 12) {
            let gradInfo = `${grad['ime']} ${grad['temperatura']}°C`
            let p = document.createElement('p');
            p.classList.add('plava');
            let poruka = document.createTextNode(gradInfo);
            p.append(poruka);
            prikaziHladneGradove.append(p);
         }

    })    
 })

