

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const temp = 8;
const wind = 6;

function calculateWindChill (temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    // wind chill formula: WC = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
    const windChill =
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16);

    return windChill.toFixed(1) + '°C';
  }else {
    return 'N/A'
  }
}

const windChillResult = calculateWindChill(temp, wind);

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById('windchill').textContent = windChillResult;
