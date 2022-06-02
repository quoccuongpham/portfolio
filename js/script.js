// Typing animation
var typed = new Typed('.typing', {
    strings: ["","Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Aside
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section');
    
    for(let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector('a');
        a.addEventListener('click', function() {
            removeBackSection();
            for(let j = 0; j < totalNavList; j++) {
                if (navList[j].querySelector('a').classList.contains('active')) {
                    addBackSection(j);
                }
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionBtn();
            }
        })
    }
    function removeBackSection() {
        allSection.forEach((value) => {
            if (value.classList.contains('back-section')) {
                value.classList.remove('back-section');
            }
        })
    }
    function addBackSection(num) {
        allSection[num].classList.add('back-section');
    }
    function showSection(elemnent) {
        allSection.forEach((value) => {
            if (value.classList.contains('active')) {
                value.classList.remove('active');
            }
        })
        const target = elemnent.getAttribute('href').split('#')[1];
        document.getElementById(target).classList.add('active');
    }
    function updateNav(elemnent) {
        const target = elemnent.getAttribute('href').split('#')[1];
        navList.forEach((elemnent) => {
            elemnent.querySelector('a').classList.remove('active');
            if (target === elemnent.querySelector('a').getAttribute('href').split('#')[1]) {
                elemnent.querySelector('a').classList.add('active');
            }
        })
    }
    document.querySelector('.hire-me').addEventListener('click', function() {
        const sectionIndex = this.getAttribute('data-section-index');
        console.log(sectionIndex)
        showSection(this)
        updateNav(this)
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navTogglerBtn = document.querySelector('.nav-toggler'),
        aside = document.querySelector('.aside');
        navTogglerBtn.addEventListener('click', () => {
            asideSectionBtn();
        })
        asideSectionBtn = () => {
            aside.classList.toggle('open');
            navTogglerBtn.classList.toggle('open');
            allSection.forEach((section) => {
                section.classList.toggle('open');
            })
        }
