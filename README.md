# Lewis Shum — Portfolio

Personal portfolio site.

Live at: [lewisshum.com](https://lewisshum.com)

## Tech Stack

- **HTML / CSS / JavaScript** — no framework, no build step
- **Typed.js** — hero typing animation
- **Iconify** — tech stack icons
- **Font Awesome** — UI icons
- **nginx** — static file serving

## Deployment

Containerised with Docker and deployed to k3s via GitHub Actions on every push to `main`.

```bash
# Build image locally
docker build -t profile-page .

# Deploy to k3s (uses tag from GHCR)
./deploy/deploy.sh              # latest
./deploy/deploy.sh <tag>        # specific commit
```

## Contact

- Email: lewisshum.work@gmail.com
- LinkedIn: https://www.linkedin.com/in/lewis-shum/
