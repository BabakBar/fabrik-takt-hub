# Optimized Images

## Required Conversions

Convert these factory images to WebP format:

### Hero Images (Priority)
- `Factory-takt14.png` → `hero-factory.webp` (1920px wide, high quality)
- `Factory-takt14.png` → `hero-factory-mobile.webp` (1280px wide)

### Additional Images (Lower Priority)
- `Factory-takt7.png` → `hero-alt.webp` (alternative hero)
- `Factory-takt13.png` → `about-workers.webp` (about section)
- `Factory-takt15.png` → `solutions-analytics.webp` (solutions section)

## Tools for Conversion

**Online:**
- squoosh.app (Google's WebP converter)

**CLI:**
```bash
# Using sharp-cli
npm install -g sharp-cli
sharp -i input.png -o output.webp --webp

# Using cwebp
cwebp -q 85 input.png -o output.webp
```

**macOS:**
- ImageOptim app (supports WebP export)

## Temporary Fallback

Until WebP files exist, components will reference PNG paths.
