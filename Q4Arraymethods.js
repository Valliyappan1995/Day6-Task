//Q4.Print the total population of countries using reduce function

const xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    const values = ["population"];
    const currvalue = values.reduce((value) => {
        return value;
    });
    console.log(currvalue);
};