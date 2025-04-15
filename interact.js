// Validasi form di contact.html
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');

    
    // Tambahkan tanggal hari ini jika ingin
    const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const dateField = document.createElement('input');
    dateField.type = 'text';
    dateField.value = `Tanggal: ${currentDate}`;
    dateField.readOnly = true;
    dateField.classList.add("current-date-field"); // biar bisa dicek nanti
    dateField.style.backgroundColor = '#FBD288';
    dateField.style.color = '#003366';
    dateField.style.border = 'none';
    dateField.style.padding = '1rem';
    dateField.style.borderRadius = '0.5rem';
    form.insertBefore(dateField, nameInput);

    form.addEventListener('submit', (e) => {
        let isValid = true;

        if (!nameInput.value.trim()) {
            alert('Please fill out this feed.');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            alert('Please fill out this feed');
            isValid = false;
        } else if (!messageInput.value.trim()) {
            alert('Please fill out this feed');
            isValid = false;
        }

        if (!isValid) e.preventDefault();
    });

    function validateEmail(email) {
        const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});

// interact.js - Scroll animation script
// Main scroll trigger function
function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
        addObserver(el, options);
    });
}
function addObserver(el, options) {
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(el);
        } else {
            el.classList.add('anim-goup');
        }
        return;
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (options.cb) {
                    options.cb(el);
                } else {
                    entry.target.classList.add('anim-goup');
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);
    observer.observe(el);
}
// Scroll animation for each page (auto-detect by body id)
document.addEventListener('DOMContentLoaded', function () {
    const pageId = document.body.id;
    // Home Page
    if (pageId === 'home-page') {
        scrollTrigger('.hero-title', { rootMargin: '-20px' });
        scrollTrigger('.about-section', { rootMargin: '-30px' });
    }
    // Gallery Page
    if (pageId === 'gallery-page') {
        scrollTrigger('.gallery-header', { rootMargin: '-25px' });
        scrollTrigger('.gallery-container', { rootMargin: '-30px' });
        scrollTrigger('.gallery-item', { rootMargin: '-40px' });
    }
    // Blog Page
    if (pageId === 'blog-page') {
        scrollTrigger('section', { rootMargin: '-40px' });
        scrollTrigger('article', { rootMargin: '-50px' });
    }
    // Contact Page
    if (pageId === 'contact-page') {
        scrollTrigger('.contact-container', { rootMargin: '-50px' });
        scrollTrigger('.contact-form', { rootMargin: '-40px' });
        scrollTrigger('.social-contact', { rootMargin: '-50px' });
    }
    // Automatic scroll feature has been removed
});
// Gallery image animation (hover effect)
function setupGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const image = this.querySelector('.gallery-image');
            if (image) {
                image.style.filter = 'grayscale(0%)';
            }
        });
        item.addEventListener('mouseleave', function () {
            const image = this.querySelector('.gallery-image');
            if (image) {
                image.style.filter = 'grayscale(100%)';
            }
        });
    });
}
// Only run gallery effects if on gallery page
document.addEventListener('DOMContentLoaded', function () {
    if (document.body.id === 'gallery-page') {
        setupGalleryEffects();
    }
});

// Variabel untuk tracking apakah formulir valid
let formIsValid = false;

// Fungsi untuk menampilkan notifikasi "This page says" dengan pesan kustom
function showCustomAlert(message) {
    // Buat elemen-elemen untuk dialog
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const dialogBox = document.createElement('div');
    dialogBox.style.backgroundColor = '#2a2a2a';
    dialogBox.style.color = '#fff';
    dialogBox.style.padding = '20px';
    dialogBox.style.borderRadius = '8px';
    dialogBox.style.maxWidth = '400px';
    dialogBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    const header = document.createElement('div');
    header.textContent = 'This page says';
    header.style.fontSize = '14px';
    header.style.marginBottom = '10px';

    const messageText = document.createElement('div');
    messageText.textContent = message;
    messageText.style.marginBottom = '15px';

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.backgroundColor = '#fcf596';
    okButton.style.color = '#240A34';
    okButton.style.border = 'none';
    okButton.style.borderRadius = '20px';
    okButton.style.padding = '8px 20px';
    okButton.style.cursor = 'pointer';
    okButton.style.float = 'right';

    okButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    dialogBox.appendChild(header);
    dialogBox.appendChild(messageText);
    dialogBox.appendChild(okButton);
    overlay.appendChild(dialogBox);

    document.body.appendChild(overlay);
}

// Event listener untuk validasi form dan menampilkan notifikasi
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Validasi form sebelum submit
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit default
            
            // Save the date value before any processing
            const dateField = contactForm.querySelector('.current-date-field');
            const dateValue = dateField ? dateField.value : '';
            
            // Ambil semua input fields
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            
            // Periksa setiap input
            inputs.forEach(function(input) {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    // Jika input kosong, tampilkan pesan error bawaan browser
                    if (input.reportValidity) {
                        input.reportValidity();
                    }
                }
            });
            
            // Jika form valid, tampilkan notifikasi sukses
            if (isValid) {
                showCustomAlert('Terima kasih telah mengirimkan pesan, Clarissa akan membalas secepatnya');
                contactForm.reset(); // Reset form setelah sukses
                
                // Restore the date value after reset
                if (dateField && dateValue) {
                    dateField.value = dateValue;
                }
            } else {
                // Jika tidak valid, kita tidak perlu melakukan apa-apa
                // Browser akan menampilkan pesan validasi bawaan
            }
        });
    }
});

// Saat halaman dimuat
window.onload = function() {
    // Tampilkan tanggal
    if (document.getElementById('dateField')) {
        showDate();
    }
    
    // Tambahkan event listener ke form jika ada
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            // Simpan info bahwa form telah dikirim
            localStorage.setItem('formSubmitted', 'true');
        });
        
        // Cek apakah form telah dikirim sebelumnya
        if(localStorage.getItem('formSubmitted') === 'true') {
            // Tampilkan kembali tanggal
            showDate();
            // Opsional: Reset status setelah beberapa waktu
            setTimeout(function() {
                localStorage.removeItem('formSubmitted');
            }, 5000);
        }
    }
}
  
function showDate() {
    // Kode untuk menampilkan tanggal di form
    const dateElem = document.getElementById('dateField');
    if (dateElem) {
        const today = new Date();
        dateElem.textContent = 'Tanggal: ' + today.getFullYear() + '-' + 
                              String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                              String(today.getDate()).padStart(2, '0');
    }
}


