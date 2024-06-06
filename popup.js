document.getElementById('convert').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('value').value);
    const unit = document.getElementById('unit').value;
    let result = '';
  
    if (isNaN(value)) {
      result = 'Please enter a valid number';
    } else {
      switch(unit) {
        case 'CelsiusToFahrenheit':
          result = `${value}°C is ${(value * 9/5) + 32}°F`;
          break;
        case 'KilometersToMiles':
          result = `${value} km is ${(value * 0.621371).toFixed(2)} miles`;
          break;
        case 'MetersToFeet':
          result = `${value} meters is ${(value * 3.28084).toFixed(2)} feet`;
          break;
        case 'GramsToOunces':
          result = `${value} grams is ${(value * 0.035274).toFixed(2)} ounces`;
          break;
        case 'LitersToGallons':
          result = `${value} liters is ${(value * 0.264172).toFixed(2)} gallons`;
          break;
        case 'KilogramsToPounds':
          result = `${value} kg is ${(value * 2.20462).toFixed(2)} pounds`;
          break;
        case 'CelsiusToKelvin':
          result = `${value}°C is ${(value + 273.15).toFixed(2)}K`;
          break;
        case 'MillilitersToTeaspoons':
          result = `${value} ml is ${(value * 0.202884).toFixed(2)} teaspoons`;
          break;
        case 'MillilitersToTablespoons':
          result = `${value} ml is ${(value * 0.067628).toFixed(2)} tablespoons`;
          break;
        case 'HectaresToAcres':
          result = `${value} hectares is ${(value * 2.47105).toFixed(2)} acres`;
          break;
        case 'JoulesToCalories':
          result = `${value} joules is ${(value * 0.239006).toFixed(2)} calories`;
          break;
        case 'PascalsToBars':
          result = `${value} pascals is ${(value * 0.00001).toFixed(5)} bars`;
          break;
        default:
          result = 'Invalid conversion type';
      }
    }
  
    document.getElementById('result').textContent = result;
  });
  