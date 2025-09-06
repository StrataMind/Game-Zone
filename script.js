// Modern GameZone JavaScript with Enhanced Interactions
class ModernGameZone {
    constructor() {
        this.games = [
            {
                title: "9x9 Tic-Tac-Toe",
                description: "Extended strategy gameplay on a 9x9 grid with challenging AI opponents and multiple difficulty levels.",
                image: "Images/9x9_Tic-Tac_Game.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Strategy", "Logic", "AI"],
                category: "strategy",
                url: "https://surajsk2003.github.io/9x9-Tic-Tac-game/"
            },
            {
                title: "Chess Master",
                description: "Classic chess with intuitive controls, strategic gameplay, and multiple AI difficulty levels.",
                image: "Images/Chess.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Strategy", "Classic", "Multiplayer"],
                category: "strategy",
                url: "https://surajsk2003.github.io/Chess/"
            },
            {
                title: "Minesweeper Pro",
                description: "Test your logic in this classic puzzle game with multiple difficulty levels and custom boards.",
                image: "Images/Minesweeper-Game.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Puzzle", "Logic", "Classic"],
                category: "puzzle",
                url: "https://surajsk2003.github.io/Minesweeper/"
            },
            {
                title: "Neon Snake Nexus",
                description: "Classic snake game reimagined with stunning neon graphics and smooth, responsive gameplay.",
                image: "Images/NEON_SNAKE_NEXUS.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Arcade", "Neon", "Classic"],
                category: "arcade",
                url: "https://surajsk2003.github.io/Neon-Snake-Nexus/"
            },
            {
                title: "Rock Paper Scissors",
                description: "The timeless game of chance and strategy with a modern interface and AI opponent.",
                image: "Images/Rock-Paper-Scissors.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Arcade", "Classic", "Quick"],
                category: "arcade",
                url: "https://surajsk2003.github.io/Rock-Paper-Scissors/"
            },
            {
                title: "Typing Speed Challenge",
                description: "Test and improve your typing speed and accuracy with this engaging challenge and analytics.",
                image: "Images/Typing_Speed_Challenge.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Skill", "Challenge", "Educational"],
                category: "puzzle",
                url: "https://surajsk2003.github.io/Typing-Speed-Challenge/"
            },
            {
                title: "Tricore Adventure",
                description: "An engaging puzzle strategy game with unique tri-core mechanics and progressive difficulty.",
                image: "Images/Tricore_Game.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Strategy", "Unique", "Adventure"],
                category: "strategy",
                url: "https://surajsk2003.github.io/Tricore/"
            },
            {
                title: "Soccer Slime",
                description: "Fun physics-based soccer game with bouncy slime characters and dynamic gameplay.",
                image: "Images/Soccer Slime.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Sports", "Physics", "Fun"],
                category: "arcade",
                url: "https://surajsk2003.github.io/Soccer-Slime/"
            },
            {
                title: "Interactive Piano",
                description: "Virtual piano with realistic sound, multiple instruments, and recording capabilities.",
                image: "Images/Interactive Piano.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Music", "Creative", "Interactive"],
                category: "other",
                url: "https://surajsk2003.github.io/Advanced-Interactive-Piano/"
            },
            {
                title: "Ninja Adventure",
                description: "Action-packed ninja adventure with stealth mechanics, platforming, and combat.",
                image: "Images/Ninja Adventure.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Action", "Platform", "Adventure"],
                category: "arcade",
                url: "https://surajsk2003.github.io/Ninja-Adventure/"
            },
            {
                title: "MindMirror AI",
                description: "AI-powered reflective journal that helps you understand your thoughts and emotions.",
                image: "Images/MindMirror.png",
                rating: "⭐⭐⭐⭐",
                tags: ["AI", "Wellness", "Personal"],
                category: "ai",
                url: "https://surajsk2003.github.io/MindMirror---Reflective-AI-Journal/"
            },
            {
                title: "LLMystery Detective",
                description: "AI-driven detective game where you solve mysteries using advanced language models.",
                image: "Images/LLMystery.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["AI", "Mystery", "Detective"],
                category: "ai",
                url: "https://surajsk2003.github.io/LLMystery-AI-Driven-Detective-Game/"
            },
            {
                title: "2048 Elite",
                description: "Enhanced version of the classic 2048 puzzle game with power-ups and special modes.",
                image: "Images/2028_elite.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Puzzle", "Numbers", "Strategy"],
                category: "puzzle",
                url: "https://surajsk2003.github.io/2048-Elite/"
            },
            {
                title: "NeuroFlip",
                description: "Mind-bending memory game that challenges your cognitive abilities with neural patterns.",
                image: "Images/Neuroflip.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Memory", "Neural", "Cognitive"],
                category: "puzzle",
                url: "https://surajsk2003.github.io/NeuroFlip/"
            },
            {
                title: "Hangman Classic",
                description: "The timeless word guessing game with modern graphics and extensive word database.",
                image: "Images/Hangman.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Word", "Classic", "Educational"],
                category: "puzzle",
                url: "https://surajsk2003.github.io/HANGMAN/"
            },
            {
                title: "Nexus Bird",
                description: "Flappy Bird inspired game with futuristic graphics, obstacles, and power-ups.",
                image: "Images/Nexus_bird.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Arcade", "Flying", "Endless"],
                category: "arcade",
                url: "https://surajsk2003.github.io/Nexus-Bird/"
            },
            {
                title: "Neon Breakout",
                description: "Classic brick breaker game with stunning neon visuals and dynamic effects.",
                image: "Images/Breakout.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Arcade", "Neon", "Classic"],
                category: "arcade",
                url: "https://surajsk2003.github.io/NEON-BREAKOUT/"
            },
            {
                title: "Whack-A-Mole",
                description: "Fast-paced reaction game where you test your reflexes and hand-eye coordination.",
                image: "Images/Whack-A-Mole.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Reaction", "Fun", "Quick"],
                category: "arcade",
                url: "https://surajsk2003.github.io/WHACK-A-MOLE/"
            },
            {
                title: "ChromaVerse",
                description: "Immersive color-based puzzle adventure with stunning visual effects and mechanics.",
                image: "Images/ChromaVerse.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Color", "Visual", "Puzzle"],
                category: "puzzle",
                url: "https://surajsk2003.github.io/ChromaVerse/"
            },
            {
                title: "Quantum Nexus",
                description: "Sci-fi strategy game exploring quantum mechanics with mind-bending puzzle elements.",
                image: "Images/Quantum-Nexas.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Sci-Fi", "Quantum", "Strategy"],
                category: "strategy",
                url: "https://surajsk2003.github.io/Quantum-Nexus/"
            },
            {
                title: "Simon Says Memory Game",
                description: "Test your memory with this classic pattern-matching game featuring colorful sequences and progressive difficulty.",
                image: "Images/Simon-Says-Memory-Game.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Memory", "Pattern", "Classic"],
                category: "puzzle",
                url: "https://surajsk2003.github.io/Simon-Says---Memory-Game/"
            },
            {
                title: "Tower Stack Game",
                description: "Stack blocks as high as possible in this precision-based arcade game with physics and timing challenges.",
                image: "Images/Tower-Stack-Game.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Stacking", "Precision", "Physics"],
                category: "arcade",
                url: "https://surajsk2003.github.io/Tower-Stack-Game/"
            },
            {
                title: "Reaction Time Tester",
                description: "Challenge your reflexes and measure your reaction time with this fast-paced testing game.",
                image: "Images/Reaction-Time-Tester.png",
                rating: "⭐⭐⭐⭐",
                tags: ["Reaction", "Speed", "Testing"],
                category: "arcade",
                url: "https://surajsk2003.github.io/Reaction-Time-Tester/"
            },
            {
                title: "Cosmic Pong Neural Arena",
                description: "Futuristic pong game with AI opponents, neural network visuals, and cosmic space themes.",
                image: "Images/Cosmic-Pong-Neural-Arena.png",
                rating: "⭐⭐⭐⭐⭐",
                tags: ["Pong", "AI", "Cosmic", "Neural"],
                category: "ai",
                url: "https://surajsk2003.github.io/Cosmic-Pong---Neural-Arena/"
            }
        ];

        this.currentFilter = 'all';
        this.currentView = 'grid';
        this.searchTimeout = null;
        this.isLoading = true;

        this.init();
    }

    async init() {
        try {
            await this.initializeApp();
            this.setupEventListeners();
            this.loadGames();
            this.setupAnimations();
            this.setupIntersectionObserver();
            this.setupScrollEffects();
            this.setupLiveBackground();
            await this.hideLoader();
        } catch (error) {
            console.error('Error initializing GameZone:', error);
            await this.hideLoader();
        }
    }

    async initializeApp() {
        // Initialize theme
        const savedTheme = localStorage.getItem('gamezone-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Preload critical images
        await this.preloadImages();
        
        // Initialize search suggestions
        this.initializeSearch();
    }

    async preloadImages() {
        const criticalImages = this.games.slice(0, 6).map(game => game.image);
        const imagePromises = criticalImages.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
            });
        });

        try {
            await Promise.all(imagePromises);
        } catch (error) {
            console.warn('Some images failed to preload:', error);
        }
    }

    async hideLoader() {
        return new Promise(resolve => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.classList.add('hidden');
                    setTimeout(() => {
                        loader.remove();
                        this.isLoading = false;
                        resolve();
                    }, 500);
                } else {
                    resolve();
                }
            }, 1500);
        });
    }

    setupEventListeners() {
        // Navigation
        this.setupNavigation();
        
        // Mobile menu
        this.setupMobileMenu();
        
        // Theme toggle
        this.setupThemeToggle();
        
        // Search
        this.setupSearch();
        
        // Filters
        this.setupFilters();
        
        // View toggle
        this.setupViewToggle();
        
        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        // Performance optimizations
        this.setupPerformanceOptimizations();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Smooth scroll with offset
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    this.closeMobileMenu();
                }
            });
        });
    }

    setupMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const nav = document.getElementById('nav');
        
        if (mobileMenu && nav) {
            mobileMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('active');
                nav.classList.toggle('mobile-active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.header')) {
                    this.closeMobileMenu();
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMobileMenu();
                }
            });
        }
    }

    closeMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const nav = document.getElementById('nav');
        
        if (mobileMenu && nav) {
            mobileMenu.classList.remove('active');
            nav.classList.remove('mobile-active');
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('gamezone-theme', newTheme);
                
                // Add haptic feedback effect
                this.addHapticFeedback(themeToggle);
                
                // Update live background for theme
                this.updateLiveBackgroundTheme(newTheme);
            });
        }
    }

    initializeSearch() {
        this.searchIndex = this.games.map((game, index) => ({
            ...game,
            searchText: `${game.title} ${game.description} ${game.tags.join(' ')} ${game.category}`.toLowerCase(),
            index
        }));
        
        // Popular search terms
        this.popularSearches = ['puzzle', 'strategy', 'arcade', 'ai', 'chess', 'snake', 'typing', 'memory'];
        this.recentSearches = JSON.parse(localStorage.getItem('gamezone-recent-searches') || '[]');
    }

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        if (searchInput && searchResults) {
            // Search input handling
            searchInput.addEventListener('input', (e) => {
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => {
                    this.handleSearch(e.target.value, searchResults);
                }, 150);
            });

            // Focus handling with suggestions
            searchInput.addEventListener('focus', () => {
                if (searchInput.value.trim()) {
                    searchResults.style.display = 'block';
                } else {
                    this.showSearchSuggestions(searchResults);
                }
            });

            // Blur handling
            searchInput.addEventListener('blur', () => {
                setTimeout(() => {
                    searchResults.style.display = 'none';
                }, 200);
            });

            // Keyboard navigation
            searchInput.addEventListener('keydown', (e) => {
                this.handleSearchKeyboard(e, searchResults);
            });

            // Clear search button
            const clearBtn = document.createElement('button');
            clearBtn.className = 'search-clear';
            clearBtn.innerHTML = '×';
            clearBtn.style.display = 'none';
            clearBtn.onclick = () => this.clearSearch(searchInput, searchResults);
            searchInput.parentElement.appendChild(clearBtn);

            // Show/hide clear button
            searchInput.addEventListener('input', () => {
                clearBtn.style.display = searchInput.value ? 'block' : 'none';
            });
        }
    }

    handleSearch(query, resultsContainer) {
        const trimmedQuery = query.trim().toLowerCase();
        
        if (trimmedQuery.length === 0) {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'none';
            this.filterGames(this.currentFilter);
            return;
        }

        // Enhanced search with scoring
        const results = this.searchIndex.map(game => {
            let score = 0;
            const title = game.title.toLowerCase();
            const description = game.description.toLowerCase();
            const tags = game.tags.map(tag => tag.toLowerCase());
            
            // Title exact match (highest priority)
            if (title === trimmedQuery) score += 100;
            else if (title.startsWith(trimmedQuery)) score += 50;
            else if (title.includes(trimmedQuery)) score += 25;
            
            // Tag matches
            tags.forEach(tag => {
                if (tag === trimmedQuery) score += 30;
                else if (tag.includes(trimmedQuery)) score += 15;
            });
            
            // Description matches
            if (description.includes(trimmedQuery)) score += 10;
            
            // Category matches
            if (game.category.includes(trimmedQuery)) score += 20;
            
            return { ...game, score };
        })
        .filter(game => game.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);

        // Update search results dropdown with highlighting
        if (results.length > 0) {
            resultsContainer.innerHTML = results.map(game => {
                const highlightedTitle = this.highlightText(game.title, trimmedQuery);
                const highlightedDesc = this.highlightText(game.description.substring(0, 80), trimmedQuery);
                
                return `
                    <div class="search-result" onclick="window.open('${game.url}', '_blank', 'noopener,noreferrer')">
                        <img src="${game.image}" alt="${game.title}" class="result-image">
                        <div class="result-info">
                            <h4>${highlightedTitle}</h4>
                            <p>${highlightedDesc}...</p>
                            <div class="result-tags">
                                ${game.tags.slice(0, 2).map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                        <div class="result-category">${game.category}</div>
                    </div>
                `;
            }).join('');
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <p>No games found for "${trimmedQuery}"</p>
                    <small>Try searching for categories like "puzzle", "arcade", or "strategy"</small>
                </div>
            `;
            resultsContainer.style.display = 'block';
        }

        // Filter visible games
        this.filterGames(this.currentFilter, trimmedQuery);
        
        // Save search query if it has results
        if (results.length > 0) {
            this.saveRecentSearch(trimmedQuery);
        }
    }

    setupFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                this.currentFilter = tab.getAttribute('data-filter');
                const searchQuery = document.getElementById('searchInput')?.value.toLowerCase() || '';
                this.filterGames(this.currentFilter, searchQuery);
                
                // Add visual feedback
                this.addHapticFeedback(tab);
            });
        });
    }

    setupViewToggle() {
        const viewBtns = document.querySelectorAll('.view-btn');
        const gamesGrid = document.getElementById('gamesGrid');
        
        viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                viewBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.currentView = btn.getAttribute('data-view');
                this.updateGridView(gamesGrid, this.currentView);
                
                // Add visual feedback
                this.addHapticFeedback(btn);
            });
        });
    }

    updateGridView(grid, view) {
        if (view === 'list') {
            grid.style.gridTemplateColumns = '1fr';
            grid.querySelectorAll('.game-card').forEach(card => {
                card.style.display = 'flex';
                card.style.alignItems = 'center';
                card.style.padding = 'var(--space-6)';
            });
        } else {
            grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
            grid.querySelectorAll('.game-card').forEach(card => {
                card.style.display = 'block';
                card.style.alignItems = 'initial';
                card.style.padding = 'var(--space-8)';
            });
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Search shortcut (Ctrl/Cmd + K)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            // Theme toggle (Ctrl/Cmd + Shift + T)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                document.getElementById('themeToggle')?.click();
            }
        });
    }

    setupPerformanceOptimizations() {
        // Optimize scroll performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 16); // ~60fps
        }, { passive: true });

        // Optimize resize performance
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Handle visibility change for performance
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Pause expensive operations when tab is hidden
                this.pauseAnimations();
            } else {
                // Resume when tab becomes visible
                this.resumeAnimations();
            }
        });
    }

    loadGames() {
        const gamesGrid = document.getElementById('gamesGrid');
        if (!gamesGrid) return;
        
        gamesGrid.innerHTML = '';
        
        this.games.forEach((game, index) => {
            const gameCard = this.createGameCard(game, index);
            gamesGrid.appendChild(gameCard);
        });
        
        this.setupGameCardAnimations();
    }

    createGameCard(game, index) {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.setAttribute('data-category', game.category);
        gameCard.style.setProperty('--delay', `${index * 0.1}s`);
        
        gameCard.innerHTML = `
            <div class="game-header">
                <img src="${game.image}" 
                     alt="${game.title}" 
                     class="game-logo" 
                     loading="lazy"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTYiIGZpbGw9IiM5NGEzYjgiLz4KPHBhdGggZD0iTTIwIDIwaDI0djI0SDIwVjIweiIgZmlsbD0iI2YxZjVmOSIvPgo8L3N2Zz4='">
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <div class="game-rating">${game.rating}</div>
                </div>
            </div>
            <p class="game-description">${game.description}</p>
            <div class="game-tags">
                ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
            </div>
            <button class="play-btn" onclick="this.parentElement.playGame('${game.url}')">
                Play Now
            </button>
        `;
        
        // Add play game method to the card
        gameCard.playGame = (url) => {
            // Add loading state
            const playBtn = gameCard.querySelector('.play-btn');
            const originalText = playBtn.textContent;
            playBtn.textContent = 'Loading...';
            playBtn.disabled = true;
            
            // Open game
            window.open(url, '_blank', 'noopener,noreferrer');
            
            // Reset button after delay
            setTimeout(() => {
                playBtn.textContent = originalText;
                playBtn.disabled = false;
            }, 2000);
        };
        
        return gameCard;
    }

    filterGames(category, searchQuery = '') {
        const gameCards = document.querySelectorAll('.game-card');
        let visibleCount = 0;
        
        gameCards.forEach((card, index) => {
            const gameCategory = card.getAttribute('data-category');
            const title = card.querySelector('.game-info h3').textContent.toLowerCase();
            const description = card.querySelector('.game-description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.game-tag')).map(tag => tag.textContent.toLowerCase());
            
            const categoryMatch = category === 'all' || gameCategory === category;
            const searchMatch = searchQuery === '' || 
                               title.includes(searchQuery) || 
                               description.includes(searchQuery) || 
                               tags.some(tag => tag.includes(searchQuery));
            
            if (categoryMatch && searchMatch) {
                this.showCard(card, visibleCount * 0.1);
                visibleCount++;
            } else {
                this.hideCard(card);
            }
        });
        
        // Update filter counts
        this.updateFilterCounts();
    }

    showCard(card, delay = 0) {
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }, delay * 1000 + 100);
    }

    hideCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }

    updateFilterCounts() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const categories = ['all', 'strategy', 'puzzle', 'arcade', 'ai'];
        
        categories.forEach(category => {
            const count = category === 'all' 
                ? this.games.length 
                : this.games.filter(game => game.category === category).length;
            
            const tab = document.querySelector(`[data-filter="${category}"] .count`);
            if (tab) {
                tab.textContent = count;
            }
        });
    }

    setupAnimations() {
        // Animate counters
        this.animateCounters();
        
        // Setup text animations
        this.setupTextAnimations();
        
        // Setup hover effects
        this.setupHoverEffects();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.metric-number[data-count]');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const start = performance.now();
            
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOutCubic * target);
                
                counter.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            requestAnimationFrame(updateCounter);
        };

        // Use Intersection Observer to trigger animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    setupTextAnimations() {
        const words = document.querySelectorAll('.word[data-text]');
        
        words.forEach((word, index) => {
            word.style.setProperty('--delay', `${index * 0.2}s`);
            
            // Add text reveal animation
            word.style.opacity = '0';
            word.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
                word.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            }, index * 200 + 500);
        });
    }

    setupHoverEffects() {
        // Enhanced button hover effects
        document.querySelectorAll('.cta-btn, .play-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                this.addButtonHoverEffect(btn);
            });
        });

        // Card hover effects with 3D transform
        document.querySelectorAll('.game-card, .feature-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                this.add3DHoverEffect(card, e);
            });
            
            card.addEventListener('mouseleave', () => {
                this.reset3DHoverEffect(card);
            });
        });
    }

    addButtonHoverEffect(btn) {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.transition = 'all 0.6s ease';
        ripple.style.pointerEvents = 'none';
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        requestAnimationFrame(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
            ripple.style.opacity = '0';
        });
        
        setTimeout(() => ripple.remove(), 600);
    }

    add3DHoverEffect(card, e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        card.style.transition = 'transform 0.1s ease';
    }

    reset3DHoverEffect(card) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        card.style.transition = 'transform 0.5s ease';
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .section-header').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            observer.observe(el);
        });
    }

    setupGameCardAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.game-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    setupScrollEffects() {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            const header = document.querySelector('.header');
            
            // Header hide/show
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            // Update navigation active state
            this.updateActiveNavigation(currentScrollY);
            
            // Parallax effect for live background
            this.updateLiveBackgroundParallax(currentScrollY);
            
            lastScrollY = currentScrollY;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        }, { passive: true });
    }

    updateActiveNavigation(scrollY) {
        const sections = ['home', 'games', 'about'];
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = 'home';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - 200;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    current = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    setupLiveBackground() {
        this.createFloatingElements();
        this.startBackgroundAnimations();
    }

    createFloatingElements() {
        const container = document.querySelector('.floating-shapes');
        if (!container) return;

        // Create additional floating elements
        for (let i = 0; i < 3; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.position = 'absolute';
            element.style.width = `${Math.random() * 100 + 50}px`;
            element.style.height = element.style.width;
            element.style.borderRadius = '50%';
            element.style.background = 'var(--gradient-primary)';
            element.style.filter = 'blur(30px)';
            element.style.opacity = '0.1';
            element.style.left = `${Math.random() * 100}%`;
            element.style.top = `${Math.random() * 100}%`;
            element.style.animation = `float ${15 + Math.random() * 10}s ease-in-out infinite`;
            element.style.animationDelay = `${Math.random() * 5}s`;
            
            container.appendChild(element);
        }
    }

    startBackgroundAnimations() {
        // Add dynamic color shifting to background elements
        setInterval(() => {
            const elements = document.querySelectorAll('.floating-element');
            elements.forEach(el => {
                const hue = Math.random() * 360;
                el.style.filter = `blur(30px) hue-rotate(${hue}deg)`;
            });
        }, 5000);
    }

    updateLiveBackgroundParallax(scrollY) {
        const parallaxElements = document.querySelectorAll('.floating-shapes::before, .floating-shapes::after');
        parallaxElements.forEach((el, index) => {
            const speed = (index + 1) * 0.5;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }

    updateLiveBackgroundTheme(theme) {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.style.setProperty('--bg-primary', 'rgba(15, 23, 42, 0.95)');
            root.style.setProperty('--bg-secondary', 'rgba(30, 41, 59, 0.8)');
        } else {
            root.style.setProperty('--bg-primary', 'rgba(255, 255, 255, 0.95)');
            root.style.setProperty('--bg-secondary', 'rgba(248, 250, 252, 0.8)');
        }
    }

    addHapticFeedback(element) {
        // Visual feedback
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 150);

        // Haptic feedback for supported devices
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }

    // Enhanced search helper methods
    highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    showSearchSuggestions(resultsContainer) {
        const suggestions = [
            ...this.recentSearches.slice(0, 3),
            ...this.popularSearches.filter(term => !this.recentSearches.includes(term)).slice(0, 5)
        ];

        if (suggestions.length > 0) {
            resultsContainer.innerHTML = `
                <div class="search-suggestions">
                    <div class="suggestions-header">Popular searches</div>
                    ${suggestions.map(term => `
                        <div class="suggestion-item" onclick="this.parentElement.parentElement.parentElement.querySelector('.search-input').value='${term}'; this.parentElement.parentElement.parentElement.querySelector('.search-input').dispatchEvent(new Event('input'));">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="m21 21-4.35-4.35"/>
                            </svg>
                            <span>${term}</span>
                        </div>
                    `).join('')}
                </div>
            `;
            resultsContainer.style.display = 'block';
        }
    }

    handleSearchKeyboard(e, resultsContainer) {
        const results = resultsContainer.querySelectorAll('.search-result, .suggestion-item');
        let currentIndex = Array.from(results).findIndex(item => item.classList.contains('selected'));

        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(currentIndex + 1, results.length - 1);
                this.updateSearchSelection(results, currentIndex);
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = Math.max(currentIndex - 1, -1);
                this.updateSearchSelection(results, currentIndex);
                break;
            case 'Enter':
                e.preventDefault();
                if (currentIndex >= 0 && results[currentIndex]) {
                    results[currentIndex].click();
                }
                break;
            case 'Escape':
                resultsContainer.style.display = 'none';
                e.target.blur();
                break;
        }
    }

    updateSearchSelection(results, selectedIndex) {
        results.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
        });
    }

    clearSearch(searchInput, searchResults) {
        searchInput.value = '';
        searchResults.style.display = 'none';
        searchInput.parentElement.querySelector('.search-clear').style.display = 'none';
        this.filterGames(this.currentFilter);
        searchInput.focus();
    }

    saveRecentSearch(query) {
        if (!query || query.length < 2) return;
        
        this.recentSearches = this.recentSearches.filter(term => term !== query);
        this.recentSearches.unshift(query);
        this.recentSearches = this.recentSearches.slice(0, 5);
        
        localStorage.setItem('gamezone-recent-searches', JSON.stringify(this.recentSearches));
    }

    handleResize() {
        // Recalculate layouts on resize
        this.updateGridView(document.getElementById('gamesGrid'), this.currentView);
    }

    pauseAnimations() {
        document.body.style.animationPlayState = 'paused';
    }

    resumeAnimations() {
        document.body.style.animationPlayState = 'running';
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new ModernGameZone();
});

// Add CSS for animated elements and contribution banner
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .search-result {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3);
        border-radius: var(--radius-lg);
        cursor: pointer;
        transition: all var(--transition-fast);
    }
    
    .search-result:hover {
        background: var(--glass-bg);
    }
    
    .result-image {
        width: 40px;
        height: 40px;
        border-radius: var(--radius-md);
        object-fit: cover;
    }
    
    .result-info h4 {
        font-size: var(--font-size-sm);
        font-weight: 600;
        margin-bottom: var(--space-1);
        color: var(--text-primary);
    }
    
    .result-info p {
        font-size: var(--font-size-xs);
        color: var(--text-muted);
    }
    
    .no-results {
        padding: var(--space-4);
        text-align: center;
        color: var(--text-muted);
        font-size: var(--font-size-sm);
    }
    
    .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--glass-bg);
        backdrop-filter: var(--backdrop-blur);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-xl);
        margin-top: var(--space-2);
        max-height: 300px;
        overflow-y: auto;
        display: none;
        z-index: 1000;
        box-shadow: var(--shadow-xl);
    }
    
    .contribution-banner {
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.08), rgba(255, 0, 110, 0.08));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 20px 24px;
        margin: 32px 0;
        backdrop-filter: blur(20px);
        position: relative;
        overflow: hidden;
    }
    
    .contribution-banner::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.03), rgba(255, 0, 110, 0.03));
        border-radius: 20px;
        z-index: -1;
    }
    
    .banner-content {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
    }
    
    .banner-icon {
        background: linear-gradient(135deg, #24292e, #1a1e22);
        border-radius: 12px;
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .banner-icon svg {
        color: #ffffff;
    }
    
    .banner-text {
        flex: 1;
        min-width: 220px;
    }
    
    .banner-text strong {
        display: block;
        color: var(--text-primary, #ffffff);
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 6px;
        background: linear-gradient(135deg, #00f5ff, #ff006e);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .banner-text span {
        color: var(--text-muted, rgba(255, 255, 255, 0.8));
        font-size: 15px;
        line-height: 1.4;
    }
    
    .contribute-btn {
        background: linear-gradient(135deg, #8b5cf6, #a855f7);
        color: white;
        padding: 12px 20px;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        flex-shrink: 0;
        border: 1px solid rgba(139, 92, 246, 0.3);
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.25);
    }
    
    .contribute-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        background: linear-gradient(135deg, #7c3aed, #9333ea);
        border-color: rgba(139, 92, 246, 0.5);
    }
    
    .contribute-btn svg {
        transition: transform 0.3s ease;
    }
    
    .contribute-btn:hover svg {
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        .contribution-banner {
            padding: 16px 20px;
            margin: 24px 0;
        }
        
        .banner-content {
            flex-direction: column;
            text-align: center;
            gap: 16px;
        }
        
        .banner-text strong {
            font-size: 16px;
        }
        
        .banner-text span {
            font-size: 14px;
        }
        
        .contribute-btn {
            align-self: stretch;
            justify-content: center;
            padding: 14px 20px;
        }
    }
`;

document.head.appendChild(dynamicStyles);

// Error handling
window.addEventListener('error', (e) => {
    console.error('GameZone Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('GameZone Promise Rejection:', e.reason);
});