# SEO Setup Guide for Royal Banquet Hall

## ✅ Files Created

### 1. **Keywords Configuration** (`src/config/keywords.ts`)
- Centralized location to manage all SEO keywords
- Keywords are automatically added to meta tags
- Easily add/remove keywords as needed

### 2. **Robots.txt** (`public/robots.txt`)
- Guides search engine crawlers on which pages to index
- Prevents crawling of private/admin areas
- Links to your sitemap

### 3. **Sitemap** (`src/app/sitemap.ts`)
- Auto-generates XML sitemap for all pages
- Available at: `yourdomain.com/sitemap.xml`
- Helps Google discover all your pages

### 4. **Manifest** (`src/app/manifest.ts`)
- PWA (Progressive Web App) configuration
- Improves mobile experience
- Enables app-like installation

### 5. **Updated Layout** (`src/app/layout.tsx`)
- Includes keywords from config file
- Open Graph tags for social media sharing
- Twitter Card for better tweet previews
- Robots directives for search engines
- Proper viewport settings

---

## 🎯 How to Add Keywords

Edit **`src/config/keywords.ts`** and add more keywords to the array:

```typescript
export const seoKeywords = [
  "royal banquet hall",
  "event venue",
  // Add more keywords here - they'll automatically update everywhere
  "your new keyword",
  "another keyword",
];
```

Keywords will automatically appear in:
- Meta tags
- OG tags
- Page metadata
- Search engine results

---

## 🔧 Configuration Updates Needed

Before deploying, update these values in **`src/config/keywords.ts`** and **`src/app/layout.tsx`**:

1. **Base URL** (for sitemap)
   - Replace: `https://royalbanquethall.com`
   - With your actual domain

2. **OG Image**
   - Add your business image to `public/og-image.jpg` (1200x630px recommended)
   - Update path in metadata if different

3. **Robots.txt Domain**
   - Update sitemap URL in `public/robots.txt`

4. **Page Descriptions**
   - Update descriptions in each page's metadata if needed

---

## 📱 Page-Specific SEO

For individual pages (About, Gallery, etc.), you can override metadata:

```typescript
// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Royal Banquet Hall",
  description: "Learn about our premium venue...",
  keywords: ["banquet hall history", "venue features", ...],
};
```

---

## ✨ Benefits

✅ Better Google Rankings
✅ Improved Search Visibility
✅ Social Media Previews
✅ Mobile-Friendly Configuration
✅ Easy Keyword Management
✅ Structured Data for Search Engines
✅ PWA Support

---

## 📊 Testing

1. **Robots.txt**: Visit `yourdomain.com/robots.txt`
2. **Sitemap**: Visit `yourdomain.com/sitemap.xml`
3. **Meta Tags**: Use Google Search Console
4. **Manifest**: Check DevTools → Application → Manifest

---

## 🚀 Deployment Checklist

- [ ] Update domain name in sitemap
- [ ] Update domain in robots.txt
- [ ] Add OG image (1200x630px)
- [ ] Review keywords in `src/config/keywords.ts`
- [ ] Test in Google Search Console
- [ ] Verify manifest loads correctly
- [ ] Check social media preview (Facebook, Twitter)

