import React, { useState, useEffect } from 'react';
import { Mail, Copy } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TypewriterText from './components/TypewriterText';
import BlinkingDot from './components/BlinkingDot';
import SocialIcons from './components/SocialIcons';
import ProjectCard from './components/ProjectCard';
import StoreItem from './components/StoreItem';
import ArticleItem from './components/ArticleItem';
import CursorGlow from './components/CursorGlow';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dean@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 font-sans flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Cursor glow effect */}
      <CursorGlow />
      
      <div className="flex-1">
        <div className="max-w-[640px] mx-auto px-4 py-8">
          {/* Time */}
          <div className="text-center text-gray-400 text-sm mb-6">
            <TypewriterText text="11:34 PM" />
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover mb-6 hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-white text-3xl font-medium mb-2 hover:text-gray-100 transition-colors">Dean Smith</h1>
            <p className="text-gray-400 text-lg mb-6 hover:text-gray-300 transition-colors">Head of design at Alpha</p>
            
            <div className="flex items-center mb-8">
              <BlinkingDot />
              <span className="text-gray-400 text-sm hover:text-gray-300 transition-colors">Available for new opportunities</span>
            </div>
            
            <SocialIcons />
            
            <div className="flex space-x-4 mb-6">
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium flex items-center hover:bg-gray-200 transition-colors">
                Contact me
                <Mail className="w-4 h-4 ml-2" />
              </button>
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">or</span>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="bg-transparent border border-gray-700 text-gray-300 px-6 py-3 rounded-full text-sm font-medium flex items-center hover:bg-gray-800 transition-colors"
              >
                Copy email
                <Copy className="w-4 h-4 ml-2" />
                {copied && <span className="ml-2 text-xs text-green-500">Copied!</span>}
              </button>
            </div>
            
            <div className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
              <TypewriterText text="NYC, USA · 40.6892° N, 74.0445° W" />
            </div>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <div className="flex mb-6">
              <div className="w-20 text-gray-500 text-sm">About</div>
              <div className="flex-1 space-y-4">
                <p className="text-gray-300 text-sm hover:text-white transition-colors">
                  I'm Dean Smith, a Head of Design specializing in building beautiful and functional interfaces.
                </p>
                <p className="text-gray-300 text-sm hover:text-white transition-colors">
                  With over 8 years of experience in the field, I take pride in delivering elegant design solutions that exceed client expectations.
                </p>
                <p className="text-gray-300 text-sm hover:text-white transition-colors">
                  Whether it's collaborating with cross-functional teams or leading design projects, my attention to detail and dedication to excellence has earned me a reputation for delivering exceptional results.
                </p>
              </div>
            </div>
          </div>

          {/* Work Section */}
          <div className="mb-12">
            <div className="flex mb-6">
              <div className="w-20 text-gray-500 text-sm">Work</div>
              <div className="flex-1 space-y-6">
                <ProjectCard 
                  title="Design System for Enterprise Applications"
                  imageUrl="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                />
                
                <ProjectCard 
                  title="Mobile Banking App Redesign"
                  imageUrl="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
                
                <ProjectCard 
                  title="E-commerce Website Redesign"
                  imageUrl="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
                
                <div className="flex items-center justify-end">
                  <a href="#" className="text-gray-400 text-sm flex items-center hover:text-white transition-colors group">
                    View all
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Store Section */}
          <div className="mb-12">
            <div className="flex mb-6">
              <div className="w-20 text-gray-500 text-sm">Store</div>
              <div className="flex-1 space-y-4">
                <StoreItem 
                  title="Design System Framework"
                  description="A high quality design template"
                  price="$49"
                  icon="template"
                />
                
                <StoreItem 
                  title="UI Design Course 1.1"
                  description="Video course to get started with UI Design"
                  price="$99"
                  icon="video"
                />
                
                <StoreItem 
                  title="Design Wallpapers"
                  description="100+ wallpapers generated with design themes"
                  price="$8"
                  icon="image"
                />
                
                <div className="flex items-center justify-end">
                  <a href="#" className="text-gray-400 text-sm flex items-center hover:text-white transition-colors group">
                    View all
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Writing Section */}
          <div className="mb-12">
            <div className="flex mb-6">
              <div className="w-20 text-gray-500 text-sm">Writing</div>
              <div className="flex-1 space-y-6">
                <ArticleItem 
                  date="01/01/2023"
                  title="The Intersection of Design and Technology: Creating User-Centric Solutions in the Digital Age"
                  tag="DESIGN"
                />
                
                <ArticleItem 
                  date="12/15/2022"
                  title="Designing for the Future: Exploring the Role of AI and Crypto in Product Design"
                  tag="PROCESS"
                />
                
                <ArticleItem 
                  date="11/30/2022"
                  title="Design Systems and Scalability: Opportunities and Challenges for Designers in the Enterprise"
                  tag="SYSTEMS"
                />
                
                <div className="flex items-center justify-end">
                  <a href="#" className="text-gray-400 text-sm flex items-center hover:text-white transition-colors group">
                    View all
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-12 flex justify-center">
            <div className="max-w-md w-full">
              <div className="flex justify-center mb-4">
                <Mail className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-white text-center text-lg font-medium mb-2 hover:text-gray-100 transition-colors">Subscribe to my newsletter</h3>
              <p className="text-gray-400 text-center text-sm mb-6 hover:text-gray-300 transition-colors">
                I send out a biweekly newsletter where I share updates on my latest case studies, essays and projects.
              </p>
              <div className="flex mb-2">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="flex-1 bg-transparent border-b border-gray-700 text-white px-2 py-2 focus:outline-none focus:border-gray-500 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-white text-black px-6 py-2 font-medium text-sm hover:bg-gray-200 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-center text-xs hover:text-gray-400 transition-colors">
                Join 1400+ subscribers
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-xs space-y-4">
            <p className="hover:text-gray-400 transition-colors">© 2023 Dean Smith</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">Become an affiliate</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-400 transition-colors">Purchase template</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
