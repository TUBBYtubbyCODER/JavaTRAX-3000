# JavaTRAX-3000 Deployment Guide

## Quick Deploy Checklist
- [ ] netlify.toml in repository root
- [ ] All files in JavaTRAX-3000/ updated
- [ ] Local build test passes (`npm run build`)
- [ ] Netlify dashboard settings configured
- [ ] Changes committed and pushed

## Netlify Dashboard Settings
**Site Settings** → **Build & deploy** → **Build settings**:
- **Base directory**: `JavaTRAX-3000`
- **Build command**: `npm ci && npm run build`
- **Publish directory**: `JavaTRAX-3000/dist`

## Test Commands (run in JavaTRAX-3000/ directory)
```bash
npm install
npm run build    # Should succeed
npm run serve    # Test built version
```

## Troubleshooting
- Build fails? Check all files match exactly
- Blank page? Check browser console for errors
- Wrong directory? Ensure base directory is `JavaTRAX-3000`

## Success Indicators
✅ `npm run build` succeeds locally  
✅ Netlify build logs show success  
✅ Site loads without JavaScript errors