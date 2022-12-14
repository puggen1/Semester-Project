//using same regex as last time
/**
 * @description this is a regex to check if the username, password and email is valid
 */
let usernameRegex = /^[a-zA-Z0-9_æøåÆØÅ]{3,15}$/;
let emailRegex = /^[a-z0-9.æøå]{0,}[a-z0-9]{1,}@(stud.)?noroff.no$/i;
let passwordRegex = /^[a-zA-Z0-9æøåÆØÅ]{8,30}$/;

export { usernameRegex, emailRegex, passwordRegex };
