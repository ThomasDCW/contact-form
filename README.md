# 📮 Contact-Form

Build and deploy a contact form with **Next.js 13** & **SendGrid**, enabling you to receive emails from your clients easily.

[Stack](#-stack)  
[Get Started](#-install-locally)  
[Variables](#-add-your-environements-variables)  
[Sendgrid tutorial](#%EF%B8%8F-first-time-with-sendgrid-)

## 🧬 Stack

🚀 [Nextjs13](https://daisyui.com/) (App directory)

✉️ [Sendgrid](https://sendgrid.com/)

🎨 [Tailwind & DaisyUI](https://daisyui.com/)

🪝 [React-hook-form](https://react-hook-form.com/)

🌐 [Axios](https://axios-http.com/)

## 💿 Install locally

Install dependencies :

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

▶️ [http://localhost:3000](http://localhost:3000)

## 📁 Add your Environements Variables

To run this project with SendGrid and receive emails from your clients, you need to create a file named: **.env.local**

```bash
KEY_SENDGRID=YOUR_SECRET_KEY_SENGRID
EMAIL_TO=EMAIL_TO
FROM_EMAIL=FROM_EMAIL
TEMPLATE_ID=YOUR_TEMPLATE_ID
```

## 🤷‍♂️ First time with Sendgrid ?

In this part, I'll show you step by step how to setup Sengrid.

### 👨🏼‍💻 Create your account

- Go to [Sendgrid.com](https://sendgrid.com/)
- Create your account
- Signin

### 👨‍🎨 Create your template

On the side bar :

- Email API > Dynamic Templates
- Create a Dynamic Template
- Choose a name > Create
- Design it as you want ! Enjoy

### ⌨️ Get dynamics data from your clients

- Edit the HTML module like this :

```bash
<div style="font-family: inherit; text-align: center; padding: 15px">
<span style="font-size: 15px">Name : {{ name }}</span>
<br>
<span style="font-size: 14px">Firstname : {{ firstname }}</span>
<br>
<span style="font-size: 14px">email : {{ email }}</span>
<br>
<span style="font-size: 16px">message : {{message}}</span>
</div>
```

This is an example, here it's important to you to notice the syntax {{example}}

When you're finished, don't forget to obtain your TEMPLATE_ID from the Dynamic Template page.

- Add your **TEMPLATE_ID** in .env.local

### 🔑 Generate your KEY_SENDGRID

On the side bar :

- Settings > API Keys
- Create API Keys
- Choose a name
- Full Acess > Create & View
- <font color="orange">⚠️ You will see the API_KEY only at this moment !</font>
- Copy and paste in the .env.local

### 📤 Add a Sender
