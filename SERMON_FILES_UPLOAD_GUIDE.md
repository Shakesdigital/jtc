# 📤 Sermon Files Upload Guide

## ✅ What's Already Done

Your sermon management system is **fully deployed** to GitHub! 🎉

- ✅ Code pushed successfully
- ✅ Sermon detail pages working
- ✅ Audio player implemented
- ✅ Download functionality ready
- ✅ Sermon images uploaded

## 📁 Files That Need Manual Upload

The following large media files are **excluded from Git** and need to be uploaded directly to your web server:

### Audio Files (259 MB total)
Located in: `D:\Jinja Town Church Work\JTCapp\public\sermons\audio\`

1. **finding-your-soulmate.m4a** (91 MB)
2. **wind-and-waves.m4a** (90 MB)
3. **why-are-you-hiding.m4a** (78 MB)

### Sermon Notes Files (41 KB total)
Located in: `D:\Jinja Town Church Work\JTCapp\public\sermons\notes\`

1. **finding-your-soulmate.docx** (21 KB)
2. **why-are-you-hiding.docx** (20 KB)

## 🚀 Upload Methods

### Method 1: FTP/SFTP Upload (Recommended)

If you have FTP/SFTP access to your web server:

1. **Connect to your server** using an FTP client (FileZilla, WinSCP, etc.)
2. **Navigate to** your website's public directory
3. **Create folders** (if they don't exist):
   - `/public/sermons/audio/`
   - `/public/sermons/notes/`
4. **Upload files** to their respective folders:
   - Upload all `.m4a` files to `/public/sermons/audio/`
   - Upload all `.docx` files to `/public/sermons/notes/`

### Method 2: cPanel File Manager

If your hosting uses cPanel:

1. **Log in to cPanel**
2. **Open File Manager**
3. **Navigate to** `public_html/public/sermons/`
4. **Create folders**: `audio` and `notes`
5. **Upload files** using the Upload button
6. Upload audio files to the `audio` folder
7. Upload notes files to the `notes` folder

### Method 3: Hosting Dashboard

If you're using Netlify, Vercel, or similar:

1. **Build your project** locally: `npm run build`
2. The build folder will contain the sermons directory
3. **Deploy the entire build folder** to your hosting
4. Or use their CLI to deploy

### Method 4: Cloud Storage + CDN (Alternative)

If uploading to your server is difficult:

1. **Upload to Google Drive / Dropbox**
   - Create a public folder
   - Upload the audio files
   - Get shareable links

2. **Update URLs** in `src/data/sermonsData.js`:
   ```javascript
   audioUrl: 'https://drive.google.com/uc?id=YOUR_FILE_ID'
   notesUrl: 'https://drive.google.com/uc?id=YOUR_FILE_ID'
   ```

## 📍 Server Directory Structure

Your web server should have this structure:

```
your-website/
├── public/
│   └── sermons/
│       ├── audio/
│       │   ├── finding-your-soulmate.m4a
│       │   ├── wind-and-waves.m4a
│       │   └── why-are-you-hiding.m4a
│       ├── notes/
│       │   ├── finding-your-soulmate.docx
│       │   └── why-are-you-hiding.docx
│       └── images/
│           ├── finding-your-soulmate.png
│           ├── wind-and-waves.png
│           ├── why-are-you-hiding.png
│           └── be-encouraged.png
```

## ✨ After Upload

Once you've uploaded the files:

1. **Visit your website**
2. **Go to Sermons page**: `/sermons/archive`
3. **Click "Listen"** on any sermon
4. **Test the audio player**
5. **Test download buttons**

## 🔍 Troubleshooting

### Audio Not Playing?
- Check file permissions (should be readable: 644)
- Verify file paths match exactly
- Check browser console for errors

### Download Not Working?
- Ensure files are in the correct folders
- Check that file names match exactly (case-sensitive on some servers)

### 404 Errors?
- Verify folder structure on server
- Check that `/public/` or `/public_html/` is correct for your hosting

## 📞 Need Help?

If you encounter issues:
1. Check your web server error logs
2. Verify file permissions
3. Test with a smaller file first
4. Contact your hosting support if needed

## 🎯 Current Status

- ✅ **Code**: Deployed to GitHub
- ✅ **Images**: Included in repository
- ⏳ **Audio Files**: Need manual upload (this guide)
- ⏳ **Notes Files**: Need manual upload (this guide)

**Once you upload the files, your sermon system will be fully functional!** 🙏

---

**Files Location on Your Computer:**
`D:\Jinja Town Church Work\JTCapp\public\sermons\`
