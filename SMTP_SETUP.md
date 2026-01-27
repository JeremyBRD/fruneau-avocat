# Configuration SMTP Gmail pour le développement

## Étapes pour configurer Gmail SMTP

### 1. Activer la validation en 2 étapes sur votre compte Gmail
- Allez sur https://myaccount.google.com/security
- Activez la "Validation en deux étapes" si ce n'est pas déjà fait

### 2. Créer un mot de passe d'application
- Allez sur https://myaccount.google.com/apppasswords
- Sélectionnez "Autre (nom personnalisé)" et entrez "Rails Development"
- Cliquez sur "Générer"
- **Copiez le mot de passe de 16 caractères** (sans espaces)

### 3. Ajouter les credentials dans le fichier .env
Créez ou modifiez le fichier `.env` à la racine du projet :

```bash
GMAIL_USERNAME=thibault.chassine@gmail.com
GMAIL_APP_PASSWORD=votre_mot_de_passe_application_16_caracteres
```

### 4. Redémarrer le serveur Rails
```bash
rails s
```

## Test
1. Remplissez le formulaire de contact sur votre site
2. L'email sera envoyé à thibault.chassine@gmail.com
3. Vérifiez votre boîte de réception Gmail

## Note
- Le fichier `.env` est dans `.gitignore` (ne sera pas commité)
- En production, Postmark est utilisé (configuré dans production.rb)
- Pour revenir à letter_opener, commentez la config SMTP et décommentez `config.action_mailer.delivery_method = :letter_opener`
