// Función para simular el inicio del juego
function startGame(mode) {
    alert(`Iniciando simulación en modo: ${mode.toUpperCase()}`);
    // Aquí iría la lógica para redirigir a la simulación real
    // window.location.href = `simulation.html?mode=${mode}`;
}

// Manejo del formulario de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulación de login (en un proyecto real, esto se conectaría a un backend)
    if(email && password) {
        alert('Login exitoso! Redirigiendo...');
        window.location.href = 'index.html';
    } else {
        alert('Por favor completa todos los campos');
    }
});

// Manejo del formulario de registro
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulación de registro
    if(username && email && password) {
        alert('Registro exitoso! Serás redirigido al login.');
        window.location.href = 'login.html';
    } else {
        alert('Por favor completa todos los campos');
    }
});