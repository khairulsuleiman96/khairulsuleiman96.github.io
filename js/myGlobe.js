//Global Variables
var previousJsonData = null;
var currentJsonData = null;
var globeScreenActive = true;
var lat = null;
var longi = null;
var isClick = false;
var globe = Globe();

var wells = null;
var operations = null;
var rig_informations = null;
var wellbores = null;
var hse = null;
var lesson = null;
var report_daily = null;


var final_all_data = null;
var final_globe_well = null;
var tabIndex = 1;
var checkOnClickOperation = false;



// =================================================Start Function==========================================


/*
 * function checkJsonDataIsSameOrDifferentWithPreviousData() {
 * 
 * fetch('JSON/wells.json?vr=1.0', { cache: "no-cache" }).then(res =>
 * res.json()).then(data => { currentJsonData = JSON.stringify(data);
 * //console.log(previousJsonData); //console.log(currentJsonData); if
 * (currentJsonData == previousJsonData) { console.log("haha"); //dont do
 * anything } else { console.log("lol"); if (globeScreenActive == true) {
 * globe.labelsData(null); globe.labelsData(data.wells); previousJsonData =
 * currentJsonData; currentJsonData = null; } } }); }
 */

function loadEarth() {

	wells = [];
	operations = [];
	rig_informations = [];
	wellbores = [];
	hse = [];
	lesson= [];
	

	final_all_data = {wells:[]};
	final_globe_well = {wells:[]};

	fetch('JSON/wells.json?vr=2.0', { cache: "no-cache" }).then(res => res.json()).then(data => {

		wells = data.wells;
		operations = data.operations;
		rig_informations = data.rig_informations;
		wellbores = data.wellbores;
		report_daily = data.report_daily;
		hse = data.hse;
		lesson = data.lesson;

		// =============================new globe data==================================
		console.log("wells string data: ");
		console.log(report_daily);
		console.log(Object.keys(report_daily));
		for(let i = 0;i<Object.keys(report_daily).length;i++){
			var obj = {}
			obj["report_daily_uid"]=report_daily[i].report_daily_uid
			obj["operation_uid"]=report_daily[i].operation_uid
			obj["report_datetime"]=report_daily[i].report_datetime
			operations.some(function(operation) {				
				if (operation.operation_uid == report_daily[i].operation_uid) {					
					obj["operation_uid"] = operation.operation_uid
					obj["rig_information_uid"] = operation.rig_information_uid
					obj["wellbore_uid"] = operation.wellbore_uid
					obj["well_uid"] = operation.well_uid
					obj["operation_code"] = operation.operation_code
					obj["operation_name"] = operation.operation_name
					obj["spud_date"] = operation.spud_date
					obj["op_co"] = operation.op_co		
					wells.some(function(well) {				
						if (well.well_uid == operation.well_uid) {
							obj["well_name"] = well.well_name
							obj["water_depth"] = well.water_depth			
							//obj["latitude"] = well.latitude
							if(well.lat_ns==="S")
								{
								obj["latitude"] = -(Number(well.lat_deg) + Number(well.lat_minute)/60 + Number(well.lat_second)/(60*60))
								console.log(obj["latitude"])
									
								}
							else
								{
								obj["latitude"] =Number(well.lat_deg) + Number(well.lat_minute)/60 + Number(well.lat_second)/(60*60)
								console.log(obj["latitude"])
								
								}						
							
							
							//obj["longitude"] = well.longitude
							
							if(well.long_ns==="S")
							{
							obj["longitude"] = -(Number(well.long_deg) + Number(well.long_minute)/60 + Number(well.long_second)/(60*60))
							}
						else
							{
							obj["longitude"] = Number(well.long_deg) + Number(well.long_minute)/60 + Number(well.long_second)/(60*60)
							}
							obj["region"] = well.region
							obj["on_off_shore"] = well.on_off_shore
							obj["projected_days"] = well.projected_days			
							obj["country"] = well.country
							obj["state"] = well.state
							obj["lat_deg"] = well.lat_deg
							obj["lat_minute"] = well.lat_minute
							obj["lat_second"] = well.lat_second
							obj["lat_ns"] = well.lat_ns
							obj["long_deg"] = well.long_deg
							obj["long_minute"] = well.long_minute
							obj["long_second"] = well.long_second
							obj["long_ew"] = well.long_ew
							var checkWellUidExist = false;
							final_globe_well.wells.some(function(data) {
								if(data.well_uid == well.well_uid)
								{
									checkWellUidExist= true;
								}

							});
							if(checkWellUidExist!=true)
							{
								final_globe_well.wells.push({
									"well_uid": obj["well_uid"],
									"well_name": obj["well_name"],
									"water_depth": obj["water_depth"],
									"latitude": obj["latitude"],
									"longitude": obj["longitude"],
									"region":obj["region"],
									"on_off_shore":obj["on_off_shore"],
									"projected_days":obj["projected_days"],
									"country": obj["country"],
									"state": obj["state"],
									"lat_deg": obj["lat_deg"],
									"lat_minute": obj["lat_minute"],
									"lat_second": obj["lat_second"],
									"lat_ns": obj["lat_ns"],
									"long_deg": obj["long_deg"],
									"long_minute": obj["long_minute"],
									"long_second": obj["long_second"],
									"long_ew": obj["long_ew"]
								});
							}
							return false
						}
					});
					wellbores.some(function(wellbore) {				
						if (wellbore.wellbore_uid == operation.wellbore_uid) {
							obj["wellbore_name"] = wellbore.wellbore_name
							obj["wellbore_type"] = wellbore.wellbore_type
							obj["planned_td_md_msl"] = wellbore.planned_td_md_msl
							obj["planned_td_tvd_msl"] = wellbore.planned_td_tvd_msl
							obj["final_td_md_msl"] = wellbore.final_td_md_msl
							obj["final_td_tvd_msl"] = wellbore.final_td_tvd_msl
							obj["kickoff_md_msl"] = wellbore.kickoff_md_msl
							obj["kickoff_tvd_msl"] = wellbore.kickoff_tvd_msl
							return false
						}
					});
					rig_informations.some(function(rig_information) {				
						if (rig_information.rig_information_uid == operation.rig_information_uid) {

							obj["rig_name"] = rig_information.rig_name
							obj["rig_manager"] = rig_information.rig_manager
							obj["rig_owner"] = rig_information.rig_owner	
							return false
						}
					});
					return false
				}
			});
			final_all_data.wells.push({
				"report_daily_uid":obj["report_daily_uid"],
				"operation_uid":obj["operation_uid"],
				"report_datetime":obj["report_datetime"],		

				"operation_uid": obj["operation_uid"],
				"rig_information_uid": obj["rig_information_uid"],
				"well_uid": obj["well_uid"],
				"wellbore_uid": obj["wellbore_uid"],
				"operation_code": obj["operation_code"],
				"operation_name": obj["operation_name"],
				"spud_date": obj["spud_date"],
				"op_co": obj["op_co"],			

				"well_name": obj["well_name"],
				"water_depth": obj["water_depth"],
				"latitude": obj["latitude"],
				"longitude": obj["longitude"],
				"region":obj["region"],
				"on_off_shore":obj["on_off_shore"],
				"projected_days":obj["projected_days"],
				"country": obj["country"],
				"state": obj["state"],
				"lat_deg": obj["lat_deg"],
				"lat_minute": obj["lat_minute"],
				"lat_second": obj["lat_second"],
				"lat_ns": obj["lat_ns"],
				"long_deg": obj["long_deg"],
				"long_minute": obj["long_minute"],
				"long_second": obj["long_second"],
				"long_ew": obj["long_ew"],

				"wellbore_name": obj["wellbore_name"],
				"wellbore_type": obj["wellbore_type"],
				"planned_td_md_msl": obj["planned_td_md_msl"],
				"planned_td_tvd_msl":obj["planned_td_tvd_msl"],
				"final_td_md_msl": obj["final_td_md_msl"],
				"final_td_tvd_msl": obj["final_td_tvd_msl"],
				"kickoff_md_msl": obj["kickoff_md_msl"],
				"kickoff_tvd_msl":obj["kickoff_tvd_msl"],

				"rig_name": obj["rig_name"],
				"rig_manager": obj["rig_manager"],
				"rig_owner":obj["rig_owner"]

			});
		}

		console.log("final data: ");
		console.log(final_all_data.wells);
		console.log(final_globe_well.wells);




		// ==============================end globe data=====================================
		
		globe
		.globeImageUrl('MATERIAL/earth-day.jpg')
		.backgroundImageUrl('MATERIAL/night-sky.png')
		.width(document.getElementById("globeViz").clientWidth)
		.height(document.getElementById("globeViz").clientHeight)
		.labelsData(final_globe_well.wells)
		.labelLat(d => d.latitude)
		.labelLng(d => d.longitude)
		.labelText(d => d.well_name)
		.labelSize(d => Math.sqrt(80000000) * 4e-4)
		.labelDotRadius(d => Math.sqrt(20000000) * 4e-4)
		.labelColor(() => 'rgba(117, 0, 117, 1)')
		.labelResolution(100)
		.showGraticules(true)
		.showAtmosphere(true)
		.labelAltitude(0.001)
		.onLabelClick(d => {
			globe.enablePointerInteraction(false);
			// console.log(d.wellInfo.latitude + " " +
			// d.wellInfo.longitude);
			lat = d.latitude;
			longi = d.longitude;
			isClick = true;
			globe.pointOfView({ lat: lat, lng: longi, altitude: 0.5 }, 1000);
			globe.controls().autoRotate = false;
			
			//well data here
			document.getElementById("wellInformation_well_name").innerHTML = d.well_name;
			document.getElementById("wellInformation_on_off_shore").innerHTML += d.on_off_shore + ' SHORE';
			document.getElementById("wellInformation_water_depth").innerHTML += d.water_depth + ' m';
			document.getElementById("wellInformation_region").innerHTML += d.region;		
			document.getElementById("wellInformation_projected_days").innerHTML += (d.projected_days/86400);
			document.getElementById("wellInformation_country").innerHTML += d.country;
			document.getElementById("wellInformation_state").innerHTML += d.state;
			var checkWellExist=false;
			for(let i =0; checkWellExist==false;i++)
				{
				if(operations[i].well_uid==d.well_uid)
				{
					
					console.log("operation looped");
					var checkRigInformationExist=false;
					for(let j = 0;checkRigInformationExist==false;j++)
						{
						if(rig_informations[j].rig_information_uid == operations[i].rig_information_uid)
							{
							console.log("rig_info looped");
							document.getElementById("wellInformation_rig_name").innerHTML += rig_informations[j].rig_name;
							document.getElementById("wellInformation_rig_manager").innerHTML += rig_informations[j].rig_manager;
							document.getElementById("wellInformation_rig_owner").innerHTML += rig_informations[j].rig_owner;
							
							checkRigInformationExist=true;							
						
							}
						}
					checkWellExist=true;
				}	
			}
			/*operations.some(function(operation) {
				if(operation.well_uid==d.well_uid)
				{
					
					console.log("operation looped");
					return false;				
				}				
				
			});*/
			
			for(var k = 0; k < final_all_data.wells.length; k++){
				if(d.well_name === final_all_data.wells[k].well_name){
					//dynamic navs available based on chosen's data's list of operations
					if(tabIndex < 2){
						document.getElementById("nav-tab").insertAdjacentHTML('beforeend','<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#'+final_all_data.wells[k].operation_uid+'" role="tab" aria-controls="nav-home" aria-selected="true">'+final_all_data.wells[k].operation_name+'</a>');								
					    var	modalContentHTML = '<div class="tab-pane fade show active" id="'+final_all_data.wells[k].operation_uid+'" role="tabpanel" aria-labelledby="nav-home-tab">';
					}
					else{
						document.getElementById("nav-tab").insertAdjacentHTML('beforeend','<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#'+final_all_data.wells[k].operation_uid+'" role="tab" aria-controls="nav-profile" aria-selected="false">'+final_all_data.wells[k].operation_name+'</a>');								
						var modalContentHTML = '<div class="tab-pane fade" id="'+final_all_data.wells[k].operation_uid+'" role="tabpanel" aria-labelledby="nav-profile-tab">';
					}
					
					//dynamic modal content based on chosen data
					modalContentHTML += 	'<div class="row p-3">';
					modalContentHTML += 		'<div class="col-12 col-md-12 col-lg-6 order-1 order-md-1">';
					modalContentHTML += 			'<div class="row">';
					modalContentHTML += 				'<div class="col-4">';
					modalContentHTML += 					'<div class="text-muted">';
					modalContentHTML += 						'<p class="text-sm">Name<b class="d-block">'+final_all_data.wells[k].operation_name+'</b></p>';
					modalContentHTML += 						'<p class="text-sm">Code<b class="d-block">'+final_all_data.wells[k].operation_code+'</b></p>';
					modalContentHTML += 					'</div>';
					modalContentHTML += 				'</div>';
					modalContentHTML += 				'<div class="col-4">';
					modalContentHTML += 					'<div class="text-muted">';
					modalContentHTML += 						'<p class="text-sm">Spud Date<b class="d-block">'+final_all_data.wells[k].spud_date+'</b></p>';
					modalContentHTML += 						'<p class="text-sm">Company<b class="d-block">'+final_all_data.wells[k].op_co+'</b></p>';
					modalContentHTML += 					'</div>';
					modalContentHTML += 				'</div>';
					modalContentHTML += 				'<div class="col-4">';
					modalContentHTML += 					'<div class="text-muted">';
					modalContentHTML += 						'<p class="text-sm">Wellbore<b class="d-block">'+final_all_data.wells[k].wellbore_name+'</b></p>';
					modalContentHTML += 						'<p class="text-sm">Type<b class="d-block">'+final_all_data.wells[k].wellbore_type+'</b></p>';
					modalContentHTML += 					'</div>';
					modalContentHTML += 				'</div>';
					modalContentHTML += 			'</div>';
					modalContentHTML += 		'</div>';
					modalContentHTML += 		'<div class="col-12 col-md-12 col-lg-6 order-2 order-md-2">';
					modalContentHTML += 			'<h5 class="text-white">Latest Generated Reports</h5>';
					modalContentHTML += 			'<ul class="list-unstyled">';
					modalContentHTML +=					'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> DDR.pdf</a></li>';
					modalContentHTML += 				'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> DPR.pdf</a></li>';
					modalContentHTML += 				'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> DMR.pdf</a></li>';
					modalContentHTML += 				'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> FWR.pdf</a></li>';
					modalContentHTML += 			'</ul>';
					modalContentHTML += 		'</div>';
					modalContentHTML += 	'</div>';
					
					//call function lessonHseFunction to put them into respective tabs
					modalContentHTML += lessonHseFunction(final_all_data.wells[k].operation_uid);
					document.getElementById("nav-tabContent").insertAdjacentHTML('beforeend',modalContentHTML);
					tabIndex++;
				}
			}
			
			//modal show delay for animation
			setTimeout(function() {
				$("#modal-lg").modal('show')
			}, 650);

		})
		(document.getElementById('globeViz'))
		previousJsonData = JSON.stringify(data);
		currentJsonData = null;
		globe.controls().autoRotate = true;
		globe.controls().autoRotateSpeed = 1;
		console.log("testing2");
		console.log(data);
	});

}

//Khai added -> function to fetch, put here for now
function fetchagain(){
	fetch('JSON/wells.json')
		.then(function (response) {
	    return response.json();
	  })
	  .then(function (data) {
	    appendData(data);
	  })
	  .catch(function (err) {
	    console.log(err);
	  });
	
	function appendData(data) {
		//Left side container
		//Scheduled Downtime
		var todaycount = 0;
        var downtimeContainer = document.getElementById("jsonDowntime");
        var row_downtimeToday = document.createElement("today"); //custom tag to declare as unknown element today
        var row_downtimeUpcoming = document.createElement("upcoming"); //custom tag to declare as unknown element upcoming
        for (var i = 0; i < data.downtime.length; i++) {
        	//difference between from date and to date
        	//duration = moment.unix(data.downtime[i].epochto).diff(moment.unix(data.downtime[i].epochfrom),'minutes');
        	//saves data to html text based on date
        	if(moment().local().isSame(moment.unix(data.downtime[i].epochfrom),"date")) { //check if its today
        		if(moment.unix(data.downtime[i].epochfrom).diff(moment().local()) < 0){ //negative means already passed so put strikethrough <s>
        			row_downtimeToday.innerHTML += '<s><p class="animate__animated animate__slideInLeft my-0 ml-2"><span class="sched"><i class="fa fa-check mr-2" aria-hidden="true"></i>'+ data.downtime[i].type + '</span><span class="time ml-2">'+moment.unix(data.downtime[i].epochfrom).format('MMMM Do YYYY')+'</span><span class="time ml-2">' + moment.unix(data.downtime[i].epochfrom).format('h:mm a') + '-' + moment.unix(data.downtime[i].epochto).format('h:mm a') + '</span><span class="duration">' + moment.unix(data.downtime[i].epochto,'YYYYMMDD').fromNow() + '</span></p></s>';
        		}
        		else{ //positive means not yet passed
        			row_downtimeToday.innerHTML += '<p class="animate__animated animate__slideInLeft my-0 ml-2"><span class="sched text-white"><i class="fa fa-calendar mr-2" aria-hidden="true"></i>'+ data.downtime[i].type + '</span><span class="time ml-2">'+moment.unix(data.downtime[i].epochfrom).format('MMMM Do YYYY')+'</span><span class="time ml-2">' + moment.unix(data.downtime[i].epochfrom).format('h:mm a') + '-' + moment.unix(data.downtime[i].epochto).format('h:mm a') + '</span><span class="duration">' + moment.unix(data.downtime[i].epochfrom,'YYYYMMDD').fromNow() + '</span></p>';
        		}
        		todaycount = 1; //exist today
        	}
        	if(!moment().local().isSame(moment.unix(data.downtime[i].epochfrom),"date") && moment.unix(data.downtime[i].epochfrom).diff(moment().local()) > 0 ) { //check if its not today and if its coming in the future
        		row_downtimeUpcoming.innerHTML += '<p class="sched2 animate__animated animate__slideInLeft my-0 ml-2"><span class="sched"><i class="fa fa-calendar mr-2" aria-hidden="true"></i>'+ data.downtime[i].type + '</span><span class="time ml-2">'+moment.unix(data.downtime[i].epochfrom).format('MMMM Do YYYY')+'</span><span class="time ml-2">' + moment.unix(data.downtime[i].epochfrom).format('h:mm a') + '-' + moment.unix(data.downtime[i].epochto).format('h:mm a') + '</span><span class="duration">' + moment.unix(data.downtime[i].epochfrom,'YYYYMMDD').fromNow() + '</span></p>';
        	}
        }
        //attach all to container
        downtimeContainer.insertAdjacentHTML('beforeend','<p class="my-1"><span class="today">Today</span></p>');
        if(todaycount == 0){
        	downtimeContainer.insertAdjacentHTML('beforeend','<p class="sched2 animate__animated animate__slideInLeft my-0 ml-2"><span class="sched">No events for today!</span></p>');
        }
        else{
        	downtimeContainer.append(row_downtimeToday);
        }
        downtimeContainer.insertAdjacentHTML('beforeend','<p class="my-1"><span class="tomorrow">Upcoming</span></p>');
        downtimeContainer.append(row_downtimeUpcoming);
        //End of Scheduled Downtime
        
        //NBB
		var mainContainer = document.getElementById("jsonNbb");
        for (var i = 0; i < data.nbb.length; i++) {
            var row_nbb = document.createElement("tr");
            //row_nbb.classList.add('list-unstyled');
            row_nbb.innerHTML = '<td>';
            if(data.nbb[i].status.toString() === "online"){
            	row_nbb.innerHTML += '<i class="fa fa-signal text-success" aria-hidden="true"></i>';            	
            }
            else if(data.nbb[i].status.toString() === "offline"){
            	row_nbb.innerHTML += '<i class="fa fa-signal text-danger" aria-hidden="true"></i>';
            }
            row_nbb.innerHTML += '<span class="sched" data-toggle="tooltip" data-html="true" data-placement="right" title="Last Online: '+ data.nbb[i].datelast +'"> ' + data.nbb[i].name + ' </span>';
        	row_nbb.innerHTML += '</td>';
        	mainContainer.appendChild(row_nbb);
        }
              
        //Middle Containers
              
        //Latest 5 Operations
        var operationContainer = document.getElementById("jsonOperation");
        for (var i = 0; i < data.report_daily.length; i++) {	        	
        	var row_operation = document.createElement("tr");
        	row_operation.classList.add('animate__animated','animate__slideInLeft');
        	console.log(i);        	
        	row_operation.setAttribute('id',"row");
        	row_operation.style.cursor = "pointer";        	
        	//click row
        	row_operation.onclick = function () {
        		if(checkOnClickOperation)
        			{
        			
        			}
        		else
        			{
        			var rowIndex = $(this).closest('tr').index();
        			console.log(rowIndex);
        			passOperationArray(data.report_daily[rowIndex].operation_uid);
        			checkOnClickOperation=true;
        			}
			
			};        	
        	//get object from json using the operation uid as foreign key
        	var opsName = data.operations.find(x => x.operation_uid === data.report_daily[i].operation_uid).operation_name;
        	var wellUid = data.operations.find(x => x.operation_uid === data.report_daily[i].operation_uid).well_uid;
        	var opsWellName = data.wells.find(x => x.well_uid === wellUid).well_name;
        	var wellboreUid = data.operations.find(x => x.operation_uid === data.report_daily[i].operation_uid).wellbore_uid;
        	var opsWellboreName = data.wellbores.find(x => x.wellbore_uid === wellboreUid).wellbore_name;
        	var rigUid = data.operations.find(x => x.operation_uid === data.report_daily[i].operation_uid).rig_information_uid;
        	var opsRigName = data.rig_informations.find(x => x.rig_information_uid === rigUid).rig_name;
        	//row_operation.innerHTML += '<td><a id="rowClick" onclick ="passOperationArray('+'\''+data.report_daily[i].operation_uid+'\''+')">'+ opsName + '</a></td>'; //td saves the value of opsUID to be passed
        	row_operation.innerHTML += '<td>'+ opsName + '</td>'; //td saves the value of opsUID to be passed
            row_operation.innerHTML += '<td class="wellName">'+ opsWellName + '</td>';
            row_operation.innerHTML += '<td>'+ opsWellboreName + '</td>';
            row_operation.innerHTML += '<td>'+ opsRigName + '</td>';
            row_operation.innerHTML += '<td class="text-center">'+ data.report_daily[i].report_number + '</td>';
            row_operation.innerHTML += '<td>'+ data.report_daily[i].report_datetime + '</td>';
            operationContainer.appendChild(row_operation);
        }//end of latest 5 operations
        
        //Right side containers
        //Recent Updates
        var recentContainer = document.getElementById("jsonRecent");
        for (var i = 0; i < data.recent.length; i++) {
        	//compare if recent or not (less than 3 days is recent)
        	var now = moment(new Date()); //today's date
        	var end = moment.unix(data.recent[i].epoch).format('llll');
        	var duration = moment.duration(now.diff(end));
        	var days = duration.asDays();
        	
        	var row_recent = document.createElement("tr");
        	row_recent.classList.add('animate__animated','animate__slideInLeft');
            row_recent.innerHTML += '<td>'+ data.recent[i].release + '</td>';
            row_recent.innerHTML += '<td><span class="sched2 ml-2">'+ moment.unix(data.recent[i].epoch,"YYYYMMDD").fromNow() + '</span></td>';
            if(days < 7){
            	row_recent.innerHTML += '<td><span class="badge badge-success">New!</span></td>';
            }
            recentContainer.appendChild(row_recent);
        }//end of recent updates
        
        //Upcoming Updates
        var upcomingContainer = document.getElementById("jsonUpcoming");
        for (var i = 0; i < data.upcoming.length; i++) {	        	
        	var row_upcoming = document.createElement("tr");
        	row_upcoming.classList.add('animate__animated','animate__slideInLeft');
            row_upcoming.innerHTML += '<td>'+ data.upcoming[i].release + '</td>';
            row_upcoming.innerHTML += '<td><span class="sched2 ml-2">'+ moment.unix(data.upcoming[i].epoch).format('llll') + '</span></td>';
            upcomingContainer.appendChild(row_upcoming);
        }//end of upcoming updates
    }
} //end of fetch function

//for function for click on one of the latest 5 operations
function passOperationArray(operationUid){
	//document.getElementById("row").style.pointerEvents="none";
	//document.getElementById("row").style.cursor="default";
	for(w = 0; w < final_all_data.wells.length; w++){
		if(final_all_data.wells[w].operation_uid === operationUid){
			var wellUid = final_all_data.wells[w].well_uid;
			lat = final_all_data.wells[w].latitude;
			longi = final_all_data.wells[w].longitude;
			isClick = true;
			globe.pointOfView({ lat: lat, lng: longi, altitude: 0.5 }, 1000);
			globe.controls().autoRotate = false;
			//well data here
			document.getElementById("wellInformation_well_name").innerHTML = final_all_data.wells[w].well_name;
			document.getElementById("wellInformation_on_off_shore").innerHTML += final_all_data.wells[w].on_off_shore + ' SHORE';
			document.getElementById("wellInformation_water_depth").innerHTML += final_all_data.wells[w].water_depth + ' m';
			document.getElementById("wellInformation_region").innerHTML += final_all_data.wells[w].region;		
			document.getElementById("wellInformation_projected_days").innerHTML += (final_all_data.wells[w].projected_days/86400);
			document.getElementById("wellInformation_country").innerHTML += final_all_data.wells[w].country;
			document.getElementById("wellInformation_state").innerHTML += final_all_data.wells[w].state;
			var checkWellExist=false;
			for(let i =0; checkWellExist==false;i++)
				{
				if(operations[i].well_uid==final_all_data.wells[w].well_uid)
				{
					
					console.log("operation looped");
					var checkRigInformationExist=false;
					for(let j = 0;checkRigInformationExist==false;j++)
						{
						if(rig_informations[j].rig_information_uid == operations[i].rig_information_uid)
							{
							console.log("rig_info looped");
							document.getElementById("wellInformation_rig_name").innerHTML += rig_informations[j].rig_name;
							document.getElementById("wellInformation_rig_manager").innerHTML += rig_informations[j].rig_manager;
							document.getElementById("wellInformation_rig_owner").innerHTML += rig_informations[j].rig_owner;
							
							checkRigInformationExist=true;							
						
							}
						}
					checkWellExist=true;
				}	
			}
		}
	}
	for(var k = 0; k < final_all_data.wells.length; k++){
		if(wellUid === final_all_data.wells[k].well_uid){
			//dynamic navs available based on chosen's data's list of operations
			if(final_all_data.wells[k].operation_uid === operationUid){
				document.getElementById("nav-tab").insertAdjacentHTML('beforeend','<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#'+final_all_data.wells[k].operation_uid+'" role="tab" aria-controls="nav-home" aria-selected="true">'+final_all_data.wells[k].operation_name+'</a>');								
			    var	modalContentHTML = '<div class="tab-pane fade show active" id="'+final_all_data.wells[k].operation_uid+'" role="tabpanel" aria-labelledby="nav-home-tab">';
			}
			else{
				document.getElementById("nav-tab").insertAdjacentHTML('beforeend','<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#'+final_all_data.wells[k].operation_uid+'" role="tab" aria-controls="nav-profile" aria-selected="false">'+final_all_data.wells[k].operation_name+'</a>');								
				var modalContentHTML = '<div class="tab-pane fade" id="'+final_all_data.wells[k].operation_uid+'" role="tabpanel" aria-labelledby="nav-profile-tab">';
			}
			
			//dynamic modal content based on chosen data
			modalContentHTML += 	'<div class="row p-3">';
			modalContentHTML += 		'<div class="col-12 col-md-12 col-lg-6 order-1 order-md-1">';
			modalContentHTML += 			'<div class="row">';
			modalContentHTML += 				'<div class="col-4">';
			modalContentHTML += 					'<div class="text-muted">';
			modalContentHTML += 						'<p class="text-sm">Name<b class="d-block">'+final_all_data.wells[k].operation_name+'</b></p>';
			modalContentHTML += 						'<p class="text-sm">Code<b class="d-block">'+final_all_data.wells[k].operation_code+'</b></p>';
			modalContentHTML += 					'</div>';
			modalContentHTML += 				'</div>';
			modalContentHTML += 				'<div class="col-4">';
			modalContentHTML += 					'<div class="text-muted">';
			modalContentHTML += 						'<p class="text-sm">Spud Date<b class="d-block">'+final_all_data.wells[k].spud_date+'</b></p>';
			modalContentHTML += 						'<p class="text-sm">Company<b class="d-block">'+final_all_data.wells[k].op_co+'</b></p>';
			modalContentHTML += 					'</div>';
			modalContentHTML += 				'</div>';
			modalContentHTML += 				'<div class="col-4">';
			modalContentHTML += 					'<div class="text-muted">';
			modalContentHTML += 						'<p class="text-sm">Wellbore<b class="d-block">'+final_all_data.wells[k].wellbore_name+'</b></p>';
			modalContentHTML += 						'<p class="text-sm">Type<b class="d-block">'+final_all_data.wells[k].wellbore_type+'</b></p>';
			modalContentHTML += 					'</div>';
			modalContentHTML += 				'</div>';
			modalContentHTML += 			'</div>';
			modalContentHTML += 		'</div>';
			modalContentHTML += 		'<div class="col-12 col-md-12 col-lg-6 order-2 order-md-2">';
			modalContentHTML += 			'<h5 class="text-white">Latest Generated Reports</h5>';
			modalContentHTML += 			'<ul class="list-unstyled">';
			modalContentHTML +=					'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> DDR.pdf</a></li>';
			modalContentHTML += 				'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> DGR.pdf</a></li>';
			modalContentHTML += 				'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> MGT.pdf</a></li>';
			modalContentHTML += 				'<li><a href="" class="btn-link text-secondary"><i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> DPR.pdf</a></li>';
			modalContentHTML += 			'</ul>';
			modalContentHTML += 		'</div>';
			modalContentHTML += 	'</div>';
			
			//call function lessonHseFunction to put them into respective tabs
			modalContentHTML += lessonHseFunction(final_all_data.wells[k].operation_uid);
			document.getElementById("nav-tabContent").insertAdjacentHTML('beforeend',modalContentHTML);
			tabIndex++;
		}
	}
	
	//modal show delay for animation
	setTimeout(function() {
		$("#modal-lg").modal('show')
	}, 650);
}//end of function for click on latest 5

//for function Lesson learned and HSE in Modal
function lessonHseFunction(currentOperationUid){
	var stringHTML = "";
	//tab headers
	stringHTML += '<nav><div class="nav nav-tabs" id="nav-tabmini" role="tablist">';
	stringHTML += '<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#'+currentOperationUid+'lesson" role="tab" aria-controls="nav-home" aria-selected="true">Lesson Learned</a>';								
    stringHTML += '<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#'+currentOperationUid+'hse" role="tab" aria-controls="nav-home" aria-selected="true">HSE Comments</a>';								
    stringHTML += '</div></nav>';
	//tab bodies
	stringHTML += '<div class="tab-content" id="nav-tabContentmini">';
	//lesson learned tab body
	stringHTML += 	'<div class="tab-pane fade show active" id="'+currentOperationUid+'lesson" role="tabpanel" aria-labelledby="nav-home-tab">';
	for(var l = 0; l < lesson.length; l++ ){
		if(lesson[l].operation_uid === currentOperationUid){
			stringHTML += '<div class="row my-0 ml-3"><div class="col-2"><span class="sched">'+ moment(lesson[l].event_date_time).format('ll')+ '</span></div><div class="col-10"><span class="sched">' + lesson[l].descr_event + '</span></div></div>';					
		}
	}
	stringHTML += 	'</div>';
	//hse tab body
	stringHTML += 	'<div class="tab-pane fade" id="'+currentOperationUid+'hse" role="tabpanel" aria-labelledby="nav-home-tab">';
	for(var h = 0; h < hse.length; h++ ){
		if(hse[h].operation_uid === currentOperationUid){
			stringHTML += '<div class="row my-0 ml-3"><div class="col-2"><span class="sched">'+ moment(hse[h].hse_eventdatetime).format('ll')+ '</span></div><div class="col-10"><span class="sched">' + hse[h].hse_shortdescription + '</span></div></div>';					
		}
	}
	stringHTML += 	'</div>';
	stringHTML += '</div>';
	return stringHTML;
}

// =================================================End Function==========================================

//calls this function only when page is fully loaded
document.addEventListener("DOMContentLoaded", function(){
	  $('#modalUser').modal('show'); //show user modal when page loads as default behavior
	  loadEarth();
	  fetchagain();
	  //enable tooltip in body element
	  $('body').tooltip({
		    selector: '[data-toggle="tooltip"]',
		    container: 'body'
	  });
	  //looping every 5 seconds, disable for now since using a refresh button instead
	  /* var k = setInterval(function() {
		  document.getElementById("jsonNbb").innerHTML="";
		  document.getElementById("jsonLesson").innerHTML="";
		  document.getElementById("jsonHse").innerHTML="";
		  fetchagain();
		}, 5000); //1000 = 1 sec */

});

//globe background auto resize when zoom in and out
window.onresize = function(e) {
	console.log("testing");

	globe
	.width(document.getElementById("globeViz").clientWidth)
	.height(document.getElementById("globeViz").clientHeight)


}

function wellInfoScreenDivCloseButton() {
	
	$("#modal-lg").modal('hide')
	globe
	.pointOfView({ lat: lat, lng: longi, altitude: 2.5 }, 1000)
	.controls().autoRotate = true
	globe.enablePointerInteraction(true);
/*	document.getElementById("row").style.pointerEvents="auto";
	document.getElementById("row").style.cursor="pointer";*/
	checkOnClickOperation  =false;
	//reset modal's data
	document.getElementById("wellInformation_well_name").innerHTML = "";
	document.getElementById("wellInformation_on_off_shore").innerHTML ="";
	document.getElementById("wellInformation_water_depth").innerHTML = "";
	document.getElementById("wellInformation_region").innerHTML = "";		
	document.getElementById("wellInformation_projected_days").innerHTML= "";
	document.getElementById("wellInformation_country").innerHTML = "";
	document.getElementById("wellInformation_state").innerHTML = "";
	
	document.getElementById("wellInformation_rig_name").innerHTML = "";
	document.getElementById("wellInformation_rig_manager").innerHTML = "";
	document.getElementById("wellInformation_rig_owner").innerHTML = "";
	
	document.getElementById("nav-tab").innerHTML = '';
	document.getElementById("nav-tabContent").innerHTML = '';
	tabIndex = 1;
	
}
