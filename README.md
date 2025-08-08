# Zentra Hosting

A modern SaaS platform for hosting Discord bots and Minecraft servers with enterprise-grade infrastructure.

## Features

- **Discord Bot Hosting**: Multi-language support with automated deployment
- **Minecraft Server Hosting**: High-performance servers with mod support
- **Enterprise Security**: DDoS protection and SSL certificates
- **99.9% Uptime SLA**: Guaranteed reliability with redundant servers
- **24/7 Support**: Expert assistance from Discord and Minecraft specialists

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd zentra-hosting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # React entry point
└── index.css        # Global styles with Tailwind imports

public/
└── vite.svg         # Vite logo

```

## Deployment

The project is configured for easy deployment to Netlify:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.