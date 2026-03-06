const numeroWhatsApp = "558698177973";
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFpn7yHaNFX52_8F_V43WMrYpG_CfjEmaJ1hij0_rckhBBWZtEbx1ljPb8GOGSaFCg_Q3m2xfyKPeU/pub?output=csv';

const dadosMotos = {
    neos: {
        titulo: "NEO'S CONNECTED",
        descricao: `A Neo’s Connected é a scooter da Yamaha que combina modernidade, praticidade e tecnologia. Leve e ágil, é ideal para o dia a dia na cidade, oferecendo conforto e economia. Seu design elegante aliado à conectividade garante mais segurança e praticidade em cada trajeto.`,
        cores: ['#8fb3b9', '#f0f0f0', '#000000'],
        fotos: ['carrosselNEO/neo1.png', 'carrosselNEO/neo2.png', 'carrosselNEO/neo3.png'],
        galeria: ['carrosselNEO/amostra3.avif', 'carrosselNEO/amostra2.avif', 'carrosselNEO/amostra1.avif']
    },
    fluo: {
        titulo: "FLUO HYBRID CONNECTED",
        descricao: 'A Fluo ABS Hybrid Connected é uma scooter urbana moderna com sistema híbrido leve e tecnologia avançada. Seu motor 125 cc entrega 8,3 cv com funcionamento suave e econômico. Conta com tecnologia híbrida Power Assist, sistema Stop & Start e freios ABS para mais segurança no trânsito. O painel 100% digital é conectado e o amplo espaço interno garante praticidade no dia a dia. Uma scooter inteligente feita para mobilidade eficiente e confortável.',
        cores: ['#0b6476', '#000000', '#9c9797'],
        fotos: ['carrosselFLUOH/fluo1.png', 'carrosselFLUOH/fluo2.png', 'carrosselFLUOH/fluo3.png'],
        galeria: ['carrosselFLUOH/amostra1.png', 'carrosselFLUOH/amostra2.png', 'carrosselFLUOH/amostra3.png']
    },
    nmax: {
        titulo: "NMAX ABS CONNECTED",
        descricao: 'A NMAX ABS Connected chegou para transformar sua experiência sobre duas rodas. Com motor potente e econômico, freios ABS para máxima segurança e conectividade para deixar sua rotina mais prática, ela une tecnologia, conforto e estilo em uma scooter que acompanha o seu ritmo.',
        cores: ['#05349a', '#462626', '#da0d0d'],
        fotos: ['carrosselNMAX/nmax1.png', 'carrosselNMAX/nmax2.png', 'carrosselNMAX/nmax3.png'],
        galeria: ['carrosselNMAX/amostra1.png', 'carrosselNMAX/amostra2.png', 'carrosselNMAX/amostra3.png']
    },
    xmax: {
        titulo: "XMAX 300 CONNECTED",
        descricao: 'A Nova XMAX 300 Connected é uma scooter premium que une potência, tecnologia e sofisticação. Equipada com o novo motor de 300cc e câmbio automático, oferece uma pilotagem ágil, confortável e eficiente. Ideal para quem valoriza desempenho, estilo e tecnologia em cada trajeto.',
        cores: ['#3f2a21', '#141313', '#757575'],
        fotos: ['carrosselXMAX/xmax1.png', 'carrosselXMAX/xmax2.png', 'carrosselXMAX/xmax3.png'],
        galeria: ['carrosselXMAX/amostra1.avif', 'carrosselXMAX/amostra2.avif', 'carrosselXMAX/amostra3.avif']
    },
    fz15: {
        titulo: "FZ15 ABS CONNECTED",
        descricao: 'A FAZER FZ15 ABS CONNECTED é a companheira ideal para o seu dia a dia na cidade. Com seu motor de 150cc, conhecido pela durabilidade e economia com a versatilidade da tecnologia Blueflex, cada trajeto se torna uma experiência única.',
        cores: ['#070707', '#938e8e', '#c40909', '#03052d'],
        fotos: ['carrosselFZ15/fz1.png', 'carrosselFZ15/fz2.png', 'carrosselFZ15/fz3.png', 'carrosselFZ15/fz4.png'],
        galeria: ['carrosselFZ15/amostra1.png', 'carrosselFZ15/amostra2.png', 'carrosselFZ15/amostra3.avif']
    },
    fz25: {
        titulo: "FZ25 ABS CONNECTED",
        descricao: 'O motor de 250 cilindradas da FAZER FZ25 CONNECTED é reconhecido em todo o Brasil por seu desempenho, eficiência e confiabilidade. Com potência e torque ideais, é perfeito para uso urbano e em viagens, além de exigir uma manutenção simples.',
        cores: ['#938e8e', '#03052d', '#fefeff','#c40909'],
        fotos: ['carrosselFZ25/fz251.png', 'carrosselFZ25/fz252.png', 'carrosselFZ25/fz253.png', 'carrosselFZ25/fz254.png'],
        galeria: ['carrosselFZ25/amostra1.png', 'carrosselFZ25/amostra2.png', 'carrosselFZ25/amostra3.png']
    },
    factor: {
        titulo: "FACTOR",
        descricao: 'A Nova FACTOR é a escolha ideal para quem busca uma motocicleta confiável e eficiente para o dia a dia. O motor durável, econômico, conta com a tecnologia Blueflex e autonomia de sobra para rodar o dia todo. Pronta para desbravar novos caminhos, a nova FACTOR é mais do que uma moto, é a sua parceira em todas as conquistas.',
        cores: ['#fefeff', '#0d0d0d','#c40909'],
        fotos: ['carrosselFACTOR/factor1.png', 'carrosselFACTOR/factor2.png', 'carrosselFACTOR/factor3.png'],
        galeria: ['carrosselFACTOR/amostra1.avif', 'carrosselFACTOR/amostra2.avif', 'carrosselFACTOR/amostra3.avif']
    },
    factordx: {
        titulo: "FACTOR DX",
        descricao: 'A Yamaha Factor DX é uma street urbana moderna, prática e eficiente para o dia a dia. Equipada com motor flex de 149 cc, entrega até 12 cv de potência e torque equilibrado. Seu painel digital e farol de LED aumentam a tecnologia e conforto na pilotagem. Design funcional e soluções modernas tornam seus trajetos mais ágeis e confiáveis. Uma moto versátil que une economia, estilo e desempenho para uso urbano.',
        cores: ['#b6b6b8', '#0300b4','#232323'],
        fotos: ['carrosselFACTORDX/factordx1.png', 'carrosselFACTORDX/factordx2.png', 'carrosselFACTORDX/factordx3.png'],
        galeria: ['carrosselFACTORDX/amostra1.png', 'carrosselFACTORDX/amostra2.png', 'carrosselFACTORDX/amostra3.png']
    },
    crosser150s: {
        titulo: "CROSSER 150 S",
        descricao: 'Considerada a SUV das motocicletas, a Crosser S é alta, robusta e versátil. Equipada com motor 150 cc flex e sistema ABS para mais segurança. Enfrenta asfalto e terra com resistência e economia no dia a dia. Conta com conjunto óptico em LED e painel 100% digital multifuncional. Uma trail urbana completa para quem busca conforto e praticidade.',
        cores: ['#0d0d0d','#c40909'],
        fotos: ['carrosselCROSSER150S/price1.png', 'carrosselCROSSER150S/price2.png'],
        galeria: ['carrosselCROSSER150S/amostra1.png', 'carrosselCROSSER150S/amostra2.png', 'carrosselCROSSER150S/amostra3.png']
    },
    crosserz: {
        titulo: "CROSSER 150 Z",
        descricao: 'A Crosser Z é a escolha perfeita para quem procura um motor flex de 150cc que entrega resistência para o dia a dia, possui sistema ABS, que evita o travamento da roda dianteira nas frenagens bruscas. O motor durável e econômico, conta com a tecnologia Blueflex, para escolher entre gasolina, etanol ou ambos, o que for melhor para você.',
        cores: ['#0510d6','#c40909','#225e22'],
        fotos: ['carrosselCROSSERZ/1.png', 'carrosselCROSSERZ/2.png', 'carrosselCROSSERZ/3.png'],
        galeria: ['carrosselCROSSERZ/amostra1.png', 'carrosselCROSSERZ/amostra2.png', 'carrosselCROSSERZ/amostra3.png']
    },
    lander: {
        titulo: "Lander Connected",
        descricao: 'Com o motor de 250 cilindradas da LANDER CONNECTED se destaca por sua impressionante durabilidade e eficiência. Possui sistema ABS, que evita o travamento da roda dianteira nas frenagens bruscas ou em baixa aderência como dias de chuva, garantindo maior controle na pilotagem.',
        cores: ['#714806','#908d8d','#0e28d1','#81ab81'],
        fotos: ['carrosselLANDER/1.png', 'carrosselLANDER/2.png', 'carrosselLANDER/3.png', 'carrosselLANDER/4.png'],
        galeria: ['carrosselLANDER/amostra1.png', 'carrosselLANDER/amostra2.png', 'carrosselLANDER/amostra3.png']
    },
    mt03: {
        titulo: "MT-03",
        descricao: 'Inspirada no conceito Dark Side of Japan, a nova MT-03 traz um design ainda mais ousado, com a traseira totalmente renovada e maior aerodinâmica, além de novas cores e detalhes refinados. Uma naked feita para quem busca exclusividade e atitude.',
        cores: ['#f7f7f7','#101010','#0820b9'],
        fotos: ['carrosselMT03/1.png', 'carrosselMT03/2.png', 'carrosselMT03/3.png'],
        galeria: ['carrosselMT03/amostra1.jpg', 'carrosselMT03/amostra2.jpg', 'carrosselMT03/amostra3.jpg']
    },
    mt07: {
        titulo: "MT-07",
        descricao: 'A nova MT-07 evoluiu em estilo e funcionalidade. O novo farol, com projetor e DRL Full LED, destaca seu visual agressivo, enquanto as setas dianteiras e traseiras de LED garantem mais modernidade e visibilidade. Além disso, os novos comandos intuitivos permitem explorar todas as funções do menu com mais facilidade.',
        cores: ['#f7f7f7','#101010','#0820b9'],
        fotos: ['carrosselMT07/1.png', 'carrosselMT07/2.png', 'carrosselMT07/3.png'],
        galeria: ['carrosselMT07/amostra1.jpg', 'carrosselMT07/amostra2.jpg', 'carrosselMT07/amostra3.jpg']
    },
    r3: {
        titulo: "R3 ABS CONNECTED",
        descricao: 'Design atualizado para surpreender, com um duto de admissão em forma de M, inspirado na consagrada YZR-M1. A iluminação Full Led com novos faróis duplos com projetor, defletores aerodinâmicos integrados e novas carenagens em multicamadas trazem uma impressão ainda mais esportiva para a nova R3 Connected.',
        cores: ['#f7f7f7','#101010','#0820b9'],
        fotos: ['carrosselR3/1.png', 'carrosselR3/2.png', 'carrosselR3/3.png'],
        galeria: ['carrosselR3/amostra1.avif', 'carrosselR3/amostra2.avif', 'carrosselR3/amostra3.avif']
    },
    r15: {
        titulo: "R15 ABS",
        descricao: 'Com câmbio de 6 marchas, a R15 possui potente motor monocilíndrico de 155cc, com refrigeração líquida e Sistema de Atuação de Válvula Variável, que garante agilidade nas arrancadas e retomadas. Eficiente e econômica, atinge potência máxima de 18,8cv a 10.000 rpm. A tecnologia DiASil da Yamaha, contribui para uma menor vibração, melhor dissipação de calor e ganho de performance.',
        cores: ['#f7f7f7','#101010','#0820b9'],
        fotos: ['carrosselR15/1.png', 'carrosselR15/2.png', 'carrosselR15/3.png'],
        galeria: ['carrosselR15/amostra1.png', 'carrosselR15/amostra2.png', 'carrosselR15/amostra3.png']
    },
    aerox: {
        titulo: "Aerox ABS Connected",
        descricao: 'Projetada para quem quer viver com estilo, a nova Aerox conta com carenagens de linhas expressivas e aerodinâmica que oferece manobras mais ágeis, com distância do solo de 145 mm e sendo o modelo mais leve da categoria, com apenas 127 kg de peso líquido, garantindo uma pilotagem prazerosa em qualquer trajeto.',
        cores: ['#0810a6','#252525','#797a7d'],
        fotos: ['carrosselAEROX/1.png', 'carrosselAEROX/2.png', 'carrosselAEROX/3.png'],
        galeria: ['carrosselAEROX/amostra1.png', 'carrosselAEROX/amostra2.png', 'carrosselAEROX/amostra3.png']
    }
};

let slideAtual = 0;
let fotosAtuais = [];

async function carregarTabelaConsorcio(idMoto, nomeExibicao) {
    const corpoTabela = document.getElementById('tabela-corpo-consorcio');
    const campoCredito = document.getElementById('consorcio-valor-credito');
    const campoNome = document.getElementById('consorcio-nome-moto');

    campoNome.innerText = nomeExibicao;
    campoCredito.innerText = "Carregando...";
    corpoTabela.innerHTML = "<tr><td colspan='2'>Buscando planos...</td></tr>";

    try {
        const response = await fetch(SHEET_CSV_URL);
        const data = await response.text();
        const linhas = data.split(/\r?\n/).slice(1);
        
        let htmlGerado = "";
        let creditoDaMoto = ""; 
        let encontrouDados = false;

        linhas.forEach(linha => {
            const col = linha.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
            if (col && col[0].replace(/"/g, "").toLowerCase() === idMoto.toLowerCase()) {
                creditoDaMoto = col[1].replace(/"/g, "").trim();
                htmlGerado += `
                    <tr>
                        <td style="font-weight: 800; color: #333; font-size: 18px;">${col[3].replace(/"/g, "")}</td>
                        <td style="color: #D90007; font-weight: 800; font-size: 18px;">${col[2].replace(/"/g, "")}</td>
                    </tr>
                `;
                encontrouDados = true;
            }
        });
        
        campoCredito.innerText = creditoDaMoto || "Consulte-nos";
        corpoTabela.innerHTML = encontrouDados ? htmlGerado : "<tr><td colspan='2'>Nenhum plano cadastrado.</td></tr>";
        
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        corpoTabela.innerHTML = "<tr><td colspan='2'>Erro ao carregar dados.</td></tr>";
    }
}

function atualizarSlide() {
    const imgPrincipal = document.getElementById('imagem-principal');
    if (fotosAtuais.length > 0) imgPrincipal.src = fotosAtuais[slideAtual];

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === slideAtual);
    });

    document.querySelectorAll('.color-swatch').forEach((swatch, index) => {
        swatch.classList.toggle('active', index === slideAtual);
    });
}

document.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('ball')) {
        const novaImagem = target.getAttribute('data-image');
        const card = target.closest('.product-card');
        const imgPrincipal = card.querySelector('.product-image');
        
        if(novaImagem) {
            imgPrincipal.src = novaImagem;
            card.querySelectorAll('.ball').forEach(b => b.classList.remove('active'));
            target.classList.add('active');
        }
    }

    if (target.closest('.open-sobre')) {
        const idMoto = target.closest('.product-card').dataset.moto;
        const dados = dadosMotos[idMoto];
        if (!dados) return;

        document.getElementById('sobre-titulo').textContent = dados.titulo;
        document.getElementById('sobre-descricao').textContent = dados.descricao;
        fotosAtuais = dados.fotos;
        slideAtual = 0;

        const dotsContainer = document.getElementById('dots-container');
        dotsContainer.innerHTML = '';
        fotosAtuais.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.onclick = () => { slideAtual = i; atualizarSlide(); };
            dotsContainer.appendChild(dot);
        });

        const containerCores = document.getElementById('sobre-cores');
        containerCores.innerHTML = '';
        dados.cores.forEach((cor, i) => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch' + (i === 0 ? ' active' : '');
            swatch.style.backgroundColor = cor;
            swatch.onclick = () => { slideAtual = i; atualizarSlide(); };
            containerCores.appendChild(swatch);
        });

        const containerGaleria = document.getElementById('sobre-galeria');
        containerGaleria.innerHTML = '';
        dados.galeria.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            containerGaleria.appendChild(img);
        });

        atualizarSlide();
        document.getElementById('modal-sobre').classList.add('active');
    }

    if (target.closest('.open-consorcio')) {
        const card = target.closest('.product-card');
        const idMoto = card.dataset.moto;
        const nomeMoto = card.querySelector('.product-name').innerText;
        document.getElementById('modal-consorcio').classList.add('active');
        carregarTabelaConsorcio(idMoto, nomeMoto);
    }

    if (target.closest('.open-financiamento')) {
        const card = target.closest('.product-card');
        const tituloMoto = card.querySelector('.product-name').innerText;
        document.querySelector('#form-financiamento select[name="modelo_moto"]').value = tituloMoto;
        document.getElementById('modal-financiamento').classList.add('active');
    }

    if (target.classList.contains('close-modal') || target.classList.contains('modal-overlay')) {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    }
});

const mascaras = {
    telefone(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        return v;
    },

    cpf(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return v;
    },

    data(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
        return v;
    },

    moeda(v) {
        v = v.replace(/\D/g, "");
        v = (v / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return v;
    }
};

document.addEventListener('input', (e) => {
    const campo = e.target;
    const nome = campo.name;

    if (nome === 'telefone') campo.value = mascaras.telefone(campo.value);
    if (nome === 'cpf') campo.value = mascaras.cpf(campo.value);
    if (nome === 'data_nascimento') campo.value = mascaras.data(campo.value);
    if (nome === 'valor_entrada' || nome === 'renda_mensal') {
        campo.value = mascaras.moeda(campo.value);
    }
});

document.getElementById('form-financiamento').addEventListener('submit', function(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(this).entries());
    
    const mensagem = `*SOLICITAÇÃO DE FINANCIAMENTO*\n` +
                     `--------------------------\n` +
                     `*Moto:* ${d.modelo_moto}\n` +
                     `*Cliente:* ${d.nome}\n` +
                     `*CPF:* ${d.cpf}\n` +
                     `*Nascimento:* ${d.data_nascimento}\n` +
                     `*Cidade:* ${d.cidade}\n` +
                     `*Telefone:* ${d.telefone}\n` +
                     `*Renda Mensal:* ${d.renda_mensal}\n` +
                     `*Entrada:* ${d.valor_entrada}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
    this.reset();
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
});