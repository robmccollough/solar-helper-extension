
const parseAddress = (addressStringArr) => {
  //designate positions

  //zip always last, state always second to last
  var zipIndex = addressStringArr.length - 1;
  var stateIndex =  addressStringArr.length - 2;

  //default case
  var seperatorIndex = 2;
  for(var i = 1; i < stateIndex; i ++){
      //street seperator 
      if(abbreviations.has(addressStringArr[i].toUpperCase())){
          console.log("here");
          seperatorIndex = i;
          
      }
  }

  var streetNum = addressStringArr[0];
  var abbr = addressStringArr[seperatorIndex];

  //combine into road name
  var roadName = '';
  for(var i = 1; i < seperatorIndex; i++){
      if(seperatorIndex - i > 1){
          roadName += `${addressStringArr[i]} `
      }else{
          roadName += `${addressStringArr[i]}`
      }
      
  }
  //and city name
  var cityName = '';
  for(var i = seperatorIndex + 1; i < stateIndex; i++){
      if(stateIndex - i > 1){
          cityName.concat(`${addressStringArr[i]} `);
      }else{
          cityName.concat(`${addressStringArr[i]}`);
      }
  }
  
  //streetNum always first
  var laneLine =  `${streetNum} ${roadName} ${abbr}`;
  

  return{
      number_street: laneLine,
      city: cityName,
      state: addressStringArr[stateIndex],
      zipcode: addressStringArr[zipIndex]
  }



}


const abbreviations = new Set(['ALLEY' ,'ALLEE' ,'ALY' ,'ALLEY' ,'ALLY' ,'ALY' ,'ANX' ,'ANNEX' ,'ANNX' ,'ANX' ,'ARCADE' ,'ARC' ,'ARC' ,'ARCADE' ,'AVENUE' ,'AV' ,'AVE' ,'AVEN' ,'AVENU' ,'AVENUE' ,'AVN' ,'AVNUE'
,'BAYOU' ,'BAYOO' ,'BYU' ,'BAYOU' ,'BEACH' ,'BCH' ,'BEACH' ,'BEND' ,'BND' ,'BLUFF' ,'BLF' ,'BLUF' ,'BLUFFS' ,'BLUFFS' ,'BLFS' ,'BOTTOM' ,'BOT' ,'BTM' ,'BTM' ,'BOTTM' ,'BOTTOM' ,'BOULEVARD' ,'BLVD' ,'BLVD' ,'BOUL' ,
'BOULEVARD' ,'BOULV' ,'BRANCH' ,'BR' ,'BR' ,'BRNCH' ,'BRANCH' ,'BRIDGE' ,'BRDGE' ,'BRG' ,'BRG' ,'BRIDGE' ,'BROOK' ,'BRK' ,'BRK' ,'BROOK' ,'BROOKS' ,'BROOKS' ,'BRKS' ,'BURG' ,'BURG' ,'BG' ,'BURGS' ,'BURGS' ,'BGS' ,'BYPASS',
'BYP' ,'BYP' ,'BYPA' ,'BYPAS' ,'BYPASS' ,'BYPS' ,'CAMP' ,'CAMP' ,'CP' ,'CP' ,'CMP' ,'CANYON' ,'CANYN' ,'CYN' ,'CANYON' ,'CNYN' ,'CAPE' ,'CAPE' ,'CPE' ,'CPE' ,'CAUSEWAY' ,'CAUSEWAY' ,'CSWY' ,'CAUSWA' ,'CSWY' ,'CENTER' ,'CEN' ,
'CTR' ,'CENT' ,'CENTER' ,'CENTR' ,'CENTRE' ,'CNTER' ,'CNTR' ,'CTR' ,'CENTERS' ,'CENTERS' ,'CTRS' ,'CIRCLE' ,'CIR' ,'CIR' ,'CIRC' ,'CIRCL' ,'CIRCLE' ,'CRCL' ,'CRCLE' ,'CIRCLES' ,'CIRCLES' ,'CIRS' ,'CLIFF' ,'CLF' ,'CLF' ,'CLIFF' ,
'CLIFFS' ,'CLFS' ,'CLFS' ,'CLIFFS' ,'CLUB' ,'CLB' ,'CLB' ,'CLUB' ,'COMMON' ,'COMMON' ,'CMN' ,'COMMONS' ,'COMMONS' ,'CMNS' ,'CORNER' ,'COR' ,'COR' ,'CORNER' ,'CORNERS' ,'CORNERS' ,'CORS' ,'CORS' ,'COURSE' ,'COURSE' ,'CRSE' ,'CRSE' ,
'COURT' ,'COURT' ,'CT' ,'CT' ,'COURTS' ,'COURTS' ,'CTS' ,'CTS' ,'COVE' ,'COVE' ,'CV' ,'CV' ,'COVES' ,'COVES' ,'CVS' ,'CREEK' ,'CREEK' ,'CRK' ,'CRK' ,'CRESCENT' ,'CRESCENT' ,'CRES' ,'CRES' ,'CRSENT' ,'CRSNT' ,'CREST' ,'CREST' ,'CRST' ,
'CROSSING' ,'CROSSING' ,'XING' ,'CRSSNG' ,'XING' ,'CROSSROAD' ,'CROSSROAD' ,'XRD' ,'CROSSROADS' ,'CROSSROADS' ,'XRDS' ,'CURVE' ,'CURVE' ,'CURV' ,'DALE' ,'DALE' ,'DL' ,'DL' ,'DAM' ,'DAM' ,'DM' ,'DM' ,'DIVIDE' ,'DIV' ,'DV' ,'DIVIDE' ,'DV' ,
'DVD' ,'DRIVE' ,'DR' ,'DR' ,'DRIV' ,'DRIVE' ,'DRV' ,'DRIVES' ,'DRIVES' ,'DRS' ,'ESTATE' ,'EST' ,'EST' ,'ESTATE' ,'ESTATES' ,'ESTATES' ,'ESTS' ,'ESTS' ,'EXPRESSWAY' ,'EXP' ,'EXPY' ,'EXPR' ,'EXPRESS' ,'EXPRESSWAY' ,'EXPW' ,'EXPY' ,'EXTENSION' ,
'EXT' ,'EXT' ,'EXTENSION' ,'EXTN' ,'EXTNSN' ,'EXTENSIONS' ,'EXTS' ,'EXTS' ,'FALL' ,'FALL' ,'FALL' ,'FALLS' ,'FALLS' ,'FLS' ,'FLS' ,'FERRY' ,'FERRY' ,'FRY' ,'FRRY' ,'FRY' ,'FIELD' ,'FIELD' ,'FLD' ,'FLD' ,'FIELDS' ,'FIELDS' ,'FLDS' ,'FLDS' ,'FLAT' ,
'FLAT' ,'FLT' ,'FLT' ,'FLATS' ,'FLATS' ,'FLTS' ,'FLTS' ,'FORD' ,'FORD' ,'FRD' ,'FRD' ,'FORDS' ,'FORDS' ,'FRDS' ,'FOREST' ,'FOREST' ,'FRST' ,'FORESTS' ,'FRST' ,'FORGE' ,'FORG' ,'FRG' ,'FORGE' ,'FRG' ,'FORGES' ,'FORGES' ,'FRGS' ,'FORK' ,'FORK' ,'FRK' ,
'FRK' ,'FORKS' ,'FORKS' ,'FRKS' ,'FRKS' ,'FORT' ,'FORT' ,'FT' ,'FRT' ,'FT' ,'FREEWAY' ,'FREEWAY' ,'FWY' ,'FREEWY' ,'FRWAY' ,'FRWY' ,'FWY' ,'GARDEN' ,'GARDEN' ,'GDN' ,'GARDN' ,'GRDEN' ,'GRDN' ,'GARDENS' ,'GARDENS' ,'GDNS' ,'GDNS' ,'GRDNS' 
,'GATEWAY' ,'GATEWAY' ,'GTWY' ,'GATEWY' ,'GATWAY' ,'GTWAY' ,'GTWY' ,'GLEN' ,'GLEN' ,'GLN' ,'GLN' ,'GLENS' ,'GLENS' ,'GLNS' ,'GREEN' ,'GREEN' ,'GRN' ,'GRN' ,'GREENS' ,'GREENS' ,'GRNS' ,'GROVE' ,'GROV' ,'GRV' ,'GROVE' ,'GRV' ,'GROVES' 
,'GROVES' ,'GRVS' ,'HARBOR' ,'HARB' ,'HBR' ,'HARBOR' ,'HARBR' ,'HBR' ,'HRBOR' ,'HARBORS' ,'HARBORS' ,'HBRS' ,'HAVEN' ,'HAVEN' ,'HVN' ,'HVN' ,'HEIGHTS' ,'HT' ,'HTS' ,'HTS' ,'HIGHWAY' ,'HIGHWAY' ,'HWY' ,'HIGHWY' ,'HIWAY' ,'HIWY' ,'HWAY' 
,'HWY' ,'HILL' ,'HILL' ,'HL' ,'HL' ,'HILLS' ,'HILLS' ,'HLS' ,'HLS' ,'HOLLOW' ,'HLLW' ,'HOLW' ,'HOLLOW' ,'HOLLOWS' ,'HOLW' ,'HOLWS' ,'INLET' ,'INLT' ,'INLT' ,'ISLAND' ,'IS' ,'IS' ,'ISLAND' ,'ISLND' ,'ISLANDS' ,'ISLANDS' ,'ISS' ,'ISLNDS' 
,'ISS' ,'ISLE' ,'ISLE' ,'ISLE' ,'ISLES' ,'JUNCTION' ,'JCT' ,'JCT' ,'JCTION' ,'JCTN' ,'JUNCTION' ,'JUNCTN' ,'JUNCTON' ,'JUNCTIONS' ,'JCTNS' ,'JCTS' ,'JCTS' ,'JUNCTIONS' ,'KEY' ,'KEY' ,'KY' ,'KY' ,'KEYS' ,'KEYS' ,'KYS' ,'KYS' ,'KNOLL' 
,'KNL' ,'KNL' ,'KNOL' ,'KNOLL' ,'KNOLLS' ,'KNLS' ,'KNLS' ,'KNOLLS' ,'LAKE' ,'LK' ,'LK' ,'LAKE' ,'LAKES' ,'LKS' ,'LKS' ,'LAKES' ,'LAND' ,'LAND' ,'LAND' ,'LANDING' ,'LANDING' ,'LNDG' ,'LNDG' ,'LNDNG' ,'LANE' ,'LANE' ,'LN' ,'LN' ,'LIGHT' 
,'LGT' ,'LGT' ,'LIGHT' ,'LIGHTS' ,'LIGHTS' ,'LGTS' ,'LOAF' ,'LF' ,'LF' ,'LOAF' ,'LOCK' ,'LCK' ,'LCK' ,'LOCK' ,'LOCKS' ,'LCKS' ,'LCKS' ,'LOCKS' ,'LODGE' ,'LDG' ,'LDG' ,'LDGE' ,'LODG' ,'LODGE' ,'LOOP' ,'LOOP' ,'LOOP' ,'LOOPS' ,
'MALL' ,'MALL' ,'MALL' ,'MANOR' ,'MNR' ,'MNR' ,'MANOR' ,'MANORS' ,'MANORS' ,'MNRS' ,'MNRS' ,'MEADOW' ,'MEADOW' ,'MDW' ,'MEADOWS' ,'MDW' ,'MDWS' ,'MDWS' ,'MEADOWS' ,'MEDOWS' ,'MEWS' ,'MEWS' ,'MEWS' ,'MILL' ,'MILL' ,'ML' ,'MILLS' ,
'MILLS' ,'MLS' ,'MISSION' ,'MISSN' ,'MSN' ,'MSSN' ,'MOTORWAY' ,'MOTORWAY' ,'MTWY' ,'MOUNT' ,'MNT' ,'MT' ,'MT' ,'MOUNT' ,'MOUNTAIN' ,'MNTAIN' ,'MTN' ,'MNTN' ,'MOUNTAIN' ,'MOUNTIN' ,'MTIN' ,'MTN' ,'MOUNTAINS' ,'MNTNS' ,'MTNS' ,
'MOUNTAINS' ,'NECK' ,'NCK' ,'NCK' ,'NECK' ,'ORCHARD' ,'ORCH' ,'ORCH' ,'ORCHARD' ,'ORCHRD' ,'OVAL' ,'OVAL' ,'OVAL' ,'OVL' ,'OVERPASS' ,'OVERPASS' ,'OPAS' ,'PARK' ,'PARK' ,'PARK' ,'PRK' ,'PARKS' ,'PARKS' ,'PARK' ,'PARKWAY' ,'PARKWAY' 
,'PKWY' ,'PARKWY' ,'PKWAY' ,'PKWY' ,'PKY' ,'PARKWAYS' ,'PARKWAYS' ,'PKWY' ,'PKWYS' ,'PASS' ,'PASS' ,'PASS' ,'PASSAGE' ,'PASSAGE' ,'PSGE' ,'PATH' ,'PATH' ,'PATH' ,'PATHS' ,'PIKE' ,'PIKE' ,'PIKE' ,'PIKES' ,'PINE' ,'PINE' ,'PNE' ,'PINES' 
,'PINES' ,'PNES' ,'PNES' ,'PLACE' ,'PL' ,'PL' ,'PLAIN' ,'PLAIN' ,'PLN' ,'PLN' ,'PLAINS' ,'PLAINS' ,'PLNS' ,'PLNS' ,'PLAZA' ,'PLAZA' ,'PLZ' ,'PLZ' ,'PLZA' ,'POINT' ,'POINT' ,'PT' ,'PT' ,'POINTS' ,'POINTS' ,'PTS' ,'PTS' ,'PORT' ,'PORT' 
,'PRT' ,'PRT' ,'PORTS' ,'PORTS' ,'PRTS' ,'PRTS' ,'PRAIRIE' ,'PR' ,'PR' ,'PRAIRIE' ,'PRR' ,'RADIAL' ,'RAD' ,'RADL' ,'RADIAL' ,'RADIEL' ,'RADL' ,'RAMP' ,'RAMP' ,'RAMP' ,'RANCH' ,'RANCH' ,'RNCH' ,'RANCHES' ,'RNCH' ,'RNCHS' ,'RAPID' ,'RAPID' 
,'RPD' ,'RPD' ,'RAPIDS' ,'RAPIDS' ,'RPDS' ,'RPDS' ,'REST' ,'REST' ,'RST' ,'RST' ,'RIDGE' ,'RDG' ,'RDG' ,'RDGE' ,'RIDGE' ,'RIDGES' ,'RDGS' ,'RDGS' ,'RIDGES' ,'RIVER' ,'RIV' ,'RIV' ,'RIVER' ,'RVR' ,'RIVR' ,'ROAD' ,'RD' ,'RD' ,'ROAD' ,'ROADS' 
,'ROADS' ,'RDS' ,'RDS' ,'ROUTE' ,'ROUTE' ,'RTE' ,'ROW' ,'ROW' ,'ROW' ,'RUE' ,'RUE' ,'RUE' ,'RUN' ,'RUN' ,'RUN' ,'SHOAL' ,'SHL' ,'SHL' ,'SHOAL' ,'SHOALS' ,'SHLS' ,'SHLS' ,'SHOALS' ,'SHORE' ,'SHOAR' ,'SHR' ,'SHORE' ,'SHR' ,'SHORES' ,'SHOARS' 
,'SHRS' ,'SHORES' ,'SHRS' ,'SKYWAY' ,'SKYWAY' ,'SKWY' ,'SPRING' ,'SPG' ,'SPG' ,'SPNG' ,'SPRING' ,'SPRNG' ,'SPRINGS' ,'SPGS' ,'SPGS' ,'SPNGS' ,'SPRINGS' ,'SPRNGS' ,'SPUR' ,'SPUR' ,'SPUR' ,'SPURS' ,'SPURS' ,'SPUR' ,'SQUARE' ,'SQ' ,'SQ' ,'SQR' 
,'SQRE' ,'SQU' ,'SQUARE' ,'SQUARES' ,'SQRS' ,'SQS' ,'SQUARES' ,'STATION' ,'STA' ,'STA' ,'STATION' ,'STATN' ,'STN' ,'STRAVENUE' ,'STRA' ,'STRA' ,'STRAV' ,'STRAVEN' ,'STRAVENUE' ,'STRAVN' ,'STRVN' ,'STRVNUE' ,'STREAM' ,'STREAM' ,'STRM' ,'STREME' 
,'STRM' ,'STREET' ,'STREET' ,'ST' ,'STRT' ,'ST' ,'STR' ,'STREETS' ,'STREETS' ,'STS' ,'SUMMIT' ,'SMT' ,'SMT' ,'SUMIT' ,'SUMITT' ,'SUMMIT' ,'TERRACE' ,'TER' ,'TER' ,'TERR' ,'TERRACE' ,'THROUGHWAY' ,'THROUGHWAY' ,'TRWY' ,'TRACE' ,'TRACE' ,'TRCE' 
,'TRACES' ,'TRCE' ,'TRACK' ,'TRACK' ,'TRAK' ,'TRACKS' ,'TRAK' ,'TRK' ,'TRKS' ,'TRAFFICWAY' ,'TRAFFICWAY' ,'TRFY' ,'TRAIL' ,'TRAIL' ,'TRL' ,'TRAILS' ,'TRL' ,'TRLS' ,'TRAILER' ,'TRAILER' ,'TRLR' ,'TRLR' ,'TRLRS' ,'TUNNEL' ,'TUNEL' ,'TUNL' ,'TUNL' 
,'TUNLS' ,'TUNNEL' ,'TUNNELS' ,'TUNNL' ,'TURNPIKE' ,'TRNPK' ,'TPKE' ,'TURNPIKE' ,'TURNPK' ,'UNDERPASS' ,'UNDERPASS' ,'UPAS' ,'UNION' ,'UN' ,'UN' ,'UNION' ,'UNIONS' ,'UNIONS' ,'UNS' ,'VALLEY' ,'VALLEY' ,'VLY' ,'VALLY' ,'VLLY' ,'VLY' ,'VALLEYS' 
,'VALLEYS' ,'VLYS' ,'VLYS' ,'VIADUCT' ,'VDCT' ,'VIA' ,'VIA' ,'VIADCT' ,'VIADUCT' ,'VIEW' ,'VIEW' ,'VW' ,'VW' ,'VIEWS' ,'VIEWS' ,'VWS' ,'VWS' ,'VILLAGE' ,'VILL' ,'VLG' ,'VILLAG' ,'VILLAGE' ,'VILLG' ,'VILLIAGE' ,'VLG' ,'VILLAGES' ,'VILLAGES' 
,'VLGS' ,'VLGS' ,'VILLE' ,'VILLE' ,'VL' ,'VL' ,'VISTA' ,'VIS' ,'VIS' ,'VIST' ,'VISTA' ,'VST' ,'VSTA' ,'WALK' ,'WALK' ,'WALK' ,'WALKS' ,'WALKS' ,'WALK' ,'WALL' ,'WALL' ,'WALL' ,'WAY' ,'WY' ,'WAY' ,'WAY' ,'WAYS' ,'WAYS' ,'WAYS' ,'WELL' ,'WELL' ,'WL' ,'WELLS' ,'WELLS' ,'WLS']);

chrome.storage.local.get('all_sunpower_account_info', function (info) {

    //extract info 
    const {
      account_owner, 
      address,
      appointment_time,
      appointment_date,
      best_call_time,
      consultation_type,
      email,
      language,
      lead_notes,
      marketing_opt,
      name,
      phone,
      satisfaction_opt,
      stage
    } = info.all_sunpower_account_info;

    // // promises, y'all!
    // let selectSomeOption = (select, value) => {
    //   return new Promise(
    //     (resolve, reject) => {
    //         try{
    //           select.click();
    //           console.log('clicked')
    //           resolve(select, value);
    //       }catch(e){
    //         reject(e);
    //       }
    //     })
    // }



  //grab all elements by ID's
    //title = none -> 

  //   selectSomeOption(document.querySelector("#Crm_Leads_FIRSTNAME_SALUTATION"), '-None-')
  //   .then((s,v) => {
  //       s.value = v;
  //       console.log('done 1 ');
  //   })
  //   .catch(e => console.log(e));

  //   selectSomeOption(document.querySelector("#Crm_Leads_LEADSOURCE"), 'SunPower Appointment')
  //   .then((s,v) => {
  //     s.value = v;
  //     console.log('done 2 ');
  // })
  // .catch(e => console.log(e));
    
  //   selectSomeOption(title, 0).then(
  //     result => {
  //     console.log(result);
  //      var option = result.elt.childNodes.item(result.index);
  //      return(option)
  //     }
  //  ).then(
  //    option => {
  //      console.log(option);
  //      option.click();
  //    }
  //  ).catch(
  //     error => console.log(error)
  //  );

    //name ->  string split(" ") -> [0] 
    var firstName =  document.getElementById("Crm_Leads_FIRSTNAME");
    var lastName =  document.getElementById("Crm_Leads_LASTNAME");

    var nameArr = name.split(" ");

    firstName.value = nameArr[0];
    lastName.value = nameArr[1];

    //phone -> 
    var phoneNum = document.getElementById("Crm_Leads_MOBILE");
    phoneNum.value = phone;

    //lead  source -> 
    

    //leadSource.innerHTML = `<span class="disablefalse">Sunpower Appointment</span>`

    //email -> 
    var emailInput = document.getElementById("Crm_Leads_EMAIL");
    emailInput.value = email;

    
    //lead status -> ,
    // var leadStatus = document.getElementById("select2-Crm_Leads_STATUS-container");
    //leadStatus.childNodes.item(0).click();
    //leadStatus.innerHTML = "<option value>New Opportunity</option>"

    //email opt out -> 

    var emailOptOut = document.getElementById("Crm_Leads_EMAILOPTOUT");
    emailOptOut.checked = !marketing_opt;


    //statusDetails

    // document.getElementById("Crm_Leads_LEADCF3").click();
    

    appointmentDate =  document.getElementById('Crm_Leads_LEADCF91');
    appointmenTime = document.getElementById('Crm_Leads_LEADCF91_TimeOption');

  

    if(appointment_date !== ''){
      appointmentDate.value = appointment_date;
    }

    if(appointment_time !== ''){
      appointmenTime.value =  appointment_time;
    }


    
    ///addess -> string split " " -> get rid of commas first
    var addressArr = address.replace(',', '').split(" ");

    //this function not fooled by double word street or city names
    const addressObj = parseAddress(addressArr);
    console.log(addressObj);
    
    if(addressObj !== null){

      var street = document.getElementById("Crm_Leads_LANE");
      street.value = addressObj.number_street;


      var city = document.getElementById("Crm_Leads_CITY");
      city.value = addressObj.city;

      var state = document.getElementById("Crm_Leads_STATE");
      state.value = addressObj.state;

      var code = document.getElementById("Crm_Leads_CODE");
      code.value = addressObj.zipcode;
    }
    //notes -> 
    var description = document.getElementById("Crm_Leads_DESCRIPTION");
    description.innerHTML = lead_notes.join('\n');

  });