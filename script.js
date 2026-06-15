document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = document.getElementById('text').value;
  const senha = document.getElementById('password').value;

  if (text === 'teste' && senha === '123456') {
    alert('Login bem-sucedido!');
    window.location.href = 'dashboard.html';
  } else {
    alert('E-mail ou senha inválidos!');
  }
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Cadastro simulado com sucesso! Agora faça login.');
  window.location.href = 'index.html';
});