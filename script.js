/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);


    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings : ['Hello', 'Welcome', 'Greetings', 'Pleased to meet you', 'How are you?', 'Hey there', 'What`s up?', 'How it going?', 'Hey, how have you been?'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
});
/*==================== contact js ====================*/
var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'Name: '+name + '<br> Email: ' +email + '<br> Phone: ' +phone + '<br> Subject: ' +subject + '<br> Message:' +message;
    Email.send({
        SecureToken : "3f654c30-6d5e-4179-80f2-e1234dd137d8",
        To : 'edu1blogger@gmail.com',
        From : "iwanfaiber1@gmail.com",
        Subject : document.getElementById('subject').value,
        Body : body
    }).then(
      message => alert("Message Sent Succesfully")
    );
})
