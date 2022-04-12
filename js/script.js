const arrQ = ["1+1", "2+3", "3+7", "9+9"];
const arrA = [
    [2, 4, 5, 7],
    [1, 5, 10, 11],
    [20, 30, 10, 14],
    [12, 20, 27, 18],
];

let option = document.getElementsByClassName("option");
let count = 0;
let score = 0;
function updatePage() {
    //페이지에 있는 문제를 바꿀 때 사용됨.
    for (let i = 0; i < arrA[count].length; i++) {
        option[i].innerHTML = arrA[count][i];
    }
    if (count == 0) {
        document.getElementsByClassName("meter")[0].value = "30";
    } else if (count == 1) {
        document.getElementsByClassName("meter")[0].value = "50";
    } else if (count == 2) {
        document.getElementsByClassName("meter")[0].value = "70";
    } else if (count == 3) {
        document.getElementsByClassName("meter")[0].value = "100";
    }

    document.getElementById("qNumber").innerHTML = count + 1;
    document.getElementById("question").innerHTML = arrQ[count];
}

function checkAnswer(num) {
    //사용자의 정답 유무를 확인할 때 사용됨. checkAnswer의 마지막에는 updatePage함수가 돌아감.
    //정답일때 색
    //정답일때 정답 수, 오답일 때 오답 수
    if (
        arrA[count][num] ==
        parseInt(arrQ[count].split("+")[0]) +
            parseInt(arrQ[count].split("+")[1])
    ) {
        document.getElementsByClassName(
            "child" + (num + 1)
        )[0].style.backgroundColor = "green";
        document.getElementById("totalScore").innerHTML = ++score;
    } else {
        document.getElementsByClassName(
            "child" + (num + 1)
        )[0].style.backgroundColor = "red";
    }
    setTimeout(() => {
        document.getElementsByClassName(
            "child" + (num + 1)
        )[0].style.backgroundColor = "#ecf5ff";
        if (count === arrQ.length - 1) {
            document.getElementsByClassName(
                "first-container"
            )[0].style.display = "none";
            document.getElementsByClassName(
                "second-container"
            )[0].style.display = "none";
            document.getElementsByClassName(
                "third-container"
            )[0].style.visibility = "visible";
            document.getElementsByClassName("score")[1].innerHTML =
                document.getElementById("totalScore").innerHTML;
        } else {
            count++;
        }
        updatePage();
    }, 1000);
}
