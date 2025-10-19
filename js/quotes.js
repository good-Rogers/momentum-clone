// 명언 데이터 배열
const quotes = [
    {
      quote: "I never dreamed about success, I worked for it",
      author: "Estee Lauder",
    },
    {
      quote: "Do not try to be original, just try to be good.",
      author: "Paul Rand",
    },
    {
      quote: "Do not be afraid to give up the good to go for the great",
      author: "John D. Rockefeller",
    },
    {
      quote:
        "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
      author: "Martin Luther King Jr.",
    },
    {
      quote:
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      author: "Thomas Edison",
    },
    {
      quote:
        "The fastest way to change yourself is to hang out with people who are already the way you want to be",
      author: "REid Hoffman",
    },
    {
      quote:
        "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
      author: "Tim O Reilly",
    },
    {
      quote:
        "Some people dream of success, while other people get up every morning and make it happen",
      author: "Wayne Huizenga",
    },
    {
      quote:
        "The only thing worse than starting something and falling.. is not starting something",
      author: "SEth Godin",
    },
    {
      quote:
        "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
      author: "Jim Rohn",
    },
  ];

  // DOM 요소 선택
  const quote = document.querySelector("#quote span:first-child"); // 명언 텍스트를 표시할 요소
  const author = document.querySelector("#quote span:last-child"); // 작가 이름을 표시할 요소

  /**
   * 랜덤 명언 선택 로직:
   * 1. Math.random()은 0 이상 1 미만의 난수를 생성 (예: 0.7234)
   * 2. quotes.length를 곱하면 0 이상 배열 길이 미만의 숫자 (예: 0.7234 * 10 = 7.234)
   * 3. Math.floor()로 내림 처리하면 0부터 (배열 길이 - 1)까지의 정수 인덱스 (예: 7)
   * 결과: 배열에서 랜덤한 요소를 안전하게 선택
   */
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // 선택된 명언과 작가를 화면에 표시
  quote.innerHTML = todaysQuote.quote;
  author.innerHTML = todaysQuote.author;