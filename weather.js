// Initialize variable
let temperature=5;
let condition="";
let goToWork="";

// Creating function for the final evaluation
const working = () => {
// Assign value from user input to our variable
    temperature=document.getElementById("temp").value;      
    condition=document.getElementById("condition").value;
    if (temperature!=="") {
// Use of switch statement base on input value
        switch (true) {
            case (temperature<10):
                goToWork="Stay at home! It is too cold to work efficiently";
                break;
            case (temperature>30):
                switch (condition) {
                    case "snowing":
                        goToWork = "Don't go to work! The weather is too weird.";
                        break;
                    default:
                        goToWork = "Don't go to work! It's too hot to work efficiently";
                }
                break; 
            case (temperature>20):
                switch (condition) {
                    case "raining":
                        gotoWork = "Yes! Go to work. Being warm and wet isn't the worst.";
                        break;
                    case "snowing":
                        goToWork = "Don't go to work! The weather is too weird.";
                        break;
                    case "thunder":
                        goToWork = "Don't go to work! Remember that you work with metal";
                        break;
                    default:
                        goToWork = "Yes! Go to work";
                }
                break;   
            default:
                switch (condition) {
                    case "raining":
                        goToWork = "Stay at home! No one likes be wet and cold";
                        break;
                    case "snowing":
                        goToWork = "Don't go to work! Stay at home";
                        break;
                    case "thunder":
                        goToWork = "Don't go to work! Remember that you work with metal";
                        break;
                    default:
                        goToWork = "Yes! Go to work"
                }
                break;
        }
    }   
// Outcome on HTML page and console
    document.getElementById("demo").innerHTML= goToWork;
    console.log(goToWork);
}