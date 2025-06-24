function gerarSenha() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=[]{}|<>?';
  const comprimento = 16;
  let senha = '';
  for (let i = 0; i < comprimento; i++) {
    const aleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(aleatorio);
  }
  document.getElementById('senha').value = senha;
}
