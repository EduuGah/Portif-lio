function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    const button = document.querySelector('.blackOrWithe button');
    if (document.body.classList.contains('dark-theme')) {
        button.textContent = 'Modo Claro';
    } else {
        button.textContent = 'Modo Escuro';
    }
}