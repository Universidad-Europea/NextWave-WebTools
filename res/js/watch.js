

// Function to convert time to string value
const getTimeString = ({ hours, minutes, seconds, zone }) => {
    if (minutes / 10 < 1) {
      minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${zone}`;
  };
  
  // Function to display current time on screen
  const renderTime = () => {
    var currentTime = document.getElementById("current-time");
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours = hours % 12;
    }
    const timeString = getTimeString({ hours, minutes, seconds, zone });
    currentTime.innerHTML = timeString;
  };

window.onload = renderTime;
setInterval(renderTime, 1000);