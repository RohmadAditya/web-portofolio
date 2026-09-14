#!/usr/bin/env bash

set -euo pipefail

fail() {
    echo "FAIL: $1" >&2
    exit 1
}

assert_contains() {
    local file="$1"
    local pattern="$2"
    local message="$3"
    rg -q --fixed-strings "$pattern" "$file" || fail "$message"
}

for required_file in index.html assets/css/style.css assets/js/modals.js assets/logo-ra.png; do
    [[ -f "$required_file" ]] || fail "Missing $required_file"
done

for section in about services projects contact; do
    assert_contains index.html "id=\"$section\"" "Missing #$section section"
done

for modal in mgPlaystationModal asllogistikModal daemanindoagenciesModal timelineTodoModal posModal filmModal linktreeModal; do
    assert_contains index.html "data-bs-target=\"#$modal\"" "Missing trigger for #$modal"
    assert_contains assets/js/modals.js "id: '$modal'" "Missing generated modal #$modal"
done

assert_contains index.html 'data-language="id"' 'Missing Indonesian language control'
assert_contains index.html 'data-language="en"' 'Missing English language control'
assert_contains assets/js/modals.js "const STORAGE_KEY = 'ra-dev-language'" 'Missing language persistence key'
assert_contains index.html 'mailto:rohmadaditya21@gmail.com' 'Missing email link'
assert_contains index.html 'https://wa.me/6289531656442' 'Missing WhatsApp link'
assert_contains index.html 'href="#main-content"' 'Missing skip link'
assert_contains assets/css/style.css 'prefers-reduced-motion: reduce' 'Missing reduced-motion support'

if rg -q 'dummyimage\.com|site-loader|is-loading' index.html assets/js/modals.js; then
    fail 'Legacy loader or dummy project imagery is still present'
fi

while IFS=':' read -r page section; do
    assert_contains "$page" "index.html#$section" "Broken redirect in $page"
done <<'REDIRECTS'
about.html:about
service.html:services
project.html:projects
contact.html:contact
REDIRECTS

echo 'Single-page portfolio smoke checks passed.'
