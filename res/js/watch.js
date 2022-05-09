setInterval(cargarReloj, 1000);
function cargarReloj(){
 
    var systemDate = new Date();
    var dd = systemDate.getDate();
    var mm = systemDate.getMonth()+1;
    var yyyy = systemDate.getFullYear();
    var hh = systemDate.getHours();
    var min = systemDate.getMinutes();
    var ss = systemDate.getSeconds();
    var horario = "AM";
  
    if(hh == 0){
        hh = 12;
    }

    if(hh > 12){
        hh = hh - 12;
        horario = "PM";
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    min = (min < 10) ? "0" + min : min;
    ss = (ss < 10) ? "0" + ss : ss;

    var time  = hh + ":" + min + ":" + ss + " " + horario;
    
    if(dd<10) {
        dd = '0'+ dd;
    } 
    if(mm<10) {
        mm = '0'+ mm;
    } 
    
    systemDate = dd + '-' + mm + '-' + yyyy + "\n" + time;
    document.getElementById("date").innerHTML = systemDate;
}
 

cargarReloj();