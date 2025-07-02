# 🌟 Campus Bazaar

<div align="center">
  <img src="./public/logo/cb-logo-remove.png" alt="Campus Bazaar Logo" width="200"/>
  
  **Where Students Trade Smart – Buy, Sell, Save**  
  *Smart Swaps, Big Savings – Welcome to Campus Bazaar!*

  [![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 📖 About Campus Bazaar

Campus Bazaar is a revolutionary **sustainable marketplace** designed specifically for college students in India. Our platform addresses two critical challenges: **financial constraints** and **campus waste** by creating a trusted ecosystem where students can buy, sell, and exchange pre-owned items.

### 🎯 Mission
To create a trusted, user-friendly platform that helps college students buy and sell second-hand items like books, electronics, and furniture, promoting affordability and a circular economy.

### 🔮 Vision  
To foster a sustainable campus culture where students across India access affordable resources, reduce waste, and build community through eco-conscious practices.

## ✨ Key Features

### 🛒 **Marketplace Functionality**
- **Buy & Sell**: Comprehensive marketplace for textbooks, electronics, furniture, clothing, and more
- **Smart Categories**: 8+ major categories including Books, Electronics, Clothing, Home & Kitchen, Gadgets
- **Product Management**: List/unlist products, edit listings, manage inventory
- **Advanced Search**: Powered by Algolia for lightning-fast product discovery

### 🔐 **Authentication & Security**
- **Secure Login/Signup**: Email verification and password authentication
- **College Email Verification**: Ensures authentic student community
- **User Profiles**: Complete profile management with profile pictures
- **Session Management**: Persistent login with Supabase Auth

### 🛍️ **Shopping Experience**
- **Shopping Cart**: Add to cart, save for later, quantity management
- **Checkout System**: Streamlined checkout with payment options
- **Order Management**: Track orders and purchase history
- **Product Reviews**: Rate and review products and sellers

### 🤖 **AI-Powered Features**
- **Gemini AI Integration**: Auto-generate product descriptions
- **Smart Pricing**: AI-suggested pricing based on market trends
- **Sustainability Scoring**: Environmental impact tracking
- **Item Condition Assessment**: AI-powered condition rating

### 🌍 **Sustainability Focus**
- **Carbon Footprint Tracking**: Monitor environmental impact
- **Waste Reduction Metrics**: Track community waste reduction
- **Eco-friendly Badges**: Reward sustainable behavior
- **Impact Visualization**: Beautiful 3D globe showing global impact

### 📱 **Modern UI/UX**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme switching with next-themes
- **Interactive Animations**: Framer Motion for smooth animations
- **3D Globe Visualization**: Three.js powered global impact display
- **Progressive Web App**: Optimized for mobile devices

## 🚀 Technology Stack

### **Frontend**
- **Framework**: Next.js 15.3.1 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion 11.15.0
- **Icons**: Tabler Icons, React Icons, Lucide React

### **Backend & Database**
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage + Google Cloud Storage
- **Real-time**: Supabase Realtime subscriptions

### **AI & Search**
- **AI**: Google Gemini 1.5 Pro for descriptions and pricing
- **Search**: Algolia for advanced product search
- **Image Processing**: AI-powered image analysis

### **Additional Integrations**
- **3D Visualization**: Three.js + React Three Fiber
- **State Management**: Zustand
- **Notifications**: React Hot Toast
- **Type Safety**: Full TypeScript implementation

## 📊 Impact & Statistics

Based on our pilot testing with **790+ students**:

- **82.7%** seeking affordable second-hand items
- **85.3%** supporting sustainability goals
- **Active marketplace** with multiple product categories
- **Trusted community** with college email verification

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Supabase account
- Google Cloud account (for storage)
- Algolia account (for search)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/campusbazaar.git
   cd campusbazaar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Google AI
   GOOGLE_API_KEY=your_google_ai_key
   
   # Algolia
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_algolia_app_id
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_algolia_search_key
   ```

4. **Database Setup**
   - Set up Supabase project
   - Run database migrations
   - Configure authentication providers

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open Application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
campusbazaar/
├── public/                 # Static assets
│   ├── logo/              # Brand logos
│   ├── category/          # Category images
│   ├── cart/              # Cart-related images
│   └── images/            # General images
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── (authentication)/  # Auth pages
│   │   ├── (home)/           # Home page
│   │   ├── (products)/       # Product pages
│   │   ├── api/              # API routes
│   │   └── about-us/         # About page
│   ├── components/           # Reusable components
│   │   ├── ui/              # UI components
│   │   └── css/             # Component styles
│   ├── actions/             # Server actions
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── providers/           # Context providers
│   ├── data/                # Static data
│   └── types/               # TypeScript definitions
├── components.json         # shadcn/ui config
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Design System

### **Colors**
- Primary: Pink/Purple gradient theme
- Secondary: Green for sustainability
- Neutral: Gray scale for text and backgrounds

### **Typography**
- Primary: Geist Sans
- Monospace: Geist Mono
- Responsive typography scaling

### **Components**
- Consistent button styles
- Form components with validation
- Modal and dialog systems
- Loading states and animations

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Code Comments Convention**
- `TODO:` - Features that need to be implemented
- `KNOW:` - Code explanations and documentation
- `DONE:` - Completed functionality (previously TODO)

### **Development Guidelines**
1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Implement responsive design
4. Add proper error handling
5. Write meaningful commit messages

### **Contribution Process**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### **Other Platforms**
- **Netlify**: Full support for Next.js
- **Railway**: Database and app hosting
- **Self-hosted**: Docker support available

## 🔒 Security & Privacy

- **Data Protection**: All user data encrypted
- **Secure Authentication**: Supabase Auth with email verification
- **File Security**: Secure image uploads with validation
- **Privacy**: No data sold to third parties

## 🌟 Future Roadmap

### **Planned Features**
- Mobile app (React Native)
- Advanced sustainability metrics
- AI-powered recommendations
- Integration with college systems
- Expanded payment options
- Community features and forums

### **AI Enhancements**
- Product condition assessment from photos
- Dynamic pricing optimization
- Fraud detection and prevention
- Personalized product recommendations

## 📞 Support & Contact

- **Website**: [Campus Bazaar](https://campusbazaar.vercel.app)
- **Email**: support@campusbazaar.com
- **GitHub**: [Issues & Feature Requests](https://github.com/your-username/campusbazaar/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Supabase** for backend infrastructure
- **Vercel** for hosting and deployment
- **All contributors** who helped build this platform
- **790+ students** who participated in our pilot testing

---

<div align="center">
  <strong>Made with ❤️ for the student community</strong>
  
  **Building a sustainable future, one trade at a time** 🌱
</div> 