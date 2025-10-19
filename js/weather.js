// OpenWeatherMap API 키
const API_KEY = "3b190699f72fad51962af61f5736b1d9";

/**
 * 위치 정보 획득 성공 시 실행되는 함수
 * @param {GeolocationPosition} position - 사용자의 위치 정보 객체
 *
 * 동작:
 * 1. 위도/경도 추출
 * 2. OpenWeatherMap API 호출 (metric 단위로 섭씨 온도 요청)
 * 3. 날씨 정보와 도시명을 화면에 표시
 */
function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    console.log("You live in", lat, lon);

    // OpenWeatherMap API URL 생성 (units=metric으로 섭씨 온도 요청)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // API 호출 및 데이터 처리
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; // 도시명 표시
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`; // 날씨 / 온도 표시
    });
}

/**
 * 위치 정보 획득 실패 시 실행되는 함수
 * 사용자가 위치 권한을 거부하거나 위치를 찾을 수 없을 때 호출됨
 */
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// Geolocation API를 사용하여 사용자의 현재 위치 요청
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);