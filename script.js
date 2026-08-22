// ==================================================
// TELEGRAM BOT CONFIGURATION
// ==================================================
const TELEGRAM_BOT_TOKEN = "8902803349:AAGESMrnDTWq5HiJet313PqnGyawhIEhP4o"; // Replace with your Bot Token
const TELEGRAM_CHAT_ID = "6181187735";     // Replace with your Chat ID

// ==================================================
// GRADUATES DATA LIST
// ==================================================
const graduatesList = [
    { name: "Francis Seng Gum Ja", diocese: "Lashio", image: "img/francis.webp" },
    { name: "Cecilia Dim Muan Hau", diocese: "Kalay", image: "img/muannu.webp" },
    { name: "Mary Houng Sein", diocese: "Mindat", image: "img/hungsein.webp" },
    { name: "Mary Kalyar Soe", diocese: "Taungoo", image: "img/kalayar.webp" },
    { name: "Martha Man Sawn Cing", diocese: "Kalay", image: "img/mansawn.webp" },
    { name: "Jocy Htar Htar Paing", diocese: "Loikaw", image: "img/jocy.webp" },
    { name: "Cecilia Shwe Zin", diocese: "Mandalay", image: "img/shwezin.webp" },
    { name: "Nicholas Lian Thawn Muang", diocese: "Hakha", image: "img/nicholas.webp" },
    { name: "Mary Hkawn San", diocese: "Myitkyina", image: "img/hkawnsan.webp" },
    { name: "Theresa Dingla Seng Tsawm Ing", diocese: "Myitkyina", image: "img/theresa.webp" },
    { name: "David Sam Sin", diocese: "Lashio", image: "img/david.webp" },
    { name: "Monica Htu Ring Ja", diocese: "Banmaw", image: "img/thuringja.webp" },
    { name: "Cecilia Kai Yin", diocese: "Banmaw", image: "img/kaiyin.webp" },
    { name: "Christopher Ko Ko", diocese: "Loikaw", image: "img/christopher.jpg" },
    { name: "Elizabeth Thae Moe Khaing", diocese: "Banmaw", image: "img/thaemo.webp" },
    { name: "Maria Ei Jar", diocese: "Lashio", image: "img/eijar.webp" },
    { name: "Mary Htoo", diocese: "Phekhon", image: "img/kohto.webp" },
    { name: "Elizabeth Thang Awi", diocese: "Mindat", image: "img/thangawi.jpeg" },
    { name: "Juliana Hla Ya Min Htike", diocese: "Mandalay", image: "img/majuice.webp" },
    { name: "Mary No San Cing", diocese: "Kalay", image: "img/ethan.webp" },
    { name: "Joseph NangZing La Mu", diocese: "Banmaw", image: "img/lamu.webp" },
    { name: "Martha Yadana Oo", diocese: "Mawlamyine", image: "img/marthaB.webp" },
    { name: "Martha Hnin Thiri Wai", diocese: "Mawlamyine", image: "img/marthaA.webp" },
    { name: "Monica Nuam Deih Lawh Cing", diocese: "Kalay", image: "img/cingcing.jpg" },
    { name: "Cynthia Ko", diocese: "Taungoo", image: "img/cynthia.webp" },
    { name: "Rita Mudu Roi Sam", diocese: "Myitkyina", image: "img/rita.webp" },
    { name: "Cecilia Ji Jan", diocese: "Banmaw", image: "img/jijan.webp" },
    { name: "Mary Htun", diocese: "Pyay", image: "img/maryhtun.webp" },
    { name: "Lawrence Tio", diocese: "Phekhon", image: "img/lawrance.webp" },
    { name: "John Mang Deih Khual", diocese: "Kalay", image: "img/john.webp" },
    { name: "Margret Phray Mar", diocese: "Loikaw", image: "img/magaret.webp" },
    { name: "Peter Zaw Myint Htun", diocese: "Mandalay", image: "img/peter.webp" },
    { name: "Elizabeth Htu San", diocese: "Lashio", image: "img/thusan.webp" },
    { name: "Paul Sani Sut Nu", diocese: "Myitkyina", image: "img/sutnu.webp" },
    { name: "Daisy Mi Lay", diocese: "Loikaw", image: "img/daisy.webp" },
    { name: "Mary May Yee Zaw", diocese: "Mandalay", image: "img/zaw.webp" },
    { name: "Elizabeth Aung Lu", diocese: "Myitkyina", image: "img/aunglu.webp" },
    { name: "Veronica Vung Sen Nuam", diocese: "Kalay", image: "img/veronica.webp" },
    { name: "Maria Toe Hay Man Ko", diocese: "Mandalay", image: "img/maria.webp" },
    { name: "Jerome Daipha Aung Htoi", diocese: "Myitkyina", image: "img/jerome.webp" },
    { name: "Mathew Gun Sam", diocese: "Banmaw", image: "img/mathew.webp"}
];

// ==================================================
// CONFETTI ANIMATION (3-SECOND DURATION)
// ==================================================
function triggerConfetti() {
    if (typeof confetti === 'function') {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 25, spread: 360, ticks: 100, zIndex: 2000 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 40 * (timeLeft / duration);

            // Launch confetti from left and right sides
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
                colors: ['#d4af37', '#f3e5ab', '#ffffff']
            }));
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
                colors: ['#d4af37', '#f3e5ab', '#ffffff']
            }));
        }, 250);
    }
}

// ==================================================
// TELEGRAM API Integration
// ==================================================
async function sendToTelegram(messageText) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: messageText,
                parse_mode: 'Markdown'
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Telegram API Error:", data.description);
            alert("Telegram Error: " + data.description);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Network Error:", error);
        alert("Network Connection Error.");
        return false;
    }
}

// ==================================================
// DIOCESE FILTER INITIALIZATION
// ==================================================
function initDioceseFilter() {
    const select = document.getElementById('dioceseSelect');
    if (!select) return;

    // Extract unique diocese names
    const dioceses = [...new Set(graduatesList.map(item => item.diocese))].sort();

    dioceses.forEach(diocese => {
        const option = document.createElement('option');
        option.value = diocese;
        option.textContent = diocese;
        select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
        renderGraduates(e.target.value);
    });
}

// ==================================================
// RENDER GRADUATE CARDS
// ==================================================
function renderGraduates(selectedDiocese = 'All') {
    const container = document.getElementById('graduatesContainer');
    if (!container) return;

    container.innerHTML = '';

    const filteredList = selectedDiocese === 'All'
        ? graduatesList
        : graduatesList.filter(g => g.diocese === selectedDiocese);

    if (filteredList.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 30px;">No graduates found.</div>`;
        return;
    }

    filteredList.forEach(grad => {
        const card = document.createElement('div');
        card.className = 'grad-card';
        card.onclick = () => openModal({
            name: grad.name,
            badge: grad.diocese,
            image: grad.image,
            details: "Higher Education College • Batch 12"
        });

        card.innerHTML = `
            <div class="avatar-container">
                <img src="${grad.image}" alt="${grad.name}" class="avatar-img" onerror="this.src='https://via.placeholder.com/150/d4af37/030a24?text=Graduate'">
            </div>
            <div class="grad-info">
                <div class="info-row name-row"><strong>NAME:</strong> ${grad.name}</div>
                <div class="info-row"><strong>DIOCESE:</strong> ${grad.diocese}</div>
            </div>
        `;

        container.appendChild(card);
    });
}

// ==================================================
// POPUP MODAL CONTROLS
// ==================================================
const modal = document.getElementById('graduateModal');
const closeModalBtn = document.getElementById('closeModalBtn');

function openModal(data) {
    if (!modal) return;
    document.getElementById('modalImg').src = data.image;
    document.getElementById('modalName').textContent = data.name;
    document.getElementById('modalDiocese').textContent = data.badge;
    document.getElementById('modalDetails').textContent = data.details || "Higher Education College";

    // Set Target Name for the Wish Form
    document.getElementById('wishTargetName').textContent = data.name;

    modal.classList.add('active');

    // Trigger Confetti Animation when modal opens
    triggerConfetti();
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
    }
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// ==================================================
// EVENT LISTENERS INITIALIZATION
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    initDioceseFilter();
    renderGraduates();

    // Modal Wish Form Submit Handler
    const modalWishForm = document.getElementById('modalWishForm');
    if (modalWishForm) {
        modalWishForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const targetName = document.getElementById('modalName').textContent;
            const sender = document.getElementById('modalSenderName').value;
            const message = document.getElementById('modalWishMessage').value;

            // Formatted Markdown text sent to Telegram
            const text = `🎓 *PERSONAL GRADUATION WISH!*\n\n🎯 *To:* ${targetName}\n✍️ *From:* ${sender}\n💬 *Wish:* ${message}`;

            const success = await sendToTelegram(text);
            if (success) {
                triggerConfetti();
                alert(`Your wish for ${targetName} has been sent successfully!`);
                modalWishForm.reset();
                closeModal();
            }
        });
    }
});