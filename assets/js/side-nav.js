let sideNavToggle = document.querySelector('#sideNavToggle')
let sideNavToggleGl = document.querySelector('#sideNavToggleGl')
let closeNav = document.querySelector('#closeNav')

sideNavToggle.addEventListener('click', e => {
    e.preventDefault()
    e.stopImmediatePropagation()

    document.querySelector('#sideNav').classList.toggle('active')
})

closeNav.addEventListener('click', e => {
    e.preventDefault()
    e.stopImmediatePropagation()

    document.querySelector('#sideNav').classList.remove('active')
})

sideNavToggleGl.addEventListener('click', e => {
    e.preventDefault()
    e.stopImmediatePropagation()

    document.querySelector('#sideNav').classList.toggle('active')
    document.querySelector('#serac').focus()
})

document.addEventListener('DOMContentLoaded', function () {
    let collapses = document.querySelectorAll('.collapses')

    collapses.forEach(elect => {
        let toggle = elect.querySelector('#toggle-collapse');
        let dropdown = elect.querySelector('.dropdown-menu-m');
        let icon = elect.querySelector('#icon');

        toggle.addEventListener('click', function (e) {
            e.preventDefault();

            if (dropdown.classList.contains('show')) {
                dropdown.style.maxHeight = '0';
                icon.style.transform = 'rotate(0deg)';

                setTimeout(function () {
                    dropdown.classList.remove('show');
                    dropdown.style.display = 'none';
                }, 500);
            } else {
                dropdown.style.display = 'block';
                setTimeout(function () {
                    dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                }, 10);

                icon.style.transform = 'rotate(90deg)';
                dropdown.classList.add('show');
            }
        });
    })
});
