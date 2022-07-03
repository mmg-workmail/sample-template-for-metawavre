
var toggleMobile = function () {
    let classList = document.body.classList;
    classList.toggle('show-menu');
};

document.getElementById("mobile-menu-open").addEventListener('click', toggleMobile);
document.getElementById("mobile-menu-close").addEventListener('click', toggleMobile);

// document.getElementById("mobile-menu-close").addEventListener('click', toggleMobile);

function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("articales-pk-news-items");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    tablinks = document.getElementsByClassName("articales-pk-tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).classList.add('active');
    evt.currentTarget.className += " active";
}