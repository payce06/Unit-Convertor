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
