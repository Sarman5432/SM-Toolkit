// Toggle the dropdowns
$("#binary_one").click(() => {
  $('#bin-dropdown_1').toggle()
})

$("#binary_two").click(() => {
  $('#bin-dropdown_2').toggle()
})

//
$('#bin-dropdown_1').click((e) => {
  $('.drop_one_sel')[0].textContent = e.target.textContent
  $('#bin-dropdown_1').toggle()
})

$('#bin-dropdown_2').click((e) => {
  $('.drop_two_sel')[0].textContent = e.target.textContent
  $('#bin-dropdown_2').toggle()
})


$('#bin-calc').click(() => {
  const input = $('#1.bin-input')[0].value.toUpperCase()
  const dropdown_1 = $('.drop_one_sel')[0].textContent.toLowerCase()
  const dropdown_2 = $('.drop_two_sel')[0].textContent.toLowerCase()

  //TODO - Make it so they can't be equal
  if(dropdown_1 == dropdown_2){ 
    $('#2.bin-input')[0].value = $('#1.bin-input')[0].value

  }else if(dropdown_1 == 'binary' && isBinary(input)) {
    if (dropdown_2 == 'decimal') {
      $('#2.bin-input')[0].value = binaryToDecimal(input)
    } else if (dropdown_2 == 'hexidecimal') {
      $('#2.bin-input')[0].value = binaryToHex(input)
    } 
  } else if (dropdown_1 == 'decimal' && isDecimal(input)) {
    if (dropdown_2 == 'binary') {
      $('#2.bin-input')[0].value = decimalToBinary(input)
    } else if (dropdown_2 == 'hexidecimal') {
      $('#2.bin-input')[0].value = binaryToHex(input)
    } 
  } else if (dropdown_1 == 'hexidecimal' && isHex(input)) {
    if (dropdown_2 == 'decimal') {
      $('#2.bin-input')[0].value = hexToDecimal(input)
    } else if (dropdown_2 == 'binary') {
      $('#2.bin-input')[0].value = hexToBinary(input)
    } 
  } else {
    console.log('ERROR: dropdown selection error')
  }
})

//Binary to Decimal
binaryToDecimal = (binary) => {
  const arr = binary.split("")
  let arr_length = arr.length
  let decimal = 0;

  arr.forEach(value => {
    if (value == '1') {
      decimal += Math.pow(2, arr_length - 1)
    }
    arr_length--
  });
  return decimal
}

//Binary to Hex
binaryToHex = (binary) => {
  return decimalToHex(binaryToDecimal(binary))
}

//Decimal to Binary
decimalToBinary = (decimal) => {
  let binary = ''
  while(decimal > 0){
    binary = (decimal % 2) + binary
    decimal = Math.floor(decimal/2)
  }
  return binary
}

//Decimal to Hex
decimalToHex = (decimal) => {
  let hex = ''
  while(decimal > 0){
    if(decimal % 16 > 9){
      hex = String.fromCharCode((decimal % 16)+55) + hex
    }else{
      hex = (decimal % 16) + hex
    }
    decimal = Math.floor(decimal/16)
  }
  return hex
}

//Hex to Binary
hexToBinary = (hex) => {
  return decimalToBinary(hexToDecimal(hex))
}

//Hex to Decimal
hexToDecimal = (hex) => {
  const arr = hex.split("")
  let arr_length = arr.length - 1
  let decimal = 0
  arr.forEach(value => {
    if(value.charCodeAt(0) > 57){  //Greater than 9 representation is ASCII
      decimal += Math.pow(16, arr_length) * (value.charCodeAt(0) - 55) 
    }else{
      decimal += Math.pow(16, arr_length) * parseInt(value)
    }
    arr_length--
  })
  return decimal
}


//TODO - Binary Input Checker
isBinary = (input) => {
  return true;
}

//TODO - Decimal Input Checker
isDecimal = (input) => {
  return true;
}

//TODO - Hexidecimal Input Checker
isHex = (input) => {
  return true;
}