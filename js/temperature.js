const loadTemperature=cityName=>{
   
    const apiKey='a1ee2712758f3fbd18e80986c75c9e02'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then (data=>setInnerText(data));

}
// loadTemperature('dhaka');
//set innerText
const setInnerText=city=>{
    displayInnerText('temperature',city.main.temp);
    displayInnerText('weather-type',city.weather[0].main);

    console.log(city);   
}
//display innertext(temperature & weather-type)
const displayInnerText=(id,text)=>{

    const innerText=document.getElementById(id);
    innerText.innerText=text;
}
document.getElementById('search-button').addEventListener('click',function(){
    const seacrhField = document.getElementById('search-field');
    const cityName= seacrhField.value;
   
    document.getElementById('city-name').innerText=cityName;
    loadTemperature(cityName);
    
})
loadTemperature('dhaka');



