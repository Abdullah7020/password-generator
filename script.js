function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const useDigits = document.getElementById("digits").checked;
  const useSpecials = document.getElementById("specials").checked;

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = useDigits ? "0123456789" : "";
  const specials = useSpecials ? "!@#$%^&*()_+-=[]{}|;:',.<>?/" : "";
  const allChars = letters + digits + specials;

  if (!allChars) {
    document.getElementById("result").innerText = "Error: No character set selected!";
    return;
  }

  let password = [];
  password.push(letters[Math.floor(Math.random() * letters.length)]);
  if (useDigits) password.push(digits[Math.floor(Math.random() * digits.length)]);
  if (useSpecials) password.push(specials[Math.floor(Math.random() * specials.length)]);

  while (password.length < length) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  password = password.sort(() => Math.random() - 0.5);
  document.getElementById("result").innerText = password.join("");
  document.getElementById("copy-status").innerText = "";
}

function copyPassword() {
  const password = document.getElementById("result").innerText;
  if (!password) {
    document.getElementById("copy-status").innerText = "No password to copy!";
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => {
      document.getElementById("copy-status").innerText = "Copied!";
    })
    .catch(() => {
      document.getElementById("copy-status").innerText = "Failed to copy.";
    });
}
