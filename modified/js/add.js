// 배열 및 math 함수 사용
var add1 = document.getElementsByClassName("btn btn-dark btn-social mx-2");

function change() {
    var button_1 = document.getElementById("tell");
    var button = document.getElementsByTagName("button")

    for (var i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    }
    button_1.style.backgroundColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
}

//7-4 Date
function realTime() {
    var timer = document.getElementById("timer");
    var now = new Date();
    timer.innerHTML = now.getFullYear() + "년도 " + now.getMonth() + "월 " + now.getDate() + "일 " + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
}
setInterval(realTime, 1000);

//setTimeout
var timerID = null;

function openwindow1(time) {
    timerID = setTimeout("load('http://www.naver.com')", time);
}

function openwindow2(time) {
    timerID = setTimeout("load('http://www.daum.net')", time);
}

function openwindow3(time) {
    timerID = setTimeout("load('http://www.google.com')", time);
}

function openwindow4(time) {
    timerID = setTimeout("load('http://www.gachon.ac.kr')", time);
}

function load(URL) {
    var newWin = window.open(URL, "newWin", "left=300,top=300,width=1000,height=900");
}

// onblur와 onfocus
function checkFilled1(obj1) {
    if (obj1.value == "") {
        alert("enter name!");
        obj1.focus(); // obj에 다시 포커스
    }
}

function checkFilled2(obj2) {
    if (obj2.value == "") {
        alert("enter Email!");
        obj2.focus(); // obj에 다시 포커스
    }
}

function checkFilled3(obj3) {
    if (obj3.value == "") {
        alert("enter Phone!");
        obj3.focus(); // obj에 다시 포커스
    }
}

function checkFilled4(obj4) {
    if (obj4.value == "") {
        alert("enter Messages!");
        obj4.focus(); // obj에 다시 포커스
    }
}

//navigator 객체 사용
function printNavigator() {
    var newWin = window.open("", "", "left=300, top=300,width=800,height=300");
    newWin.document.title = "웹사이트 정보";
    newWin.document.write(" < span > appCodeName < /span>: " + navigator.appCodeName + "<br>");
    newWin.document.write("<span>appVersion</span>: " + navigator.appVersion + "<br>");
    newWin.document.write("<span>product</span>: " + navigator.product + "<br>");
    newWin.document.write("<span>userAgent</span>: " + navigator.userAgent + "<br>");
    newWin.document.write("<span>vendor</span>: " + navigator.vendor + "<br>");
    newWin.document.write("<span>language</span>: " + navigator.language + "<br>");
    newWin.document.write("<span>onLine</span>: " + navigator.onLine + "<br>");
    newWin.document.write("<span>cookieEnabled</span>: " + navigator.cookieEnabled + "<br>");
    newWin.document.write("<span>javaEnabled()</span>:" + navigator.javaEnabled() + "<br>");
    newWin.document.write("<span>plugins.length</span>: " + navigator.plugins.length + "<br>");
    newWin.document.close();
}

























