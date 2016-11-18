function addEducation() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("education").push({
		degree: $("#eName").val(),
		start: $("#eStart").val(),
		finish: $("#eFinish").val(),
		honors: $("#eHonors").val()
	});
	$("#eName").val("");
	$("#eStart").val("");
	$("#eFinish").val("");
	$("#eHonors").val("");
	loadDatabase();
}

function addLanguage() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("languages").push({
		language: $("#lLanguage").val(),
		level: $("#lLevel").val()
	});
	$("#lLanguage").val("0");
	$("#lLevel").val("");
	loadDatabase();
}

function addSoftware() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("software").push({
		name: $("#sName").val(),
		experience: $("#sExperience").val()
	});
	$("#sName").val("");
	$("#sExperience").val("");
	loadDatabase();
}

function addWork() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("work").push({
		company: $("#wCompany").val(),
		start: $("#wStart").val(),
		finish: $("#wFinish").val(),
		title: $("#wTitle").val()
	});
	$("#wCompany").val("");
	$("#wStart").val("");
	$("#wFinish").val("");
	$("#wTitle").val("");
	loadDatabase();
}

function editEducation(id) {
	database.ref("users/" + firebase.auth().currentUser.uid + "/education/" + id).once("value")
	.then(function(snapshot) {
		$("#eId2").val(id);
		$("#eName2").val(snapshot.child("degree").val());
		$("#eStart2").val(snapshot.child("start").val());
		$("#eFinish2").val(snapshot.child("finish").val());
		$("#eHonors2").val(snapshot.child("honors").val());
	});
}

function editLanguage(id) {
	database.ref("users/" + firebase.auth().currentUser.uid + "/languages/" + id).once("value")
	.then(function(snapshot) {
		$("#lId2").val(id);
		$("#lLanguage2").val(snapshot.child("language").val());
		$("#lLevel2").val(snapshot.child("level").val());
	});
}

function editSoftware(id) {
	database.ref("users/" + firebase.auth().currentUser.uid + "/software/" + id).once("value")
	.then(function(snapshot) {
		$("#sId2").val(id);
		$("#sName2").val(snapshot.child("name").val());
		$("#sExperience2").val(snapshot.child("experience").val());
	});
}

function editWork(id) {
	database.ref("users/" + firebase.auth().currentUser.uid + "/work/" + id).once("value")
	.then(function(snapshot) {
		$("#wId2").val(id);
		$("#wCompany2").val(snapshot.child("company").val());
		$("#wStart2").val(snapshot.child("start").val());
		$("#wFinish2").val(snapshot.child("finish").val());
		$("#wTitle2").val(snapshot.child("title").val());
	});
}

function updateEducation() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("education").child($("#eId2").val()).update({
		degree: $("#eName2").val(),
		start: $("#eStart2").val(),
		finish: $("#eFinish2").val(),
		honors: $("#eHonors2").val()
	});
	loadDatabase();
}

function updateLanguage() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("languages").child($("#lId2").val()).update({
		language: $("#lLanguage2").val(),
		level: $("#lLevel2").val()
	});
	loadDatabase();
}

function updateSoftware() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("software").child($("#sId2").val()).update({
		name: $("#sName2").val(),
		experience: $("#sExperience2").val()
	});
	loadDatabase();
}

function updateWork() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("work").child($("#wId2").val()).update({
		company: $("#wCompany2").val(),
		start: $("#wStart2").val(),
		finish: $("#wFinish2").val(),
		title: $("#wTitle2").val()
	});
	loadDatabase();
}

function removeEducation(id) {
	var ref = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/education/" + id);
	ref.remove().then(function() {
		console.log("Remove succeed");
	}).catch(function(error) {
		console.log("Removal error" + error);
	});
	loadDatabase();
}

function removeLanguage(id) {
	var ref = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/languages/" + id);
	ref.remove().then(function() {
		console.log("Remove succeed");
	}).catch(function(error) {
		console.log("Removal error" + error);
	});
	loadDatabase();
}

function removeSoftware(id) {
	var ref = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/software/" + id);
	ref.remove().then(function() {
		console.log("Remove succeed");
	}).catch(function(error) {
		console.log("Removal error" + error);
	});
	loadDatabase();
}

function removeWork(id) {
	var ref = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/work/" + id);
	ref.remove().then(function() {
		console.log("Remove succeed");
	}).catch(function(error) {
		console.log("Removal error" + error);
	});
	loadDatabase();
}

function loadDatabase() {
	firebase.database().ref("users/" + firebase.auth().currentUser.uid).once("value")
		.then(function(snapshot) {
		/* Load profile */
		var profile = snapshot.child("profile");
		$("#name").html(profile.child("name").val() + " " + profile.child("lastname").val());
		$("#email").html(profile.child("email").val());
		$("#phone").html(profile.child("phone").val());
		$("#address1").html(profile.child("address1").val());
		$("#address2").html(profile.child("address2").child("city").val() +
			", " + profile.child("address2").child("state").val() +
			", " + profile.child("address2").child("country").val());
		
		var id;

		/* Load education information */
		$("#contenedoreducacion").html("");
		snapshot.child("education").forEach(function(childSnapshot) {
			id = childSnapshot.key;
			$("#contenedoreducacion").append(
			'<div class="row data">' +
				'<div>' +
					'<div class="col-xs-6 subtitle">' + 
						childSnapshot.child("degree").val() +
					'</div>' + 
					'<div class="col-xs-1">' +
						'<button class="btn btn-default" onclick="removeEducation(' + "'" + id + "'" + ')">-</button>' +
					'</div>' +
					'<div class="col-xs-1">' +
						'<button class="btn btn-default" onclick="editEducation(' + "'" + id + "'" + ')" data-toggle="modal" data-target="#AgregarEducacion2">Edit</button>' +
					'</div>' +
				'</div>' +
				'<div class="col-xs-7">' +
					childSnapshot.child("start").val() +
				'</div>' +
				'<div class="col-xs-7">' +
					childSnapshot.child("finish").val() +
				'</div>' +
			'</div>' +
			'<p>' + childSnapshot.child("honors").val() +'</p>'
			)
		});

		/* Load languages information */
		$("#contenedoridioma").html("");
		snapshot.child("languages").forEach(function(childSnapshot) {
			id = childSnapshot.key;
			$("#contenedoridioma").append(
			'<div class="row data">' +
				'<div class="col-xs-5 subtitle">' +
					childSnapshot.child("language").val() +
				'</div>' +
				'<div class="col-xs-5">' +
					'<div class="progress backbar">' +
						'<div class="progress-bar barra" role="progressbar" aria-valuenow="' + childSnapshot.child("level").val() + '" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">' +
							childSnapshot.child("level").val() + '%' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-xs-1">' +
					'<button class="btn btn-default" onclick="removeLanguage(' + "'" + id + "'" + ')">-</button>' +
				'</div>' +
				'<div class="col-xs-1">' +
					'<button class="btn btn-default" onclick="editLanguage(' + "'" + id + "'" + ')" data-toggle="modal" data-target="#AgregarLenguaje2">Edit</button>' +
				'</div>' +
			'</div>'
			)
		});
		
		/* Load software information */
		$("#contenedorsoftware").html("");
		snapshot.child("software").forEach(function(childSnapshot) {
			id = childSnapshot.key;
			$("#contenedorsoftware").append(
			'<div class="row data">' +
				'<div>' +
					'<div class="col-xs-6 subtitle">' +
						childSnapshot.child("name").val() +
					'</div>' +
					'<div class="col-xs-1">' +
						'<button class="btn btn-default" onclick="removeSoftware(' + "'" + id + "'" + ')">-</button>' +
					'</div>' +
					'<div class="col-xs-1">' +
						'<button class="btn btn-default" onclick="editSoftware(' + "'" + id + "'" + ')" data-toggle="modal" data-target="#AgregarSoftware2">Edit</button>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<p>' + childSnapshot.child("experience").val() + '</p>'
			)
		});

		/* Load work information */
		$("#contenedortrabajos").html("");
		snapshot.child("work").forEach(function(childSnapshot) {
			id = childSnapshot.key;
			$("#contenedortrabajos").append(
			'<div class="row data">' +
				'<div class="col-xs-6 subtitle">' +
					childSnapshot.child("company").val() +
				'</div>' +
				'<div class="col-xs-1">' +
					'<button class="btn btn-default" onclick="removeWork(' + "'" + id + "'" + ')">-</button>' +
				'</div>' +
				'<div class="col-xs-1">' +
					'<button class="btn btn-default" onclick="editWork(' + "'" + id + "'" + ')" data-toggle="modal" data-target="#AgregarTrabajo2">Edit</button>' +
				'</div>' +
				'<div class="col-xs-7">' +
					childSnapshot.child("start").val() +
				'</div>' +
				'<div class="col-xs-7">' +
					childSnapshot.child("finish").val() +
				'</div>' +
			'</div>' +
			'<p>' + childSnapshot.child("title").val() + '</p>'
			)
		});
	});
}