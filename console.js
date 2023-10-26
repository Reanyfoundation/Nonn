//Storage
const locationInfo = window.location;
const locationHref = locationInfo.href;
const locationProtocol = locationInfo.protocol;
const html = document.getElementById("html");
const contents = document.getElementById("cont");
const span = document.getElementById("label");

let inpId = "input";
let commandInit = document.getElementById(inpId);
let input = document.getElementsByClassName("input_css");

var removeProtocol = locationHref;
var font = "Consolas";
var font_size = "17px";
var numInc = 0;
var removeProtocolNum = locationHref.indexOf(":");
var result = 123 + "Hello World";

removeProtocol = locationHref.substring(removeProtocolNum+3);
//Styles
html.style.fontSize = font_size;
html.style.fontFamily = font;

input[0].style.fontFamily = font;
input[0].style.fontSize = font_size;

//Code
span.innerText = removeProtocol + ">>>>";

window.addEventListener("keypress", executer);

function executer(event){
    var eve = event.key;
    if(eve == "Enter"){
        if(commandInit == null){
            
        }else{
            run();
        }
    }
}

function run(){
    var increment = numInc + 1;
    numInc = increment;

    commandInit = document.getElementById(inpId);
    commandInit.setAttribute("disabled", "true");
    let command = commandInit.value;
    inpId = inpId + 1;

    console.log(command);

    const commandOutput = document.createElement("p");
    const node = document.createTextNode(result);
    commandOutput.appendChild(node);

    const newElementSpan = document.createElement("span");
    const newAttributeClass = document.createAttribute("class");
    newAttributeClass.value = "label_css";
    newElementSpan.setAttributeNode(newAttributeClass);
    const textNodeSpan = document.createTextNode(removeProtocol + ">>>");
    newElementSpan.appendChild(textNodeSpan);

    const newElementInput = document.createElement("input");
    const newAttributeClassI = document.createAttribute("class");
    newAttributeClassI.value = "input_css";
    const newAttributeIdI = document.createAttribute("id");
    newAttributeIdI.value = inpId;
    newElementInput.setAttributeNode(newAttributeClassI);
    newElementInput.setAttributeNode(newAttributeIdI);

    const breaker = document.createElement("br");

    contents.appendChild(commandOutput);
    contents.appendChild(breaker);
    contents.appendChild(newElementSpan);
    contents.appendChild(newElementInput);
    contents.appendChild(breaker);

    

    input = document.getElementsByClassName("input_css")

    for(x=0;x<input.length;x++){
        input[x].style.fontFamily = font;
        input[x].style.fontSize = font_size;
    } 
}