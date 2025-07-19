import React, { useState, useEffect } from 'react';
import { X, Monitor, Globe, Chrome, Siren as Firefox, Variable as Safari, Smartphone, Laptop, MapPin, Sparkles, Rocket, Ghost, Plane as Planet, Scan, Zap, Shield, Star } from 'lucide-react';

interface BrowserInfo {
  browserName: string;
  osName: string;
  deviceType: string;
}

interface GeoLocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  loading: boolean;
  error: string | null;
}

function NumberRoll({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const decimals = 4;

  useEffect(() => {
    const start = 0;
    const end = value;
    const steps = 60;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const currentValue = start + (end - start) * progress;
      
      setDisplayValue(currentValue);

      if (current >= steps) {
        clearInterval(timer);
        setDisplayValue(end);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{displayValue.toFixed(decimals)}</span>;
}

export function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [showCoordinates, setShowCoordinates] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showTechDetails, setShowTechDetails] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [decodingStep, setDecodingStep] = useState(0);
  const [scanStep, setScanStep] = useState(0);
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    browserName: '',
    osName: '',
    deviceType: ''
  });
  
  const [location, setLocation] = useState<GeoLocation>({
    city: '',
    country: '',
    latitude: 0,
    longitude: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setLocation({
          city: data.city,
          country: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        setLocation({
          city: '',
          country: '',
          latitude: 0,
          longitude: 0,
          loading: false,
          error: 'Unable to detect location'
        });
      });

    const userAgent = navigator.userAgent;
    const browserName = detectBrowser(userAgent);
    const osName = detectOS(userAgent);
    const deviceType = detectDevice(userAgent);
    
    setBrowserInfo({ browserName, osName, deviceType });
  }, []);

  useEffect(() => {
    if (step === 2 && !location.loading) {
      setTimeout(() => setShowCoordinates(true), 500);
      
      setTimeout(() => {
        setDecodingStep(1);
        
        setTimeout(() => {
          setDecodingStep(2);
          
          setTimeout(() => {
            setDecodingStep(3);
          }, 2000);
        }, 2000);
      }, 3000);
    }
    if (step === 3) {
      const scanSequence = async () => {
        setScanStep(1);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setScanStep(2);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setScanStep(3);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setShowTechDetails(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setScanComplete(true);
      };
      
      scanSequence();
    }
  }, [step, location.loading]);

  const detectBrowser = (userAgent: string): string => {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    return 'Unknown Browser';
  };

  const detectOS = (userAgent: string): string => {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'MacOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown OS';
  };

  const detectDevice = (userAgent: string): string => {
    if (userAgent.includes('Mobile')) return 'Mobile';
    if (userAgent.includes('Tablet')) return 'Tablet';
    return 'Desktop';
  };

  const getBrowserIcon = () => {
    switch (browserInfo.browserName) {
      case 'Chrome':
        return <Chrome className="w-5 h-5" />;
      case 'Firefox':
        return <Firefox className="w-5 h-5" />;
      case 'Safari':
        return <Safari className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getDeviceIcon = () => {
    switch (browserInfo.deviceType) {
      case 'Mobile':
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Laptop className="w-5 h-5" />;
    }
  };

  const getDecodingMessage = () => {
    switch (decodingStep) {
      case 1:
        return (
          <p className="text-cyan-400 animate-fade-in">
            Initiating quantum geolocation matrix...
          </p>
        );
      case 2:
        return (
          <p className="text-purple-400 animate-fade-in">
            Translating spatial coordinates to Earth reference system...
          </p>
        );
      case 3:
        return (
          <div className="space-y-2 animate-fade-in">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-lg animate-float">
              Signal Origin Located: {location.city}, {location.country}
            </div>
            <p className="text-sm text-gray-400 italic">
              (Fascinating... a nexus of human civilization in the northern territories!)
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const getScanMessage = () => {
    switch (scanStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <Scan className="w-6 h-6 text-blue-400 animate-pulse" />
              <p className="text-blue-400">Scanning your digital aura...</p>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 animate-progress"></div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <p className="text-yellow-400">Decoding your tech essence...</p>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 animate-progress"></div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-green-400 animate-float" />
              <p className="text-green-400">✨ Digital identity revealed! ✨</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Ghost className="w-12 h-12 text-indigo-500 animate-float" />
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-float">
              Greetings, Earth Dweller! 🌎
            </h2>
            <p className="text-gray-300 animate-fade-in">
              Welcome to my cosmic portfolio! I've detected your presence in this vast universe...
            </p>
            <button
              onClick={() => setStep(2)}
              className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center gap-2 group pulse-glow px-6 py-2 rounded-full"
            >
              <span>Reveal my cosmic coordinates</span>
              <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Planet className="w-8 h-8 text-indigo-500 animate-float" />
              <h2 className="text-xl font-semibold text-gray-300">Stellar Location 🌟</h2>
            </div>
            {location.loading ? (
              <p className="text-gray-400">Scanning galactic coordinates...</p>
            ) : location.error ? (
              <p className="text-red-400">{location.error}</p>
            ) : (
              <div className="space-y-4">
                {showCoordinates && (
                  <div className="space-y-2 font-mono animate-fade-in">
                    <p className="text-green-400">
                      LAT: <NumberRoll value={location.latitude} /> °N
                    </p>
                    <p className="text-blue-400">
                      LON: <NumberRoll value={location.longitude} /> °E
                    </p>
                  </div>
                )}
                <div className="min-h-[100px] flex items-center justify-center">
                  {getDecodingMessage()}
                </div>
                {decodingStep === 3 && (
                  <button
                    onClick={() => setStep(3)}
                    className="mt-4 text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center gap-2 group animate-fade-in pulse-glow px-6 py-2 rounded-full"
                  >
                    <span>Analyze My Digital Essence</span>
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </button>
                )}
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-8 h-8 text-indigo-500 animate-spin-slow" />
              <h2 className="text-xl font-semibold text-gray-300">Digital Essence Scanner 🌌</h2>
            </div>
            
            <div className="min-h-[100px]">
              {!showTechDetails ? getScanMessage() : (
                <div className="space-y-4">
                  <div className={`space-y-3 transition-opacity duration-1000 ${scanComplete ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="cosmic-card p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-indigo-500/20">
                      <div className="flex items-center justify-center space-x-3 text-gray-300 group">
                        {getDeviceIcon()}
                        <div className="flex items-center space-x-3">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                            Cosmic Device: {browserInfo.deviceType}
                          </span>
                          <span className="text-xs text-indigo-400/60 opacity-0 group-hover:opacity-100 transition-opacity">
                            (How did we know? Space magic! 🪄)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="cosmic-card p-3 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-purple-500/20">
                      <div className="flex items-center justify-center space-x-3 text-gray-300 group">
                        {getBrowserIcon()}
                        <div className="flex items-center space-x-3">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                            Portal Type: {browserInfo.browserName}
                          </span>
                          <span className="text-xs text-purple-400/60 opacity-0 group-hover:opacity-100 transition-opacity">
                            (Your gateway to the digital universe 🌌)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="cosmic-card p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <div className="flex items-center justify-center space-x-3 text-gray-300 group">
                        <Monitor className="w-5 h-5" />
                        <div className="flex items-center space-x-3">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Command Center: {browserInfo.osName}
                          </span>
                          <span className="text-xs text-blue-400/60 opacity-0 group-hover:opacity-100 transition-opacity">
                            (Your digital command deck 🚀)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {scanComplete && (
                    <div className="space-y-4 animate-fade-in pt-4">
                      <p className="text-sm text-indigo-400/80 italic">
                        Hover over each cosmic reading to unveil the secrets of the digital universe! ✨
                      </p>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center justify-center gap-2 group cosmic-card"
                      >
                        <span>Begin Cosmic Journey</span>
                        <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg shadow-xl shadow-purple-500/20 max-w-md w-full p-6 relative border border-gray-800 cosmic-card">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-400"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}