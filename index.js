function converterCelsius() {
    var entradaCelsius = document.getElementById("entrada-celsius")
    var saidaFahrenheit = document.getElementById("saida-fahrenheit")
    var saidaKelvin = document.getElementById("saida-kelvin")

    if (!isNaN(entradaCelsius.value) && entradaCelsius.value !== "") {
        var celsius = parseFloat(entradaCelsius.value)
        var fahrenheit = ((celsius * 9 / 5) + 32)
        var kelvin = (celsius + 273.15)

        saidaFahrenheit.textContent = formatarTemperatura(fahrenheit) + " °F"
        saidaKelvin.textContent = formatarTemperatura(kelvin) + " K"
    } else {
        saidaFahrenheit.textContent = "-"
        saidaKelvin.textContent = "-"
    }
}

function converterFahrenheit() {
    var entradaFahrenheit = document.getElementById("entrada-fahrenheit")
    var saidaCelsius = document.getElementById("saida-celsius")
    var saidaKelvin = document.getElementById("saida-kelvin")

    if (!isNaN(entradaFahrenheit.value) && entradaFahrenheit.value !== "") {
        var fahrenheit = parseFloat(entradaFahrenheit.value)
        var celsius = ((fahrenheit - 32) * 5 / 9)
        var kelvin = (celsius + 273.15)

        saidaCelsius.textContent = formatarTemperatura(celsius) + " °C"
        saidaKelvin.textContent = formatarTemperatura(kelvin) + " K"
    } else {
        saidaCelsius.textContent = "-"
        saidaKelvin.textContent = "-"
    }
}

function converterKelvin() {
    var entradaKelvin = document.getElementById("entrada-kelvin")
    var saidaCelsius = document.getElementById("saida-celsius")
    var saidaFahrenheit = document.getElementById("saida-fahrenheit")

    if (!isNaN(entradaKelvin.value) && entradaKelvin.value !== "") {
        var kelvin = parseFloat(entradaKelvin.value)
        var celsius = (kelvin - 273.15)
        var fahrenheit = (((celsius) * 9 / 5) + 32)

        saidaCelsius.textContent = formatarTemperatura(celsius) + " °C"
        saidaFahrenheit.textContent = formatarTemperatura(fahrenheit) + " °F"
    } else {
        saidaCelsius.textContent = "-"
        saidaFahrenheit.textContent = "-"
    }
}

function formatarTemperatura(valor) {
    if (Math.abs(valor) >= 1e7) {
        return valor.toExponential(3)
    } else {
        return valor.toFixed(2)
    }
}

function rolagemCelsius() {
    var entradaCelsius = document.getElementById("entrada-celsius")
    var rolagem = (document.getElementById("rolagem")).value

    entradaCelsius.value = rolagem
    converterCelsius()
    alterarCorDeFundoC()
}

function rolagemFahrenheit() {
    var entradaFahrenheit = document.getElementById("entrada-fahrenheit")
    var rolagem = (document.getElementById("rolagem")).value

    entradaFahrenheit.value = rolagem
    converterFahrenheit()
    alterarCorDeFundo()
}

function rolagemKelvin() {
    var entradaKelvin = document.getElementById("entrada-kelvin")
    var rolagem = (document.getElementById("rolagem")).value

    entradaKelvin.value = rolagem
    converterKelvin()
    alterarCorDeFundo()
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value)
    e.style.setProperty('--min', e.min == '' ? '0' : e.min)
    e.style.setProperty('--max', e.max == '' ? '100' : e.max)
    e.addEventListener('input', () => e.style.setProperty('--value', e.value))
}

function alterarCorDeFundoC() {
    var inputNumero = document.querySelector("input[type='number']");
    var numero = parseInt(inputNumero.value);
    var botao = document.querySelector("#botao")

    if (isNaN(numero) || inputNumero.value === "" || botao.textContent === "Cor de fundo Off") {
        document.body.style.backgroundColor = "whitesmoke"
        return
    } else {
        var red = Math.round((numero / 36) * 255)
        var blue = Math.round((1 - numero / 36) * 255)

        red = Math.min(red, 180)
        blue = Math.min(blue, 165)

        var color = "rgb(" + red + ", 0, " + blue + ")"
        document.body.style.backgroundColor = color
    }
}

function alterarCorDeFundo() {
    var spanCelsius = document.getElementById("saida-celsius")
    var numero = parseFloat(spanCelsius.textContent)
    var botao = document.querySelector("#botao")

    if (isNaN(numero) || spanCelsius.value === "" || botao.textContent === "Cor de fundo Off") {
        document.body.style.backgroundColor = "whitesmoke"
        return
    } else {

        var red = Math.round((numero / 36) * 255)
        var blue = Math.round((1 - numero / 36) * 255)

        red = Math.min(red, 205)
        blue = Math.min(blue, 180)

        var color = "rgb(" + red + ", 0, " + blue + ")"
        document.body.style.backgroundColor = color
    }
}

function botao() {
    var button = document.getElementById("botao")

    if (button.textContent === "Cor de fundo On") {
        button.textContent = "Cor de fundo Off"
        button.classList.add("off")
    } else {
        button.textContent = "Cor de fundo On"
        button.classList.remove("off")
    }
}



