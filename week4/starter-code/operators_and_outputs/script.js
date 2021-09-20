// Operators and Outputs
  let total = 0 // Global variable to hold the total
  let resultElement = O("resultParagraph") // we use this a lot, so might as well make it a global variable
    function getTotal() {
      let valueElement = O("valueText")
      // get value of input element
      let valueText = valueElement.value
      // casting to a number - even though we set our input element to be a number, it still comes out as a string in JavaScript
      let value = parseInt(valueText)
      return value
    }

    /* This function reads the value from the valueText element
       and adds it to the global total value */
    function addToTotal() {
      let value = getTotal()

      // Display the updated total
      let resultString = "Total is " + total
      resultElement.innerText = resultString
    }
    function subtractTotal() {
      let value = getTotal()
      // Display the updated total
      let resultString = "Total is " + total
      resultElement.innerText = resultString
    }

  function multiplyTotal() {
      let value = getTotal()
      // Display the updated total
      let resultString = "Total is " + total
      resultElement.innerText = resultString
    }

  function divideTotal() {
      let value = getTotal()
      // Display the updated total
      let resultString = "Total is " + total
      resultElement.innerText = resultString
    }



    /* This function clears the total value and updates the display
    */
    function zeroTotal() {
      total = 0; // set the global total to 0

      // update the display
      resultElement.innerText = "Total is 0"
    }


