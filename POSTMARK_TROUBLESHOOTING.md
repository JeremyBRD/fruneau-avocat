# Résolution des problèmes Postmark

## Problème : Email envoyé mais non reçu

L'email est bien envoyé à Postmark (Message-ID présent), mais vous ne le recevez pas.

## Solutions

### 1. Vérifier l'adresse expéditrice dans Postmark

L'adresse `hostmaster@fruneau-avocat.com` doit être vérifiée dans Postmark :

1. Allez sur https://account.postmarkapp.com/
2. Cliquez sur "Signatures" dans le menu
3. Vérifiez que `hostmaster@fruneau-avocat.com` est listée et vérifiée
4. Si elle n'est pas vérifiée, ajoutez-la et vérifiez-la

### 2. Vérifier le domaine dans Postmark

Le domaine `fruneau-avocat.com` doit être vérifié :

1. Dans Postmark Dashboard, allez dans "Sending Domains"
2. Vérifiez que `fruneau-avocat.com` est vérifié
3. Si non, suivez les instructions pour ajouter les enregistrements DNS

### 3. Vérifier le statut de l'email dans Postmark

1. Allez dans "Activity" dans le dashboard Postmark
2. Cherchez le Message-ID : `12ee3acc-db29-41dc-ad92-626cb98270c2`
3. Vérifiez le statut :
   - ✅ "Delivered" = email livré (vérifiez spam)
   - ❌ "Bounced" = email rejeté (adresse invalide)
   - ⚠️ "Blocked" = email bloqué (expéditeur non vérifié)

### 4. Solution temporaire pour les tests

Pour tester rapidement, vous pouvez utiliser votre propre email comme expéditeur :

1. Ajoutez dans `.env` :
   ```
   POSTMARK_FROM_EMAIL=thibault.chassine@gmail.com
   ```

2. Vérifiez cette adresse dans Postmark Dashboard > Signatures

3. Redémarrez le serveur Rails

### 5. Vérifier les logs Postmark

Dans Postmark Dashboard > Activity, vous verrez :
- Le statut de chaque email
- Les raisons de bounce/block si applicable
- Les détails de livraison

## Vérification rapide

```bash
# Dans Rails console
contact = Contact.new(name: "Test", email: "test@test.com", body: "Test")
ContactMailer.contact(contact).deliver_now

# Puis vérifiez dans Postmark Dashboard > Activity
```
