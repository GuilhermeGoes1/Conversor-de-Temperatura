function converterTemp() {
    var entradaCelsius = document.getElementById("entrada-celsius")
    var saidaFahrenheit = document.getElementById("saida-fahrenheit")
    var saidaKelvin = document.getElementById("saida-kelvin")

    if (entradaCelsius.value !== "") {
        if (!isNaN(entradaCelsius.value)) {
            var celsius = parseFloat(entradaCelsius.value)
            var fahrenheit = ((celsius * 9 / 5) + 32)
            var kelvin = (celsius + 273.15)

            saidaFahrenheit.textContent = fahrenheit.toFixed(2) + " °F"
            saidaKelvin.textContent = kelvin.toFixed(2) + " K"
        } else {
            saidaFahrenheit.textContent = "-"
            saidaKelvin.textContent = "-"
        }
    } else {
        saidaFahrenheit.textContent = "-"
        saidaKelvin.textContent = "-"
    }
}

function rolagemSim() {
    var entradaCelsius = document.getElementById("entrada-celsius")
    var rolagem = (document.getElementById("rolagem")).value

    entradaCelsius.value = rolagem
    converterTemp()
}


