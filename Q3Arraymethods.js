//Q3.Print the following details name, capital, flag, using forEach function

const xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function(){
    const response = JSON.parse(xhr.responseText);
    const func = (name,capital,flag) => {
        console.log(name,capital,flag);
    }
    response.forEach(func);
};
