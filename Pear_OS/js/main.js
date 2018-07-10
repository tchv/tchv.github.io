// ==========Clock==========

function clock() {
var d = new Date();
var day_name = d.getDay();
var data = d.getDate();
var month_name = d.getMonth()
var year = d.getFullYear()
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

day=new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");

month=new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = day[day_name] + " " + data + " " + month[month_name] + "," +
" " + hours + ":" + minutes;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}

// ==========Calculator==========

function displayFocus() {
  document.getElementById("focus").focus();
}

function seven() {
  calc.input.value += '7';
}

function eight() {
  calc.input.value += '8';
}

function nine() {
  calc.input.value += '9';
}

function divide() {
  calc.input.value += '/';
}

function four() {
  calc.input.value += '4';
}

function five() {
  calc.input.value += '5';
}

function six() {
  calc.input.value += '6';
}

function multiply() {
  calc.input.value += '*';
}

function one() {
  calc.input.value += '1';
}

function two() {
  calc.input.value += '2';
}

function three() {
  calc.input.value += '3';
}

function subtract() {
  calc.input.value += '-';
}

function dot() {
  calc.input.value += '.';
}

function zero() {
  calc.input.value += '0';
}

function clean() {
  calc.input.value = '';
}

function add() {
  calc.input.value += '+';
}

function sum() {
  calc.input.value = eval(calc.input.value);
}

// ==========Windows==========

function closeWindow() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function closeWindowAbout() {
  document.getElementById("about__icon").style.display = "none";
}

function closeWindowSkills() {
  document.getElementById("skills__icon").style.display = "none";
}

function closeWindowPortfolio() {
  document.getElementById("portfolio__icon").style.display = "none";
}

function closeWindowContact() {
  document.getElementById("contact__icon").style.display = "none";
}

function openAbout() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "initial";
  document.getElementById("about__icon").style.display = "initial";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openSkills() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "initial";
  document.getElementById("skills__icon").style.display = "initial";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openPortfolio() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "initial";
  document.getElementById("portfolio__icon").style.display = "initial";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openContact() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "initial";
  document.getElementById("contact__icon").style.display = "initial";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openFacebook() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "initial";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openLinkedin() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "initial";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openGitHub() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "initial";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openPhotos() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "initial";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openCalculator() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "initial";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openLocation() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "initial";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

function openCalendar() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "initial";
  document.getElementById("document").style.display = "none";
}

function openDocument() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "none";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "initial";
}

function openLanguage() {
  document.getElementById("backgraund").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("language").style.display = "initial";
  document.getElementById("facebook").style.display = "none";
  document.getElementById("linkedin").style.display = "none";
  document.getElementById("github").style.display = "none";
  document.getElementById("photos").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("document").style.display = "none";
}

// ==========Google_Maps==========

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.841702, lng: 24.031665},
    zoom: 8,
  });

  var marker = new google.maps.Marker({
    position: {lat: 49.841702, lng: 24.031665},
    map: map,
    title:'Lviv',
  });
}

// ==========Calendar==========

function Calendar() {
  function Calendar2(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),

    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',

    month=["January","February","March","April","	May","June","July","August","September","October","	November","December"];

    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
    }

    else {
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }

    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      }

      else {
      calendar += '<td>' + i;
      }

      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }

    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';

    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();

    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
  }

  Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
  }

  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
  }
}
