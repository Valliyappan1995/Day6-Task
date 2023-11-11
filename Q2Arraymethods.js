//Q2.Get all the countries with a population of less than 2 lakhs 
//using Filter function

const xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function(){
    const response = JSON.parse(xhr.responseText);
    console.log(response.filter((cty) => cty.population <= 200000));
};
