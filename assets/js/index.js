function getNavigationMenu(data) {
    data.forEach(el => {
        let elementId = document.getElementById(el.id);

        fetch(el.file).then((res) => {
            return res.text()

        }).then((html) => {
            elementId.insertAdjacentHTML("afterbegin", html);

        }).catch((err) => {  
            alert(`Failed to fetch page: ${err}`);  
        });
    });
}


function triggerNavbar() {
    const hamMenu = document.querySelector('.ham_menu');
    const navLinks = document.querySelector('.nav_links');
    const navItems = document.querySelectorAll('.nav_links li')

    navLinks.classList.toggle('nav_active');

    //animation
    navItems.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ''
        }
        else{
            link.style.animation = `navLinkfade 0.5s ease-in forwards ${index/7 + 0.2}s`;
        }
    });

    hamMenu.classList.toggle('toggle')
}






// const navMenu = () => {
//     const hamMenu = document.querySelector('.ham_menu');
//     const navLinks = document.querySelector('.nav_links');
//     const navItems = document.querySelectorAll('.nav_links li')

//     hamMenu.addEventListener('click', () => {
//         navLinks.classList.toggle('nav_active');

//         //animation
//         navItems.forEach((link, index) => {
//             if (link.style.animation){
//                 link.style.animation = ''
//             }
//             else{
//                 link.style.animation = `navLinkfade 0.5s ease-in forwards ${index/7 + 0.2}s`;
//             }
//         });

//         hamMenu.classList.toggle('toggle');
//     });

   
// }

// navMenu();