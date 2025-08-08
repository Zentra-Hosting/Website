import { useState, useEffect } from 'react';
import {
  Server,
  Bot,
  Zap,
  Shield,
  Clock,
  Users,
  Check,
  ArrowRight,
  Menu,
  X,
  Play,
  Globe,
  Cpu,
  HardDrive,
  Wifi
} from 'lucide-react';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Deployment",
      description: "Deploy your Discord bots and Minecraft servers in under 60 seconds with our automated infrastructure."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security with DDoS protection, SSL certificates, and isolated environments for each instance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "99.9% Uptime SLA",
      description: "Guaranteed reliability with redundant servers across multiple data centers and automatic failover."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Expert Support",
      description: "Get help from our team of Discord and Minecraft experts whenever you need it, day or night."
    }
  ];

  const discordBotPlans = [
    {
      name: "Starter Bot",
      price: "$1.49",
      period: "/month",
      description: "Perfect for small discord bots.",
      features: [
        "512MB RAM",
        "5GB Storage",
        "Community Support",
        "99.5% Uptime SLA"
      ],
      popular: false
    },
    {
      name: "Advanced Bot",
      price: "$2.50",
      period: "/month",
      description: "Ideal for bigger discord bots.",
      features: [
        "1GB RAM",
        "25GB Storage",
        "99.9% Uptime SLA",
        "Automated Backups"
      ],
      popular: true
    },
    {
      name: "Ultimate Bot",
      price: "$4",
      period: "/month",
      description: "For large discord bots.",
      features: [
        "2GB RAM",
        "60GB Storage",
        "99.99% Uptime SLA",
        "Automated Backups",
        "Priority Queue"
      ],
      popular: false
    },
    {
      name: "Unlimited Bot",
      price: "$10",
      period: "/month",
      description: "For the largest of discord bots. (Ideal for bots in 1k+ discord servers)",
      features: [
        "6GB RAM",
        "100GB Storage",
        "99.99% Uptime SLA",
        "Automated Backups",
        "Priority Queue"
      ],
      popular: false
    }
  ];

  const minecraftServerPlans = [
    {
      name: "Dirt Plan",
      price: "$8",
      period: "/month",
      description: "Perfect for small friend groups and family servers",
      features: [
        "2GB RAM",
        "10GB SSD Storage",
        "Up to 10 Players",
        "Daily Backups"
      ],
      popular: false
    },
    {
      name: "Iron Plan",
      price: "$12",
      period: "/month",
      description: "Great for growing communities and modded servers",
      features: [
        "4GB RAM",
        "50GB SSD Storage",
        "Up to 50 Players",
        "Priority Support",
        "Daily Backups",
        "Plugin/Mod Support",
        "Custom Domain"
      ],
      popular: true
    },
    {
      name: "Diamond Plan",
      price: "$18",
      period: "/month",
      description: "For large communities and professional server networks",
      features: [
        "8GB RAM per server",
        "100GB SSD Storage",
        "Up to 200 Players",
        "24/7 Priority Support",
        "Hourly Backups",
        "Custom Domains",
        "Server Network Support"
      ],
      popular: false
    },
    {
      name: "Netherite Plan",
      price: "$25",
      period: "/month",
      description: "For large communities and professional server networks",
      features: [
        "12GB RAM per server",
        "150GB SSD Storage",
        "Unlimited Players",
        "24/7 Priority Support",
        "Hourly Backups",
        "Custom Domains",
        "Server Network Support"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Bots Hosted" },
    { number: "25K+", label: "Minecraft Servers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "150+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src={"src/assets/logo.svg"} width={35} />
              <span className="text-xl font-bold text-white">Zentra Hosting</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#support" className="text-slate-300 hover:text-white transition-colors">Support</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
              <a href="#pricing" className="block text-slate-300 hover:text-white">Pricing</a>
              <a href="#support" className="block text-slate-300 hover:text-white">Support</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Host Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Discord Bots </span>
              &
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Minecraft Servers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy, scale, and manage your Discord bots and Minecraft servers with enterprise-grade infrastructure.
              Get started in minutes with our intuitive platform trusted by thousands of developers and gamers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all flex items-center space-x-2">
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our platform provides all the tools and infrastructure you need to run successful Discord bots and Minecraft servers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Discord Bot Hosting</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Bot className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Multi-Language Support</h4>
                    <p className="text-slate-400">Support for Python, JavaScript, Java, and more with pre-configured environments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Global CDN</h4>
                    <p className="text-slate-400">Low-latency connections worldwide with edge locations in 50+ countries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wifi className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Auto-Scaling</h4>
                    <p className="text-slate-400">Automatically scale resources based on your bot's usage and demand.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Discord Bot Dashboard"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800/30 p-8 rounded-xl order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
                alt="Minecraft Server Management"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-white mb-6">Minecraft Server Hosting</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Cpu className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">High-Performance CPUs</h4>
                    <p className="text-slate-400">Latest generation processors optimized for Minecraft server performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HardDrive className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">NVMe SSD Storage</h4>
                    <p className="text-slate-400">Ultra-fast storage for quick world loading and seamless gameplay.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Unlimited Players</h4>
                    <p className="text-slate-400">No artificial player limits - scale based on your server's performance needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the perfect plan for your Discord bots and Minecraft servers. All plans include our core features with no hidden fees.
            </p>
          </div>

          {/* Discord Bot Hosting Plans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                <Bot className="w-8 h-8 text-blue-400" />
                <span>Discord Bot Hosting</span>
              </h3>
              <p className="text-lg text-slate-400">
                Reliable hosting for your Discord bots with 24/7 uptime and lightning-fast performance
              </p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {discordBotPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-xl border p-8 transition-all hover:transform hover:scale-105 ${plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-slate-700 hover:border-slate-600'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Minecraft Server Hosting Plans */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                <Server className="w-8 h-8 text-green-400" />
                <span>Minecraft Server Hosting</span>
              </h3>
              <p className="text-lg text-slate-400">
                High-performance Minecraft servers with mod support and unlimited player capacity
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {minecraftServerPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-xl border p-8 transition-all hover:transform hover:scale-105 ${plan.popular
                    ? 'border-green-500 ring-2 ring-green-500/20'
                    : 'border-slate-700 hover:border-slate-600'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Community?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join thousands of developers who trust Zentra Hosting for their Discord bots and Minecraft servers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
              Start Your Free Trial
            </button>
            <button className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zentra Hosting</span>
              </div>
              <p className="text-slate-400">
                The most reliable platform for hosting Discord bots and Minecraft servers.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Minecraft Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Zentra Hosting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;