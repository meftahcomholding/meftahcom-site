# MeftahCom Holding — Site vitrine

Site institutionnel statique (HTML/CSS/JS, sans build) pour **MeftahCom Holding S.A.S.**, la marketplace immobilière de la diaspora algérienne.

## Pages
- `index.html` — Accueil
- `projet.html` — Le projet (services, parcours, villes, société)
- `diaspora.html` — La diaspora en chiffres (données vérifiées et sourcées)
- `contact.html` — Contact

## Lancer en local
Ouvre simplement `index.html` dans un navigateur, ou sers le dossier :
```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Mettre en ligne sur GitHub Pages
1. Crée un dépôt sur GitHub (ex. `meftahcom-site`).
2. Pousse ces fichiers à la racine du dépôt.
3. Dans **Settings → Pages**, choisis la branche `main` et le dossier `/ (root)`.
4. Le site sera publié sur `https://<ton-pseudo>.github.io/meftahcom-site/`.

> Le fichier `.nojekyll` empêche GitHub de transformer le site avec Jekyll.

## Personnalisation
- Logo : `assets/logo.svg` (version vectorielle recréée). Remplace-le par ton fichier officiel si tu en as une version SVG/PNG haute définition.
- Couleurs et polices : variables CSS en haut de `assets/style.css`.
- Le formulaire de contact est une démo front-end. Pour recevoir les messages, branche un service comme Formspree, Web3Forms ou Netlify Forms.

## Sources des chiffres (page diaspora)
Banque mondiale, Observatoire de l'immigration (OID), INSEE, ministère de l'Intérieur (SSII), étude du pr. Benzeghioua Mohamed (juin 2024), AIDA.
