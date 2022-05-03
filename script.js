// SINGLE QUOTE FROM INPUT NUMBER

function output() {


    let value = document.getElementById('num').value;


    fetch(`https://the-dune-api.herokuapp.com/quotes/id/${value}`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            console.log(res.quote);
            
            if(res.quote==undefined){
                alert('enter valid number')
            }
            else{
                document.getElementById('append').innerHTML = `<p id="t-color"class="text-center fs-3">${res.quote}</p>`;
            }
        })
}


// GENERATES RANDOM INPUT NUMBER

function randomQuote() {

    const randomQuoteNum = Math.floor(Math.random() * 342) + 1;

    document.getElementById('num').value = randomQuoteNum;
    let value = document.getElementById('num').value;


    fetch(`https://the-dune-api.herokuapp.com/quotes/id/${value}`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            console.log(res.quote);
            document.getElementById('append').innerHTML = `<p id="t-color"class="text-center fs-3">${res.quote}</p>`;
        })
        
}