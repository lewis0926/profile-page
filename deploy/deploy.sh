#!/usr/bin/env bash
# Usage:
#   ./deploy/deploy.sh              # deploy latest
#   ./deploy/deploy.sh abc1234      # deploy specific tag
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
YAML="$SCRIPT_DIR/deploy.yaml"
REMOTE="k3s-oracle-cloud"
REMOTE_DIR="/home/ubuntu/apps/profile-page"
OWNER="lewis0926"

TAG="${1:-latest}"

export INGRESS_HOST="lewisshum.com"
export IMAGE="ghcr.io/$OWNER/profile-page-main:$TAG"

echo "Image: $IMAGE"
echo ""

RENDERED="$(envsubst '${IMAGE}${INGRESS_HOST}' < "$YAML")"

ssh "$REMOTE" "mkdir -p $REMOTE_DIR"
echo "$RENDERED" | ssh "$REMOTE" "cat > $REMOTE_DIR/deploy.yaml"
echo "Uploaded deploy.yaml → $REMOTE:$REMOTE_DIR/deploy.yaml"

ssh "$REMOTE" "sudo kubectl apply -f $REMOTE_DIR/deploy.yaml"
