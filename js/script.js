// Mobile menu toggle
    document.querySelector('header button').addEventListener('click', function() {
        const nav = document.querySelector('header nav');
        nav.classList.toggle('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Commodity cards interaction
    document.querySelectorAll('.commodity-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    // Modal de detalhes das commodities
    function openCommodityModal(commodity) {
        const modal = document.getElementById('commodity-modal');
        const content = document.getElementById('commodity-modal-content');
        let html = '';
        if (commodity === 'soja') {
            html = `
                <h2 class="text-2xl font-bold mb-4 text-green-700">Soja</h2>
                <p class="mb-2 text-gray-700">A soja é uma das principais commodities agrícolas do Brasil, utilizada tanto para consumo interno quanto para exportação. Trabalhamos com soja em grão e derivados, oferecendo contratos flexíveis, logística integrada e suporte completo ao produtor e comprador.</p>
                <ul class="list-disc pl-5 text-gray-600 mb-2">
                    <li>Negociação de grandes volumes</li>
                    <li>Rastreamento de origem</li>
                    <li>Opções de contratos futuros</li>
                    <li>Suporte logístico e financeiro</li>
                </ul>
            `;
        } else if (commodity === 'arroz') {
            html = `
                <h2 class="text-2xl font-bold mb-4 text-green-700">Arroz</h2>
                <p class="mb-2 text-gray-700">Comercializamos arroz de alta qualidade, com classificação especial para exportação e mercado interno. Garantimos procedência, qualidade e entrega eficiente para atender as demandas do setor alimentício e industrial.</p>
                <ul class="list-disc pl-5 text-gray-600 mb-2">
                    <li>Arroz em casca e beneficiado</li>
                    <li>Certificação de qualidade</li>
                    <li>Atendimento a grandes redes</li>
                    <li>Logística nacional e internacional</li>
                </ul>
            `;
        } else if (commodity === 'milho') {
            html = `
                <h2 class="text-2xl font-bold mb-4 text-green-700">Milho</h2>
                <p class="mb-2 text-gray-700">O milho é essencial para a cadeia produtiva de alimentos e ração animal. Oferecemos milho de alta qualidade, com negociações transparentes e soluções logísticas para todo o Brasil.</p>
                <ul class="list-disc pl-5 text-gray-600 mb-2">
                    <li>Milho para consumo humano e animal</li>
                    <li>Negociação direta com produtores</li>
                    <li>Entrega programada</li>
                    <li>Consultoria de mercado</li>
                </ul>
            `;
        }
        content.innerHTML = html;
        modal.classList.remove('hidden');
    }
    function closeCommodityModal() {
        document.getElementById('commodity-modal').classList.add('hidden');
    }
