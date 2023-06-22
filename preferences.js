window.onload = function() {
    if (localStorage.getItem('modernPref') == null) {
        localStorage.setItem('modernPref', '24');
    }
    if (localStorage.getItem('shichenPref') == null) {
        localStorage.setItem('shichenPref','hanzi')
    }
}

var modernButton = document.getElementById("modernToggle");
var shichenButton = document.getElementById("shichenToggle");

modernButton.addEventListener("click", function(){
    toggleModernPreference();
  })
shichenButton.addEventListener("click", function() {
    toggleShichenPreference();
})

function toggleModernPreference() {
    localStorage.setItem('modernPref', modernPrefSet());
    setModernButtonImg();
}
function toggleShichenPreference() {
    localStorage.setItem('shichenPref', shichenPrefSet());
    setShichenButtonImg();
}

function modernPrefSet () {
    if ('12' == localStorage.getItem('modernPref')) {
        return '24';
    }
    else {
        return '12';
    }
}
function shichenPrefSet () {
    if ('pinyin' == localStorage.getItem('shichenPref')) {
        return 'hanzi';
    }
    else {
        return 'pinyin';
    }
    }

function setModernButtonImg () {
if ('12' == localStorage.getItem('modernPref')) {
    modernButton.src = 'Static/Images/ModernToggle12.png';
    modernButton.alt = '12 Hours Toggled';
}
else {
    modernButton.src = 'Static/Images/ModernToggle24.png';
    modernButton.alt = '24 Hours Toggled';
}
}

function setShichenButtonImg () {
if ('pinyin' == localStorage.getItem('shichenPref')) {
    shichenButton.src = 'Static/Images/ShichenTogglePinyin.png';
    shichenButton.alt = 'Pinyin Toggled';
}
else {
    shichenButton.src = 'Static/Images/ShichenToggleHanzi.png';
    shichenButton.alt = 'Hanzi Toggled';
}
}