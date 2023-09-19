const generateBtn = document.getElementById('generate');
const passwordField = document.getElementById('password');

generateBtn.addEventListener('click', () => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  let password = '';
  let passwordLength = parseInt(prompt('Enter password length (between 8 and 128 characters): '));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password length! Please enter a number between 8 and 128.');
    return;
  }
  let includeLowercase = confirm('Include lowercase characters?');
  let includeUppercase = confirm('Include uppercase characters?');
  let includeNumeric = confirm('Include numeric characters?');
  let includeSpecial = confirm('Include special characters?');
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('At least one character type must be selected!');
    return;
  }
  let chars = '';
  if (includeLowercase) {
    chars += lowercaseChars;
  }
  if (includeUppercase) {
    chars += uppercaseChars;
  }
  if (includeNumeric) {
    chars += numericChars;
  }
  if (includeSpecial) {
    chars += specialChars;
  }
  for (let i = 0; i < passwordLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  passwordField.value = password;
});