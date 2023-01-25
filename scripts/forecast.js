const key = "GTdf7ZulLxUV4Pf9qKsdAeAIRyB2ygSA";

//get weather information

const getWeather = async (id) => {

const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`;
const response = await fetch(base+query);
const data = await response.json();
return data[0];

}


// get city information

const getCity = async(city) => {
const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//we add query parameters
const query = `?apikey=${key}&q=${city}`;

const response = await fetch(base + query);
const data = await response.json();
//we will get the first element of the array
//this returns a promise so we use the .then when we invoke the function.
return (data[0]);

};

// getCity('Solwezi')
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data => console.log(data))
//     .catch(err => console.log('err'));