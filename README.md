# Kuroco Media Sample Site

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdiverta%2Ffront_next_media&env=NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_FRONT_URL&envDescription=Kuroco%20API%20configuration%20required&envLink=https%3A%2F%2Fkuroco.app%2Fdocs%2Ftutorials%2Fkuroco-media-sample-site%2F&demo-title=Kuroco%20Media%20Sample&demo-description=A%20media%20sample%20site%20built%20with%20Next.js%20and%20Kuroco%20CMS&demo-url=https%3A%2F%2Fdev-next-media.g.kuroco-front.app%2F)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/diverta/front_next_media)

A modern media sample site built with Next.js and [Kuroco](https://kuroco.app/) headless CMS. This template demonstrates how to create a fully functional media site with content management capabilities.

## ✨ Features

- **Content Management**
  - Article list and detail pages
  - Ranking display
  - Featured articles
  - Category and tag search
  - Keyword search
- **Contact Form**
  - Dynamic form fields
  - Form submission handling
- **Member Features**
  - User registration and withdrawal
  - Login/logout functionality
  - Profile management
  - Password reminder
  - Member-only articles
  - Favorites system
- **Technical Features**
  - 📱 Responsive design
  - 🚀 SSG (Static Site Generation) for performance
  - 🔍 SEO optimized
  - 🎨 Clean, customizable styling

## 🛠 Tech Stack

- **Frontend**: Next.js 15.5.7, React 19.2.1
- **Styling**: Tailwind CSS 3.4.17, Sass 1.69.5
- **Backend**: Kuroco CMS (Headless CMS)
- **Deployment**: Vercel
- **Additional**: clsx for conditional styling

## 🚀 Getting Started

### Prerequisites

Before deploying this template, you'll need:

1. **Kuroco Account** - [Sign up for free trial](https://kuroco.app/free_trial/)
2. **Kuroco Sub-site** - Create a sub-site using the `[Template]Next Media(Default)` template
3. **GitHub Account** - For repository management

### Step 1: Set up Kuroco Backend

1. **Register for Kuroco**
   - Visit [Kuroco free trial page](https://kuroco.app/free_trial/)
   - Fill in the required information and click "Register"
   - Check your email for the registration confirmation

2. **Create a Sub-site**
   - Go to [Environment Settings] → [Site List]
   - Click [Add]
   - Set the copy source site name to `[Template]Next Media(Default)`
   - Fill in the required fields and click [Add]

3. **Note your API domain**
   - Find your API domain in Account Settings or the Endpoint List page
   - It will look like: `https://your-instance.a.kuroco.app`
   - You'll need this for the next step

For detailed setup instructions, follow the [Kuroco Media Sample Site Tutorial](https://kuroco.app/docs/tutorials/kuroco-media-sample-site/).

### Step 2: Configure Environment Variables

Before deployment, prepare your environment variables:

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_BASE_URL` | Your Kuroco API domain | `https://your-instance.a.kuroco.app` | Yes (during deployment) |
| `NEXT_PUBLIC_FRONT_URL` | Your frontend URL | `https://your-app.vercel.app` | Yes (after deployment) |

**Note:**
- `NEXT_PUBLIC_BASE_URL` can be found in Account Settings or the Endpoint List page in your Kuroco admin panel
- `NEXT_PUBLIC_FRONT_URL` will be your Vercel deployment URL - you'll add this after the initial deployment (see Step 3)

### Step 3: Deploy

Click the deploy button below to create your own copy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdiverta%2Ffront_next_media&env=NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_FRONT_URL&envDescription=Kuroco%20API%20configuration%20required&envLink=https%3A%2F%2Fkuroco.app%2Fdocs%2Ftutorials%2Fkuroco-media-sample-site%2F)

**Deployment Steps:**
1. Click the deploy button above
2. You'll be prompted to enter both environment variables:
   - `NEXT_PUBLIC_BASE_URL`: Your Kuroco API domain (from Step 2)
   - `NEXT_PUBLIC_FRONT_URL`: Leave empty for now, you'll add it after deployment
3. Complete the initial deployment
4. After deployment completes, copy your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
5. Go to your Vercel project settings → Environment Variables
6. Update `NEXT_PUBLIC_FRONT_URL` with your deployment URL
7. Redeploy the application (go to Deployments → click the three dots → Redeploy)

### Step 4: Configure CORS

After deployment, you need to configure CORS to allow your frontend to access the Kuroco API:

1. Go to [API] → [Default] in your Kuroco admin panel
2. Click "Set up CORS"
3. Add the following origins to CORS_ALLOW_ORIGINS:
   - `http://localhost:3000` (for local development)
   - `https://your-vercel-app.vercel.app` (your deployed Vercel URL)
4. Click "Save"

*Without proper CORS configuration, your frontend will not be able to fetch data from the Kuroco API, resulting in API errors.

### Step 5: Local Development (Optional)

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/diverta/front_next_media.git

# Navigate to the project directory
cd front_next_media

# Install dependencies
npm install

# Configure environment variables
# Copy .env.example to .env and edit the values
cp .env.example .env

# Edit .env file and set your environment variables:
# NEXT_PUBLIC_BASE_URL=https://your-instance.a.kuroco.app
# NEXT_PUBLIC_FRONT_URL=http://localhost:3000

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
front_next_media/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── constants/        # Application constants and configuration
│   ├── contexts/         # React context providers for state management
│   ├── fetch/            # API functions and data fetching utilities
│   └── styles/          # Sass/CSS styles
├── public/              # Static assets
└── README.md
```

## 🎨 Styling

This project uses a combination of styling approaches:

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Sass**: For custom styles and advanced CSS features
- **clsx**: For conditional class name management
- **Responsive Design**: Mobile-first approach with custom breakpoints

## 🔧 Configuration

### API Configuration

The site connects to Kuroco CMS through REST API. Configure your API settings in:

- Environment variables for production
- `.env` file for local development

### Content Management

Manage your content through the Kuroco admin panel:

1. Log in to your Kuroco instance
2. Navigate to the content management section
3. Create and edit your media content
4. Changes will trigger automatic rebuilds on Vercel

### SSG (Static Site Generation)

- Article lists and detail pages use SSG for optimal performance
- Content updates trigger automatic rebuilds on Vercel
- Reduces API requests and improves page load times

## 📚 Documentation

- [Kuroco Documentation](https://kuroco.app/docs/)
- [Kuroco Media Sample Tutorial](https://kuroco.app/docs/tutorials/kuroco-media-sample-site/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

Need help? We're here to assist you:

- **Slack Community**: [Join Kuroco Support Slack](https://join.slack.com/t/kurocosupport/shared_invite/zt-16y74m1ba-guje0SHDwpXp91hii35kRw) - Get quick help from the community
- **Support Form**: [Submit a ticket](https://kuroco.zendesk.com/) - For detailed technical support
- **Documentation**: [Kuroco Docs](https://kuroco.app/docs/) - Comprehensive guides and references
- **Issues**: [GitHub Issues](https://github.com/diverta/front_next_media/issues) - Report bugs or request features

## 🚀 What's Next?

After deployment, you can:

1. **Customize the design** - Modify Tailwind classes and Sass styles
2. **Add new features** - Extend functionality as needed
3. **Configure SEO** - Optimize meta tags and structured data
4. **Set up analytics** - Track your site performance
5. **Add custom domain** - Configure your own domain in Vercel settings
