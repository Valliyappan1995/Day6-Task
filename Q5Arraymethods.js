//Q5.Print the country that uses US dollars as currency.

const xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function(){
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    console.log(
    response.filter((cty) => { 
        const { currencies = {} } = cty;    
    return Object.keys(currencies).includes("USD")
      }) 
    );
};
