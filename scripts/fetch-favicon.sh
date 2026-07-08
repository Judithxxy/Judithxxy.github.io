#!/usr/bin/env bash
# Fetch a product's favicon into public/images/favicons/<slug>.png
# Uses Google's favicon service (reliable, any domain) and self-hosts the result.
# Usage: scripts/fetch-favicon.sh <slug> <url>
# Prints the site-relative path on success; exits 1 on failure.
set -euo pipefail

slug="$1"
url="$2"
domain="$(printf '%s' "$url" | sed -E 's~^https?://~~; s~/.*$~~')"
outdir="$(dirname "$0")/../public/images/favicons"
mkdir -p "$outdir"

out="$outdir/$slug.png"
curl -sL --max-time 20 -o "$out" "https://www.google.com/s2/favicons?domain=$domain&sz=64"

if [ ! -s "$out" ]; then
  echo "favicon fetch failed for $domain" >&2
  rm -f "$out"
  exit 1
fi
echo "/images/favicons/$slug.png"
