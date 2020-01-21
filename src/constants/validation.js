function validateEmail(inputText) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailFormat)) {
    console.log('You have entered an valid email address!');
    return true;
  } else {
    // eslint-disable-next-line no-alert
    console.log('You have entered an invalid email address!');
    return false;
  }
}

function checkPassword(inputText) {
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (inputText.value.match(paswd)) {
    console.log('Correct, try another...');
    return true;
  } else {
    console.log('Wrong...!');
    return false;
  }
}

function allLetter(inputText) {
  var letters = /^[A-Za-z]+$/;
  if (inputText.value.match(letters)) {
    console.log('valid letters');

    return true;
  } else {
    console.log('invalid letters');
    return false;
  }
}

function allNumeric(inputText) {
  var numbers = /^[-+]?[0-9]+$/;
  if (inputText.value.match(numbers)) {
    console.log('Correct');
    return true;
  } else {
    console.log('Please input correct format');
    return false;
  }
}
// Function to check letters and numbers
function alphanumeric(inputtxt) {
  var letterNumber = /^[0-9a-zA-Z]+$/;
  if (inputtxt.value.match(letterNumber)) {
    return true;
  } else {
    console.log('message');
    return false;
  }
}

function stringLength(inputtxt, minlength, maxlength) {
  var field = inputtxt.value;
  var mnlen = minlength;
  var mxlen = maxlength;

  if (field.length < mnlen || field.length > mxlen) {
    console.log(
      'Please input the userid between ' +
        mnlen +
        ' and ' +
        mxlen +
        ' characters',
    );
    return false;
  } else {
    console.log('Your userid have accepted.');
    return true;
  }
}

function isRequired(inputText) {
  if (inputText.value.length === 0) {
    return false;
  }
  return true;
}

function phoneNumber(inputText) {
  var phoneNo = /^\d{10}$/;
  if (inputText.value.match(phoneNo)) {
    console.log('true');
    return true;
  } else {
    console.log('False');

    return false;
  }
}

module.exports = {
  phoneNumber,
  isRequired,
  validateEmail,
  alphanumeric,
  checkPassword,
  stringLength,
  allNumeric,
  allLetter,
};
