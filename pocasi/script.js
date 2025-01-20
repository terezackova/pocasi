function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unit = document.getElementById('unitSelector').value;
    let result = '';
    let backgroundColor = '';
    let seasonIcon = '';

    if (unit === 'Celsius') {
        if (tempInput !== '') {
            result = (tempInput * 9 / 5) + 32;
            document.getElementById('output').innerText = `${tempInput} °C = ${result.toFixed(2)} °F`;
        }
    } else if (unit === 'Fahrenheit') {
        if (tempInput !== '') {
            result = (tempInput - 32) * 5 / 9;
            document.getElementById('output').innerText = `${tempInput} °F = ${result.toFixed(2)} °C`;
        }
    }

    if (tempInput !== '') {
        const temp = parseFloat(tempInput);

        if (temp <= 0) {
            backgroundColor = 'linear-gradient(to bottom, #a3c2ff, #003366)';
            seasonIcon = 'winter-icon';
        } else if (temp <= 10) {
            backgroundColor = 'linear-gradient(to bottom, #ffcc80, #ff8000)';
            seasonIcon = 'autumn-icon';
        } else if (temp <= 25) {
            backgroundColor = 'linear-gradient(to bottom, #b2e0a5, #80b33e)';
            seasonIcon = 'spring-icon';
        } else {
            backgroundColor = 'linear-gradient(to bottom, #ffcc00, #ff3300)';
            seasonIcon = 'summer-icon';
        }

        document.body.style.background = backgroundColor;
        document.getElementById('seasonIcon').className = 'season-icon ' + seasonIcon;
    }
}
