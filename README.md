# Melon-Soft Website

Un site web moderne pour Melon-Soft, entreprise de développement logiciel en RDC.

## Structure du Projet

```
melon-soft/
├── assets/
│   ├── css/
│   │   └── style.css          # Styles personnalisés
│   ├── js/
│   │   └── main.js            # JavaScript principal
│   └── images/
│       ├── logo.png
│       └── logo1.png
├── components/
│   ├── navbar.html             # Composant de navigation
│   └── footer.html             # Composant de pied de page
├── build-website.js            # Script de génération des pages
├── index.html                  # Page d'accueil
├── apropos.html                # Page À propos
├── blog.html                   # Page blog
├── carrieres.html              # Page carrières
├── developpement_informatique.html
├── faq.html
├── formation_professionnelle.html
├── nos_services.html
├── nous_contacter.html
├── portfolio.html
├── profil_corporatif.html
├── services_techniques.html
└── solutions_de_securite.html
```

## Technologies Utilisées

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript Vanilla** - Interactivité
- **Material Symbols** - Icônes Google
- **Inter Font** - Typographie moderne

## Système de Build

Le projet utilise un système de build personnalisé (`build-website.js`) qui :

1. Lit les composants (navbar, footer)
2. Génère toutes les pages HTML avec un template unifié
3. Insère le contenu spécifique à chaque page
4. Applique le style et les scripts cohérents

### Pour générer les pages :

```bash
node build-website.js
```

## Pages du Site

- **Accueil** - Présentation de l'entreprise et services principaux
- **À Propos** - Mission, vision et histoire de Melon-Soft
- **Services** - Détail des différentes offres de services
- **Portfolio** - Réalisations et projets clients
- **Contact** - Formulaire de contact et informations
- **Carrières** - Offres d'emploi et recrutement
- **Blog** - Actualités et articles techniques
- **FAQ** - Questions fréquentes

## Fonctionnalités

- **Design Responsive** - Adaptation mobile, tablette, desktop
- **Mode Sombre** - Thème clair/sombre
- **Navigation Intuitive** - Menu principal et menu mobile
- **Animations Fluides** - Transitions et micro-interactions
- **Accessibilité** - Structure sémantique et attributs ARIA

## Déploiement

Les fichiers générés dans le répertoire racine sont prêts pour le déploiement sur n'importe quel serveur web statique.

## Maintenance

Pour modifier le site :

1. **Composants** : Modifier `components/navbar.html` ou `components/footer.html`
2. **Styles** : Modifier `assets/css/style.css`
3. **Contenu** : Modifier les contenus dans `build-website.js`
4. **Scripts** : Modifier `assets/js/main.js`
5. **Regénérer** : Exécuter `node build-website.js`

## Contact

- **Email** : info@melon-soft.cd
- **Téléphone** : +243 99 710 20 12
- **Adresse** : Av. de la Paix, Gombe, Kinshasa, RDC
