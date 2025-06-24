let passwordLength = 15;

function changeLength(delta) {
  passwordLength = Math.max(4, passwordLength + delta);
  document.getElementById('length').textContent = passwordLength;
}

function generatePassword() {
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  let charset = '';
  if (useUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useLower) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (useNumbers) charset += '0123456789';
  if (useSymbols) charset += '!@#$%^&*()_-+=[]{}<>?';

  if (charset === '') {
    alert("Selecione ao menos uma opção de caractere.");
    return;
  }

  let senha = '';
  for (let i = 0; i < passwordLength; i++) {
    senha += charset[Math.floor(Math.random() * charset.length)];
  }

  document.getElementById('output').value = senha;

  // Estimar força
  let complexity = charset.length * passwordLength;
  let strengthPercent = Math.min(100, (complexity / 500) * 100);
  const bar = document.getElementById('strength-bar').querySelector('::after');
  document.getElementById('strength-bar').style.setProperty('--width', `${strengthPercent}%`);
  document.getElementById('strength-bar').innerHTML = `<div style="width:${strengthPercent}%; height:100%; background:lime;"></div>`;

  // Info
  let dias = Math.round(Math.pow(charset.length, passwordLength) / 1e9 / 60 / 60 / 24);
  document.getElementById('strength-info').textContent =
    `Um computador pode levar até ${dias.toLocaleString()} dias para descobrir essa senha.`;
}
