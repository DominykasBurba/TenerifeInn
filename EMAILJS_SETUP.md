# EmailJS Setup Instructions

To enable email sending from the form page, you need to set up EmailJS:

## Step 1: Create an EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID**

## Step 3: Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. **Set the recipient email:**
   - In the "To Email" field, enter: `iksass25@gmail.com`
   - Or use the variable: `{{to_email}}` (but set default to iksass25@gmail.com)
4. **Set the email subject:**
   ```
   Travelers Registration Form - {{travelers_count}} Traveler(s)
   ```
5. **Set the email content/body:**
   ```
   New travelers registration form submitted.
   
   Number of Travelers: {{travelers_count}}
   Submission Date: {{submission_date}}
   
   Travelers Data:
   {{travelers_data}}
   
   ---
   This email was sent from the Travelers Registration Form.
   ```
6. **Available variables you can use:**
   - `{{travelers_count}}` - Number of travelers
   - `{{travelers_data}}` - Complete JSON data of all travelers (formatted)
   - `{{submission_date}}` - Date and time of submission
   - `{{from_name}}` - Form name
   - `{{to_email}}` - Recipient email
   - `{{reply_to}}` - Reply-to email (first traveler's email)
7. Click "Save" and copy your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Add Credentials to Your Project

**Recommended: Using Environment Variables (More Secure)**

Create a `.env` file in the root directory of your project:
```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs from EmailJS.

**Important:** 
- After creating/updating the `.env` file, restart your development server (`npm run dev`)
- The `.env` file is already in `.gitignore`, so your credentials won't be committed to git

**Alternative: Direct Configuration (Not Recommended for Production)**
If you prefer not to use environment variables, you can directly edit `src/pages/FormPage.tsx` and replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID  
- `YOUR_PUBLIC_KEY` with your Public Key

## Step 6: Test the Form
1. Fill out the form with test data
2. Click "Submit Registration"
3. Check your email at `iksass25@gmail.com` for the submission

That's it! Your form is now ready to send traveler registration data directly to your email.

