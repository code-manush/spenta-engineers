# Spenta Engineers - Company Website

A modern, SEO-optimized website for Spenta Engineers, a manufacturer of precision drilling tools including drill rods, core barrels, diamond tools, and accessories for mining, exploration, and geotechnical applications.

## 🚀 Features

- **Modern Stack**: Built with Next.js 16, React 19, and TypeScript
- **SEO Optimized**: Complete SEO implementation with sitemap, robots.txt, structured data, and metadata
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Performance**: Optimized images, compression, and caching
- **Contact Form**: Server-side email functionality with Nodemailer
- **Accessibility**: Semantic HTML and ARIA-friendly components

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ and npm/yarn/pnpm
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spenta-engineers
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
   
   **Note**: For Gmail, you'll need to use an App Password instead of your regular password. Learn more: [Google App Passwords](https://support.google.com/accounts/answer/185833)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
spenta-engineers/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── catalogue/         # Product catalogue page
│   ├── contact/           # Contact page with form
│   ├── industries/        # Industries served page
│   ├── manufacturing-quality/  # Manufacturing process page
│   ├── products/          # Product pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── navbar.tsx         # Navigation component
│   ├── footer.tsx         # Footer component
│   ├── hero.tsx           # Hero section
│   └── ...                # Other components
├── public/                # Static assets
│   ├── images/            # Image files
│   └── ...                # Other static files
├── lib/                   # Utility functions
└── ...                    # Configuration files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 SEO Features

This project includes comprehensive SEO optimization:

- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Structured Data**: JSON-LD schema for Organization and LocalBusiness
- **Metadata**: Complete Open Graph and Twitter Card support
- **Canonical URLs**: Proper canonical tags on all pages
- **Performance**: Optimized images and compression

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. To configure:

1. Set up Gmail App Password (recommended) or use another SMTP service
2. Add credentials to `.env.local`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
3. Update the recipient email in `app/contact/action.ts` if needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_USER` | Email address for sending contact form emails | Yes |
| `EMAIL_PASS` | App password or SMTP password | Yes |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (optional, defaults to metadataBase) | No |

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Company Information

**Spenta Engineers**
- Location: Vadodara-390024, Gujarat, India
- Email: spentaeng@gmail.com
- Phone: +91-9426753291
- Business Hours: Monday – Saturday, 9:30 AM – 6:30 PM IST

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [Tabler Icons](https://tabler.io/icons)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Animation**: [Motion](https://motion.dev/)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

This is a private company website. For issues or suggestions, please contact the development team.

## 📞 Support

For technical support or questions about the website, please contact:
- Email: spentaeng@gmail.com
- Phone: +91-9426753291

---

Built with ❤️ for Spenta Engineers
