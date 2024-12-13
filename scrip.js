const portfolioData = {
    sections: [
        {
            id: "hero",
            content: {
                imgSrc: "img/personal.jpg",
                imgAlt: "Personal Trainer",
                title: "Maria Julia Lima ",
                subtitle: "Transformando vidas com saúde e alta performance"
            }
        },
        {
            id: "about",
            content: {
                imgSrc: "path/to/about.jpg",
                imgAlt: "Sobre a Personal",
                title: "SOBRE MIM",
                description: "Sou [Seu Nome], especialista em nutrição e treino. Com anos de experiência ajudando pessoas a atingirem seus objetivos de saúde e performance, meu foco é oferecer soluções práticas e personalizadas."
            }
        },
        {
            id: "ebooks",
            content: [
                {
                    imgSrc: "path/to/ebook1.jpg",
                    imgAlt: "Ebook 1",
                    title: "Ebook de Treino",
                    description: "Um guia completo para treinos eficientes."
                },
                {
                    imgSrc: "path/to/ebook2.jpg",
                    imgAlt: "Ebook 2",
                    title: "Ebook de Alimentação",
                    description: "Receitas e dicas para uma dieta equilibrada."
                }
            ]
        }
    ]
};

function createSection(sectionData) {
    const section = document.createElement('section');
    section.id = sectionData.id;

    if (sectionData.id === "hero" || sectionData.id === "about") {
        const img = document.createElement('img');
        img.src = sectionData.content.imgSrc;
        img.alt = sectionData.content.imgAlt;
        img.style.width = '100%';
        img.style.borderRadius = '8px';

        const h2 = document.createElement('h2');
        h2.textContent = sectionData.content.title;

        const p = document.createElement('p');
        p.textContent = sectionData.content.subtitle || sectionData.content.description;

        section.appendChild(img);
        section.appendChild(h2);
        section.appendChild(p);
    } else if (sectionData.id === "ebooks") {
        const ebooksDiv = document.createElement('div');
        ebooksDiv.className = 'ebooks';

        sectionData.content.forEach(ebook => {
            const ebookDiv = document.createElement('div');
            ebookDiv.className = 'ebook';

            const img = document.createElement('img');
            img.src = ebook.imgSrc;
            img.alt = ebook.imgAlt;
            img.style.width = '100%';
            img.style.borderRadius = '8px';

            const h3 = document.createElement('h3');
            h3.textContent = ebook.title;

            const p = document.createElement('p');
            p.textContent = ebook.description;

            ebookDiv.appendChild(img);
            ebookDiv.appendChild(h3);
            ebookDiv.appendChild(p);
            ebooksDiv.appendChild(ebookDiv);
        });

        section.appendChild(ebooksDiv);
    }

    return section;
}

function generatePortfolio(data) {
    data.sections.forEach(sectionData => {
        const section = createSection(sectionData);
        document.body.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generatePortfolio(portfolioData);
});
