
export function getImage(fileName) {
  return "Images/" + fileName;
}

export function isValidEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

export function isValidPassword(password) {
    const passwordRegex = /^([a-zA-Z0-9@*#]{8,15})$/
    return passwordRegex.test(password);
}

export function isValidName(name) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}
