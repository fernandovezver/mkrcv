var uid;

// Initialize Firebase
var config = {
	apiKey: "AIzaSyA6r1AP32C4I6YiZ6mbECYlbWNZNyHuaFA",
	authDomain: "mkrcv-5e3c7.firebaseapp.com",
	databaseURL: "https://mkrcv-5e3c7.firebaseio.com",
	storageBucket: "mkrcv-5e3c7.appspot.com",
	messagingSenderId: "314726059296"
};

var firebaseApp = firebase.initializeApp(config);
var database = firebase.database();

function signUp() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function(user) {
			createUserInDb(user);
		})
		.catch(function(error) {
		if (error.code == "auth/email-already-in-use") {
			var credential = firebase.auth.EmailAuthProvider.credential(email, password);
			googleLogIn()
				.then(function() {
				firebase.auth().currentUser.link(credential)
					.then(function(user) {
					console.log("Account linking success", user);
				}, function(error) {
					if (error.code == "auth/provider-already-linked") {
						signIn();
					}
				});
			});
		}
	});
}

function signIn() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var credentials = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		console.log(error);
	});
}

function googleLogIn() {
	var provider = new firebase.auth.GoogleAuthProvider();

	provider.addScope("profile");
	provider.addScope("email");

	return firebase.auth().signInWithPopup(provider)
		.catch(function(error) {
		if (error.code == "auth/popup-blocked") {
			alert("Please allow pop-ups.");
		}
		console.log(error);
	});
}

function signOut() {
	firebase.auth().signOut()
		.then(function() {

	}, function(error) {

	});
}

function createUserInDb(user) {
	console.log(user.uid);
	database.ref("users").child(user.uid).child("profile").set({
		name: "First name and middle names",
		lastname: "Last name(s)",
		email: "Email",
		phone: "Phone",
		address1: "Address"
	});

	database.ref("users").child(user.uid).child("profile").child("address2").set({
		city: "City",
		state: "State",
		country: "Country"
	});
}

firebase.auth().onAuthStateChanged(function(user) {
	if (user != null) {
		uid = user.uid;
	} else {
		uid = null;
	}
	//console.log(user.uid);
})
