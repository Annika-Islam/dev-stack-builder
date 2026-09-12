import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ JSON Data Fetching with useEffect
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load technology data:', err);
        setLoading(false);
      });
  }, []);

  // ✅ Add to Stack (with Toast)
  const handleAddToStack = (tech) => {
    const isExist = stack.find((item) => item.id === tech.id);
    if (isExist) {
      // ✅ Duplicate Add → toast.warning
      toast.warning(`${tech.name} is already in your stack!`, { position: 'top-right' });
      return;
    }
    setStack([...stack, tech]);
    // ✅ Add → toast.success
    toast.success(`${tech.name} added to your stack!`, { position: 'top-right' });
  };

  // ✅ Remove single item (with Toast)
  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      // ✅ Remove → toast.info
      toast.info(`${itemToRemove.name} removed from stack.`, { position: 'top-right' });
    }
  };

  // ✅ Remove All (with Toast)
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    // ✅ Remove All → toast.error
    toast.error('All technologies removed from stack!', { position: 'top-right' });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* ✅ ToastContainer যোগ করা হয়েছে */}
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-black">
            Explore the <span className="bg-brand-gradient bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-1">Select technologies to curate your custom dev stack.</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <span className="loading loading-spinner loading-lg text-pink-500"></span>
            <p className="text-gray-500 font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={handleAddToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <YourStack
                stackItems={stack}
                onRemoveFromStack={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

     
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <img 
                src="/logo-text.png" 
                alt="Dev Stack Logo" 
                className="w-40 h-8 object-contain"
              />
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Curated tools, technologies, and resources for developers building modern software.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-sm font-semibold text-black hover:text-pink-500 transition-colors">GitHub</a>
                <a href="#" className="text-sm font-semibold text-black hover:text-pink-500 transition-colors">Twitter</a>
                <a href="#" className="text-sm font-semibold text-black hover:text-pink-500 transition-colors">LinkedIn</a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Home</a></li>
                <li><a href="#technologies" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">About</a></li>
                <li><a href="#contact" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Contact</a></li>
                <li><a href="#careers" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-400 hover:text-pink-500 transition-colors">Privacy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-pink-500 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;