function copyFromSunPower(){
    chrome.tabs.executeScript(null, {file: "copy_from_sunpower.js"});  
};
    
function pasteToZoho(){
    
    chrome.tabs.executeScript(null, {file: "paste_to_zoho.js"});

};

function copyFromZoho(){

    chrome.tabs.executeScript(null, {file: "copy_from_zoho.js"});

};
    
function pasteToSunPower(){

    chrome.tabs.executeScript(null, {file: "paste_to_sunpower.js"});

};
    
document.getElementById("copy_from_sunpower").onclick = copyFromSunPower;
document.getElementById("paste_to_zoho").onclick = pasteToZoho;
// document.getElementById("copy_from_zoho").onclick = copyFromZoho;
// document.getElementById("paste_to_sunpower").onclick = pasteToSunPower;