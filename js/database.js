function addEducation() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("education").push({
		degree: $("#eName").val(),
		start: $("#eStart").val(),
		finish: $("#eFinish").val(),
		honors: $("#eHonors").val()
	});
}

function addLanguage() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("languages").push({
		language: $("#lLanguage").val(),
		level: $("#lLevel").val()
	});
}

function addSoftware() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("software").push({
		name: $("#sName").val(),
		experience: $("#sExperience").val()
	});
}

function addWork() {
	database.ref("users").child(firebase.auth().currentUser.uid).child("work").push({
		company: $("#wCompany").val(),
		start: $("#wStart").val(),
		finish: $("#wFinish").val(),
		title: $("#wTitle").val()
	});
}

function loadDatabase() {
	firebase.database().ref("users/" + firebase.auth().currentUser.uid).once("value")
		.then(function(snapshot) {
		/* Load education information */
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

		/* Load Languages information */
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
	});
}

/*
firebase.auth().onAuthStateChanged(function(user) {
				if (user == null) {
					$(location).attr("href", "index.html");
				} else {
					firebase.database().ref('/users/' + user.uid).once('value')
						.then(function(snapshot) {
						document.getElementById("name").innerHTML = (snapshot.val().profile.name + " " + snapshot.val().profile.lastname);
						document.getElementById("email").innerHTML = (snapshot.val().profile.email);
						document.getElementById("phone").innerHTML = (snapshot.val().profile.phone);
						document.getElementById("address1").innerHTML = (snapshot.val().profile.address1);
						document.getElementById("address2").innerHTML = (snapshot.val().profile.address2.city + ", " + snapshot.val().profile.address2.state + ", " + snapshot.val().profile.address2.country);
					});
				}
			})
*/