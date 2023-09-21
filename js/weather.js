const API_KEY = "d6ac18b3f68110bb5d305553148e9e6d";

// 사용자의 위치를 찾는 function
function onGeoSucess(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` // units=metric : 사람이 사용하는 일반적인 날씨정보
    // js에서 자동으로 url을 부름(fetch는 promise이기때문에 서버응답을 기다려야한다. 그렇기때문에 then을 사용해줌)
    // fetch를 하면 response의 json을 얻고, 내용을 추출햇으면 data를 얻는다.
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; // 지역이름
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // 날씨, 온도
    }); 
}

// 사용자의 위치를 찾지 못했을 때 실행될 function(에러시)
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// user의 위치(geolocation)를 주는 함수
// getCurrentPosition : 2개의 argument가 필요하다. 모든게 잘 됐을 때 실행될 함수, 에러가 발생했을 때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);