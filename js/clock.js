// DOM 요소 선택
const clock = document.querySelector("#clock");

/**
 * 현재 시간을 화면에 표시하는 함수
 * 시, 분, 초를 두 자리 숫자로 포맷팅하여 표시
 */
function getClock(){
    const date = new Date(); // 현재 날짜/시간 객체 생성
    const hours = String(date.getHours()).padStart(2, "0"); // 시: 한 자리 수일 경우 앞에 0 추가
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 분: 한 자리 수일 경우 앞에 0 추가
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 초: 한 자리 수일 경우 앞에 0 추가
    clock.innerText = (`${hours}:${minutes}:${seconds}`); // 시계에 시간 표시 (예: 09:05:03)
}

// 페이지 로드 시 즉시 시간 표시 (1초 대기 없이)
getClock();
// 1초(1000ms)마다 시간 업데이트
setInterval(getClock, 1000);