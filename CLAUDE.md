# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 저장소 개요

바닐라 자바스크립트 학습용 저장소로 두 가지 주요 섹션으로 구성되어 있습니다:
- **study/**: 모듈화된 기능을 가진 Momentum 클론 애플리케이션
- **Assignment/**: 독립적인 과제 프로젝트들 (Assignment01-05)

## 프로젝트 구조 및 아키텍처

### 학습 프로젝트 (Momentum 클론)
위치: `study/`

메인 애플리케이션은 DOM 조작과 localStorage를 통해 동작하는 독립적이고 자체 완결적인 모듈들로 구성됩니다:

- **greetings.js**: localStorage에 사용자 이름을 저장하는 로그인 폼
  - localStorage 키로 `USERNAME_KEY` 상수 사용
  - `HIDDEN_CLASSNAME`으로 가시성 토글

- **clock.js**: `setInterval(getClock, 1000)`을 사용한 실시간 시계 표시
  - 앞자리 0 채우기를 위해 `padStart(2, "0")` 사용

- **todo.js**: 추가/삭제 기능이 있는 할 일 목록
  - localStorage에 JSON 배열로 작업 저장
  - localStorage에서 불러온 데이터로 `toDos` 배열 초기화하여 삭제 기능 정상 작동

- **quotes.js**: 랜덤 명언 표시
  - 랜덤 선택을 위해 `Math.floor(Math.random() * quotes.length)` 패턴 사용

- **background.js**: 동적 배경 이미지 주입
  - `<img>` 요소를 생성하여 `document.body`에 추가
  - `img/` 디렉토리에 이미지 파일 필요 (1.jpg ~ 4.jpg)

- **weather.js**: 위치 기반 실시간 날씨 정보 표시
  - Geolocation API로 사용자 위치 획득 (위도/경도)
  - OpenWeatherMap API를 사용하여 날씨 데이터 fetch
  - 도시명과 현재 날씨/온도(°C) 표시
  - API_KEY 필요 (weather.js:1에 하드코딩됨)

### 과제들
위치: `Assignment/`

각 과제는 자체 `index.html`, `app.js`, `style.css`를 가진 독립적인 프로젝트입니다:

- **assingment01**: 기본 폼/입력 처리
- **02Assignment**: Assignment01과 유사한 패턴
- **Assignment03**: 숫자 맞추기 게임 (사용자 vs 랜덤 숫자)
- **Assignment04**: 날짜 계산을 이용한 크리스마스 카운트다운 타이머
- **Assignment05**: 랜덤 그라데이션 배경 생성기

**참고**: 디렉토리 명명 규칙이 일관적이지 않음 (assingment01, 02Assignment 등)

## 개발 방법

### 프로젝트 실행

모든 프로젝트는 빌드 과정이 없는 정적 HTML/CSS/JavaScript입니다:

1. 브라우저에서 직접 `index.html` 파일 열기
2. 학습 프로젝트: `study/index.html` 열기
3. 과제: 각 과제 디렉토리 내 `index.html` 열기 (예: `Assignment/Assignment03/index.html`)

### 코드 패턴

**랜덤 선택 패턴** (quotes.js, background.js, Assignment05에서 사용):
```javascript
const item = array[Math.floor(Math.random() * array.length)];
```

**LocalStorage 지속성**:
```javascript
localStorage.setItem(KEY, JSON.stringify(data));
const saved = JSON.parse(localStorage.getItem(KEY));
```

**폼 이벤트 처리**:
```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // 폼 데이터 처리
});
```

## 알려진 문제점

현재 알려진 문제점 없음.

## 개선 이력

- **2025-01-XX**: todo.js 삭제 버그 수정 (localStorage 데이터로 `toDos` 배열 초기화)
- **2025-01-XX**: weather.js 모듈 추가 (위치 기반 날씨 정보)
