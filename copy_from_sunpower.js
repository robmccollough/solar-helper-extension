  
  //returns list of children with specified classname

matchChildrenToClassName = (node, match) => {
  var matchingNodes = [];
  for(var i = 0; i < node.childNodes.length; i++){
      var sec = node.childNodes[i];
      if(sec.className === match){
          matchingNodes.push(sec);
      } 
  }
  return matchingNodes;
}

//if only one element, return the element, if more than one returns array
const getAllChildrenWithTagName = (nodes, match) => {
  var matchingNodes = [];
  for(var i = 0; i < nodes.length; i++){
      var sec = nodes[i].childNodes;
      for(var j = 0; j < sec.length; j ++){
          var dev = sec[j];
          // console.log(dev)
          if(dev.tagName === match){
              matchingNodes.push(dev.innerHTML);
          }
      }
  }
  return matchingNodes;
}

const getChildrenByNodeName = (node, match) => {
  var matchingNodes = [];
  for(var i = 0; i < node.childNodes.length; i++){
      var sec = node.childNodes[i];
     if(sec.nodeName === match){
         matchingNodes.push(sec.nodeValue);
     }
  }
  return matchingNodes;
}
  //retrieve each section
  const account = document.getElementsByTagName('residential-account-information-view');
  const address = document.getElementsByTagName('account-address-view');
  const notes = document.getElementsByTagName('lead-notes-information-view');
 
  
  //further unpacking
  var infoSection = account.item(0).childNodes.item(0).childNodes[3];
  var appointmentSection = account.item(0).childNodes.item(0).childNodes[5];
  var optsSection = account.item(0).childNodes.item(2).childNodes.item(1)

  
  //this one is a little different, just manually grab is 
  var addressText = address.item(0).childNodes.item(0)
                        .childNodes.item(3).childNodes.item(1).childNodes.item(3).innerHTML;
  var lead_notes = notes.item(0).childNodes.item(0).childNodes.item(5)
                        .childNodes.item(1).childNodes.item(3);
  
  
  var lead_notes_array = getChildrenByNodeName(lead_notes, '#text')
  
  
  //returns array of divs, each have 5 child nodes
  const info = matchChildrenToClassName(infoSection, 'informative-group');
  const appointment = matchChildrenToClassName(appointmentSection, 'informative-group');
  const opts = matchChildrenToClassName(optsSection, 'informative-group__unit');
  
  //more unpacking of the meatier section
  var moreInfo = [];
  var moreApp = [];
  const infoParsed = info.map((obj) => moreInfo.concat(matchChildrenToClassName(obj, 'informative-group__unit')));
  const appointmentParsed = appointment.map((obj) => moreApp.concat(matchChildrenToClassName(obj, 'informative-group__unit')));
  
  var mergedInfo = [].concat.apply([], infoParsed);
  var mergedApp = [].concat.apply([], appointmentParsed);
  
  
  //final assignments 
  //arrays
  var finalInfo = getAllChildrenWithTagName(mergedInfo, 'DIV');
  var finalApp = getAllChildrenWithTagName(mergedApp, 'DIV');
  
  //booleans
  const satisfaction = opts[0].childNodes[1].childNodes[1].childNodes[1].checked;
  const marketing = opts[1].childNodes[1].childNodes[1].childNodes[1].checked;
  
  //this is not at all robust 
  var allInfo = {
    name: finalInfo[0],
    stage: finalInfo[1],
    account_owner: finalInfo[2],
    phone: finalInfo[3],
    language: finalInfo[4],
    email: finalInfo[5],
    best_call_time: finalApp[0],
    consultation_type: finalApp[1],
    appointment_time: finalApp[2],
    appointment_date: finalApp[3],
    satisfaction_opt: satisfaction,
    marketing_opt: marketing,
    address: addressText,
    lead_notes: lead_notes_array
  }
  
  
  //got all da info
  console.log(allInfo);


chrome.storage.local.set({
    'all_sunpower_account_info': allInfo
 });