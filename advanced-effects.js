/**
 * Advanced Visual Effects Controller
 * Manages cyberpunk effects, particles, and advanced animations
 */

class AdvancedEffects {
  constructor() {
    this.isPerformanceMode = false;
    this.effectsEnabled = true;
    this.init();
  }

  init() {
    this.createParticleSystem();
    this.createFloatingOrbs();
    this.createDataStreams();
    this.setupAdvancedBackgrounds();
    this.setupGlitchEffects();
    this.setupQuantumParticles();
    this.setupPerformanceToggle();
  }

  createParticleSystem() {
    if (this.isPerformanceMode) return;

    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-system';
    document.body.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particleContainer.appendChild(particle);
    }
  }

  createFloatingOrbs() {
    if (this.isPerformanceMode) return;

    const orbContainer = document.createElement('div');
    orbContainer.className = 'floating-orbs';
    document.body.appendChild(orbContainer);

    // Create orbs
    for (let i = 0; i < 6; i++) {
      const orb = document.createElement('div');
      orb.className = 'orb';
      orb.style.top = Math.random() * 80 + 10 + '%';
      orb.style.left = Math.random() * 80 + 10 + '%';
      orb.style.animationDelay = Math.random() * 8 + 's';
      orbContainer.appendChild(orb);
    }
  }

  createDataStreams() {
    if (this.isPerformanceMode) return;

    // Create multiple data streams
    for (let i = 0; i < 5; i++) {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.left = Math.random() * 100 + '%';
      stream.style.animationDelay = Math.random() * 3 + 's';
      stream.style.animationDuration = (Math.random() * 2 + 2) + 's';
      document.body.appendChild(stream);
    }
  }

  setupAdvancedBackgrounds() {
    const bgEffects = document.querySelector('.bg-effects');
    if (!bgEffects) return;

    // Add matrix background
    const matrixBg = document.createElement('div');
    matrixBg.className = 'bg-matrix';
    matrixBg.id = 'bgMatrix';
    bgEffects.appendChild(matrixBg);

    // Add hologram background
    const hologramBg = document.createElement('div');
    hologramBg.className = 'bg-hologram';
    hologramBg.id = 'bgHologram';
    bgEffects.appendChild(hologramBg);

    // Add cyberpunk background
    const cyberpunkBg = document.createElement('div');
    cyberpunkBg.className = 'bg-cyberpunk';
    cyberpunkBg.id = 'bgCyberpunk';
    bgEffects.appendChild(cyberpunkBg);

    // Update background switcher
    this.updateBackgroundSwitcher();
  }

  updateBackgroundSwitcher() {
    const bgDropdown = document.getElementById('bgDropdown');
    if (!bgDropdown) return;

    // Add new background options
    const newOptions = [
      { id: 'matrix', name: '🔢 Matrix', icon: '🔢' },
      { id: 'hologram', name: '👻 Hologram', icon: '👻' },
      { id: 'cyberpunk', name: '🤖 Cyberpunk', icon: '🤖' }
    ];

    newOptions.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'bg-option';
      btn.setAttribute('data-bg', option.id);
      btn.innerHTML = `${option.icon} ${option.name.split(' ')[1]}`;
      bgDropdown.appendChild(btn);

      btn.addEventListener('click', () => {
        this.setAdvancedBackground(option.id);
        bgDropdown.classList.remove('show');
      });
    });
  }

  setAdvancedBackground(background) {
    const backgrounds = ['gradient', 'mesh', 'neural', 'geometric', 'matrix', 'hologram', 'cyberpunk'];
    const bgOptions = document.querySelectorAll('.bg-option');
    
    // Remove all active backgrounds
    backgrounds.forEach(bg => {
      const element = document.getElementById(`bg${bg.charAt(0).toUpperCase() + bg.slice(1)}`);
      element?.classList.remove('active');
    });
    
    // Activate selected background
    const selectedBg = document.getElementById(`bg${background.charAt(0).toUpperCase() + background.slice(1)}`);
    selectedBg?.classList.add('active');
    
    // Update active option
    bgOptions.forEach(option => {
      option.classList.toggle('active', option.getAttribute('data-bg') === background);
    });
    
    localStorage.setItem('gameZoneBackground', background);
  }

  setupGlitchEffects() {
    // Add glitch effect to title
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
      heroTitle.classList.add('glitch-text');
      heroTitle.setAttribute('data-text', heroTitle.textContent);
    }

    // Add neon effects to navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
      if (index % 3 === 0) link.classList.add('neon-text');
      else if (index % 3 === 1) link.classList.add('neon-text-blue');
      else link.classList.add('neon-text-pink');
    });
  }

  setupQuantumParticles() {
    if (this.isPerformanceMode) return;

    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'quantum-particles';
      
      // Create quantum particles for each card
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.setProperty('--random-x', (Math.random() - 0.5) * 100 + 'px');
        particle.style.setProperty('--random-y', (Math.random() - 0.5) * 100 + 'px');
        particleContainer.appendChild(particle);
      }
      
      card.appendChild(particleContainer);
    });
  }

  setupPerformanceToggle() {
    // Create performance toggle button
    const performanceToggle = document.createElement('button');
    performanceToggle.className = 'performance-toggle';
    performanceToggle.innerHTML = '⚡ Performance Mode';
    performanceToggle.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-xl);
      padding: var(--space-sm) var(--space-md);
      color: var(--text-secondary);
      font-size: var(--font-size-sm);
      cursor: pointer;
      transition: all var(--transition-base);
      z-index: var(--z-fixed);
      backdrop-filter: blur(10px);
    `;

    performanceToggle.addEventListener('click', () => {
      this.togglePerformanceMode();
    });

    document.body.appendChild(performanceToggle);
  }

  togglePerformanceMode() {
    this.isPerformanceMode = !this.isPerformanceMode;
    
    if (this.isPerformanceMode) {
      document.body.classList.add('performance-mode');
      this.disableHeavyEffects();
    } else {
      document.body.classList.remove('performance-mode');
      this.enableHeavyEffects();
    }

    const toggle = document.querySelector('.performance-toggle');
    toggle.innerHTML = this.isPerformanceMode ? '🚀 Full Effects' : '⚡ Performance Mode';
    toggle.style.background = this.isPerformanceMode ? 'var(--gradient-primary)' : 'var(--surface)';
    toggle.style.color = this.isPerformanceMode ? 'white' : 'var(--text-secondary)';
  }

  disableHeavyEffects() {
    // Remove particle systems
    const particleSystems = document.querySelectorAll('.particle-system, .floating-orbs, .quantum-particles');
    particleSystems.forEach(system => system.style.display = 'none');

    // Remove data streams
    const dataStreams = document.querySelectorAll('.data-stream');
    dataStreams.forEach(stream => stream.remove());

    // Disable complex animations
    const style = document.createElement('style');
    style.id = 'performance-style';
    style.textContent = `
      .performance-mode * {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
      }
      .performance-mode .bg-matrix,
      .performance-mode .bg-hologram,
      .performance-mode .bg-cyberpunk {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  enableHeavyEffects() {
    // Show particle systems
    const particleSystems = document.querySelectorAll('.particle-system, .floating-orbs, .quantum-particles');
    particleSystems.forEach(system => system.style.display = '');

    // Recreate data streams
    this.createDataStreams();

    // Remove performance style
    const performanceStyle = document.getElementById('performance-style');
    if (performanceStyle) {
      performanceStyle.remove();
    }
  }

  // Advanced button effects
  applyQuantumEffect(element) {
    element.classList.add('btn-quantum');
    
    element.addEventListener('mouseenter', () => {
      this.createQuantumRipple(element);
    });
  }

  applyHolographicEffect(element) {
    element.classList.add('btn-holographic');
  }

  createQuantumRipple(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(0, 255, 136, 0.3);
      transform: scale(0);
      animation: quantumRipple 0.6s linear;
      pointer-events: none;
    `;

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (rect.width / 2 - size / 2) + 'px';
    ripple.style.top = (rect.height / 2 - size / 2) + 'px';

    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Neural network visualization
  createNeuralNetwork(container) {
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.3';
    
    const ctx = canvas.getContext('2d');
    const nodes = [];
    const connections = [];

    // Create nodes
    for (let i = 0; i < 20; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#667eea';
        ctx.fill();
      });

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(102, 126, 234, ${(100 - distance) / 100 * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      if (!this.isPerformanceMode) {
        requestAnimationFrame(animate);
      }
    };

    container.appendChild(canvas);
    animate();
  }

  // Liquid morphing effect
  createLiquidShape(container) {
    const shape = document.createElement('div');
    shape.className = 'liquid-shape';
    shape.style.position = 'absolute';
    shape.style.top = '50%';
    shape.style.left = '50%';
    shape.style.transform = 'translate(-50%, -50%)';
    shape.style.zIndex = '-1';
    
    container.style.position = 'relative';
    container.appendChild(shape);
  }

  // Energy field effect
  createEnergyField(element) {
    element.classList.add('energy-field');
    
    const field = document.createElement('div');
    field.style.cssText = `
      position: absolute;
      inset: -20px;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
      border-radius: inherit;
      animation: energyPulse 4s ease-in-out infinite;
      pointer-events: none;
      z-index: -1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(field);
  }

  // Scan lines effect
  applyScanLines(element) {
    element.classList.add('scan-lines');
  }

  // Holographic border
  applyHoloBorder(element) {
    element.classList.add('holo-border');
  }

  // Cleanup method
  destroy() {
    const effects = document.querySelectorAll('.particle-system, .floating-orbs, .data-stream, .quantum-particles');
    effects.forEach(effect => effect.remove());
    
    const performanceToggle = document.querySelector('.performance-toggle');
    if (performanceToggle) {
      performanceToggle.remove();
    }
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    window.advancedEffects = new AdvancedEffects();
    
    // Apply effects to existing elements
    setTimeout(() => {
      const primaryButtons = document.querySelectorAll('.btn-primary');
      primaryButtons.forEach(btn => {
        if (Math.random() > 0.5) {
          window.advancedEffects.applyQuantumEffect(btn);
        } else {
          window.advancedEffects.applyHolographicEffect(btn);
        }
      });

      // Apply neural network to hero section
      const heroVisual = document.querySelector('.hero-visual');
      if (heroVisual) {
        window.advancedEffects.createNeuralNetwork(heroVisual);
      }

      // Apply energy fields to feature cards
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach((card, index) => {
        if (index % 2 === 0) {
          window.advancedEffects.createEnergyField(card);
        }
      });

      // Apply scan lines to game cards
      const gameCards = document.querySelectorAll('.game-card');
      gameCards.forEach((card, index) => {
        if (index % 3 === 0) {
          window.advancedEffects.applyScanLines(card);
        }
      });
    }, 2000);
  }
});

// Add quantum ripple keyframe
const quantumRippleStyle = document.createElement('style');
quantumRippleStyle.textContent = `
  @keyframes quantumRipple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(quantumRippleStyle);