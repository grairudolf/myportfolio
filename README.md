# MyPortfolio

Welcome to **MyPortfolio**, a modern and responsive portfolio website built with React and Tailwind CSS. This project showcases my skills, projects, and experiences as a software developer, providing an interactive and visually appealing way to connect with potential collaborators, employers, or clients.

---

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across devices.
- **Dynamic Projects Section**: Showcases a collection of my projects with live previews and GitHub links.
- **Skills Overview**: Highlights my technical skills and expertise.
- **Community Involvement**: Displays my contributions and memberships in various communities.
- **Contact Form**: Allows visitors to send messages directly to my email.
- **Resume Download**: Provides an option to download my resume.
- **Social Media Links**: Easy access to my GitHub, LinkedIn, Twitter, and email.

---

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Email Integration**: EmailJS
- **Hosting**: Vercel

---

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── About.tsx          # About section
│   ├── Community.tsx      # Community involvement section
│   ├── Contact.tsx        # Contact form and social links
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header and navigation
│   ├── Hero.tsx           # Hero section
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills overview
├── pages/
│   ├── Index.tsx          # Main portfolio page
├── styles/                # Tailwind CSS configuration
```

---

## 🌟 Sections

### 1. **Hero**
   - A visually engaging introduction with a call-to-action.

### 2. **About**
   - A brief overview of who I am and what I do.

### 3. **Projects**
   - A grid of my projects with descriptions, technologies used, live previews, and GitHub links.

### 4. **Skills**
   - A showcase of my technical skills and tools I work with.

### 5. **Community**
   - Highlights my involvement in various communities and volunteering efforts.

### 6. **Contact**
   - A form to send me messages directly, along with links to my social media profiles.

### 7. **Footer**
   - A simple footer with copyright information.

---

## 📧 Contact Form Integration

The contact form is powered by **EmailJS** to send messages directly to my email address. To configure it:

1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Set up a service, template, and public key.
3. Replace the placeholders in Contact.tsx:
   ```tsx
   emailjs.sendForm(
     'your_service_id',
     'your_template_id',
     formRef.current,
     'your_public_key'
   );
   ```

---

## 🖼️ Screenshots

### Hero Section
![Hero Section](https://via.placeholder.com/800x400)

### Projects Section
![Projects Section](https://via.placeholder.com/800x400)

### Contact Form
![Contact Form](https://via.placeholder.com/800x400)

---

## 🛠️ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/grairudolf/myportfolio.git
   cd myportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## 🌐 Deployment

This portfolio is deployed on **Vercel**. To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Configure environment variables (if any).
4. Deploy the project.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📬 Contact

- **Email**: [rtech777r@gmail.com](mailto:rtech777r@gmail.com)
- **GitHub**: [grairudolf](https://github.com/grairudolf)
- **LinkedIn**: [grairudolf](https://linkedin.com/in/grairudolf)
- **Twitter**: [@grai_rudolf](https://twitter.com/grai_rudolf)

---

Thank you for visiting my portfolio! 😊
