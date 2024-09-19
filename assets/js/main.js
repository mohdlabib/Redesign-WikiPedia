const referencesList = document.getElementById('references-list');

references.forEach((ref) => {
    const listItem = document.createElement('li');
    const referenceText = `
                <span class="reference-text">
                    <a rel="nofollow" class="external text" href="${ref.url}">${ref.text}</a>
                    ${ref.source ? `. <i>${ref.source}</i>` : ''}
                    ${ref.accessed ? `. Diakses tanggal <span class="nowrap">${ref.accessed}</span>` : ''}
                </span>`;

    listItem.innerHTML = referenceText;
    referencesList.appendChild(listItem);
});

let lastScrollTop = 0;

const navbarStickyAnimate = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = document.querySelector('header');
    const asideSticky = document.querySelector('.image-info');

    if (scrollTop > lastScrollTop) {
        // close dropdowns
        closeDropdowns();

        asideSticky.classList.add('hide');
        asideSticky.classList.remove('show');    
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        
        asideSticky.classList.add('show');
        asideSticky.classList.remove('hide');
        header.classList.add('show');
        header.classList.remove('hide');
    }

    lastScrollTop = scrollTop;
}

const closeDropdowns = () => {
    const list = document.querySelectorAll("[data-toggle=dropdown]");

    list.forEach(elm => {
        const obj = document.querySelector(elm.getAttribute("data-target"));
        const icon = elm.querySelector(".dropdown-icon");

        if (obj.classList.contains("d-block")) {
            obj.classList.remove("slideIn");
            obj.classList.add("slideOut");
            setTimeout(() => {
                obj.classList.remove('d-block', 'slideOut');
            }, 300); 

            icon.classList.remove("open");
        }
    });
};

window.addEventListener('scroll', navbarStickyAnimate);

const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

const tdContent = document.querySelector('#old').textContent;
const birthDateText = tdContent.split(' (')[0].trim();

const age = calculateAge(birthDateText);
document.getElementById('oldNow').textContent = age;
