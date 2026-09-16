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

for required_file in index.html project.html assets/css/style.css assets/js/modals.js assets/logo-ra.png; do
    [[ -f "$required_file" ]] || fail "Missing $required_file"
done

for section in about services projects contact; do
    assert_contains index.html "id=\"$section\"" "Missing #$section section"
done

for modal in lilyBouquetModal mpkuDashboardModal aslErpModal mitraDjayaModal smtCatalogModal sitiKhodijahHisModal smtQuotationModal daemanindoagenciesModal restoBuAisModal asllogistikModal synergyTangguhModal popeyeProfileModal popeyeErpModal sriMutiaraAlamErpModal surabayaMandiriModal moneyFinModal mgPlaystationModal timelineTodoModal posModal filmModal linktreeModal; do
    assert_contains index.html "data-bs-target=\"#$modal\"" "Missing trigger for #$modal"
    assert_contains project.html "data-bs-target=\"#$modal\"" "Missing archive trigger for #$modal"
    assert_contains assets/js/modals.js "id: '$modal'" "Missing generated modal #$modal"
done

project_count="$(rg -c '<(button|a).*class="project-card' index.html)"
[[ "$project_count" -eq 21 ]] || fail "Expected 21 project cards, found $project_count"
archive_count="$(rg -c '<button type="button" class="project-card' project.html)"
[[ "$archive_count" -eq 21 ]] || fail "Expected 21 archive cards, found $archive_count"
for category in client-projects saas-projects concept-projects; do
    assert_contains index.html "href=\"project.html#$category\"" "Missing archive link for $category"
    assert_contains project.html "id=\"$category\"" "Missing archive category $category"
done
while IFS= read -r project_asset; do
    [[ -s "$project_asset" ]] || fail "Missing or empty project image: $project_asset"
done < <(rg -o --no-filename 'assets/projects/[[:alnum:]_./-]+\.(webp|jpe?g)' index.html project.html assets/js/modals.js | sort -u)
assert_contains assets/css/style.css '.project-group--preview > .project-card:nth-of-type(n + 6)' 'Missing five-card preview limit'

assert_contains index.html 'data-language="id"' 'Missing Indonesian language control'
assert_contains index.html 'data-language="en"' 'Missing English language control'
assert_contains assets/js/modals.js "const STORAGE_KEY = 'ra-dev-language'" 'Missing language persistence key'
assert_contains index.html 'Fullstack Laravel Developer' 'Missing updated professional positioning'
assert_contains index.html 'Mari bicarakan kebutuhan digital perusahaan Anda.' 'Missing updated contact message'
assert_contains index.html 'mailto:rohmadaditya21@gmail.com' 'Missing email link'
assert_contains index.html 'https://wa.me/6289531656442' 'Missing WhatsApp link'
assert_contains index.html 'href="#main-content"' 'Missing skip link'
assert_contains assets/css/style.css 'prefers-reduced-motion: reduce' 'Missing reduced-motion support'
assert_contains assets/css/style.css 'background-color: var(--bg-deep)' 'Missing root overscroll background'
assert_contains assets/css/style.css 'overscroll-behavior-y: none' 'Missing overscroll containment'

service_count="$(rg -c '<article class="service-item">' index.html)"
[[ "$service_count" -eq 3 ]] || fail "Expected 3 service cards, found $service_count"

id_copy_count="$(rg -o 'data-id[[:alnum:]-]*=' index.html assets/js/modals.js | wc -l | tr -d ' ')"
en_copy_count="$(rg -o 'data-en[[:alnum:]-]*=' index.html assets/js/modals.js | wc -l | tr -d ' ')"
[[ "$id_copy_count" -eq "$en_copy_count" ]] || fail "Bilingual copy count differs: ID=$id_copy_count EN=$en_copy_count"

if rg -q 'dummyimage\.com|site-loader|is-loading' index.html assets/js/modals.js; then
    fail 'Legacy loader or dummy project imagery is still present'
fi

if rg -q 'Fullstack Web Developer|Solusi digital yang praktis dan terukur|Proyek produksi' index.html assets/js/modals.js; then
    fail 'Outdated generic copy is still present'
fi

while IFS=':' read -r page section; do
    if [[ -f "$page" ]]; then
        assert_contains "$page" "index.html#$section" "Broken redirect in $page"
    fi
done <<'REDIRECTS'
about.html:about
service.html:services
contact.html:contact
REDIRECTS

echo 'Single-page portfolio smoke checks passed.'
