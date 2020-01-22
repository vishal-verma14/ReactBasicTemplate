function validateEmail(inputText) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailFormat)) {
    this.setState({
      email: {
        text: inputText.value,
        isValid: true,
        message: '',
      },
    });
    return true;
  } else {
    this.setState({
      email: {
        text: inputText.value,
        isValid: false,
        message: 'You have entered an invalid email address!',
      },
    });
    return false;
  }
}

function checkPassword(inputText) {
  var paswd = /^(\s*\d{6}\s*)(,\s*\d{6}\s*)*,?\s*$/;
  if (inputText.value.match(paswd)) {
    this.setState({
      password: {
        text: inputText.value,
        isValid: true,
        message: '',
      },
    });
    return false;
  } else {
    this.setState({
      password: {
        text: inputText.value,
        isValid: false,
        message: 'You have entered an invalid password!',
      },
    });
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
    this.setState({
      isRequired: {
        text: inputText.value,
        isValid: false,
        message: 'message',
      },
    });
    return false;
  } else {
    this.setState({
      isRequired: {
        text: inputText.value,
        isValid: true,
        message: 'true message',
      },
    });
    return false;
  }
}

function phoneNumber(inputText) {
  var phoneNo = /^\d{10}$/;
  if (inputText.value.match(phoneNo)) {
    this.setState({
      phone: {
        text: inputText.value,
        isValid: true,
        message: '',
      },
    });
    return true;
  } else {
    this.setState({
      phone: {
        text: inputText.value,
        isValid: false,
        message: 'invalid phone number',
      },
    });
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
