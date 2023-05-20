function converterTemp() {
    var entradaKelvin = document.getElementById("entrada-kelvin")
    var saidaCelsius = document.getElementById("saida-celsius")
    var saidaFahrenheit = document.getElementById("saida-fahrenheit")

    if (entradaKelvin.value !== "") {
        if (!isNaN(entradaKelvin.value)) {
            var kelvin = parseFloat(entradaKelvin.value)
            var celsius = (kelvin - 273.15)
            var fahrenheit = (((celsius) * 9 / 5) + 32)

            saidaCelsius.textContent = celsius.toFixed(2) + " °C"
            saidaFahrenheit.textContent = fahrenheit.toFixed(2) + " °F"
        } else {
            saidaCelsius.textContent = "-"
            saidaFahrenheit.textContent = "-"
        }
    } else {
        saidaCelsius.textContent = "-"
        saidaFahrenheit.textContent = "-"
    }
}

function rolagemSim() {
    var entradaKelvin = document.getElementById("entrada-kelvin")
    var rolagem = (document.getElementById("rolagem")).value

    entradaKelvin.value = rolagem
    converterTemp()
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

