# Voting Platform - Beauty Contests & Artist Awards

A modern, secure voting platform for beauty contests and artist awards built with Next.js, TypeScript, and React.

## 🚀 Features

- **Beauty Contests Voting** - Browse and vote for beauty pageant contestants
- **Artist Awards Voting** - Vote for talented artists in various categories
- **Voting History** - Track your voting activity
- **Real-time Vote Counts** - See live voting statistics
- **Secure & Fair** - Transparent voting mechanism
- **Responsive Design** - Works seamlessly on all devices
- **TypeScript Support** - Fully typed for better development experience
- **Comprehensive Testing** - Jest and React Testing Library integration

## 📋 Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint
- **Version Control**: Git/GitHub

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/atoturarasheed-sterling/voting-platform.git
cd voting-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
voting-platform/
├── pages/
│   ├── api/                    # API routes
│   │   ├── contests/index.ts
│   │   ├── awards/index.ts
│   │   ├── votes/index.ts
│   │   └── health.ts
│   ├── contests/
│   ├── awards/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── src/
│   ├── components/             # Reusable React components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions
│   │   └── api.ts             # API client
│   ├── store/                  # Zustand store
│   │   └── voteStore.ts
│   └── __tests__/              # Test files
├── styles/                     # CSS modules
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── jest.config.js
└── next.config.js
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report
- `npm run lint` - Run ESLint

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## 📚 API Endpoints

### Contests
- `GET /api/contests` - Get all contests
- `GET /api/contests?id=<id>` - Get specific contest
- `POST /api/contests` - Create new contest

### Awards
- `GET /api/awards` - Get all awards
- `GET /api/awards?id=<id>` - Get specific award
- `POST /api/awards` - Create new award

### Votes
- `GET /api/votes` - Get all votes
- `POST /api/votes` - Submit a vote

### Health
- `GET /api/health` - Check API health status

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Database Configuration (when added)
# DATABASE_URL=your_database_url

# Authentication (when added)
# NEXTAUTH_SECRET=your_secret
# NEXTAUTH_URL=http://localhost:3000
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- GitHub: [@atoturarasheed-sterling](https://github.com/atoturarasheed-sterling)
- Email: atotura.rasheed@adwumatech.ai

## 🎯 Roadmap

- [ ] User authentication and profiles
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Admin dashboard
- [ ] Real-time vote updates with WebSockets
- [ ] AI-powered recommendations
- [ ] Payment integration for premium contests
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Advanced analytics

## 📚 Future Enhancements

### Phase 2
- User authentication with NextAuth.js
- Database integration (MongoDB/PostgreSQL)
- Admin panel for managing contests
- Email notifications

### Phase 3
- AI recommendations using machine learning
- Real-time WebSocket updates
- Advanced analytics dashboard
- Social media integration

---

**Built with ❤️ by the Voting Platform Team**
