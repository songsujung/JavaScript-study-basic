// 사용자의 위치를 찾는 function
function onGeoSucess(position) {
    const lat = position.coords.latitude; // 위도
    const lng = position.coords.longitude; // 경도
    console.log("You live in", lat, lng);
}

// 사용자의 위치를 찾지 못했을 때 실행될 function(에러시)
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// user의 위치(geolocation)를 주는 함수
// getCurrentPosition : 2개의 argument가 필요하다. 모든게 잘 됐을 때 실행될 함수, 에러가 발생했을 때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);