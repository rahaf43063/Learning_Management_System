// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

// Library scrollrevealjs animation
ScrollReveal().reveal('.hero-info', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'left',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.hero', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'right',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.About-Us-left', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'left',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.About-Us-right', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'right',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.FAQ-left', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'left',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.FAQ-right', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'right',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.Results', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'bottom',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.Training', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'bottom',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.Paths', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'bottom',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.Blogs', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'bottom',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.matrix-left', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'left',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.matrix-bottom', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'bottom',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

ScrollReveal().reveal('.matrix-right', {
    delay: 300,        // تأخير الظهور (300 ملي ثانية)
    duration: 600,     // مدة الحركة بالميلي ثانية (600 ملي ثانية)
    distance: '50px',  // مقدار التحرك قبل الظهور (50 بكسل)
    origin: 'right',   // منشأ الحركة
    easing: 'ease-in-out' // ⬅️ القيمة القياسية للحركة السلسة
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    // ترقيم الصفحات
    pagination: {
        el: '.swiper-pagination',
    },

    // أسهم التنقل
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    // شريط التمرير
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // نقاط التوقف للتحكم في الاستجابة (Responsive Breakpoints)
    breakpoints: {
        // شاشات الموبايل (أكبر من أو تساوي 320 بكسل)
        // المطلوب: Mobile (1)
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        // شاشات التابلت (أكبر من أو تساوي 640 بكسل)
        // المطلوب: Tablet (2)
        640: {
            slidesPerView: 2,
            spaceBetween: 30 // زيادة المسافة قليلاً
        },
        
        // شاشات اللابتوب/الديسكتوب (أكبر من أو تساوي 1024 بكسل)
        // المطلوب: Laptop (3)
        1024: {
            slidesPerView: 3,
            spaceBetween: 40 // زيادة المسافة
        }
    }
});