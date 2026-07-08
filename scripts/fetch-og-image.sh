#!/usr/bin/env bash
# Fetch a product's og:image into public/images/products/<slug>.<ext>
# Usage: scripts/fetch-og-image.sh <slug> <url>
# Prints the site-relative image path on success; exits 1 if none found.
set -euo pipefail

slug="$1"
url="$2"
outdir="$(dirname "$0")/../public/images/products"
mkdir -p "$outdir"

html="$(curl -sL --max-time 20 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" "$url")"
img="$(printf '%s' "$html" | grep -oiE '<meta[^>]+(property|name)=["'"'"'](og:image|twitter:image)["'"'"'][^>]*>' \
  | grep -oiE 'content=["'"'"'][^"'"'"']+["'"'"']' | head -1 | sed -E 's/^content=["'"'"']//; s/["'"'"']$//')"

if [ -z "$img" ]; then
  echo "no og:image found for $url" >&2
  exit 1
fi

# resolve protocol-relative and relative URLs
case "$img" in
  //*) img="https:$img" ;;
  /*) img="$(printf '%s' "$url" | grep -oE '^https?://[^/]+')$img" ;;
esac

ext="${img##*.}"
ext="${ext%%\?*}"
case "$ext" in
  jpg|jpeg|png|webp) ;;
  *) ext="png" ;;
esac

out="$outdir/$slug.$ext"
curl -sL --max-time 30 -A "Mozilla/5.0" -o "$out" "$img"
if [ ! -s "$out" ]; then
  echo "download failed for $img" >&2
  rm -f "$out"
  exit 1
fi
echo "/images/products/$slug.$ext"
