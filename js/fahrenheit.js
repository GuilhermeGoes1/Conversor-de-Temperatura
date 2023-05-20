function converterTemp() {
    var entradaFahrenheit = document.getElementById("entrada-fahrenheit")
    var saidaCelsius = document.getElementById("saida-celsius")
    var saidaKelvin = document.getElementById("saida-kelvin")

    if (entradaFahrenheit.value !== "") {
        if (!isNaN(entradaFahrenheit.value)) {
            var fahrenheit = parseFloat(entradaFahrenheit.value)
            var celsius = ((fahrenheit - 32) * 5 / 9)
            var kelvin = (celsius + 273.15)

            saidaCelsius.textContent = celsius.toFixed(2) + " °C"
            saidaKelvin.textContent = kelvin.toFixed(2) + " K"
        } else {
            saidaCelsius.textContent = "-"
            saidaKelvin.textContent = "-"
        }
    } else {
        saidaCelsius.textContent = "-"
        saidaKelvin.textContent = "-"
    }
}

function rolagemSim() {
    var entradaFahrenheit = document.getElementById("entrada-fahrenheit")
    var rolagem = (document.getElementById("rolagem")).value

    entradaFahrenheit.value = rolagem
    converterTemp()
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

