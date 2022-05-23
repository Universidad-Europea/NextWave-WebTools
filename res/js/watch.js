setInterval(currentDate, 1000);
function currentDate(){
    var systemDate = new Date();
    var dd = systemDate.getDate();
    var mm = systemDate.getMonth()+1;
    var yyyy = systemDate.getFullYear();
    var hh = systemDate.getHours();
    var min = systemDate.getMinutes();
    var ss = systemDate.getSeconds();
    var horario = "";
  
    if(hh == 0){
        hh = 12;
    }

    if(hh > 24){
        hh = hh - 12;
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    min = (min < 10) ? "0" + min : min;
    ss = (ss < 10) ? "0" + ss : ss;

    var time  = hh + "h " + min + "m " + ss + "s " + horario;
    
    if(dd<10) {
        dd = '0'+ dd;
    } 
    if(mm<10) {
        mm = '0'+ mm;
    } 
    
    if (mm == 01) {
        mm = "Enero";
    } else if (mm == 02) {
        mm = "Febrero";
    } else if (mm == 03) {
        mm = "Marzo";
    } else if (mm == 04) {
        mm = "Abril";
    } else if (mm == 05) {
        mm = "Mayo";
    } else if (mm == 06) {
        mm = "Junio";
    } else if (mm == 07) {
        mm = "Julio";
    } else if (mm == 08) {
        mm = "Agosto";
    } else if (mm == 09) {
        mm = "Septiembre";
    } else if (mm == 10) {
        mm = "Octubre";
    } else if (mm == 11) {  
        mm = "Noviembre";
    } else if (mm == 12) {
        mm = "Diciembre";
    }

    systemDate = '📅 ' + dd + ' de ' + mm + ' de ' + yyyy;
    systemTime = '⏰ ' + time;
    document.getElementById("date").innerHTML = systemDate;
    document.getElementById("time").innerHTML = systemTime;
}

currentDate();

