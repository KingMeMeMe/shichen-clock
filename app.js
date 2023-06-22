window.onload = function() {
    if (localStorage.getItem('modernPref') == null) {
        localStorage.setItem('modernPref', '24');
    }
    if (localStorage.getItem('shichenPref') == null) {
        localStorage.setItem('shichenPref','hanzi')
    }
}

function currentTime() {
    let date = new Date(); 
    let hh24 = date.getHours();
    let hh12 = hh24;
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh12 == 0){
        hh12 = 12;
    }
    if(hh24 > 12){
        hh12 = hh12 - 12;
        session = "PM";
     }
  
    hh24 = checkTime(hh24);
    hh12 = checkTime(hh12);
    mm = checkTime(mm);
      
    let time24 = hh24 + ":" + mm;
    let time12 = hh12 + ":" + mm + " " + session;

    if(localStorage.getItem('modernPref') == '12') {
        document.getElementById("modern").innerText = time12; 
    }
    else {
        document.getElementById("modern").innerText = time24; 
    }

    shichenTime();
    
    setClockface();

    const mmDegrees = ((mm / 60) * 360) + ((ss/60)*6);
    minuteHand.style.transform = `translateX(-50%) rotate(${mmDegrees}deg)`;

    const hourDegrees = ((hh24 / 24) * 360) + ((mm/60)*15);
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;

    let t = setTimeout(function(){ currentTime() }, 1000);
  }

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function shichenTime() {
    let hh = getShichen();
    let cz = getChuZheng();
    let kk = getKe();

    let hanzi =  hh[0] + cz[0] + kk[0];
    let pinyin = hh[1] + cz[1] + ' ' + kk[1];


    if(localStorage.getItem('shichenPref') == 'pinyin') {
        document.getElementById("shichen").innerText = pinyin; 
    }
    else {
        document.getElementById("shichen").innerText = hanzi; 
    }
}

function getShichen () {
    let dd = new Date();
    let hh = dd.getHours();

    if ((hh == 23)||(hh == 24)) {
        sh = "子";
        sp = "Zǐ";
    }
    else if ((hh == 1)||(hh == 2)) {
        sh = "丑";
        sp = "Chǒu";
    }
    else if ((hh == 3)||(hh == 4)) {
        sh = "寅";
        sp = "Yín";
    }
    else if ((hh == 5)||(hh == 6)) {
        sh = "卯";
        sp = "Mǎo";
    }
    else if ((hh == 7)||(hh == 8)) {
        sh = "辰";
        sp = "Chén";
    }
    else if ((hh == 9)||(hh == 10)) {
        sh = "巳";
        sp = "Sì";
    }
    else if ((hh == 11)||(hh == 12)) {
        sh = "午";
        sp = "Wǔ";
    }
    else if ((hh == 13)||(hh == 14)) {
        sh = "未";
        sp = "Wèi";
    }
    else if ((hh == 15)||(hh == 16)) { 
        sh = "申";
        sp = "Shēn";
    }
    else if ((hh == 17)||(hh == 18)) {
        sh = "酉";
        sp = "Yǒu";
    }
    else if ((hh == 19)||(hh == 20)){
        sh = "戌";
        sp = "Xū";
    }
    else {
        sh = "亥";
        sp = "Hài";}

    return [sh, sp];
    }

function getChuZheng () {
    let dd = new Date();
    let hh = dd.getHours();

    if ((hh%2) == 0){
        hanzi = "正";
        pinyin = "Zhèng";
    }
    else {
        hanzi = "初";
        pinyin = "Chū";
    }
    
    return [hanzi, pinyin];
}

function getKe () {
    let dd = new Date();
    let m = dd.getMinutes();
    let k = m/15;

    if (k < 1) {
        return ["",""]
    }
    else if (k < 2) {
        return ["一刻","1 Kè"];
    }
    else if (k < 3) {
        return ["二刻","2 Kè"];
    }
    else if (k > 4) {
        return ["三刻","3 Kè"];
    }
    else {
        return ["四刻","4 Kè"];
    }
}

function setClockface () {
    let dd = new Date();
    let hh = dd.getHours();

    if (hh == 23) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0001.png';
    }
    else if (hh == 24) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0002.png';
    }
    else if (hh == 1) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0003.png';
    }
    else if (hh == 2) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0004.png';
    }
    else if (hh == 3) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0005.png';
    }
    else if (hh == 4) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0006.png';
    }
    else if (hh == 5) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0007.png';
    }
    else if (hh == 6) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0008.png';
    }
    else if (hh == 7) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0009.png';
    }
    else if (hh == 8) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0010.png';
    }
    else if (hh == 9) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0011.png';
    }
    else if (hh == 10) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0012.png';
    }
    else if (hh == 11) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0013.png';
    }
    else if (hh == 12) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0014.png';
    }
    else if (hh == 13) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0015.png';
    }
    else if (hh == 14) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0016.png';
    }
    else if (hh == 15) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0017.png';
    }
    else if (hh == 16) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0018.png';
    }
    else if (hh == 17) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0019.png';
    }
    else if (hh == 18) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0020.png';
    }
    else if (hh == 19) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0021.png';
    }
    else if (hh == 20) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0022.png';
    }
    else if (hh == 21) {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0023.png';
    }
    else {
        document.getElementById('shichenImage').src = 'Static/Images/shichen-clock0024.png';}
}


  currentTime();