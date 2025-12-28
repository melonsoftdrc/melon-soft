# Dépannage Erreur 404 GitHub Pages

## Causes possibles et solutions

### 1. Le dépôt n'est pas PUBLIC ⚠️ (Cause la plus fréquente)

**GitHub Pages gratuit nécessite un dépôt PUBLIC.**

**Solution :**
1. Allez sur : https://github.com/melonsoftdrc/melon-soft/settings
2. Faites défiler jusqu'à la section "Danger Zone"
3. Cliquez sur "Change visibility"
4. Sélectionnez "Make public"
5. Confirmez en tapant le nom du dépôt

### 2. GitHub Pages n'est pas activé

**Vérification :**
1. Allez sur : https://github.com/melonsoftdrc/melon-soft/settings/pages
2. Vérifiez que vous voyez :
   - Source : "Deploy from a branch"
   - Branch : `main` / `/ (root)`
   - Un message vert avec l'URL de votre site

**Si ce n'est pas activé :**
- Source : "Deploy from a branch"
- Branch : `main`
- Folder : `/ (root)`
- Cliquez sur "Save"

### 3. Le nom du dépôt ou de l'utilisateur est incorrect

**Vérifiez :**
- Nom d'utilisateur GitHub : `melonsoftdrc` (pas `melonsoftrdc-droid`)
- Nom du dépôt : `melon-soft`
- URL correcte : `https://melonsoftdrc.github.io/melon-soft/`

### 4. Attendre le déploiement

Après activation ou changement de visibilité :
- Attendez **2-5 minutes** pour le déploiement
- Rafraîchissez la page (Ctrl+F5 pour vider le cache)

### 5. Vérifier que index.html existe

Le fichier `index.html` doit être à la racine du dépôt (ce qui est le cas).

## Checklist de vérification

- [ ] Le dépôt est **PUBLIC** (pas privé)
- [ ] GitHub Pages est **ACTIVÉ** dans Settings → Pages
- [ ] La branche `main` est sélectionnée comme source
- [ ] Le fichier `index.html` existe à la racine
- [ ] Le fichier `.nojekyll` existe à la racine
- [ ] Vous avez attendu 2-5 minutes après activation
- [ ] Vous utilisez l'URL exacte : `https://melonsoftdrc.github.io/melon-soft/`

## Test rapide

Essayez d'accéder directement au fichier index.html :
`https://melonsoftdrc.github.io/melon-soft/index.html`

Si cela fonctionne, le problème vient des paramètres GitHub Pages.
Si cela ne fonctionne pas, le dépôt n'est probablement pas public.

