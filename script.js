/**
 * Advanced Modern Game Zone JavaScript
 * Features: Particle System, Advanced Animations, Dynamic Content, Performance Optimizations
 */

class GameZone {
  constructor() {
    this.init();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupParticleSystem();
    this.setupCursorEffects();
    this.loadGames();
  }

  async init() {
    // Initialize loading screen
    await this.showLoadingScreen();
    
    // Initialize theme
    this.initializeTheme();
    
    // Initialize smooth scrolling
    this.initializeSmoothScrolling();
    
    // Initialize navbar scroll effect
    this.initializeNavbarScroll();
    
    // Initialize background effects
    this.initializeBackgroundEffects();
    
    // Hide loading screen after initialization
    this.hideLoadingScreen();
  }

  showLoadingScreen() {
    return new Promise((resolve) => {
      const loadingScreen = document.getElementById('loadingScreen');
      const progressBar = document.querySelector('.progress-bar');
      let progress = 0;

      const updateProgress = () => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          progressBar.style.width = `${progress}%`;
          setTimeout(() => resolve(), 500);
        } else {
          progressBar.style.width = `${progress}%`;
          setTimeout(updateProgress, 100);
        }
      };

      updateProgress();
    });
  }

  hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      document.body.classList.add('loaded');
    }, 500);
  }

  setupEventListeners() {
    // Navigation events
    this.setupNavigationEvents();
    
    // Search events
    this.setupSearchEvents();
    
    // Theme events
    this.setupThemeEvents();
    
    // Background events
    this.setupBackgroundEvents();
    
    // Button events
    this.setupButtonEvents();
    
    // Scroll events
    this.setupScrollEvents();
    
    // Game filter events
    this.setupGameFilterEvents();
    
    // Window events
    window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
  }

  setupNavigationEvents() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        this.smoothScrollToSection(section);
        this.setActiveNavLink(link);
      });
    });

    menuToggle?.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  setupSearchEvents() {
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    searchBtn?.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput?.focus(), 300);
    });

    searchClose?.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });

    searchOverlay?.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });

    searchInput?.addEventListener('input', this.debounce((e) => {
      this.performSearch(e.target.value);
    }, 300));

    // Escape key to close search
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
      }
    });
  }

  setupThemeEvents() {
    const themeBtn = document.getElementById('themeBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-option');

    themeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('show');
    });

    themeOptions.forEach(option => {
      option.addEventListener('click', () => {
        const theme = option.getAttribute('data-theme');
        this.setTheme(theme);
        themeDropdown.classList.remove('show');
      });
    });

    document.addEventListener('click', () => {
      themeDropdown.classList.remove('show');
    });
  }

  setupBackgroundEvents() {
    const bgBtn = document.getElementById('bgBtn');
    const bgDropdown = document.getElementById('bgDropdown');
    const bgOptions = document.querySelectorAll('.bg-option');

    bgBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      bgDropdown.classList.toggle('show');
    });

    bgOptions.forEach(option => {
      option.addEventListener('click', () => {
        const bg = option.getAttribute('data-bg');
        this.setBackground(bg);
        bgDropdown.classList.remove('show');
      });
    });

    document.addEventListener('click', () => {
      bgDropdown.classList.remove('show');
    });
  }

  setupButtonEvents() {
    const exploreBtn = document.getElementById('exploreBtn');
    const watchTrailerBtn = document.getElementById('watchTrailerBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const scrollToTopBtn = document.getElementById('scrollToTop');

    exploreBtn?.addEventListener('click', () => {
      this.smoothScrollToSection('games');
    });

    watchTrailerBtn?.addEventListener('click', () => {
      this.showTrailerModal();
    });

    loadMoreBtn?.addEventListener('click', () => {
      this.loadMoreGames();
    });

    scrollToTopBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  setupScrollEvents() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn?.classList.add('visible');
      } else {
        scrollToTopBtn?.classList.remove('visible');
      }
    });
  }

  setupGameFilterEvents() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        this.filterGames(filter);
      });
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animate counters
          if (entry.target.classList.contains('stat-number')) {
            this.animateCounter(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe sections for animations
    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    // Observe counters
    document.querySelectorAll('.stat-number').forEach(el => {
      observer.observe(el);
    });
  }

  setupParticleSystem() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() * 60 + 200; // Blue to purple range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Pulse effect
        this.opacity += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.01;
        this.opacity = Math.max(0.1, Math.min(0.7, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `hsl(${this.hue}, 70%, 60%)`;
        ctx.shadowColor = `hsl(${this.hue}, 70%, 60%)`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 8000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = `hsl(${particle.hue}, 70%, 60%)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Pause animation when not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });
  }

  setupCursorEffects() {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    
    if (!cursor || !cursorFollower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    });

    // Smooth follower animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .game-card, .feature-card');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(1.5)';
        cursorFollower.style.transform += ' scale(1.2)';
        cursorFollower.style.opacity = '0.8';
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
        cursorFollower.style.transform = cursorFollower.style.transform.replace(' scale(1.2)', '');
        cursorFollower.style.opacity = '0.5';
      });
    });
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('gameZoneTheme') || 'dark';
    this.setTheme(savedTheme);
  }

  setTheme(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    // Remove existing theme classes
    document.documentElement.removeAttribute('data-theme');
    
    // Apply new theme
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.textContent = '☀️';
    } else if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (!prefersDark) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
      themeIcon.textContent = '🔄';
    } else {
      themeIcon.textContent = '🌙';
    }
    
    // Update active option
    themeOptions.forEach(option => {
      option.classList.toggle('active', option.getAttribute('data-theme') === theme);
    });
    
    localStorage.setItem('gameZoneTheme', theme);
  }

  initializeSmoothScrolling() {
    // Add smooth scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  initializeNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    });
  }

  initializeBackgroundEffects() {
    const savedBackground = localStorage.getItem('gameZoneBackground') || 'gradient';
    this.setBackground(savedBackground);
  }

  setBackground(background) {
    const backgrounds = ['gradient', 'mesh', 'neural', 'geometric'];
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

  smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const targetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  setActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    activeLink.classList.add('active');
  }

  animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const start = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (target - startValue) * easeProgress;
      
      if (target < 10) {
        element.textContent = current.toFixed(1);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target < 10 ? target.toFixed(1) : target.toLocaleString();
      }
    };
    
    requestAnimationFrame(animate);
  }

  async loadGames() {
    const gamesData = [
      {
        id: 1,
        title: "9x9 Tic-Tac-Toe",
        description: "The classic Tic-Tac-Toe expanded to a challenging 9x9 grid with strategic depth.",
        image: "Images/9x9_Tic-Tac_Game.png",
        rating: 4.8,
        category: "strategy",
        tags: ["Strategy", "Extended"],
        url: "https://surajsk2003.github.io/9x9-Tic-Tac-game/"
      },
      {
        id: 2,
        title: "Chess Master",
        description: "Classic chess game with intuitive controls and strategic gameplay.",
        image: "Images/Chess.png",
        rating: 4.9,
        category: "strategy",
        tags: ["Strategy", "Classic"],
        url: "https://surajsk2003.github.io/Chess/"
      },
      {
        id: 3,
        title: "Minesweeper Pro",
        description: "Test your logic and memory in this classic puzzle game with multiple difficulty levels.",
        image: "Images/Minesweeper-Game.png",
        rating: 4.7,
        category: "puzzle",
        tags: ["Puzzle", "Logic"],
        url: "https://surajsk2003.github.io/Minesweeper/"
      },
      {
        id: 4,
        title: "Neon Snake Nexus",
        description: "Classic snake game with stunning neon graphics and smooth gameplay.",
        image: "Images/NEON_SNAKE_NEXUS.png",
        rating: 4.9,
        category: "arcade",
        tags: ["Arcade", "Classic"],
        url: "https://surajsk2003.github.io/Neon-Snake-Nexus/"
      },
      {
        id: 5,
        title: "Rock Paper Scissors",
        description: "The timeless game of chance and strategy with a modern interface.",
        image: "Images/Rock-Paper-Scissors.png",
        rating: 4.5,
        category: "arcade",
        tags: ["Arcade", "Classic"],
        url: "https://surajsk2003.github.io/Rock-Paper-Scissors/"
      },
      {
        id: 6,
        title: "Typing Speed Challenge",
        description: "Test and improve your typing speed and accuracy with this fun challenge.",
        image: "Images/Typing_Speed_Challenge.png",
        rating: 4.6,
        category: "puzzle",
        tags: ["Skill", "Challenge"],
        url: "https://surajsk2003.github.io/Typing-Speed-Challenge/"
      },
      {
        id: 7,
        title: "Tricore Adventure",
        description: "An engaging puzzle strategy game with unique mechanics and challenging levels.",
        image: "Images/Tricore_Game.png",
        rating: 4.4,
        category: "strategy",
        tags: ["Strategy", "Unique"],
        url: "https://surajsk2003.github.io/Tricore/"
      },
      {
        id: 8,
        title: "Soccer Slime",
        description: "Fun physics-based soccer game with bouncy slime characters and exciting gameplay.",
        image: "Images/Soccer Slime.png",
        rating: 4.7,
        category: "arcade",
        tags: ["Sports", "Physics"],
        url: "https://surajsk2003.github.io/Soccer-Slime/"
      },
      {
        id: 9,
        title: "Interactive Piano",
        description: "Advanced virtual piano with realistic sound and multiple instruments for music creation.",
        image: "Images/Interactive Piano.png",
        rating: 4.9,
        category: "music",
        tags: ["Music", "Creative"],
        url: "https://surajsk2003.github.io/Advanced-Interactive-Piano/"
      },
      {
        id: 10,
        title: "Ninja Adventure",
        description: "Action-packed ninja adventure with stealth mechanics and challenging platforming.",
        image: "Images/Ninja Adventure.png",
        rating: 4.8,
        category: "adventure",
        tags: ["Action", "Platform"],
        url: "https://surajsk2003.github.io/Ninja-Adventure/"
      },
      {
        id: 11,
        title: "MindMirror AI",
        description: "AI-powered reflective journal that helps you understand your thoughts and emotions.",
        image: "Images/MindMirror.png",
        rating: 4.6,
        category: "ai",
        tags: ["AI", "Wellness"],
        url: "https://surajsk2003.github.io/MindMirror---Reflective-AI-Journal/"
      },
      {
        id: 12,
        title: "LLMystery Detective",
        description: "AI-driven detective game where you solve mysteries using advanced language models.",
        image: "Images/LLMystery.png",
        rating: 4.8,
        category: "ai",
        tags: ["AI", "Mystery"],
        url: "https://surajsk2003.github.io/LLMystery-AI-Driven-Detective-Game/"
      }
    ];

    this.allGames = gamesData;
    this.renderGames(gamesData);
  }

  renderGames(games) {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;

    gamesGrid.innerHTML = games.map(game => `
      <div class="game-card" data-category="${game.category}" data-aos="fade-up">
        <div class="game-header">
          <img src="${game.image}" alt="${game.title}" class="game-logo">
          <div class="game-rating">
            <div class="game-stars">${this.generateStars(game.rating)}</div>
            <div class="game-score">${game.rating}</div>
          </div>
        </div>
        <div class="game-info">
          <h3 class="game-title">${game.title}</h3>
          <p class="game-description">${game.description}</p>
          <div class="game-tags">
            ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="game-actions">
          <button class="play-btn" onclick="window.open('${game.url}', '_blank')">
            <span>Play Now</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </button>
          <button class="info-btn" onclick="gameZone.showGameInfo(${game.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
          </button>
        </div>
      </div>
    `).join('');

    // Trigger AOS animations for new elements
    this.refreshAOS();
  }

  generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + 
           (hasHalfStar ? '☆' : '') + 
           '☆'.repeat(emptyStars);
  }

  filterGames(category) {
    const filteredGames = category === 'all' 
      ? this.allGames 
      : this.allGames.filter(game => game.category === category);
    
    this.renderGames(filteredGames);
  }

  performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    if (!query.trim()) {
      searchResults.innerHTML = '';
      return;
    }

    const results = this.allGames.filter(game => 
      game.title.toLowerCase().includes(query.toLowerCase()) ||
      game.description.toLowerCase().includes(query.toLowerCase()) ||
      game.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    searchResults.innerHTML = results.length > 0 
      ? results.map(game => `
          <div class="search-result" onclick="window.open('${game.url}', '_blank')">
            <img src="${game.image}" alt="${game.title}" class="result-image">
            <div class="result-info">
              <h3 class="result-title">${game.title}</h3>
              <p class="result-description">${game.description}</p>
              <div class="result-rating">${this.generateStars(game.rating)} ${game.rating}</div>
            </div>
          </div>
        `).join('')
      : '<div class="no-results">No games found matching your search.</div>';
  }

  showGameInfo(gameId) {
    const game = this.allGames.find(g => g.id === gameId);
    if (!game) return;

    const modal = document.getElementById('gameModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
      <div class="game-modal-content">
        <div class="game-modal-header">
          <img src="${game.image}" alt="${game.title}" class="modal-game-logo">
          <div class="modal-game-info">
            <h2 class="modal-game-title">${game.title}</h2>
            <div class="modal-game-rating">
              <span class="modal-stars">${this.generateStars(game.rating)}</span>
              <span class="modal-score">${game.rating}/5</span>
            </div>
            <div class="modal-game-tags">
              ${game.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="modal-game-description">
          <p>${game.description}</p>
        </div>
        <div class="modal-game-actions">
          <button class="btn btn-primary btn-large" onclick="window.open('${game.url}', '_blank')">
            <span>Play Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    modal.classList.add('active');
  }

  showTrailerModal() {
    const modal = document.getElementById('gameModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
      <div class="trailer-modal-content">
        <h2>Game Zone Trailer</h2>
        <div class="video-placeholder">
          <div class="video-icon">🎬</div>
          <p>Experience the future of web gaming with our advanced interactive platform.</p>
          <ul class="trailer-features">
            <li>✨ Cutting-edge graphics and animations</li>
            <li>🎮 Smooth 60fps gameplay</li>
            <li>🌐 Cross-platform compatibility</li>
            <li>🤖 AI-powered experiences</li>
            <li>🏆 Achievement system</li>
          </ul>
        </div>
      </div>
    `;
    
    modal.classList.add('active');
  }

  loadMoreGames() {
    // Simulate loading more games
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const originalText = loadMoreBtn.innerHTML;
    
    loadMoreBtn.innerHTML = `
      <span>Loading...</span>
      <div class="loading-spinner"></div>
    `;
    
    setTimeout(() => {
      loadMoreBtn.innerHTML = originalText;
      // In a real app, you would fetch more games here
      console.log('More games would be loaded here');
    }, 2000);
  }

  refreshAOS() {
    // Re-initialize AOS animations for new elements
    const newElements = document.querySelectorAll('[data-aos]:not(.aos-init)');
    newElements.forEach(el => {
      el.classList.add('aos-init');
    });
  }

  handleResize() {
    // Handle responsive changes
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  }

  handleScroll() {
    // Update active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Utility functions
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.gameZone = new GameZone();
});

// Modal close functionality
document.addEventListener('click', (e) => {
  const modal = document.getElementById('gameModal');
  const modalClose = document.getElementById('modalClose');
  
  if (e.target === modal || e.target === modalClose) {
    modal.classList.remove('active');
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Escape to close modal
  if (e.key === 'Escape') {
    const modal = document.getElementById('gameModal');
    modal.classList.remove('active');
  }
  
  // Ctrl/Cmd + K to open search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const searchOverlay = document.getElementById('searchOverlay');
    searchOverlay.classList.add('active');
    setTimeout(() => {
      document.getElementById('searchInput')?.focus();
    }, 300);
  }
});

// Service Worker for PWA functionality (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }, 0);
  });
}