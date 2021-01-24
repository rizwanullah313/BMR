 function calculate() {
      var age = document.forms["myForm"]["age"].value;
      var gender = document.forms["myForm"]["gender"].value;
      var feet = document.forms["myForm"]["feet"].value;
	  var inches = document.forms["myForm"]["inches"].value;
      var weight1 = document.forms["myForm"]["weight"].value;
      var bmr = 0;
      if (age == '' || gender == '' || feet == '' || inches == ' ' || weight == '') {
        alert("All fields are required");
        return false;
      }
      var a = feet * 30.48;
	  var b = inches * 2.54;
	  var height = a+b;
	  var weight = weight1 / 2.20462;
      if (gender == 1) {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
      } else {
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
      }

      document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day';
      document.getElementById("result").style.display = "block";

      return false;

    }