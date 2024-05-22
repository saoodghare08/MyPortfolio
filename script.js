function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('visible');
}

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            cardContainer.classList.add('hover-active');
        });

        card.addEventListener('mouseout', () => {
            cardContainer.classList.remove('hover-active');
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    var formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://script.google.com/macros/s/AKfycbxpWFBPdnLM4AgcLsl6T4zgof1EFcj8LK5i4dvNbZBK6B4rgw4UTuIL9odq9a9Bl4KgyQ/exec', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => response.json())
    .then(data => {
        if(data.result === 'success') {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('There was an error sending your message.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});