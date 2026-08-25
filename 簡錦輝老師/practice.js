var fashion = document.getElementById("fashion");
var fitness = document.getElementById("fitness");
var travel = document.getElementById("travel");

// fashion-button
fashion.onclick = function () {
    alert("welcome to Javascript by Script Tag, 感覺Javascript 蠻新鮮的~");
};

fashion.onmouseover = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
};

fashion.onmouseout = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
};
// fitness-button
fitness.onclick = function () {
    alert("老師教得我都有學會了! 但老師只教到變顏色 沒教怎麼變回來 QQ");
}
fitness.onmouseover = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";
};
fitness.onmouseout = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
};
// travel-button
travel.onclick = function () {
    alert("然後我又使用GPT融會貫通把其他按鈕給變化其他顏色!");
}
travel.onmouseover = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";
};
travel.onmouseout = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
};
// Home 選單彈出隱藏
var home = document.getElementById("home");
var homeMenu = document.getElementById("homeMenu");

home.onclick = function () {
    if (homeMenu.style.display == "block") { homeMenu.style.display = "none";}

    else {
        homeMenu.style.display = "block"
    }
};
// Post Formats 選單彈出隱藏
var postf = document.getElementById("postf");
var postfMenu = document.getElementById("postfMenu");

postf.onmouseover = function () {
    postfMenu.style.display = "block"
};
postf.onmouseout = function () {
    postfMenu.style.display = "none"
};

// 控制複選單
var search = document.getElementById("search");
var searchBox01 = document.getElementById("searchBox01");

var viewList = document.getElementById("viewList");
var viewPanel = document.getElementById("viewPanel");

var forward = document.getElementById("forward");
var searchBox02 = document.getElementById("searchBox02");
var navSecond = document.getElementById("navSecond");
var recentPost = document.getElementById("recentPost");

search.onclick = function(){
  if (
    searchBox01.style.display == "none"
  ){
    searchBox01.style.display = "block"
  } else {
    searchBox01.style.display = "none"
  }
};

viewList.onclick = function () {
    if (
        viewPanel.style.display == "none"
    ){
        viewPanel.style.display = "block";

        forward.style.display = "block";
        searchBox02.style.display = "block";
        navSecond.style.display = "block";
        recentPost.style.display = "block";
    } else {
        viewPanel.style.display = "none"
    }
};