 //these test cases seem to work individually but I can't make them work within the program
 function checkMap(fileContents) {
    //variables such as legal values and counters for testing
    const acceptedValues = [' ', '#', '.', '-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let bcounter = 0;
    let rcounter = 0;
    //catches that the user doesn't use anything other than an integer
    try {
        const lines = fileContents.trim().split('\n');
        console.log(lines); 
        //realized stating a base helps the program not break
        const x = parseInt(lines[0], 10);
        const y = parseInt(lines[1], 10);
        const thirdLine = lines[2].trim();
        console.log(thirdLine.length);
        //arrays start at 0 so maybe this works lol could be done in a cleaner way tho
        const finalLine = lines[y + 1].trim();
        //we expect the first and final line to have full borders
        const expectedTFline = Array(x).fill("# ").join("").trim();
        //testing for both more rows and less columns than needed
        if (lines.length < (y + 2)) {
            return false;
            
        }
        if (lines.length > (y + 2)) {
            return false;
        }
        //To check for the X dimension, we just decided to check the first line of the map
        if (thirdLine.length < x + (x - 1)) {
           return false;
        }
        if (thirdLine.length > x + (x - 1)) {
            return false;
        }
        //we expect very line to start and end with a #
        for (i = 3; i < lines.length; i++) {
            if (lines[i].startsWith('#') && lines[i].endsWith('#')) {
                console.log("Everything's looking good");
            } else {
                console.log(`Line ${i + 1} is missing an outer border`);
                return false;
            }
        }
        if (thirdLine === expectedTFline && finalLine === expectedTFline) {
            console.log("Outer border check passed")
        } else {
            console.log("Please make sure that the outer border is filled");
            return false;
        }
        //check for one of the bugswarms missing
        for (i = 3; i < lines.length; i++) {
            const string = lines[i];
            for (j = 0; j < string.length; j++) {
                const pos = string[j];
                if (pos === '-') {
                    bcounter++;
                }
                if (pos === '+') {
                    rcounter++;
                }
                if(!acceptedValues.includes(pos)){
                    console.log("Invalid value")
                    return false;
                }
            }
        }
        console.log(bcounter)
        console.log(rcounter)
        if (bcounter < 1 || rcounter < 1) {
            console.log("A swarm is missing please check")
            return false;
        }
        console.log("All test cases passed");
        return true;


    } catch (error) {
        console.log(error);
    }
}
function testTextInput(fileInput) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContents = event.target.result;
      const isCorrectFormat = checkMap(fileContents);
      console.log(isCorrectFormat);
      if (!isCorrectFormat) {
        alert('Please choose another file.');
      }
    };
    reader.readAsText(file);
  }
const fileInput = document.getElementById('file');
fileInput.addEventListener('change', function () {
    testTextInput(fileInput);
});
export { checkMap };