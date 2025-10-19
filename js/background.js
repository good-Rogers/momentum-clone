// 배경 이미지 파일 목록 (img/ 폴더에 위치)
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

/**
 * 랜덤 이미지 선택
 * Math.floor(Math.random() * images.length)를 사용하여
 * 0부터 (배열 길이 - 1)까지의 랜덤 인덱스 생성
 */
const chosenImage = images[Math.floor(Math.random() * images.length)];

// img 요소 동적 생성
const bgImage = document.createElement("img");

// 선택된 이미지의 경로를 src 속성에 설정
bgImage.src = `img/${chosenImage}`;

// 생성한 img 요소를 body의 마지막 자식으로 추가
// 이렇게 하면 HTML에 미리 작성하지 않아도 JavaScript로 동적으로 이미지를 삽입할 수 있음
document.body.appendChild(bgImage);