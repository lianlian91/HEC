 const graduatesList = [
            {
                name: "Francis Seng Gum Ja",
                diocese: "Lashio",
                image: "/img/francis.jpg"
            },
            {
                name: "Mary Hung Sein",
                diocese: "Mindat",
                image: "/img/hungsein.jpg"
            },
            {
                name: "Mary Kalyar Soe",
                diocese: "Taungoo",
                image: "/img/kalayar.jpg"
            },
            {
                name: "Martha Man Sawn Cing",
                diocese: "Kalay",
                image: "/img/mansawn.jpg"
            },
            {
                name: "Jocy Htar Htar Paing",
                diocese: "Loikaw",
                image: "/img/jocy.jpg"
            },
            {
                name: "Cecilia Shwe Zin",
                diocese: "Mandalay",
                image: "/img/shwezin.jpg"
            },
            {
                name: "Theresa Seng Sawm Ing",
                diocese: "Myitkyina",
                image: "/img/sengsawm.jpg"
            },
            {
                name: "Monica Htu Ring Ja",
                diocese: "Bamaw",
                image : "/img/thuringja.jpg"
            },
            {
                name: "Cecilia Kai Yin",
                diocese: "Bamaw",
                image : "/img/kayin.jpg"
            },
            // {
            //     name: "Nicholas Lian Thawn Muang",
            //     diocese: "Hakha",
            //     image : "/img/francis.jpg"
            // }
        ];

        function renderGraduates() {
            const container = document.getElementById('graduatesContainer');
            container.innerHTML = '';

            graduatesList.forEach(grad => {
                const card = document.createElement('div');
                card.className = 'grad-card';

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

        document.addEventListener('DOMContentLoaded', renderGraduates);