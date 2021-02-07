fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries (data));


const displayCountries = countries =>{
    //console.log(countries)
    const ul = document.getElementById('countries');

    for(let i = 0; countries.length; i++){
        const country = countries[i];
        const li = document.createElement('li');
        li.innerText = country.name;
        ul.appendChild(li);
        console.log(country.name);

    }
}