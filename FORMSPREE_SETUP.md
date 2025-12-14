# Formspree Setup - Simple & Easy! 🎉

Formspree is much simpler than EmailJS - you only need 2 steps!

## Step 1: Sign Up & Get Your Endpoint
1. Go to https://formspree.io/
2. Sign up for a free account (it's free for up to 50 submissions per month)
3. After signing up, you'll see your form endpoint URL
   - It looks like: `https://formspree.io/f/YOUR_FORM_ID`
4. Copy that URL

## Step 2: Add It to Your Project
Create a `.env` file in your project root (or add to existing one):
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Replace `YOUR_FORM_ID` with the actual ID from your Formspree dashboard.

## Step 3: Configure Email (Optional)
1. In your Formspree dashboard, go to Settings
2. Add `iksass25@gmail.com` as the recipient email
3. Customize the email subject if you want

## That's It! 🎉
The form will now send all traveler data to `iksass25@gmail.com` automatically.

**Note:** After adding the `.env` file, restart your development server (`npm run dev`)

