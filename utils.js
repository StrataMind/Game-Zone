/**
 * Advanced Utilities for Game Zone
 * Includes: Performance monitoring, Analytics, Device detection, Advanced animations
 */

class GameZoneUtils {
  constructor() {
    this.performanceMonitor = new PerformanceMonitor();
    this.deviceDetector = new DeviceDetector();
    this.animationEngine = new AdvancedAnimationEngine();
    this.storageManager = new StorageManager();
    this.eventEmitter = new EventEmitter();
    this.init();
  }

  init() {
    this.setupPerformanceMonitoring();
    this.setupDeviceOptimizations();
    this.setupAdvancedFeatures();
    this.setupErrorHandling();
  }

  setupPerformanceMonitoring() {
    this.performanceMonitor.startMonitoring();
    this.performanceMonitor.on('slowFrame', this.handleSlowFrame.bind(this));
    this.performanceMonitor.on('memoryPressure', this.handleMemoryPressure.bind(this));
  }

  setupDeviceOptimizations() {
    const device = this.deviceDetector.getDeviceInfo();
    
    if (device.isLowEnd) {
      this.enablePerformanceMode();
    }
    
    if (device.isMobile) {
      this.optimizeForMobile();
    }
    
    if (device.supportsWebGL) {
      this.enableAdvancedGraphics();
    }
  }

  setupAdvancedFeatures() {
    this.setupVibrationAPI();
    this.setupGamepadAPI();
    this.setupWebShare();
    this.setupFullscreenAPI();
    this.setupPictureInPicture();
  }

  setupErrorHandling() {
    window.addEventListener('error', this.handleError.bind(this));
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
  }

  enablePerformanceMode() {
    document.body.classList.add('performance-mode');
    this.animationEngine.setPerformanceMode(true);
    console.log('Performance mode enabled');
  }

  optimizeForMobile() {
    // Reduce particle count
    this.animationEngine.setParticleCount(Math.floor(this.animationEngine.particleCount / 2));
    
    // Optimize touch interactions
    this.setupTouchOptimizations();
    
    // Reduce animation complexity
    this.animationEngine.setAnimationComplexity('low');
  }

  enableAdvancedGraphics() {
    this.animationEngine.enableWebGL();
    this.animationEngine.enableAdvancedShaders();
  }

  handleSlowFrame(frameTime) {
    console.warn(`Slow frame detected: ${frameTime}ms`);
    
    if (frameTime > 100) {
      this.animationEngine.reduceComplexity();
    }
  }

  handleMemoryPressure(memoryInfo) {
    console.warn('Memory pressure detected:', memoryInfo);
    this.performanceMonitor.triggerGarbageCollection();
    this.animationEngine.cleanup();
  }

  handleError(error) {
    console.error('JavaScript Error:', error);
    this.eventEmitter.emit('error', error);
  }

  handleUnhandledRejection(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
    this.eventEmitter.emit('unhandledRejection', event);
  }

  setupTouchOptimizations() {
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);

    // Optimize touch scrolling
    document.addEventListener('touchstart', (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, { passive: false });
  }

  setupVibrationAPI() {
    if ('vibrate' in navigator) {
      this.vibrationEnabled = true;
      console.log('Vibration API available');
    }
  }

  vibrate(pattern) {
    if (this.vibrationEnabled && this.storageManager.get('vibrationEnabled', true)) {
      navigator.vibrate(pattern);
    }
  }

  setupGamepadAPI() {
    if ('getGamepads' in navigator) {
      this.gamepadEnabled = true;
      this.setupGamepadPolling();
      console.log('Gamepad API available');
    }
  }

  setupGamepadPolling() {
    const pollGamepads = () => {
      const gamepads = navigator.getGamepads();
      
      for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad) {
          this.handleGamepadInput(gamepad);
        }
      }
      
      if (this.gamepadEnabled) {
        requestAnimationFrame(pollGamepads);
      }
    };
    
    pollGamepads();
  }

  handleGamepadInput(gamepad) {
    // Handle gamepad input for navigation and games
    const threshold = 0.3;
    
    // Left stick navigation
    if (Math.abs(gamepad.axes[0]) > threshold || Math.abs(gamepad.axes[1]) > threshold) {
      this.eventEmitter.emit('gamepadNavigation', {
        x: gamepad.axes[0],
        y: gamepad.axes[1]
      });
    }
    
    // Button presses
    gamepad.buttons.forEach((button, index) => {
      if (button.pressed) {
        this.eventEmitter.emit('gamepadButton', { button: index, value: button.value });
      }
    });
  }

  setupWebShare() {
    if ('share' in navigator) {
      this.shareEnabled = true;
      console.log('Web Share API available');
    }
  }

  async shareContent(data) {
    if (this.shareEnabled) {
      try {
        await navigator.share(data);
        return true;
      } catch (error) {
        console.error('Share failed:', error);
        return false;
      }
    }
    return false;
  }

  setupFullscreenAPI() {
    if ('requestFullscreen' in document.documentElement) {
      this.fullscreenEnabled = true;
      console.log('Fullscreen API available');
      
      document.addEventListener('fullscreenchange', () => {
        this.eventEmitter.emit('fullscreenChange', document.fullscreenElement);
      });
    }
  }

  async enterFullscreen(element = document.documentElement) {
    if (this.fullscreenEnabled) {
      try {
        await element.requestFullscreen();
        return true;
      } catch (error) {
        console.error('Fullscreen request failed:', error);
        return false;
      }
    }
    return false;
  }

  async exitFullscreen() {
    if (this.fullscreenEnabled && document.fullscreenElement) {
      try {
        await document.exitFullscreen();
        return true;
      } catch (error) {
        console.error('Exit fullscreen failed:', error);
        return false;
      }
    }
    return false;
  }

  setupPictureInPicture() {
    if ('pictureInPictureEnabled' in document) {
      this.pipEnabled = true;
      console.log('Picture-in-Picture API available');
    }
  }

  async enterPictureInPicture(videoElement) {
    if (this.pipEnabled && videoElement) {
      try {
        await videoElement.requestPictureInPicture();
        return true;
      } catch (error) {
        console.error('PiP request failed:', error);
        return false;
      }
    }
    return false;
  }
}

class PerformanceMonitor extends EventEmitter {
  constructor() {
    super();
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.fps = 0;
    this.frameTime = 0;
    this.isMonitoring = false;
  }

  startMonitoring() {
    this.isMonitoring = true;
    this.monitor();
    this.setupMemoryMonitoring();
    this.setupNetworkMonitoring();
  }

  monitor() {
    if (!this.isMonitoring) return;

    const now = performance.now();
    this.frameTime = now - this.lastTime;
    this.lastTime = now;
    this.frameCount++;

    // Calculate FPS
    if (this.frameCount % 60 === 0) {
      this.fps = Math.round(1000 / this.frameTime);
      
      if (this.fps < 30) {
        this.emit('lowFPS', this.fps);
      }
    }

    // Detect slow frames
    if (this.frameTime > 50) { // 20 FPS threshold
      this.emit('slowFrame', this.frameTime);
    }

    requestAnimationFrame(() => this.monitor());
  }

  setupMemoryMonitoring() {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        const memoryPressure = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        
        if (memoryPressure > 0.9) {
          this.emit('memoryPressure', memory);
        }
      }, 5000);
    }
  }

  setupNetworkMonitoring() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      
      connection.addEventListener('change', () => {
        this.emit('connectionChange', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        });
      });
    }
  }

  triggerGarbageCollection() {
    // Force garbage collection if available
    if (window.gc) {
      window.gc();
    }
  }

  getPerformanceMetrics() {
    return {
      fps: this.fps,
      frameTime: this.frameTime,
      memory: performance.memory,
      navigation: performance.getEntriesByType('navigation')[0],
      resources: performance.getEntriesByType('resource')
    };
  }
}

class DeviceDetector {
  constructor() {
    this.deviceInfo = this.detectDevice();
  }

  detectDevice() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    return {
      isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent),
      isTablet: /iPad|Android(?!.*Mobile)/i.test(userAgent),
      isDesktop: !/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent),
      isIOS: /iPad|iPhone|iPod/.test(userAgent),
      isAndroid: /Android/.test(userAgent),
      isSafari: /Safari/.test(userAgent) && !/Chrome/.test(userAgent),
      isChrome: /Chrome/.test(userAgent),
      isFirefox: /Firefox/.test(userAgent),
      isEdge: /Edge/.test(userAgent),
      
      // Hardware capabilities
      hasTouch: 'ontouchstart' in window,
      hasGyroscope: 'DeviceMotionEvent' in window,
      hasVibration: 'vibrate' in navigator,
      hasGamepad: 'getGamepads' in navigator,
      
      // Performance indicators
      isLowEnd: this.isLowEndDevice(),
      supportsWebGL: this.supportsWebGL(),
      supportsWebGL2: this.supportsWebGL2(),
      supportsPWA: 'serviceWorker' in navigator,
      
      // Screen info
      screenWidth: screen.width,
      screenHeight: screen.height,
      pixelRatio: window.devicePixelRatio || 1,
      orientation: screen.orientation?.type || 'unknown',
      
      // Memory
      deviceMemory: navigator.deviceMemory || 'unknown',
      hardwareConcurrency: navigator.hardwareConcurrency || 1
    };
  }

  isLowEndDevice() {
    // Heuristics for low-end device detection
    const memory = navigator.deviceMemory;
    const cores = navigator.hardwareConcurrency;
    
    if (memory && memory <= 2) return true;
    if (cores && cores <= 2) return true;
    if (window.innerWidth * window.innerHeight < 1000000) return true; // Very low resolution
    
    return false;
  }

  supportsWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
      return false;
    }
  }

  supportsWebGL2() {
    try {
      const canvas = document.createElement('canvas');
      return !!canvas.getContext('webgl2');
    } catch (e) {
      return false;
    }
  }

  getDeviceInfo() {
    return this.deviceInfo;
  }

  updateOrientation() {
    this.deviceInfo.orientation = screen.orientation?.type || 'unknown';
    return this.deviceInfo.orientation;
  }
}

class AdvancedAnimationEngine {
  constructor() {
    this.isWebGLEnabled = false;
    this.particleCount = 100;
    this.animationComplexity = 'high';
    this.performanceMode = false;
    this.activeAnimations = new Set();
  }

  setPerformanceMode(enabled) {
    this.performanceMode = enabled;
    
    if (enabled) {
      this.particleCount = Math.floor(this.particleCount / 3);
      this.animationComplexity = 'low';
      this.pauseNonEssentialAnimations();
    }
  }

  setParticleCount(count) {
    this.particleCount = Math.max(10, Math.min(500, count));
  }

  setAnimationComplexity(level) {
    this.animationComplexity = level;
    this.updateAnimationSettings();
  }

  enableWebGL() {
    this.isWebGLEnabled = true;
    console.log('WebGL animations enabled');
  }

  enableAdvancedShaders() {
    if (this.isWebGLEnabled) {
      console.log('Advanced shaders enabled');
    }
  }

  reduceComplexity() {
    this.particleCount = Math.floor(this.particleCount * 0.8);
    
    if (this.animationComplexity === 'high') {
      this.animationComplexity = 'medium';
    } else if (this.animationComplexity === 'medium') {
      this.animationComplexity = 'low';
    }
    
    this.updateAnimationSettings();
  }

  updateAnimationSettings() {
    const root = document.documentElement;
    
    switch (this.animationComplexity) {
      case 'low':
        root.style.setProperty('--animation-duration', '0.15s');
        root.style.setProperty('--particle-opacity', '0.3');
        break;
      case 'medium':
        root.style.setProperty('--animation-duration', '0.3s');
        root.style.setProperty('--particle-opacity', '0.5');
        break;
      case 'high':
        root.style.setProperty('--animation-duration', '0.5s');
        root.style.setProperty('--particle-opacity', '0.7');
        break;
    }
  }

  pauseNonEssentialAnimations() {
    document.querySelectorAll('.particle, .floating-orb, .background-effect').forEach(el => {
      el.style.animationPlayState = 'paused';
    });
  }

  resumeAnimations() {
    document.querySelectorAll('.particle, .floating-orb, .background-effect').forEach(el => {
      el.style.animationPlayState = 'running';
    });
  }

  cleanup() {
    // Remove unnecessary DOM elements to free memory
    document.querySelectorAll('.particle').forEach((particle, index) => {
      if (index >= this.particleCount) {
        particle.remove();
      }
    });
  }

  createMorphingAnimation(element, keyframes, duration = 1000) {
    const animation = element.animate(keyframes, {
      duration,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      fill: 'forwards'
    });
    
    this.activeAnimations.add(animation);
    
    animation.addEventListener('finish', () => {
      this.activeAnimations.delete(animation);
    });
    
    return animation;
  }

  createSpringAnimation(element, targetTransform, config = {}) {
    const {
      tension = 300,
      friction = 30,
      mass = 1
    } = config;
    
    // Simple spring physics implementation
    let position = 0;
    let velocity = 0;
    const target = 1;
    
    const animate = () => {
      const spring = -tension * (position - target);
      const damper = -friction * velocity;
      const acceleration = (spring + damper) / mass;
      
      velocity += acceleration * 0.016; // 60fps
      position += velocity * 0.016;
      
      element.style.transform = `${targetTransform} scale(${position})`;
      
      if (Math.abs(velocity) > 0.01 || Math.abs(position - target) > 0.01) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }
}

class StorageManager {
  constructor() {
    this.prefix = 'gamezone_';
    this.supportedAPIs = this.checkStorageSupport();
  }

  checkStorageSupport() {
    const support = {
      localStorage: this.supportsLocalStorage(),
      sessionStorage: this.supportsSessionStorage(),
      indexedDB: this.supportsIndexedDB(),
      webSQL: this.supportsWebSQL()
    };
    
    console.log('Storage support:', support);
    return support;
  }

  supportsLocalStorage() {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  supportsSessionStorage() {
    try {
      const test = '__test__';
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  supportsIndexedDB() {
    return 'indexedDB' in window;
  }

  supportsWebSQL() {
    return 'openDatabase' in window;
  }

  set(key, value, persistent = true) {
    const fullKey = this.prefix + key;
    const serializedValue = JSON.stringify(value);
    
    try {
      if (persistent && this.supportedAPIs.localStorage) {
        localStorage.setItem(fullKey, serializedValue);
      } else if (this.supportedAPIs.sessionStorage) {
        sessionStorage.setItem(fullKey, serializedValue);
      }
      return true;
    } catch (e) {
      console.error('Storage set failed:', e);
      return false;
    }
  }

  get(key, defaultValue = null) {
    const fullKey = this.prefix + key;
    
    try {
      let value = null;
      
      if (this.supportedAPIs.localStorage) {
        value = localStorage.getItem(fullKey);
      } else if (this.supportedAPIs.sessionStorage) {
        value = sessionStorage.getItem(fullKey);
      }
      
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      console.error('Storage get failed:', e);
      return defaultValue;
    }
  }

  remove(key) {
    const fullKey = this.prefix + key;
    
    try {
      if (this.supportedAPIs.localStorage) {
        localStorage.removeItem(fullKey);
      }
      if (this.supportedAPIs.sessionStorage) {
        sessionStorage.removeItem(fullKey);
      }
      return true;
    } catch (e) {
      console.error('Storage remove failed:', e);
      return false;
    }
  }

  clear() {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
      
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith(this.prefix)) {
          sessionStorage.removeItem(key);
        }
      });
      
      return true;
    } catch (e) {
      console.error('Storage clear failed:', e);
      return false;
    }
  }

  getStorageUsage() {
    let totalSize = 0;
    
    try {
      for (let key in localStorage) {
        if (key.startsWith(this.prefix)) {
          totalSize += localStorage[key].length;
        }
      }
    } catch (e) {
      console.error('Failed to calculate storage usage:', e);
    }
    
    return totalSize;
  }
}

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event, callback) {
    if (!this.events[event]) return;
    
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    
    this.events[event].forEach(callback => {
      try {
        callback(...args);
      } catch (error) {
        console.error('Event callback error:', error);
      }
    });
  }

  once(event, callback) {
    const onceCallback = (...args) => {
      callback(...args);
      this.off(event, onceCallback);
    };
    
    this.on(event, onceCallback);
  }
}

// Initialize utilities
window.gameZoneUtils = new GameZoneUtils();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GameZoneUtils,
    PerformanceMonitor,
    DeviceDetector,
    AdvancedAnimationEngine,
    StorageManager,
    EventEmitter
  };
}