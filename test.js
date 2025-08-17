import bcrypt from "bcrypt";

const saltRounds = 10;
const myPlainTextPassword = "ASDF";
const someOtherPlaintextPassword = "not_bacon";

bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
  // Store hash in your password DB.
});
