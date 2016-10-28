function addEducation() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("education").push({
		degree: $("#eName").val(),
		start: $("#eStart").val(),
		finish: $("#eFinish").val(),
		honors: $("#eHonors").val()
	});
	loadDatabase();
}

function addLanguage() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("languages").push({
		language: $("#lLanguage").val(),
		level: $("#lLevel").val()
	});
	loadDatabase();
}

function addSoftware() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("software").push({
		name: $("#sName").val(),
		experience: $("#sExperience").val()
	});
	loadDatabase();
}

function addWork() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("work").push({
		company: $("#wCompany").val(),
		start: $("#wStart").val(),
		finish: $("#wFinish").val(),
		title: $("#wTitle").val()
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
	

		/* Load education information */
		$("#contenedoreducacion").html("");
		snapshot.child("education").forEach(function(childSnapshot) {
			$("#contenedoreducacion").append(
			'<div class="row data">' +
				'<div class="col-xs-7 subtitle">' + childSnapshot.child("degree").val() +'</div>' + 
				'<div class="col-xs-5">' + childSnapshot.child("start").val() + '</div>' +
				'<div class="col-xs-5">' + childSnapshot.child("finish").val() + '</div>' +
			'</div>' +
			'<p>' + childSnapshot.child("honors").val() +'</p>'
			)
		});

		/* Load languages information */
		$("#contenedoridioma").html("");
		snapshot.child("languages").forEach(function(childSnapshot) {
			$("#contenedoridioma").append(
			'<div class="row data">' +
				'<div class="col-xs-7 subtitle">' + childSnapshot.child("language").val() + '</div>' +
				'<div class="col-xs-5">' +
					'<div class="progress backbar">' +
						'<div class="progress-bar barra" role="progressbar" aria-valuenow="' + childSnapshot.child("level").val() + '" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">' +
							childSnapshot.child("level").val() + '%' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
			)
		});
		
		/* Load software information */
		$("#contenedorsoftware").html("");
		snapshot.child("software").forEach(function(childSnapshot) {
			$("#contenedorsoftware").append(
			'<div class="row data subtitle">' + childSnapshot.child("name").val() + '</div>' +
				'<p>' + childSnapshot.child("experience").val() + '</p>'
			)
		});

		/* Load work information */
		$("#contenedortrabajos").html("");
		snapshot.child("work").forEach(function(childSnapshot) {
			$("#contenedortrabajos").append(
			'<div class="row data">' +
				'<div class="col-xs-7 subtitle">' + childSnapshot.child("company").val() + '</div>' +
				'<div class="col-xs-5">' + childSnapshot.child("start").val() + '</div>' +
				'<div class="col-xs-5">' + childSnapshot.child("finish").val() + '</div>' +
			'</div>' +
			'<p>' + childSnapshot.child("title").val() + '</p>'
			)
		});
	});
}