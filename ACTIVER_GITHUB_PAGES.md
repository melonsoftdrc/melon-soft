# Activer GitHub Pages pour votre site

## Étapes pour activer GitHub Pages

1. **Allez sur votre dépôt GitHub** : https://github.com/melonsoftdrc/melon-soft

2. **Cliquez sur "Settings"** (en haut à droite du dépôt)

3. **Dans le menu de gauche, cliquez sur "Pages"** (sous "Code and automation")

4. **Configurez GitHub Pages** :
   - **Source** : Sélectionnez "Deploy from a branch"
   - **Branch** : Sélectionnez `main`
   - **Folder** : Sélectionnez `/ (root)`
   - Cliquez sur **"Save"**

5. **Attendez quelques minutes** (1-2 minutes) pour que GitHub déploie votre site

6. **Votre site sera disponible à** :
   - **URL principale** : `https://melonsoftdrc.github.io/melon-soft/`
   - Note : Il peut prendre quelques minutes pour être accessible

## Vérification

Une fois activé, vous verrez un message vert en haut de la page Settings → Pages avec l'URL de votre site.

## Important

- Assurez-vous que le fichier `index.html` est bien à la racine du dépôt (ce qui est le cas)
- Les chemins des fichiers doivent être relatifs (ex: `assets/css/style.css` et non `/assets/css/style.css`)

## Si vous obtenez toujours une erreur 404

1. Vérifiez que GitHub Pages est bien activé (vous devriez voir l'URL dans Settings → Pages)
2. Attendez 2-3 minutes après l'activation
3. Vérifiez que vous accédez à la bonne URL : `https://melonsoftdrc.github.io/melon-soft/`
4. Vérifiez que tous les fichiers sont bien poussés sur GitHub



