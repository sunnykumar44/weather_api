const inputBox=document.querySelector('.input_box');
const search_button=document.getElementById('search_button');
const weather_img=document.querySelector('.weather_img');
const temperature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind_speed');
const location_not_found=document.querySelector('.location_not_found');
const weather_body=document.querySelector('.weather_body');
const add_value=document.querySelector('.add_value');


async function  checkweather(city){

    const api_key="c0104c1441fa0d9d30af5be2f2dbaf8f";

    const url=  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data=await fetch(`${url}`).then(response=>response.json());




if(weather_data.cod==='404'){
location_not_found.style.display="flex";
weather_body.style.display="none"
return;
}
location_not_found.style.display="none";
weather_body.style.display="flex"

temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;

description.innerHTML=`${weather_data.weather[0].description}`;
console.log(weather_data);

humidity.innerHTML=`${weather_data.main.humidity}%`;

wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src="cloud.jpg";
        
        break;
    case 'Rain':
        weather_img.src="rain.png";
    
        break;
    case 'Snow':
        weather_img.src="snow.jpg";
        
        break;
    case 'Mist':
        weather_img.src="mist.jpeg";


       
        break;
    case 'Clear':
        weather_img.src="clear.jpg";
        break;
    

    
}

}

search_button.addEventListener('click',()=>{
    checkweather(inputBox.value);
});