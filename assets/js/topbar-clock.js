(function () {
    // 1. Realtime WIT (Waktu Indonesia Timur / Asia/Jayapura) Clock
    const clockEl = document.getElementById('realtime-clock');
    if (clockEl) {
        const dateFormatter = new Intl.DateTimeFormat('id-ID', {
            timeZone: 'Asia/Jayapura',
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const timeFormatter = new Intl.DateTimeFormat('id-ID', {
            timeZone: 'Asia/Jayapura',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        function updateClock() {
            const now = new Date();
            const dateStr = dateFormatter.format(now);
            const timeStr = timeFormatter.format(now).replace(/\./g, ':');
            clockEl.textContent = `${dateStr} | ${timeStr} WIT`;
        }

        updateClock();
        setInterval(updateClock, 1000);
    }

    // 2. Global Header Search Box -> arahkan ke halaman berita dengan query pencarian
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        const input = searchBox.querySelector('input');
        const btn = searchBox.querySelector('button');
        const inPagesDir = window.location.pathname.replace(/\\/g, '/').includes('/pages/');

        function doSearch() {
            const q = (input ? input.value : '').trim();
            if (!q) return;
            const target = inPagesDir ? 'berita.html' : 'pages/berita.html';
            window.location.href = `${target}?q=${encodeURIComponent(q)}`;
        }

        if (btn) btn.addEventListener('click', (e) => { e.preventDefault(); doSearch(); });
        if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); doSearch(); } });
    }

    // 3. Mobile Hamburger Menu & Accordion Dropdown (berlaku otomatis di semua halaman)
    const headerNav = document.querySelector('header nav');
    const navLinks = headerNav ? headerNav.querySelector('.nav-links') : null;
    const headerTop = document.querySelector('header .header-top');
    if (headerNav && navLinks) {
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'nav-toggle';
        toggleBtn.setAttribute('aria-label', 'Buka menu navigasi');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        if (headerTop && searchBox && searchBox.parentNode === headerTop) {
            const actionsWrap = document.createElement('div');
            actionsWrap.className = 'header-actions';
            headerTop.insertBefore(actionsWrap, searchBox);
            actionsWrap.appendChild(searchBox);
            actionsWrap.appendChild(toggleBtn);
        } else {
            headerNav.insertBefore(toggleBtn, navLinks);
        }

        toggleBtn.addEventListener('click', function () {
            const isOpen = headerNav.classList.toggle('nav-open');
            toggleBtn.setAttribute('aria-expanded', String(isOpen));
            toggleBtn.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
            toggleBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.querySelectorAll(':scope > li').forEach(li => {
            const submenu = li.querySelector('.nav-dropdown-menu');
            const trigger = li.querySelector(':scope > a');
            if (!submenu || !trigger) return;

            trigger.addEventListener('click', function (e) {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    const willOpen = !li.classList.contains('dropdown-open');
                    navLinks.querySelectorAll(':scope > li.dropdown-open').forEach(other => {
                        if (other !== li) other.classList.remove('dropdown-open');
                    });
                    li.classList.toggle('dropdown-open', willOpen);
                }
            });
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 900 && headerNav.classList.contains('nav-open')) {
                headerNav.classList.remove('nav-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute('aria-label', 'Buka menu navigasi');
                toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                navLinks.querySelectorAll(':scope > li.dropdown-open').forEach(li => li.classList.remove('dropdown-open'));
            }
        });
    }
})();