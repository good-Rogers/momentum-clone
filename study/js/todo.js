// DOM 요소 선택
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// localStorage 키 상수
const TODOS_KEY = "todos";

// 할 일 목록을 저장할 배열
// 초기에는 빈 배열로 시작하고, localStorage에서 데이터를 불러와 초기화됨
let toDos = [];

/**
 * 할 일 목록을 localStorage에 저장하는 함수
 * JSON.stringify()를 사용하여 배열을 문자열로 변환 후 저장
 */
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 * 할 일 항목을 삭제하는 함수
 * @param {Event} event - 클릭 이벤트
 *
 * 동작 순서:
 * 1. DOM에서 해당 li 요소 제거
 * 2. toDos 배열에서 해당 항목 필터링하여 제거
 * 3. localStorage에 업데이트된 배열 저장
 */
function deleteToDo(event) {
    const li = event.target.parentElement; // 클릭한 버튼의 부모 요소(li) 선택
    li.remove(); // DOM에서 li 요소 제거
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDos 배열에서 해당 항목 제거
    saveToDos(); // localStorage에 저장
}

/**
 * 할 일 항목을 화면에 그리는 함수
 * @param {string} newTodo - 표시할 할 일 텍스트
 */
function paintToDo(newTodo) {
    const li = document.createElement("li"); // li 요소 생성
    li.id = newTodo.id; // li에 id 추가
    const span = document.createElement("span"); // 텍스트를 담을 span 생성
    const button = document.createElement("button"); // 삭제 버튼 생성
    li.appendChild(span); // li에 span 추가
    li.appendChild(button); // li에 button 추가
    span.innerText = newTodo.text; // span에 할 일 텍스트 설정
    button.innerText = "❌"; // 버튼에 X 이모지 설정
    button.addEventListener("click", deleteToDo); // 버튼 클릭 시 deleteToDo 함수 실행
    toDoList.appendChild(li); // 완성된 li를 ul에 추가
}

/**
 * 할 일 추가 폼 제출 이벤트 핸들러
 * @param {Event} event - 폼 제출 이벤트
 */
function handleToDoSubmit(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지 (페이지 새로고침 방지)
    const newTodo = toDoInput.value; // 입력 필드의 값 가져오기
    toDoInput.value = ""; // 입력 필드 비우기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // 배열에 새 할 일 추가
    paintToDo(newTodoObj); // 화면에 새 할 일 표시
    saveToDos(); // localStorage에 저장
}

// 폼에 제출 이벤트 리스너 등록
toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에서 저장된 할 일 목록 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

// 저장된 데이터가 있으면 화면에 표시
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON 문자열을 배열로 변환
    toDos = parsedToDos; // toDos 배열을 localStorage 데이터로 초기화 (삭제 기능이 정상 작동하도록)
    parsedToDos.forEach(paintToDo); // 각 할 일 항목을 화면에 그리기
}