# EmailJS Setup Guide for Contact Form

## Step 1: Create a Free EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up with your email or Google account
3. Verify your email

## Step 2: Add Your Email Service

1. Go to **Email Services** in the sidebar
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use the default
4. Follow the setup instructions
5. Copy your **Service ID** (looks like: `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{name}}

From: {{email}}

Message:
{{message}}
```

4. Save the template and copy your **Template ID** (looks like: `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** settings
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update Your Contact Component

Open `src/components/Contact/Contact.jsx` and find these lines:

```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```

and

```javascript
await emailjs.sendForm(
  "YOUR_SERVICE_ID_HERE",
  "YOUR_TEMPLATE_ID_HERE",
  formRef.current
);
```

Replace the placeholders with your actual keys:

```javascript
emailjs.init("your_actual_public_key");

await emailjs.sendForm(
  "your_actual_service_id",
  "your_actual_template_id",
  formRef.current
);
```

## Step 6: Test Your Form

1. Run `npm run dev` to start the development server
2. Navigate to the Contact section
3. Fill out the form and send a test message
4. Check your email inbox for the message

## Important Security Notes

- Your **Public Key** is safe to keep in the code (it's meant to be public)
- Never commit your keys to version control if they're sensitive
- EmailJS has a free tier with 200 emails/month
- For production, consider upgrading to a paid plan if you expect more submissions

## Troubleshooting

- **Messages not sending?** Check that your Service ID and Template ID match exactly
- **Template formatting wrong?** Make sure your template variables match the form field names (name, email, message)
- **Still having issues?** Check the EmailJS documentation: https://www.emailjs.com/docs/

---

Your portfolio is now ready to receive messages directly to your email! 🎉
