# Créer un Token avec les Bonnes Permissions

## Étapes pour créer un token classique avec les bonnes permissions

1. **Allez sur** : https://github.com/settings/tokens

2. **Cliquez sur** : "Generate new token" → "Generate new token (classic)"

3. **Remplissez le formulaire** :
   - **Note** : `Melon-Soft Deployment` (ou un nom de votre choix)
   - **Expiration** : Choisissez une durée (90 jours, 1 an, ou no expiration)
   - **Permissions** : Cochez **UNIQUEMENT** :
     - ✅ **repo** (toutes les cases sous "repo" seront automatiquement cochées)
       - repo:status
       - repo_deployment
       - public_repo
       - repo:invite
       - security_events

4. **Cliquez sur** : "Generate token" en bas de la page

5. **COPIEZ LE TOKEN** immédiatement (vous ne pourrez plus le voir après)

6. **Donnez-moi le nouveau token** et je configurerai Git pour l'utiliser

## Important

Le token doit avoir la permission **`repo`** pour pouvoir pousser du code vers les dépôts.



