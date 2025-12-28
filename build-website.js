const fs = require('fs');
const path = require('path');

// Read components
const navbar = fs.readFileSync('components/navbar.html', 'utf8');
const footer = fs.readFileSync('components/footer.html', 'utf8');

// Configuration des pages
const pages = [
    {
        file: 'index.html',
        title: 'Accueil Melon-Soft - Solutions Logicielles en RDC',
        content: 'home'
    },
    {
        file: 'apropos.html',
        title: 'À Propos de Nous - Melon-Soft',
        content: 'about'
    },
    {
        file: 'blog.html',
        title: 'Actualités et Blog - Melon-Soft',
        content: 'blog'
    },
    {
        file: 'carrieres.html',
        title: 'Carrières chez Melon-Soft',
        content: 'careers'
    },
    {
        file: 'communication_numerique.html',
        title: 'Communication Numérique - Melon-Soft',
        contentFile: 'communication_numerique.html'
    },
    {
        file: 'test-theme.html',
        title: 'Test Thème - Melon-Soft',
        contentFile: 'test-theme.html'
    },
    {
        file: 'test-debug.html',
        title: 'Test Debug - Melon-Soft',
        contentFile: 'test-debug.html'
    },
    {
        file: 'developpement_informatique.html',
        title: 'Développement Informatique - Melon-Soft',
        content: 'development'
    },
    {
        file: 'faq.html',
        title: 'FAQ - Melon-Soft',
        content: 'faq'
    },
    {
        file: 'formation_professionnelle.html',
        title: 'Formation Professionnelle - Melon-Soft',
        content: 'training'
    },
    {
        file: 'nos_services.html',
        title: 'Nos Services - Melon-Soft',
        content: 'services'
    },
    {
        file: 'nous_contacter.html',
        title: 'Nous Contacter - Melon-Soft',
        content: 'contact'
    },
    {
        file: 'portfolio.html',
        title: 'Portfolio Melon-Soft',
        content: 'portfolio'
    },
    {
        file: 'profil_corporatif.html',
        title: 'Profil Corporatif - Melon-Soft',
        content: 'corporate'
    },
    {
        file: 'services_techniques.html',
        title: 'Services Techniques - Melon-Soft',
        content: 'technical'
    },
    {
        file: 'solutions_de_securite.html',
        title: 'Solutions de Sécurité - Melon-Soft',
        content: 'security'
    }
];

// Template HTML de base
function generateTemplate(title, content) {
    return `<!DOCTYPE html>
<html class="light" lang="fr">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>${title}</title>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    
    <!-- Material Symbols -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    
    <!-- Configuration Tailwind -->
    <script src="assets/js/tailwind-config.js"></script>
    
    <!-- CSS Custom -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="bg-background-light dark:bg-background-dark font-display text-text-dark antialiased">
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <!-- Navbar -->
        ${navbar}
        
        <!-- Main Content -->
        <main class="flex-1">
            ${content}
        </main>
        
        <!-- Footer -->
        ${footer}
    </div>

    <!-- JavaScript -->
    <script src="assets/js/main.js?v=1"></script>
</body>

</html>`;
}

function avatarDataUri({ bgColor, initials }) {
    const bg = String(bgColor || '#0a2463');
    const text = String(initials || '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 3).toUpperCase() || 'MS';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" rx="80" fill="${bg}"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="800" fill="#ffffff">${text}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const teamMembers = [
    {
        name: 'Amina M.',
        role: 'CEO & Fondatrice',
        initials: 'AM',
        bgColor: '#0a2463',
        linkedin: 'https://www.linkedin.com/',
        x: 'https://x.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Jean K.',
        role: 'CTO',
        initials: 'JK',
        bgColor: '#071a47',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Samuel T.',
        role: 'Lead Designer UI/UX',
        initials: 'ST',
        bgColor: '#ffd700',
        linkedin: 'https://www.linkedin.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Diane N.',
        role: 'Product Manager',
        initials: 'DN',
        bgColor: '#e0e7ff',
        linkedin: 'https://www.linkedin.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Patrick M.',
        role: 'DevOps Engineer',
        initials: 'PM',
        bgColor: '#0a2463',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Ruth K.',
        role: 'Développeuse Full‑Stack',
        initials: 'RK',
        bgColor: '#071a47',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Eric M.',
        role: 'Développeur Mobile',
        initials: 'EM',
        bgColor: '#0a2463',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Chantal B.',
        role: 'Analyste Cybersécurité',
        initials: 'CB',
        bgColor: '#071a47',
        linkedin: 'https://www.linkedin.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Isaac L.',
        role: 'Data Analyst',
        initials: 'IL',
        bgColor: '#0a2463',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/',
        portfolio: 'https://example.com/'
    },
    {
        name: 'Nadia S.',
        role: 'Community Manager',
        initials: 'NS',
        bgColor: '#ffd700',
        linkedin: 'https://www.linkedin.com/',
        x: 'https://x.com/',
        portfolio: 'https://example.com/'
    }
];

// Contenu spécifique pour chaque type de page
const pageContent = {
    home: `
            <!-- Hero Section -->
            <section class="flex flex-col items-center bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-24" data-animate>
                <div class="flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
                    <div class="flex flex-1 flex-col gap-8">
                        <div class="flex flex-col gap-4 text-left">
                            <div class="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                <span class="h-2 w-2 rounded-full bg-accent-yellow"></span>
                                Leader en innovation RDC
                            </div>
                            <h1 class="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-dark dark:text-white sm:text-5xl lg:text-6xl">
                                Transformez vos idées en <span class="text-primary">réalité numérique</span>
                            </h1>
                            <p class="text-lg font-normal leading-relaxed text-text-grey dark:text-gray-400 sm:text-xl max-w-2xl">
                                Melon-Soft est votre partenaire stratégique pour des solutions logicielles, web et mobiles
                                sur mesure, adaptées aux défis uniques de la République Démocratique du Congo.
                            </p>
                        </div>
                        <div class="flex flex-wrap gap-4">
                            <button class="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
                                Commencer un projet
                            </button>
                            <button class="flex h-12 cursor-pointer items-center justify-center rounded-lg border border-[#e5e7eb] bg-white px-6 text-base font-bold text-text-dark transition-all hover:bg-[#f9fafb] hover:border-primary/50 dark:border-[#2a303c] dark:bg-[#1a2230] dark:text-white dark:hover:bg-[#252b3b]">
                                Voir nos réalisations
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-1 justify-center lg:justify-end">
                        <div class="relative w-full max-w-[600px] overflow-hidden rounded-2xl shadow-2xl shadow-primary/20 aspect-[4/3] bg-cover bg-center"
                            data-alt="Team of developers collaborating on code in a modern office"
                            style='background-image: url("assets/images/graphique.jpg");'>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div class="w-full pb-8">
                    <div class="layout-container flex flex-col items-center justify-center px-4 lg:px-40 pt-8 pb-8">
                        <div class="text-center">
                            <h2 class="text-3xl font-black leading-tight text-text-dark dark:text-white sm:text-4xl mb-4">
                                Nos Services
                            </h2>
                            <p class="text-base font-normal leading-relaxed text-text-grey dark:text-gray-400 max-w-2xl mx-auto">
                                Solutions numériques complètes pour propulser votre entreprise en RDC. Du développement sur mesure à la cybersécurité, nous transformons vos idées en réalité digitale.
                            </p>
                            <div class="flex gap-4 pt-4 flex-wrap justify-center">
                                <button onclick="window.location.href='developpement_informatique.html'" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors border-2 border-transparent">
                                    <span class="truncate">Explorer nos solutions</span>
                                </button>
                                <button onclick="window.location.href='nous_contacter.html'" class="flex h-12 cursor-pointer items-center justify-center rounded-lg border border-[#e5e7eb] bg-white px-6 text-base font-bold text-text-dark transition-all hover:bg-[#f9fafb] hover:border-primary/50 dark:border-[#2a303c] dark:bg-[#1a2230] dark:text-white dark:hover:bg-[#252b3b]">
                                    Contactez-nous
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full border-b border-[#dbdfe6] sticky top-0 z-10 backdrop-blur-md">
                    <div class="layout-container flex justify-center px-4 lg:px-40">
                        <div class="flex w-full max-w-[960px] overflow-x-auto gap-8 no-scrollbar">
                            <a class="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4 min-w-fit" href="#dev">
                                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Développement</p>
                            </a>
                            <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#616f89] hover:text-[#111318] pb-[13px] pt-4 min-w-fit transition-colors" href="#infra">
                                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Services Techniques</p>
                            </a>
                            <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#616f89] hover:text-[#111318] pb-[13px] pt-4 min-w-fit transition-colors" href="#security">
                                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Sécurité</p>
                            </a>
                            <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#616f89] hover:text-[#111318] pb-[13px] pt-4 min-w-fit transition-colors" href="#design">
                                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Communication</p>
                            </a>
                            <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#616f89] hover:text-[#111318] pb-[13px] pt-4 min-w-fit transition-colors" href="#education">
                                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Formation</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="layout-container flex grow flex-col">
                    <div class="flex flex-1 justify-center py-5 px-4 lg:px-40">
                        <div class="layout-content-container flex flex-col max-w-[960px] flex-1 gap-12">
                            <section class="flex flex-col gap-8 py-8 @container scroll-mt-24" id="dev">
                                <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                    <div class="flex flex-col gap-3 max-w-[600px]">
                                        <h2 class="text-[#111318] text-3xl font-black leading-tight tracking-[-0.015em]">
                                            Développement Informatique
                                        </h2>
                                        <p class="text-[#616f89] text-base font-normal leading-normal">
                                            Des solutions logicielles sur mesure pour moderniser vos opérations et atteindre vos objectifs commerciaux.
                                        </p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">code</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Développement Web</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Conception de sites vitrines, portails d'entreprise et plateformes e-commerce performantes avec les dernières technologies (React, Vue, Laravel).
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="developpement_informatique.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">developer_mode</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Applications Mobiles</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Création d'applications natives iOS et Android ou cross-platform pour engager vos utilisateurs où qu'ils soient.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="developpement_informatique.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">desktop_windows</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Logiciels de Bureau</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Développement de logiciels de gestion personnalisés (ERP, CRM) optimisés pour Windows, macOS et Linux.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="developpement_informatique.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="flex flex-col gap-8 py-8 @container scroll-mt-24" id="infra">
                                <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                    <div class="flex flex-col gap-3 max-w-[600px]">
                                        <h2 class="text-[#111318] text-3xl font-black leading-tight tracking-[-0.015em]">
                                            Services Techniques
                                        </h2>
                                        <p class="text-[#616f89] text-base font-normal leading-normal">
                                            Une infrastructure solide pour soutenir la croissance continue de votre activité.
                                        </p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                    <div class="group flex flex-row gap-6 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-14 min-w-[3.5rem] rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined text-3xl">dns</span>
                                        </div>
                                        <div class="flex flex-col gap-3">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Hébergement Web &amp; Domaine</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed">
                                                Solutions d'hébergement sécurisées, haute disponibilité et gestion complète de vos noms de domaine (.cd, .com).
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-1 flex items-center gap-1 hover:gap-2 transition-all" href="services_techniques.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-row gap-6 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-14 min-w-[3.5rem] rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined text-3xl">construction</span>
                                        </div>
                                        <div class="flex flex-col gap-3">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Maintenance Informatique</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed">
                                                Contrats de maintenance préventive et curative pour votre parc informatique, assistance technique et mises à jour.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-1 flex items-center gap-1 hover:gap-2 transition-all" href="services_techniques.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="flex flex-col gap-8 py-8 @container scroll-mt-24" id="security">
                                <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                    <div class="flex flex-col gap-3 max-w-[600px]">
                                        <h2 class="text-[#111318] text-3xl font-black leading-tight tracking-[-0.015em]">
                                            Solutions Globales de Sécurité
                                        </h2>
                                        <p class="text-[#616f89] text-base font-normal leading-normal">
                                            Protégez vos actifs numériques et vos locaux contre toutes les menaces modernes.
                                        </p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">security</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Cybersécurité</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Audits de vulnérabilité, tests d'intrusion et mise en place de pare-feu avancés pour sécuriser vos données sensibles.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="solutions_de_securite.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">videocam</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Vidéosurveillance IP</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Installation de caméras connectées et systèmes de monitoring à distance pour la sécurité physique de vos locaux.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="solutions_de_securite.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">badge</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Contrôle d'accès</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Systèmes biométriques et cartes d'accès pour gérer les entrées et sorties de votre personnel en toute sécurité.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="solutions_de_securite.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="flex flex-col gap-8 py-8 @container scroll-mt-24" id="design">
                                <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                    <div class="flex flex-col gap-3 max-w-[600px]">
                                        <h2 class="text-[#111318] text-3xl font-black leading-tight tracking-[-0.015em]">
                                            Communication Numérique
                                        </h2>
                                        <p class="text-[#616f89] text-base font-normal leading-normal">
                                            Stratégies créatives pour amplifier votre visibilité et engager votre audience.
                                        </p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">brush</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Infographie &amp; Design</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Conception de logos, identités visuelles complètes, flyers et supports marketing impactants.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="communication_numerique.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">campaign</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Marketing Digital</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Community management, campagnes publicitaires ciblées (Ads) et gestion de votre e-réputation.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="communication_numerique.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div class="size-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined">movie</span>
                                        </div>
                                        <div class="flex flex-col gap-3 flex-1">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Production Audiovisuelle</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed line-clamp-3">
                                                Réalisation de spots publicitaires, vidéos institutionnelles et couverture d'événements professionnels.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:gap-2 transition-all" href="communication_numerique.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="flex flex-col gap-8 py-8 @container scroll-mt-24" id="education">
                                <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                    <div class="flex flex-col gap-3 max-w-[600px]">
                                        <h2 class="text-[#111318] text-3xl font-black leading-tight tracking-[-0.015em]">
                                            Formation Professionnelle
                                        </h2>
                                        <p class="text-[#616f89] text-base font-normal leading-normal">
                                            Investissez dans le capital humain avec nos programmes de formation certifiants.
                                        </p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="group flex flex-row gap-6 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 items-start">
                                        <div class="size-14 min-w-[3.5rem] rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined text-3xl">school</span>
                                        </div>
                                        <div class="flex flex-col gap-3">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Formations Techniques</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed">
                                                Modules intensifs en développement web, administration système, cybersécurité et bureautique avancée.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-1 flex items-center gap-1 hover:gap-2 transition-all" href="formation_professionnelle.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="group flex flex-row gap-6 rounded-xl border border-[#dbdfe6] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 items-start">
                                        <div class="size-14 min-w-[3.5rem] rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <span class="material-symbols-outlined text-3xl">lightbulb</span>
                                        </div>
                                        <div class="flex flex-col gap-3">
                                            <h3 class="text-[#111318] text-lg font-bold leading-tight">Coaching Numérique</h3>
                                            <p class="text-[#616f89] text-sm leading-relaxed">
                                                Accompagnement personnalisé pour la transition digitale des entreprises et coaching de dirigeants.
                                            </p>
                                            <a class="text-primary text-sm font-bold mt-1 flex items-center gap-1 hover:gap-2 transition-all" href="formation_professionnelle.html">
                                                En savoir plus <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex flex-col justify-center bg-white px-4 py-20 dark:bg-background-dark lg:px-20" id="portfolio">
                <div class="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
                    <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                        <div class="flex flex-col gap-4 max-w-2xl">
                            <div class="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                <span class="h-2 w-2 rounded-full bg-primary"></span>
                                Portfolio
                            </div>
                            <h2 class="text-3xl font-black leading-tight text-text-dark dark:text-white sm:text-4xl">
                                Nos Projets Récents
                            </h2>
                            <p class="text-base font-normal leading-relaxed text-text-grey dark:text-gray-400">
                                Une sélection de nos collaborations technologiques les plus impactantes en RDC.
                            </p>
                        </div>
                        <a class="group flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80" href="#">
                            Voir tous les projets
                            <span class="material-symbols-outlined transition-transform group-hover:translate-x-1 text-lg">arrow_forward</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div class="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white transition-all hover:shadow-xl hover:shadow-primary/5 dark:border-[#2a303c] dark:bg-[#1a2230]">
                            <div class="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-[#131924]">
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:scale-105 transition-transform duration-500"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="material-symbols-outlined text-6xl text-primary/30">payments</span>
                                </div>
                                <div class="absolute top-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-text-dark backdrop-blur-sm dark:bg-black/60 dark:text-white">
                                    Fintech
                                </div>
                            </div>
                            <div class="flex flex-1 flex-col justify-between p-6">
                                <div class="flex flex-col gap-3">
                                    <h3 class="text-xl font-bold text-text-dark dark:text-white group-hover:text-primary transition-colors">
                                        KongoPay Mobile
                                    </h3>
                                    <p class="text-sm leading-relaxed text-text-grey dark:text-gray-400">
                                        Une solution de paiement mobile sécurisée permettant les transactions sans contact et le transfert d'argent à travers la RDC.
                                    </p>
                                </div>
                                <a class="mt-6 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm font-medium text-primary hover:text-primary/80 dark:border-gray-800" href="#">
                                    <span>Voir l'étude de cas</span>
                                    <span class="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            </div>
                        </div>
                        <div class="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white transition-all hover:shadow-xl hover:shadow-primary/5 dark:border-[#2a303c] dark:bg-[#1a2230]">
                            <div class="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-[#131924]">
                                <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 group-hover:scale-105 transition-transform duration-500"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="material-symbols-outlined text-6xl text-accent-yellow/40">agriculture</span>
                                </div>
                                <div class="absolute top-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-text-dark backdrop-blur-sm dark:bg-black/60 dark:text-white">
                                    AgriTech
                                </div>
                            </div>
                            <div class="flex flex-1 flex-col justify-between p-6">
                                <div class="flex flex-col gap-3">
                                    <h3 class="text-xl font-bold text-text-dark dark:text-white group-hover:text-primary transition-colors">
                                        Agri-Connect RDC
                                    </h3>
                                    <p class="text-sm leading-relaxed text-text-grey dark:text-gray-400">
                                        Plateforme web connectant les agriculteurs locaux aux distributeurs urbains avec suivi logistique en temps réel.
                                    </p>
                                </div>
                                <a class="mt-6 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm font-medium text-primary hover:text-primary/80 dark:border-gray-800" href="#">
                                    <span>Voir l'étude de cas</span>
                                    <span class="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            </div>
                        </div>
                        <div class="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white transition-all hover:shadow-xl hover:shadow-primary/5 dark:border-[#2a303c] dark:bg-[#1a2230]">
                            <div class="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-[#131924]">
                                <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-900/20 group-hover:scale-105 transition-transform duration-500"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="material-symbols-outlined text-6xl text-primary/30">apartment</span>
                                </div>
                                <div class="absolute top-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-text-dark backdrop-blur-sm dark:bg-black/60 dark:text-white">
                                    Corporate
                                </div>
                            </div>
                            <div class="flex flex-1 flex-col justify-between p-6">
                                <div class="flex flex-col gap-3">
                                    <h3 class="text-xl font-bold text-text-dark dark:text-white group-hover:text-primary transition-colors">
                                        Mines Gombe ERP
                                    </h3>
                                    <p class="text-sm leading-relaxed text-text-grey dark:text-gray-400">
                                        Système de gestion intégré pour une entreprise minière majeure, optimisant les RH, la paie et la conformité légale.
                                    </p>
                                </div>
                                <a class="mt-6 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm font-medium text-primary hover:text-primary/80 dark:border-gray-800" href="#">
                                    <span>Voir l'étude de cas</span>
                                    <span class="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex flex-col items-center justify-center bg-background-light px-4 py-20 dark:bg-[#0d121c] lg:px-20">
                <div class="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
                    <div class="text-center">
                        <h2 class="text-3xl font-black leading-tight text-text-dark dark:text-white sm:text-4xl">Nos Valeurs Fondamentales</h2>
                        <p class="mt-4 text-text-grey dark:text-gray-400">Ce qui nous distingue sur le marché numérique.</p>
                    </div>
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div class="flex flex-col items-center text-center gap-4 p-4">
                            <div class="flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#1a2230] text-primary mb-2 shadow-sm">
                                <span class="material-symbols-outlined text-4xl">map</span>
                            </div>
                            <h3 class="text-xl font-bold text-text-dark dark:text-white">Expertise Locale</h3>
                            <p class="text-sm text-text-grey dark:text-gray-400 leading-relaxed">
                                Une compréhension profonde des défis techniques et infrastructurels spécifiques à la RDC, garantissant des solutions adaptées.
                            </p>
                        </div>
                        <div class="flex flex-col items-center text-center gap-4 p-4">
                            <div class="flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#1a2230] text-primary mb-2 shadow-sm">
                                <span class="material-symbols-outlined text-4xl">verified_user</span>
                            </div>
                            <h3 class="text-xl font-bold text-text-dark dark:text-white">Fiabilité Absolue</h3>
                            <p class="text-sm text-text-grey dark:text-gray-400 leading-relaxed">
                                Nous respectons scrupuleusement les délais et livrons des logiciels robustes, sécurisés et testés rigoureusement.
                            </p>
                        </div>
                        <div class="flex flex-col items-center text-center gap-4 p-4">
                            <div class="flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#1a2230] text-primary mb-2 shadow-sm">
                                <span class="material-symbols-outlined text-4xl">lightbulb</span>
                            </div>
                            <h3 class="text-xl font-bold text-text-dark dark:text-white">Innovation Continue</h3>
                            <p class="text-sm text-text-grey dark:text-gray-400 leading-relaxed">
                                L'utilisation des dernières technologies (Cloud, IA, Mobile) pour donner un avantage concurrentiel décisif à votre business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-primary px-4 py-20 lg:px-20 text-white relative overflow-hidden">
                <div class="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 text-center relative z-10">
                    <h2 class="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                        Prêt à digitaliser votre entreprise ?
                    </h2>
                    <p class="max-w-2xl text-lg font-medium text-blue-100 sm:text-xl">
                        Discutons de votre projet. Nos experts sont prêts à concevoir la solution parfaite pour vos besoins.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4 pt-4">
                        <button class="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-white px-6 text-base font-bold text-primary transition-all hover:bg-gray-100 hover:shadow-lg">
                            Nous contacter
                        </button>
                    </div>
                </div>
            </section>

            <section class="flex flex-col justify-center bg-white px-4 py-20 dark:bg-background-dark lg:px-20" id="faq">
                <div class="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
                    <div class="text-center">
                        <div class="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                            <span class="h-2 w-2 rounded-full bg-primary"></span>
                            Questions Fréquemment Posées
                        </div>
                        <h2 class="text-3xl font-black leading-tight text-text-dark dark:text-white sm:text-4xl mb-4">
                            Tout ce que vous devez savoir sur Melon-Soft
                        </h2>
                        <p class="text-base font-normal leading-relaxed text-text-grey dark:text-gray-400 max-w-2xl mx-auto">
                            Trouvez des réponses claires à vos questions sur nos services, nos processus et notre expertise en RDC.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                    <span class="material-symbols-outlined">code</span>
                                </div>
                                <h3 class="text-xl font-bold text-text-dark dark:text-white">Services & Développement</h3>
                            </div>
                            <div class="flex flex-col gap-3">
                                <details class="flex flex-col rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2230] px-[20px] py-[10px] group transition-all duration-300 open:shadow-sm" open="">
                                    <summary class="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p class="text-[#111318] dark:text-white text-base font-semibold leading-normal">
                                            Quels types de logiciels développez-vous ?
                                        </p>
                                        <div class="text-[#111318] dark:text-white group-open:rotate-180 transition-transform duration-300">
                                            <span class="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </summary>
                                    <div class="text-[#616f89] dark:text-gray-300 text-sm font-normal leading-relaxed pb-4 pt-1 border-t border-transparent group-open:border-[#f0f2f4] dark:group-open:border-gray-700 transition-colors">
                                        Chez Melon-Soft, nous concevons des solutions numériques complètes : applications mobiles natives (iOS et Android), sites web vitrines et e-commerce, plateformes SaaS, et logiciels d'entreprise sur mesure (ERP, CRM) adaptés au marché congolais.
                                    </div>
                                </details>
                                <details class="flex flex-col rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2230] px-[20px] py-[10px] group transition-all duration-300">
                                    <summary class="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p class="text-[#111318] dark:text-white text-base font-semibold leading-normal">
                                            Combien coûte la création d'un site web ?
                                        </p>
                                        <div class="text-[#111318] dark:text-white group-open:rotate-180 transition-transform duration-300">
                                            <span class="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </summary>
                                    <div class="text-[#616f89] dark:text-gray-300 text-sm font-normal leading-relaxed pb-4 pt-1 border-t border-transparent group-open:border-[#f0f2f4] dark:group-open:border-gray-700 transition-colors">
                                        Le coût varie en fonction de la complexité du projet. Un site vitrine simple commence à partir de 500$, tandis que des applications web complexes nécessitent un devis personnalisé. Contactez-nous pour une estimation gratuite.
                                    </div>
                                </details>
                                <details class="flex flex-col rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2230] px-[20px] py-[10px] group transition-all duration-300">
                                    <summary class="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p class="text-[#111318] dark:text-white text-base font-semibold leading-normal">
                                            Quelles technologies utilisez-vous ?
                                        </p>
                                        <div class="text-[#111318] dark:text-white group-open:rotate-180 transition-transform duration-300">
                                            <span class="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </summary>
                                    <div class="text-[#616f89] dark:text-gray-300 text-sm font-normal leading-relaxed pb-4 pt-1 border-t border-transparent group-open:border-[#f0f2f4] dark:group-open:border-gray-700 transition-colors">
                                        Nous maîtrisons un large éventail de technologies modernes : React, Vue.js et Angular pour le front-end ; Node.js, Python (Django/Flask) et PHP (Laravel) pour le back-end. Pour le mobile, nous utilisons Flutter et React Native.
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="size-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                                    <span class="material-symbols-outlined">support_agent</span>
                                </div>
                                <h3 class="text-xl font-bold text-text-dark dark:text-white">Support & Maintenance</h3>
                            </div>
                            <div class="flex flex-col gap-3">
                                <details class="flex flex-col rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2230] px-[20px] py-[10px] group transition-all duration-300">
                                    <summary class="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p class="text-[#111318] dark:text-white text-base font-semibold leading-normal">
                                            Proposez-vous des services de maintenance ?
                                        </p>
                                        <div class="text-[#111318] dark:text-white group-open:rotate-180 transition-transform duration-300">
                                            <span class="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </summary>
                                    <div class="text-[#616f89] dark:text-gray-300 text-sm font-normal leading-relaxed pb-4 pt-1 border-t border-transparent group-open:border-[#f0f2f4] dark:group-open:border-gray-700 transition-colors">
                                        Oui, nous proposons des forfaits de maintenance mensuels ou annuels pour garantir la sécurité, la rapidité et la mise à jour de vos logiciels. Cela inclut les correctifs de sécurité et les petites évolutions.
                                    </div>
                                </details>
                                <details class="flex flex-col rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2230] px-[20px] py-[10px] group transition-all duration-300">
                                    <summary class="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p class="text-[#111318] dark:text-white text-base font-semibold leading-normal">
                                            Comment signaler un bug ou un problème technique ?
                                        </p>
                                        <div class="text-[#111318] dark:text-white group-open:rotate-180 transition-transform duration-300">
                                            <span class="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </summary>
                                    <div class="text-[#616f89] dark:text-gray-300 text-sm font-normal leading-relaxed pb-4 pt-1 border-t border-transparent group-open:border-[#f0f2f4] dark:group-open:border-gray-700 transition-colors">
                                        Nos clients sous contrat ont accès à un portail de ticketing dédié. Sinon, vous pouvez envoyer un email direct à support@melon-soft.cd avec une description détaillée du problème.
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                                    <span class="material-symbols-outlined">groups</span>
                                </div>
                                <h3 class="text-xl font-bold text-text-dark dark:text-white">Carrières & Équipe</h3>
                            </div>
                            <div class="flex flex-col gap-3">
                                <details class="flex flex-col rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2230] px-[20px] py-[10px] group transition-all duration-300">
                                    <summary class="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p class="text-[#111318] dark:text-white text-base font-semibold leading-normal">
                                            Acceptez-vous les stagiaires ?
                                        </p>
                                        <div class="text-[#111318] dark:text-white group-open:rotate-180 transition-transform duration-300">
                                            <span class="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </summary>
                                    <div class="text-[#616f89] dark:text-gray-300 text-sm font-normal leading-relaxed pb-4 pt-1 border-t border-transparent group-open:border-[#f0f2f4] dark:group-open:border-gray-700 transition-colors">
                                        Absolument. Melon-Soft s'engage à former la prochaine génération de développeurs en RDC. Nous offrons des stages académiques et professionnels tout au long de l'année.
                                    </div>
                                </details>
                                <details class="flex flex-col rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2230] px-[20px] py-[10px] group transition-all duration-300">
                                    <summary class="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p class="text-[#111318] dark:text-white text-base font-semibold leading-normal">
                                            Travaillez-vous en présentiel ou en télétravail ?
                                        </p>
                                        <div class="text-[#111318] dark:text-white group-open:rotate-180 transition-transform duration-300">
                                            <span class="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </summary>
                                    <div class="text-[#616f89] dark:text-gray-300 text-sm font-normal leading-relaxed pb-4 pt-1 border-t border-transparent group-open:border-[#f0f2f4] dark:group-open:border-gray-700 transition-colors">
                                        Nous adoptons un modèle hybride. Notre équipe principale est basée à Kinshasa, mais nous collaborons avec des talents partout dans le monde et offrons une grande flexibilité.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="px-4 md:px-40 py-10 bg-white dark:bg-[#101622] border-t border-[#f0f2f4] dark:border-gray-800">
                <div class="flex flex-col items-center justify-center gap-6 text-center max-w-[800px] mx-auto">
                    <div class="rounded-full bg-blue-50 dark:bg-blue-900/20 p-4">
                        <span class="material-symbols-outlined text-primary text-4xl">support_agent</span>
                    </div>
                    <h2 class="text-[#111318] dark:text-white text-3xl font-bold leading-tight">
                        Vous ne trouvez pas votre réponse ?
                    </h2>
                    <p class="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed max-w-[600px]">
                        Notre équipe est là pour vous aider. Que vous ayez une question technique complexe ou besoin d'un devis personnalisé, contactez-nous directement.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                        <button class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                            Contacter le support
                        </button>
                        <button class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-transparent border border-[#dbdfe6] dark:border-gray-600 text-[#111318] dark:text-white text-base font-bold leading-normal hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Appeler +243 99 710 20 12
                        </button>
                    </div>
                </div>
            </div>
    `,
    
    about: `
            <section class="flex flex-col items-center bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-24" data-animate>
                <div class="flex w-full max-w-[1280px] flex-col gap-10 text-center">
                    <div class="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary">
                        <span class="h-2 w-2 rounded-full bg-accent-yellow"></span>
                        À propos
                    </div>
                    <div class="flex flex-col gap-4">
                        <h1 class="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-dark dark:text-white sm:text-5xl lg:text-6xl">
                            Nous construisons des produits <span class="text-primary">utiles</span> et <span class="text-primary">fiables</span>
                        </h1>
                        <p class="mx-auto max-w-3xl text-lg font-normal leading-relaxed text-text-grey dark:text-gray-400 sm:text-xl">
                            Basée à Kinshasa, Melon-Soft conçoit des solutions web, mobiles et logicielles adaptées aux réalités locales,
                            avec un niveau d’exigence international.
                        </p>
                    </div>
                    <div class="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 rounded-3xl bg-background-light p-6 text-left shadow-sm dark:bg-surface-dark sm:p-10 lg:grid-cols-2">
                        <div class="flex flex-col gap-6">
                            <div class="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary">
                                <span class="h-2 w-2 rounded-full bg-accent-yellow"></span>
                                Depuis 2017
                            </div>
                            <h2 class="text-3xl font-black leading-tight tracking-tight text-text-dark dark:text-white sm:text-4xl">
                                Notre histoire, votre futur numérique
                            </h2>
                            <p class="text-base font-normal leading-relaxed text-text-grey dark:text-gray-400">
                                Melon-Soft est né d'une ambition simple : propulser la RDC dans l'ère du digital. De nos premiers projets à Kinshasa
                                jusqu’à l’expansion, nous construisons des solutions fiables, pensées pour l’impact.
                            </p>
                            <div class="flex flex-wrap gap-3 pt-2">
                                <a href="carrieres.html" class="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white hover:bg-primary-dark transition-colors">
                                    Rejoindre l'équipe
                                </a>
                                <a href="portfolio.html" class="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-text-dark hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-gray-800">
                                    Voir nos projets
                                </a>
                            </div>
                        </div>
                        <div class="group relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-primary/10 aspect-[4/3] dark:border-gray-800 dark:bg-surface-dark">
                            <img src="assets/images/unnamed.png" alt="Notre histoire chez Melon-Soft" class="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
                        </div>
                    </div>
                    <div class="mx-auto grid w-full max-w-[980px] grid-cols-2 gap-4 sm:grid-cols-4">
                        <div class="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                            <div class="text-2xl font-black text-text-dark dark:text-white">+50</div>
                            <div class="mt-1 text-xs font-bold uppercase tracking-wider text-text-grey dark:text-gray-400">Projets</div>
                        </div>
                        <div class="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                            <div class="text-2xl font-black text-text-dark dark:text-white">+30</div>
                            <div class="mt-1 text-xs font-bold uppercase tracking-wider text-text-grey dark:text-gray-400">Clients</div>
                        </div>
                        <div class="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                            <div class="text-2xl font-black text-text-dark dark:text-white">RDC</div>
                            <div class="mt-1 text-xs font-bold uppercase tracking-wider text-text-grey dark:text-gray-400">Ancrage local</div>
                        </div>
                        <div class="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                            <div class="text-2xl font-black text-text-dark dark:text-white">24/7</div>
                            <div class="mt-1 text-xs font-bold uppercase tracking-wider text-text-grey dark:text-gray-400">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-background-light dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-20">
                <div class="mx-auto w-full max-w-[1280px]">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3" data-animate>
                        <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary">target</span>
                                <h2 class="text-xl font-black text-text-dark dark:text-white">Notre mission</h2>
                            </div>
                            <p class="mt-4 text-base leading-relaxed text-text-grey dark:text-gray-400">
                                Accélérer la transformation numérique des organisations en livrant des produits robustes, simples à utiliser
                                et pensés pour la croissance.
                            </p>
                        </div>

                        <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary">visibility</span>
                                <h2 class="text-xl font-black text-text-dark dark:text-white">Notre vision</h2>
                            </div>
                            <p class="mt-4 text-base leading-relaxed text-text-grey dark:text-gray-400">
                                Devenir une référence tech en RDC et en Afrique centrale, reconnue pour la qualité, la sécurité et
                                la valeur business.
                            </p>
                        </div>

                        <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary">verified</span>
                                <h2 class="text-xl font-black text-text-dark dark:text-white">Nos valeurs</h2>
                            </div>
                            <div class="mt-4 flex flex-col gap-3 text-sm text-text-grey dark:text-gray-400">
                                <div class="flex items-start gap-2">
                                    <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Exigence sur la qualité et les détails</span>
                                </div>
                                <div class="flex items-start gap-2">
                                    <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Transparence et communication claire</span>
                                </div>
                                <div class="flex items-start gap-2">
                                    <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Sécurité et fiabilité dès le départ</span>
                                </div>
                                <div class="flex items-start gap-2">
                                    <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Impact local, standards internationaux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-24" data-animate>
                <div class="mx-auto w-full max-w-[1280px]">
                    <div class="mx-auto flex max-w-3xl flex-col gap-4 text-center">
                        <h2 class="text-3xl font-black tracking-tight text-text-dark dark:text-white sm:text-4xl">
                            Notre équipe
                        </h2>
                        <p class="text-base leading-relaxed text-text-grey dark:text-gray-400">
                            Une équipe pluridisciplinaire, centrée sur l’exécution, la qualité et l’expérience utilisateur.
                        </p>
                    </div>

                    <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        ${teamMembers.map((m) => {
                            const avatar = 'assets/images/profil/elvis.jpg';
                            const linkedin = m.linkedin ? `<a href="${m.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-text-grey hover:text-primary hover:border-primary/30 transition-colors dark:border-gray-700 dark:text-gray-300"><span class="material-symbols-outlined text-[18px]">work</span></a>` : '';
                            const github = m.github ? `<a href="${m.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-text-grey hover:text-primary hover:border-primary/30 transition-colors dark:border-gray-700 dark:text-gray-300"><span class="material-symbols-outlined text-[18px]">code</span></a>` : '';
                            const x = m.x ? `<a href="${m.x}" target="_blank" rel="noopener noreferrer" aria-label="X" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-text-grey hover:text-primary hover:border-primary/30 transition-colors dark:border-gray-700 dark:text-gray-300"><span class="material-symbols-outlined text-[18px]">chat</span></a>` : '';
                            const portfolio = m.portfolio ? `<a href="${m.portfolio}" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-xs font-black text-white hover:bg-primary-dark transition-colors"><span class="material-symbols-outlined text-[18px]">arrow_outward</span>Portfolio</a>` : '';

                            return `
                                <div class="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-surface-dark" data-animate>
                                    <img src="${avatar}" alt="${m.name}" class="w-full max-w-[280px] aspect-[4/5] rounded-xl object-cover shadow-sm" loading="lazy">
                                    <div class="mt-3 text-lg font-black text-text-dark dark:text-white">${m.name}</div>
                                    <div class="mt-1 text-sm font-bold text-text-grey dark:text-gray-400">${m.role}</div>
                                    <div class="mt-3 flex flex-wrap items-center justify-center gap-2">
                                        ${linkedin}
                                        ${github}
                                        ${x}
                                    </div>
                                    ${portfolio}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </section>
    `,
    
    blog: `
            <section class="flex flex-col items-center bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-20">
                <div class="flex w-full max-w-[1280px] flex-col gap-4 text-center">
                    <h1 class="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-dark dark:text-white sm:text-5xl">
                        Actualités & Blog
                    </h1>
                    <p class="text-lg font-normal leading-relaxed text-text-grey dark:text-gray-400 max-w-3xl mx-auto">
                        Articles, retours d’expérience, et conseils pour réussir vos projets numériques.
                    </p>
                </div>
            </section>
            <section class="bg-background-light dark:bg-background-dark">
                <div data-blog-container></div>
            </section>
    `,

    faq: `
            <section class="flex flex-col items-center bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-20">
                <div class="flex w-full max-w-[1280px] flex-col gap-4 text-center">
                    <h1 class="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-dark dark:text-white sm:text-5xl">
                        FAQ
                    </h1>
                    <p class="text-lg font-normal leading-relaxed text-text-grey dark:text-gray-400 max-w-3xl mx-auto">
                        Les réponses aux questions les plus fréquentes.
                    </p>
                </div>
            </section>
            <section class="bg-background-light dark:bg-background-dark">
                <div data-faq-container></div>
            </section>
    `,

    careers: `
            <section class="flex flex-col items-center bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-20">
                <div class="flex w-full max-w-[1280px] flex-col gap-4 text-center">
                    <h1 class="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-dark dark:text-white sm:text-5xl">
                        Carrières
                    </h1>
                    <p class="text-lg font-normal leading-relaxed text-text-grey dark:text-gray-400 max-w-3xl mx-auto">
                        Rejoignez une équipe passionnée par l’impact et la qualité logicielle.
                    </p>
                </div>
            </section>
            <section class="bg-background-light dark:bg-background-dark">
                <div data-jobs-container></div>
            </section>
    `,

    security: `
            <div class="flex flex-col">
                <div class="@container">
                    <div class="@[480px]:p-4 max-w-[1280px] mx-auto w-full">
                        <div class="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-center px-4 pb-10 pt-20 @[480px]:px-16"
                            data-alt="Modern security monitoring in a sleek office building with blue overlay"
                            style='background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(17, 82, 212, 0.4) 100%), url("assets/images/graphique.jpg");'
                            data-animate>
                            <div class="flex flex-col gap-2 text-left max-w-[720px]">
                                <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] drop-shadow-md">
                                    Solutions Globales de Sécurité
                                </h1>
                                <h2 class="text-gray-100 text-lg font-normal leading-relaxed @[480px]:text-xl @[480px]:font-normal @[480px]:leading-relaxed mt-2 drop-shadow-sm">
                                    Protégez votre entreprise avec nos systèmes de surveillance intelligente et de contrôle d'accès de nouvelle génération en RDC.
                                </h2>
                            </div>
                            <div class="flex gap-4 mt-4">
                                <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-700 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/30">
                                    <span class="truncate">Demander un Devis</span>
                                </button>
                                <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                                    <span class="truncate">Nos Services</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center py-5 px-4 md:px-10 lg:px-20 bg-white dark:bg-background-dark">
                <div class="flex flex-col max-w-[1280px] w-full mx-auto">
                    <div class="flex flex-col gap-10 px-4 py-10 @container">
                        <div class="flex flex-col gap-4 text-center items-center" data-animate>
                            <h2 class="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                Une protection sans compromis
                            </h2>
                            <p class="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal max-w-[720px]">
                                Melon-Soft combine matériel de pointe et logiciels intelligents pour une sécurité proactive 24/7.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                            <div class="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-md transition-shadow group" data-animate>
                                <div class="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-[32px]">videocam</span>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <h3 class="text-[#111318] dark:text-white text-xl font-bold leading-tight">Vidéosurveillance</h3>
                                    <p class="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed">
                                        Caméras IP/HD intelligentes avec reconnaissance faciale et vision nocturne. Consultez vos flux en direct depuis n'importe où.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-md transition-shadow group" data-animate>
                                <div class="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-[32px]">visibility</span>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <h3 class="text-[#111318] dark:text-white text-xl font-bold leading-tight">Télésurveillance</h3>
                                    <p class="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed">
                                        Supervision professionnelle à distance 24h/24 et 7j/7. Déclenchement instantané d'alertes intrusion et intervention rapide.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-md transition-shadow group" data-animate>
                                <div class="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-[32px]">lock_person</span>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <h3 class="text-[#111318] dark:text-white text-xl font-bold leading-tight">Contrôle d'Accès</h3>
                                    <p class="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed">
                                        Gestion stricte des entrées et sorties. Solutions biométriques, badges RFID cryptés et interphones connectés.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full bg-background-light dark:bg-[#151c2b] py-16 px-4 md:px-10 lg:px-20" data-animate>
                <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div class="flex-1 flex flex-col gap-6">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 w-fit">
                            <span class="material-symbols-outlined text-primary text-sm">smart_display</span>
                            <span class="text-primary text-sm font-bold uppercase tracking-wider">Vidéosurveillance Intelligente</span>
                        </div>
                        <h3 class="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
                            Ne manquez aucun détail avec nos solutions HD
                        </h3>
                        <p class="text-[#616f89] dark:text-gray-300 text-lg leading-relaxed">
                            Nos systèmes de caméras ne se contentent pas d'enregistrer. Ils analysent, détectent et vous informent en temps réel.
                        </p>
                        <ul class="flex flex-col gap-4 mt-2">
                            <li class="flex items-start gap-3">
                                <span class="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                <div>
                                    <h4 class="font-bold text-[#111318] dark:text-white">Détection de Mouvement IA</h4>
                                    <p class="text-sm text-[#616f89] dark:text-gray-400">Ignorez les fausses alertes (animaux, vent) et concentrez-vous sur les menaces réelles.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                <div>
                                    <h4 class="font-bold text-[#111318] dark:text-white">Enregistrement Cloud &amp; Local</h4>
                                    <p class="text-sm text-[#616f89] dark:text-gray-400">Stockage sécurisé et redondant pour garantir l'intégrité de vos preuves.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                <div>
                                    <h4 class="font-bold text-[#111318] dark:text-white">Vision Nocturne Avancée</h4>
                                    <p class="text-sm text-[#616f89] dark:text-gray-400">Technologie infrarouge et couleur en basse lumière pour une clarté 24h/24.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1 w-full h-full">
                        <div class="relative w-full aspect-video md:aspect-square max-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img alt="Security camera footage on multiple monitors in a dark control room"
                                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCkprZNa5wPSsNXsE7fE0j5yn1c-UXzHXTPeC5u5EJyfZhkM2K7fxF1_KfkDNiuYON4vJUCafb8ijqAjI5QbWivUJBHNTXbiX5kUR-Tdb1xzVXg20PgIPkKiNiQKNbJljO1g0PwDLAZWHfa708Drm9MAdIR15Hg3OWP4EuNmK3IOPcSgPP2gheazvzYq2bYd_A0VWMuSwNAIBx51u5wL4U1anla_Wt_4pSADYRDG5tjbwpSEJSwWveF-R3VJKBqC6ShmK2-lhWNY8" />
                            <div class="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-lg shadow-lg border-l-4 border-primary">
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">phone_iphone</span>
                                    <p class="text-sm font-semibold text-[#111318] dark:text-white">Application Mobile Incluse : Gardez un œil sur vos locaux depuis votre smartphone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white dark:bg-background-dark py-16 px-4 md:px-10 lg:px-20 border-t border-gray-100 dark:border-gray-800" data-animate>
                <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div class="flex-1 flex flex-col gap-6">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 w-fit">
                            <span class="material-symbols-outlined text-primary text-sm">badge</span>
                            <span class="text-primary text-sm font-bold uppercase tracking-wider">Contrôle d'Accès Sécurisé</span>
                        </div>
                        <h3 class="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
                            Gérez les flux de personnes avec précision
                        </h3>
                        <p class="text-[#616f89] dark:text-gray-300 text-lg leading-relaxed">
                            De la simple porte de bureau aux complexes industriels, définissez qui entre où et quand.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div class="p-4 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                <span class="material-symbols-outlined text-primary mb-2 text-3xl">fingerprint</span>
                                <h4 class="font-bold text-[#111318] dark:text-white mb-1">Biométrie</h4>
                                <p class="text-sm text-[#616f89] dark:text-gray-400">Empreintes digitales et reconnaissance faciale pour une sécurité infalsifiable.</p>
                            </div>
                            <div class="p-4 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                <span class="material-symbols-outlined text-primary mb-2 text-3xl">credit_card</span>
                                <h4 class="font-bold text-[#111318] dark:text-white mb-1">Badges RFID</h4>
                                <p class="text-sm text-[#616f89] dark:text-gray-400">Cartes cryptées faciles à gérer et à révoquer en cas de perte.</p>
                            </div>
                            <div class="p-4 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                <span class="material-symbols-outlined text-primary mb-2 text-3xl">dialpad</span>
                                <h4 class="font-bold text-[#111318] dark:text-white mb-1">Digicodes</h4>
                                <p class="text-sm text-[#616f89] dark:text-gray-400">Solutions robustes pour les zones à fort passage.</p>
                            </div>
                            <div class="p-4 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                <span class="material-symbols-outlined text-primary mb-2 text-3xl">nest_doorbell_visitor</span>
                                <h4 class="font-bold text-[#111318] dark:text-white mb-1">Interphones IP</h4>
                                <p class="text-sm text-[#616f89] dark:text-gray-400">Voir et parler aux visiteurs avant d'ouvrir, même à distance.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 w-full h-full">
                        <div class="relative w-full aspect-video md:aspect-square max-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img alt="Close up of a modern biometric fingerprint scanner on a glass door"
                                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTWtQCRxTALQtBUikyFgXKfHqnizVV-0uI2bYsTXf-K9WausQ12dx7DfKNHXGgFJMxPxfAVrpCp06KYLeW8hqGBcAGDTMUdNlLemj3Yttyk6ExwUGcJUgbfLT_1VuOtYJBauPkXn5k0uz4ombjSRK-rHFZsX8CIbGlgchWVPizl-gQl5ua8fiDBqre5Q-piC01DqbZ8EDDPtwR32ufy9-m7j7GaHSvlDAB4FUzaniSD9GG1-4SpVeBiavgrx72fCCLtgJukzCyUZw" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-primary py-16 px-4 md:px-10 lg:px-20 text-white" data-animate>
                <div class="max-w-[1280px] mx-auto text-center mb-10">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Votre tranquillité d'esprit est notre priorité</h2>
                    <p class="text-blue-100 max-w-2xl mx-auto">Nous déployons des solutions éprouvées, adaptées aux défis spécifiques de sécurité en RDC, pour les entreprises comme pour les particuliers.</p>
                </div>
                <div class="max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="flex flex-col gap-2">
                        <span class="text-4xl md:text-5xl font-black">24/7</span>
                        <span class="text-sm md:text-base text-blue-100 font-medium">Surveillance active</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-4xl md:text-5xl font-black">99%</span>
                        <span class="text-sm md:text-base text-blue-100 font-medium">Temps de disponibilité</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-4xl md:text-5xl font-black">&lt;5min</span>
                        <span class="text-sm md:text-base text-blue-100 font-medium">Réactivité alertes</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-4xl md:text-5xl font-black">100+</span>
                        <span class="text-sm md:text-base text-blue-100 font-medium">Sites sécurisés</span>
                    </div>
                </div>
            </div>

            <div class="w-full bg-background-light dark:bg-[#151c2b] py-16 px-4 md:px-10 lg:px-20" data-animate>
                <div class="max-w-[960px] mx-auto">
                    <h2 class="text-[#111318] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
                        Questions fréquentes sur nos installations
                    </h2>
                    <div class="flex flex-col gap-4">
                        <details class="group bg-white dark:bg-gray-800 rounded-lg shadow-sm open:shadow-md transition-all duration-300">
                            <summary class="flex cursor-pointer items-center justify-between p-6 list-none text-[#111318] dark:text-white font-bold text-lg">
                                <span>L'installation nécessite-t-elle de gros travaux ?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div class="px-6 pb-6 text-[#616f89] dark:text-gray-400 leading-relaxed">
                                Non, la plupart de nos équipements utilisent des technologies sans fil ou le câblage réseau existant (PoE), minimisant ainsi les perturbations dans vos locaux.
                            </div>
                        </details>
                        <details class="group bg-white dark:bg-gray-800 rounded-lg shadow-sm open:shadow-md transition-all duration-300">
                            <summary class="flex cursor-pointer items-center justify-between p-6 list-none text-[#111318] dark:text-white font-bold text-lg">
                                <span>Que se passe-t-il en cas de coupure de courant ?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div class="px-6 pb-6 text-[#616f89] dark:text-gray-400 leading-relaxed">
                                Tous nos systèmes critiques sont équipés de batteries de secours (UPS) garantissant une autonomie continue. Pour les sites sensibles, nous proposons des solutions avec alimentation solaire ou générateurs dédiés.
                            </div>
                        </details>
                        <details class="group bg-white dark:bg-gray-800 rounded-lg shadow-sm open:shadow-md transition-all duration-300">
                            <summary class="flex cursor-pointer items-center justify-between p-6 list-none text-[#111318] dark:text-white font-bold text-lg">
                                <span>Les données sont-elles sécurisées ?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div class="px-6 pb-6 text-[#616f89] dark:text-gray-400 leading-relaxed">
                                Absolument. Melon-Soft applique des protocoles de cryptage de niveau bancaire pour le stockage et la transmission des données vidéo et des accès. Vous seul détenez les clés.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
    `,

    portfolio: `
            <section class="flex flex-col items-center justify-center bg-white dark:bg-background-dark px-4 py-20 lg:px-20" data-animate>
                <h1 class="text-3xl font-black text-text-dark dark:text-white">Nos Réalisations</h1>
                <div class="layout-container flex flex-col items-center w-full">
                    <div class="w-full max-w-[1280px] px-4 sm:px-10 lg:px-40 py-10">
                        <div class="flex flex-col gap-4 max-w-[960px]">
                            <p class="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-relaxed max-w-2xl">
                                Découvrez comment nous transformons les idées en solutions numériques innovantes pour la RDC et l'Afrique. De la conception à la réalisation, nous vous accompagnons.
                            </p>
                        </div>
                    </div>
                    <div class="w-full max-w-[1280px] px-4 sm:px-10 lg:px-40 pb-6">
                        <div class="flex gap-3 flex-wrap" id="project-filters" data-animate>
                            <button class="flex h-10 items-center justify-center gap-x-2 rounded-full bg-primary px-6 transition-colors shadow-sm ring-1 ring-primary" data-project-filter="Tout" type="button">
                                <p class="text-white text-sm font-medium leading-normal">Tout</p>
                            </button>
                            <button class="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 transition-colors" data-project-filter="Sites Web" type="button">
                                <p class="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">Sites Web</p>
                            </button>
                            <button class="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 transition-colors" data-project-filter="Applications Mobiles" type="button">
                                <p class="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">Applications Mobiles</p>
                            </button>
                            <button class="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 transition-colors" data-project-filter="Logiciels Sur-mesure" type="button">
                                <p class="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">Logiciels Sur-mesure</p>
                            </button>
                            <button class="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 transition-colors" data-project-filter="Design UI/UX" type="button">
                                <p class="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">Design UI/UX</p>
                            </button>
                        </div>
                    </div>
                    <div class="w-full max-w-[1280px] px-4 sm:px-10 lg:px-40 pb-12">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="project-grid" data-animate></div>
                    </div>
                </div>
            </section>
    `,

    contact: `
            <!-- Hero Section -->
            <section class="flex flex-col items-center bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-24">
                <div class="flex w-full max-w-[1280px] flex-col gap-8 text-center">
                    <h1 class="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-dark dark:text-white sm:text-5xl lg:text-6xl">
                        Contactez-<span class="text-primary">Nous</span>
                    </h1>
                    <p class="text-lg font-normal leading-relaxed text-text-grey dark:text-gray-400 sm:text-xl max-w-3xl">
                        Parlons de votre projet. Notre équipe est prête à transformer vos idées en réalité numérique.
                    </p>
                </div>
            </section>
            
            <!-- Contact Form Section -->
            <section class="flex flex-col justify-center bg-background-light px-4 py-20 dark:bg-[#0d121c] lg:px-20">
                <div class="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
                    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div class="flex flex-col gap-6">
                            <h2 class="text-3xl font-black leading-tight text-text-dark dark:text-white">
                                Envoyez-nous un message
                            </h2>
                            <form class="flex flex-col gap-4" data-contact-form>
                                <input type="text" placeholder="Votre nom" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-dark dark:text-white" data-contact-name>
                                <input type="tel" placeholder="Votre téléphone (optionnel)" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-dark dark:text-white" data-contact-phone>
                                <input type="email" placeholder="Votre email" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-dark dark:text-white" data-contact-email>
                                <select class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-dark dark:text-white" data-contact-subject>
                                    <option>Développement Web</option>
                                    <option>Application Mobile</option>
                                    <option>Logiciel Sur Mesure</option>
                                    <option>Autre demande</option>
                                </select>
                                <textarea placeholder="Votre message" rows="5" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-dark dark:text-white" data-contact-message></textarea>
                                <button type="button" class="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors" data-contact-submit>
                                    Envoyer le message
                                </button>
                                <div data-contact-status></div>
                            </form>
                        </div>
                        <div class="flex flex-col gap-6">
                            <h2 class="text-3xl font-black leading-tight text-text-dark dark:text-white">
                                Informations de contact
                            </h2>
                            <div class="flex flex-col gap-4">
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">location_on</span>
                                    <span class="text-text-grey dark:text-gray-400">Av. de la Paix, Gombe, Kinshasa, RDC</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">mail</span>
                                    <span class="text-text-grey dark:text-gray-400">info@melon-soft.cd</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">call</span>
                                    <span class="text-text-grey dark:text-gray-400">+243 81 000 0000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `,

    technical: `
            <section class="flex flex-col items-center bg-white dark:bg-background-dark px-4 py-16 lg:px-20 lg:py-24" data-animate>
                <div class="flex w-full max-w-[1280px] flex-col gap-6 text-center">
                    <h1 class="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-dark dark:text-white sm:text-5xl">
                        Services <span class="text-primary">Techniques</span>
                    </h1>
                    <p class="text-lg font-normal leading-relaxed text-text-grey dark:text-gray-400 max-w-3xl mx-auto">
                        Installation, maintenance et support pour vos infrastructures IT : réseau, postes, serveurs, sécurité et continuité d’activité.
                    </p>
                </div>
            </section>

            <section class="bg-background-light dark:bg-background-dark px-4 py-16 lg:px-20">
                <div class="mx-auto w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="flex flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm dark:border-[#2a303c] dark:bg-surface-dark">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary">lan</span>
                            <h3 class="text-lg font-black text-text-dark dark:text-white">Réseaux & Internet</h3>
                        </div>
                        <p class="text-sm leading-relaxed text-text-grey dark:text-gray-400">
                            Câblage, Wi‑Fi, routeurs, VLAN, optimisation des performances et sécurisation des accès.
                        </p>
                    </div>

                    <div class="flex flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm dark:border-[#2a303c] dark:bg-surface-dark">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary">computer</span>
                            <h3 class="text-lg font-black text-text-dark dark:text-white">Postes & Support</h3>
                        </div>
                        <p class="text-sm leading-relaxed text-text-grey dark:text-gray-400">
                            Installation, configuration, mises à jour, dépannage et assistance utilisateurs (sur site ou à distance).
                        </p>
                    </div>

                    <div class="flex flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm dark:border-[#2a303c] dark:bg-surface-dark">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary">dns</span>
                            <h3 class="text-lg font-black text-text-dark dark:text-white">Serveurs & Sauvegardes</h3>
                        </div>
                        <p class="text-sm leading-relaxed text-text-grey dark:text-gray-400">
                            Mise en place de serveurs, backup automatisé, restauration, monitoring et plan de continuité.
                        </p>
                    </div>
                </div>

                <div class="mx-auto w-full max-w-[1280px] mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div class="flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 dark:border-[#2a303c] dark:bg-surface-dark">
                        <h2 class="text-2xl font-black text-text-dark dark:text-white">Ce que nous faisons</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-grey dark:text-gray-400">
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Audit & diagnostic</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Installation réseau</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Maintenance préventive</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Support & helpdesk</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Antivirus & durcissement</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Sauvegardes & restauration</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-5 rounded-2xl bg-primary p-8 text-white overflow-hidden relative">
                        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 20% 20%, #ffffff 0, transparent 45%), radial-gradient(circle at 80% 30%, #ffffff 0, transparent 40%), radial-gradient(circle at 50% 80%, #ffffff 0, transparent 50%);"></div>
                        <div class="relative flex flex-col gap-3">
                            <h2 class="text-2xl font-black">Besoin d’un support technique ?</h2>
                            <p class="text-blue-100">
                                Décrivez votre besoin, nous revenons vers vous rapidement avec une proposition claire.
                            </p>
                            <div class="flex flex-wrap gap-3 pt-2">
                                <a href="nous_contacter.html" class="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-bold text-primary hover:bg-gray-100 transition-colors">
                                    Nous contacter
                                </a>
                                <a href="portfolio.html" class="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-6 text-base font-bold text-white hover:bg-white/10 transition-colors">
                                    Voir nos projets
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `
};

function extractMainContent(html) {
    const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    return match ? match[1].trim() : null;
}

// Generate pages
pages.forEach(page => {
    const fileFallbackContent = `<section class="flex flex-col items-center justify-center bg-white dark:bg-background-dark px-4 py-20 lg:px-20"><h1 class="text-3xl font-black text-text-dark dark:text-white">${page.title}</h1></section>`;

    let content = null;

    if (page.contentFile) {
        const sourceHtml = fs.readFileSync(page.contentFile, 'utf8');
        content = extractMainContent(sourceHtml);
    }

    if (!content) {
        content = pageContent[page.content] || fileFallbackContent;
    }

    const html = generateTemplate(page.title, content);
    
    fs.writeFileSync(page.file, html, 'utf8');
    console.log(`Generated: ${page.file}`);
});

console.log('All pages generated successfully!');
