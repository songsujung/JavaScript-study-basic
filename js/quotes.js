const quotes = [
    {
        quote:
            "인생에 뜻을 세우는데 적당한 때는 없다.",
        author: "볼드윈"
    },
    {
        quote:
            "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
        author: "하버트 개서"
    },
    {
        quote:
            "변명 중에서 가장 어리석은 변명은 '시간이 없어서'이다.",
        author: "찰리 채플린"
    },
    {
        quote:
            "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
        author: "J.하비스"
    },
    {
        quote:
            "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        author: "칭기즈칸"
    },
    {
        quote:
            "아무 것도 하지 않으면 아무 일도 일어나지 않는다.",
        author: "기시미 이치로"
    },
    {
        quote:
            "일단 시작해라. 나중에 완벽해지면 된다.",
        author: "론무어"
    },
    {
        quote:
            "꿈을 꿀 수 있다면, 그 꿈을 실현할 수 있다.",
        author: "월트 디즈니"
    },
    {
        quote:
            "가장 큰 위험은 위험 없는 삶이다.",
        author: "스티븐 코비"
    },
    {
        quote:
            "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "벤자민 프랭클린"
    },
    {
        quote:
            "미래는 지금이다.",
        author: "마거릿 미드"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// quotes를 무작위로 돌려준다. (소숫점을 내림 처리, 곱한 숫자 안에서만 랜덤)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // quotes[내림(랜덤 * quotes개수)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;