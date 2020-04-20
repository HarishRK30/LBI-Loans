//email validation
function EmailValidate() {
        var email = document.getElementById("txtEmail").value;
        var emailId =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email != '') {
            if (email.match(emailId)) {
                return true;
            }
            else {
                alert("INVALID EMAIL ID");
                return false;
            }
        }
    }
//phone number validation
function PhoneValidate() {
        var phone = document.getElementById("txtPhone").value;
        var phoneNumber = /^\d{10}$/;
        if (phone != '') {
            if (phone.match(phoneNumber)) {
                return true;
            }
            else {
                alert("INVALID PHONE NUMBER");
                return false;
            }
        }
    }
//aadhar card validation
function AadharValidate() {
  var aadhar = document.getElementById("txtAadhar").value;
  var adharcardTwelveDigit = /^\d{12}$/;
  var adharSixteenDigit = /^\d{16}$/;
  if (aadhar != '') {
      if (aadhar.match(adharcardTwelveDigit)) {
          return true;
      }
      else if (aadhar.match(adharSixteenDigit)) {
          return true;
      }
      else {
          alert("INVALID AADHAR NUMBER");
          return false;
      }
  }
}
//pan card validation
function PanValidate() {
  var pan = document.getElementById("txtPan").value;
  var pancardNumber =  /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  if (pan != '') {
      if (pan.match(pancardNumber)) {
          return true;
      }
      else {
          alert("INVALID PAN NUMBER");
          return false;
      }
  }
}
//Voter ID validation
function VoterValidate() {
  var voter = document.getElementById("txtVoter").value;
  var votercardNumber = /^([a-zA-Z]){3}([0-9]){7}?$/;
  if (voter != '') {
      if (voter.match(votercardNumber)) {
          return true;
      }
      else {
          alert("INVALID VOTER ID");
          return false;
      }
  }
}
//pin code validation
  function PinValidate() {
    var pin = document.getElementById("txtPin").value;
    var pincode =  /(^\d{6}$)/;
    if (pin != '') {
        if (pin.match(pincode)) {
            return true;
        }
        else {
            alert("INVALID PINCODE");
            return false;
        }
    }
}