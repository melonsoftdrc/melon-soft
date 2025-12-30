# Script de vérification GitHub Pages
Write-Host "=== Vérification GitHub Pages ===" -ForegroundColor Cyan

# Vérifier si le dépôt existe et est accessible
Write-Host "`n1. Vérification du dépôt..." -ForegroundColor Yellow
$repoUrl = "https://api.github.com/repos/melonsoftdrc/melon-soft"
try {
    $response = Invoke-RestMethod -Uri $repoUrl -Method Get -ErrorAction Stop
    Write-Host "   ✓ Dépôt trouvé: $($response.full_name)" -ForegroundColor Green
    Write-Host "   - Visibilité: $($response.visibility)" -ForegroundColor $(if ($response.private) { "Red" } else { "Green" })
    Write-Host "   - Par défaut branche: $($response.default_branch)" -ForegroundColor Cyan
    
    if ($response.private) {
        Write-Host "`n⚠️  PROBLÈME: Le dépôt est PRIVÉ!" -ForegroundColor Red
        Write-Host "   GitHub Pages gratuit nécessite un dépôt PUBLIC." -ForegroundColor Yellow
        Write-Host "   Solution: Rendez le dépôt public dans Settings → Change visibility" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ✗ Erreur: $($_.Exception.Message)" -ForegroundColor Red
}

# Vérifier si index.html existe
Write-Host "`n2. Vérification du fichier index.html..." -ForegroundColor Yellow
$indexUrl = "https://raw.githubusercontent.com/melonsoftdrc/melon-soft/main/index.html"
try {
    $indexResponse = Invoke-WebRequest -Uri $indexUrl -Method Get -ErrorAction Stop
    Write-Host "   ✓ index.html trouvé (taille: $($indexResponse.Content.Length) bytes)" -ForegroundColor Green
} catch {
    Write-Host "   ✗ index.html non trouvé ou inaccessible" -ForegroundColor Red
}

# Vérifier GitHub Pages
Write-Host "`n3. Vérification GitHub Pages..." -ForegroundColor Yellow
$pagesUrl = "https://api.github.com/repos/melonsoftdrc/melon-soft/pages"
try {
    $pagesResponse = Invoke-RestMethod -Uri $pagesUrl -Method Get -ErrorAction Stop
    Write-Host "   ✓ GitHub Pages est configuré" -ForegroundColor Green
    Write-Host "   - URL: $($pagesResponse.html_url)" -ForegroundColor Cyan
    Write-Host "   - Source: $($pagesResponse.source.branch) / $($pagesResponse.source.path)" -ForegroundColor Cyan
    Write-Host "   - Statut: $($pagesResponse.status)" -ForegroundColor Cyan
} catch {
    Write-Host "   ✗ GitHub Pages n'est pas activé ou configuré" -ForegroundColor Red
    Write-Host "   Solution: Allez dans Settings → Pages et activez GitHub Pages" -ForegroundColor Yellow
}

Write-Host "`n=== Fin de la vérification ===" -ForegroundColor Cyan



