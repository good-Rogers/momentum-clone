// DOM 요소 선택
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 상수 정의
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/**
 * 로그인 폼 제출 이벤트 핸들러
 * @param {Event} event - 폼 제출 이벤트
 */
function onLoginSubmit(event) {
	event.preventDefault(); // 폼 제출 기본 동작 방지 (페이지 새로고침 방지)
	loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 숨기기
	const username = loginInput.value; // 입력된 사용자 이름 가져오기
	localStorage.setItem(USERNAME_KEY, username); // localStorage에 사용자 이름 저장
	paintGreetings(username); // 인사말 표시
}

/**
 * 화면에 인사말을 표시하는 함수
 * @param {string} username - 표시할 사용자 이름
 */
function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`; // 인사말 텍스트 설정
	greeting.classList.remove(HIDDEN_CLASSNAME); // 인사말 표시
}

// 로그인 폼에 제출 이벤트 리스너 등록
loginForm.addEventListener("submit", onLoginSubmit);

// localStorage에서 저장된 사용자 이름 불러오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 사용자 이름이 없으면 로그인 폼 표시, 있으면 바로 인사말 표시
if(savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 표시
} else {
	loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 숨기기
	paintGreetings(savedUsername); // 저장된 이름으로 인사말 표시
}