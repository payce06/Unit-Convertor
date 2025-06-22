const conversions = {
    temperature: {
        "Celsius → Fahrenheit": (v) => (v * 9) / 5 + 32,
        "Fahrenheit → Celsius": (v) => ((v - 32) * 5) / 9,
        "Celsius → Kelvin": (v) => v + 273.15,
        "Kelvin → Celsius": (v) => v - 273.15,
        "Fahrenheit → Kelvin": (v) => ((v - 32) * 5) / 9 + 273.15,
        "Kelvin → Fahrenheit":(v) => ((v - 273.15) * 9) / 5 + 32,
    },
    length: {
        "Meters → Feet": (v) => v * 3.28084,
        "Feet → Meters": (v) => v / 3.28084,
        "Meters → Kilometers": (v) => v / 1000,
        "Kilometers → Meters": (v) => v * 1000,
        "Miles → Kilometers": (v) => v * 1.60934,
        "Kilometers → Miles": (v) => v / 1.60934,
        "Inches → Centimeters": (v) => v * 2.54,
        "Centimeters → Inches": (v) => v / 2.54,
    },
    weight:{
        "Kilograms → Pounds": (v) => v * 2.20462,
        "Pounds → Kilograms": (v) => v / 2.20462,
        "Grams → Ounces": (v) => v / 28.3495,
        "Ounces → Grams": (v) => v * 1000,
        "Tons → Kilograms": (v) => v * 1000,
        "Kilograms → Tons": (v) => v / 1000,
    },
    time: {
    "Seconds → Minutes": (v) => v / 60,
    "Minutes → Seconds": (v) => v * 60,
    "Minutes → Hours": (v) => v / 60,
    "Hours → Minutes": (v) => v * 60,
    "Hours → Days": (v) => v / 24,
    "Days → Hours": (v) => v * 24,
    },
    speed: {
    "Km/h → Miles/h": (v) => v / 1.60934,
    "Miles/h → Km/h": (v) => v * 1.60934,
    "Meters/s → Feet/s": (v) => v * 3.28084,
    "Feet/s → Meters/s": (v) => v / 3.28084,
    }  
};

function populateConversions() {
    const category = document.getElementById("category").value;
    const conversionSelect = document.getElementById("conversion");
    conversionSelect.innerHTML = "";

    if(conversions[category]) {
        for (const key in conversions[category]) {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = key;
            conversionSelect.appendChild(opt);
        }
    }
}

    function convert() {
        const category = document.getElementById("category").value;
        const key = document.getElementById("conversion").value;
        const inputVal = parseFloat(document.getElementById("valueInput").value);
        const output = document.getElementById("result");
        if (isNaN(inputVal)) {
        output.textContent = "❌ Please enter a valid number.";
        return;
    }
    const fn = conversions[category]?.[key];

    if (fn) {
        const resultVal = fn(inputVal).toFixed(4);
        const [fromUnit, toUnit] = key.split(" → ");
        output.textContent = `✅ ${inputVal} ${fromUnit} → ${resultVal} ${toUnit}`;
    } else {
        output.textContent = "Invalid conversation.";
    }
}