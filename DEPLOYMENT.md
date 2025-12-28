# Guide de Déploiement sur GitHub

## Problème d'Authentification

Le dépôt est configuré avec le remote GitHub suivant :
- **URL** : `https://github.com/melonsoftrdc-droid/Melon_soft_rdc.git`
- **Problème** : Permission refusée (403) lors du push

### Problème Actuel
Le token fine-grained appartient au compte `melonsoftdrc`, mais ce compte n'a pas les permissions d'écriture sur le dépôt de l'organisation `melonsoftrdc-droid`.

### Solutions

## Solutions

### Solution 1 : Vérifier les Permissions du Compte (PRIORITAIRE)

**Le compte `melonsoftdrc` doit avoir accès au dépôt :**

1. **Vérifier l'appartenance à l'organisation** :
   - Allez sur https://github.com/melonsoftrdc-droid
   - Vérifiez que le compte `melonsoftdrc` est membre de l'organisation
   - Si non, demandez à un administrateur de vous ajouter

2. **Vérifier les permissions sur le dépôt** :
   - Le compte doit avoir au minimum les permissions "Write" sur le dépôt `Melon_soft_rdc`
   - Vérifiez dans Settings → Collaborators & teams du dépôt

3. **Vérifier les permissions du token fine-grained** :
   - Allez sur https://github.com/settings/tokens
   - Ouvrez votre token fine-grained
   - Vérifiez qu'il a les permissions :
     - **Repository access** : Sélectionné sur `melonsoftrdc-droid/Melon_soft_rdc`
     - **Repository permissions** → **Contents** : `Read and write`
     - **Repository permissions** → **Metadata** : `Read-only`

### Solution 2 : Utiliser un Token Classique (Alternative)

Si le fine-grained token ne fonctionne pas, créez un token classique :

1. **Créer un token classique** :
   - Allez sur GitHub.com → Settings → Developer settings → Personal access tokens → **Tokens (classic)**
   - Cliquez sur "Generate new token (classic)"
   - Donnez un nom au token (ex: "Melon-Soft Deployment")
   - Sélectionnez les permissions : **repo** (accès complet aux dépôts)
   - Cliquez sur "Generate token"
   - **COPIEZ LE TOKEN** (vous ne pourrez plus le voir après)

2. **Configurer Git pour utiliser le token** :
   ```bash
   git remote set-url origin https://VOTRE_USERNAME:VOTRE_TOKEN@github.com/melonsoftrdc-droid/Melon_soft_rdc.git
   ```

3. **Pousser le code** :
   ```bash
   git push -u origin main
   ```

### Solution 2 : Utiliser SSH

1. **Générer une clé SSH** (si vous n'en avez pas) :
   ```bash
   ssh-keygen -t ed25519 -C "votre_email@example.com"
   ```

2. **Ajouter la clé à GitHub** :
   - Copiez le contenu de `~/.ssh/id_ed25519.pub`
   - Allez sur GitHub.com → Settings → SSH and GPG keys → New SSH key
   - Collez la clé et sauvegardez

3. **Changer l'URL du remote** :
   ```bash
   git remote set-url origin git@github.com:melonsoftrdc-droid/Melon_soft_rdc.git
   ```

4. **Pousser le code** :
   ```bash
   git push -u origin main
   ```

### Solution 3 : Vérifier les Permissions

Assurez-vous que votre compte GitHub a les permissions d'écriture sur le dépôt :
- Vérifiez que vous êtes membre de l'organisation `melonsoftrdc-droid`
- Vérifiez que vous avez les droits de "Write" ou "Admin" sur le dépôt

## Commandes Utiles

- Vérifier le remote actuel :
  ```bash
  git remote -v
  ```

- Vérifier l'état du dépôt :
  ```bash
  git status
  ```

- Voir les commits locaux :
  ```bash
  git log --oneline
  ```

## Après le Déploiement

Une fois le code poussé sur GitHub, vous pouvez :
- Activer GitHub Pages pour héberger le site statique
- Configurer des actions CI/CD pour automatiser le déploiement
- Partager le dépôt avec votre équipe

