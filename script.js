const graduatesList = [
    {
        name: "Francis Seng Gum Ja",
        diocese: "Lashio",
        image: "img/francis.webp"
    },
    {
        name: "Mary Hung Sein",
        diocese: "Mindat",
        image: "img/hungsein.webp"
    },
    {
        name: "Mary Kalyar Soe",
        diocese: "Taungoo",
        image: "img/kalayar.webp"
    },
    {
        name: "Martha Man Sawn Cing",
        diocese: "Kalay",
        image: "img/mansawn.webp"
    },
    {
        name: "Jocy Htar Htar Paing",
        diocese: "Loikaw",
        image: "img/jocy.webp"
    },
    {
        name: "Cecilia Shwe Zin",
        diocese: "Mandalay",
        image: "img/shwezin.webp"
    },
    {
        name: "Nicholas Lian Thawn Muang",
        diocese: "Hakha",
        image: "img/nicholas.webp"
    },
    {
        name: "Mary Hkawn San",
        diocese: "Myitkyina",
        image: "img/hkawnsan.webp"
    },
    {
        name: "Theresa Seng Sawm Ing",
        diocese: "Myitkyina",
        image: "img/theresa.webp"
    },
    {
        name: "David Sam Sin",
        diocese: "Lashio",
        image: "img/david.webp"
    },
    {
        name: "Monica Htu Ring Ja",
        diocese: "Banmaw",
        image: "img/thuringja.webp"
    },
    {
        name: "Cecilia Kai Yin",
        diocese: "Banmaw",
        image: "img/kaiyin.webp"
    },
    {
        name: "Christopher Ko Ko",
        diocese: "Loikaw",
        image: "img/christopher.jpg"
    },
    {
        name: "Elizabeth Thae Moe Khaing",
        diocese: "Banmaw",
        image: "img/thaemo.webp"
    },
    {
        name: "Maria Ei Jar",
        diocese: "Lashio",
        image: "img/eijar.webp"
    },
    {
        name: "Mary Htoo",
        diocese: "Phekhon",
        image: "img/kohto.webp"
    },
    {
        name: "Elizabeth Thang Awi",
        diocese: "Mindat",
        image: "img/thangawi.jpeg"
    },
    {
        name: "Juliana Hla Ya Min Htike",
        diocese: "Mandalay",
        image: "img/majuice.webp"
    },
    {
        name: "Mary No San Cing",
        diocese: "Kalay",
        image: "img/ethan.webp"
    },
    {
        name: "Joseph Nang Zing La Mu",
        diocese: "Banmaw",
        image: "img/lamu.webp"
    },
    {
        name: "Martha Yadana Oo",
        diocese: "Mawlamyine",
        image: "img/marthaB.webp"
    },
    {
        name: "Martha Hnin Thiri Wai",
        diocese: "Mawlamyine",
        image: "img/marthaA.webp"
    },
    {
        name: "Monica Nuam Deih Lawh Cing",
        diocese: "Kalay",
        image: "img/cingcing.jpg"
    },
    {
        name: "Cynthia Ko",
        diocese: "Taungoo",
        image: "img/cynthia.webp"
    },
    {
        name: "Rita Muduh Roi Sam",
        diocese: "Myitkyina",
        image: "img/rita.webp"
    },
    {
        name: "Cecilia Dim Muan Hau",
        diocese: "Kalay",
        image: "img/muannu.webp"
    },
    {
        name: "Cecilia Ji Jan",
        diocese: "Bamaw",
        image: "img/jijan.webp"
    },
    {
        name: "Mary Htun",
        diocese: "Pyay",
        image: "img/maryhtun.webp"
    },
    {
        name: "Lawrence Tio",
        diocese: "Phekhone",
        image: "img/lawrance.webp"
    },
    {
        name: "John Mang Deih Khual",
        diocese: "Kalay",
        image: "img/john.webp"
    },
    {
        name: "Margret Phray Mar",
        diocese: "Loikaw",
        image: "img/magaret.webp"
    },
    {
        name: "Peter Zaw Myint Htun",
        diocese: "Mandalay",
        image: "img/peter.webp"
    },
    {
        name: "Paul Sani Sut Nu",
        diocese: "Myitkyina",
        image: "img/sutnu.webp"
    },
    {
        name: "Mary May Yee Zaw",
        diocese: "Mandalay",
        image: "img/zaw.webp"
    }
];

// Render Graduate Cards Dynamic Function
function renderGraduates() {
    const container = document.getElementById('graduatesContainer');
    if (!container) return;

    container.innerHTML = '';

    graduatesList.forEach(grad => {
        const card = document.createElement('div');
        card.className = 'grad-card';
        card.onclick = () => openModal(grad); // Add Click Event

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

// Modal Elements
const modal = document.getElementById('graduateModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open Modal with Selected Graduate Details
function openModal(graduate) {
    if (!modal) return;
    document.getElementById('modalImg').src = graduate.image;
    document.getElementById('modalName').textContent = graduate.name;
    document.getElementById('modalDiocese').textContent = graduate.diocese;
    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    if (modal) {
        modal.classList.remove('active');
    }
}

// Event Listeners for Modal Closing
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Close Modal when clicking outside the card area
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', renderGraduates);