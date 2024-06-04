const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
       ode.classList.remove('fa-moon');
        mode.classList.add('fa-sun'); m

        form.classList.add('dark')
        //tipo um else, mas sem o else
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');

    form.classList.remove('dark')
});