
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const passwordRegex = RegExp(
    /[^a-zA-Z0-9]/
);

const textRegex = RegExp(
   /^[a-zA-Z ]*$/
);

module.exports = { 
    emailRegex,
    passwordRegex,
    textRegex
};
