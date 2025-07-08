/**
 * PWA Utilities for Game Zone
 * Handles service worker registration, push notifications, and offline functionality
 */

class PWAManager {
  constructor() {
    this.swRegistration = null;
    this.isOnline = navigator.onLine;
    this.init();
  }

  async init() {
    // Register service worker
    await this.registerServiceWorker();
    
    // Setup connection monitoring
    this.setupConnectionMonitoring();
    
    // Setup install prompt
    this.setupInstallPrompt();
    
    // Setup push notifications
    this.setupPushNotifications();
    
    // Setup background sync
    this.setupBackgroundSync();
    
    // Setup cache management
    this.setupCacheManagement();
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        this.swRegistration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });

        console.log('Service Worker registered successfully:', this.swRegistration);

        // Handle service worker updates
        this.swRegistration.addEventListener('updatefound', () => {
          const newWorker = this.swRegistration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              this.showUpdateNotification();
            }
          });
        });

        // Listen for messages from service worker
        navigator.serviceWorker.addEventListener('message', (event) => {
          this.handleServiceWorkerMessage(event);
        });

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  setupConnectionMonitoring() {
    // Monitor online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.handleOnlineStatus();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.handleOfflineStatus();
    });

    // Initial status
    this.updateConnectionIndicator();
  }

  handleOnlineStatus() {
    console.log('App is back online');
    this.updateConnectionIndicator();
    this.syncOfflineActions();
    this.showConnectionNotification('🟢 Back Online', 'success');
  }

  handleOfflineStatus() {
    console.log('App is offline');
    this.updateConnectionIndicator();
    this.showConnectionNotification('🔴 You\'re Offline', 'warning');
  }

  updateConnectionIndicator() {
    // Create or update connection indicator
    let indicator = document.getElementById('connection-indicator');
    
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'connection-indicator';
      indicator.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        z-index: 10000;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      `;
      document.body.appendChild(indicator);
    }

    if (this.isOnline) {
      indicator.style.background = 'rgba(16, 185, 129, 0.9)';
      indicator.style.color = 'white';
      indicator.textContent = '🟢 Online';
      setTimeout(() => {
        indicator.style.opacity = '0';
      }, 3000);
    } else {
      indicator.style.background = 'rgba(239, 68, 68, 0.9)';
      indicator.style.color = 'white';
      indicator.textContent = '🔴 Offline';
      indicator.style.opacity = '1';
    }
  }

  setupInstallPrompt() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      this.showInstallButton(deferredPrompt);
    });

    // Handle app installed
    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      this.hideInstallButton();
      this.showNotification('🎉 Game Zone installed successfully!', 'success');
    });
  }

  showInstallButton(deferredPrompt) {
    // Create install button
    const installBtn = document.createElement('button');
    installBtn.id = 'pwa-install-btn';
    installBtn.innerHTML = '📱 Install App';
    installBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 80px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      z-index: 10000;
      box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    `;

    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        
        deferredPrompt = null;
        this.hideInstallButton();
      }
    });

    installBtn.addEventListener('mouseenter', () => {
      installBtn.style.transform = 'translateY(-2px)';
      installBtn.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.4)';
    });

    installBtn.addEventListener('mouseleave', () => {
      installBtn.style.transform = 'translateY(0)';
      installBtn.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.3)';
    });

    document.body.appendChild(installBtn);
  }

  hideInstallButton() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
      installBtn.remove();
    }
  }

  async setupPushNotifications() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      // Request notification permission
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        console.log('Notification permission granted');
        this.subscribeToPushNotifications();
      }
    }
  }

  async subscribeToPushNotifications() {
    try {
      if (this.swRegistration) {
        const subscription = await this.swRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array('YOUR_VAPID_PUBLIC_KEY') // Replace with actual VAPID key
        });

        console.log('Push subscription:', subscription);
        
        // Send subscription to server
        await this.sendSubscriptionToServer(subscription);
      }
    } catch (error) {
      console.error('Failed to subscribe to push notifications:', error);
    }
  }

  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async sendSubscriptionToServer(subscription) {
    // This would send the subscription to your server
    console.log('Sending subscription to server:', subscription);
    
    // Example implementation:
    // await fetch('/api/push-subscription', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(subscription)
    // });
  }

  setupBackgroundSync() {
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      // Register for background sync when offline actions occur
      this.registerBackgroundSync = async (tag = 'background-sync') => {
        try {
          await this.swRegistration.sync.register(tag);
          console.log('Background sync registered');
        } catch (error) {
          console.error('Background sync registration failed:', error);
        }
      };
    }
  }

  async syncOfflineActions() {
    // Sync any offline actions when back online
    const offlineActions = this.getOfflineActions();
    
    for (const action of offlineActions) {
      try {
        await this.syncAction(action);
        this.removeOfflineAction(action.id);
      } catch (error) {
        console.error('Failed to sync action:', error);
      }
    }
  }

  getOfflineActions() {
    const actions = localStorage.getItem('offlineActions');
    return actions ? JSON.parse(actions) : [];
  }

  addOfflineAction(action) {
    const actions = this.getOfflineActions();
    actions.push({ ...action, id: Date.now(), timestamp: new Date().toISOString() });
    localStorage.setItem('offlineActions', JSON.stringify(actions));
  }

  removeOfflineAction(actionId) {
    const actions = this.getOfflineActions();
    const filteredActions = actions.filter(action => action.id !== actionId);
    localStorage.setItem('offlineActions', JSON.stringify(filteredActions));
  }

  async syncAction(action) {
    // Implement actual sync logic based on action type
    console.log('Syncing action:', action);
  }

  setupCacheManagement() {
    // Add cache management utilities
    this.clearCache = async () => {
      if (this.swRegistration) {
        this.swRegistration.active.postMessage({ type: 'CLEAR_CACHE' });
        this.showNotification('🗑️ Cache cleared successfully', 'success');
      }
    };

    this.getCacheSize = async () => {
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        const estimate = await navigator.storage.estimate();
        return {
          used: estimate.usage,
          available: estimate.quota,
          percentage: Math.round((estimate.usage / estimate.quota) * 100)
        };
      }
      return null;
    };

    // Add cache management UI
    this.addCacheManagementUI();
  }

  addCacheManagementUI() {
    // Add cache info to settings or debug panel
    const cacheInfo = document.createElement('div');
    cacheInfo.id = 'cache-info';
    cacheInfo.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 20px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px;
      border-radius: 8px;
      font-size: 12px;
      font-family: monospace;
      z-index: 10000;
      backdrop-filter: blur(10px);
      display: none;
    `;

    // Toggle visibility with keyboard shortcut
    document.addEventListener('keydown', async (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        const info = cacheInfo.style.display === 'none' ? 'block' : 'none';
        cacheInfo.style.display = info;
        
        if (info === 'block') {
          const cacheSize = await this.getCacheSize();
          if (cacheSize) {
            cacheInfo.innerHTML = `
              Cache Usage: ${(cacheSize.used / 1024 / 1024).toFixed(2)} MB<br>
              Available: ${(cacheSize.available / 1024 / 1024).toFixed(2)} MB<br>
              Used: ${cacheSize.percentage}%<br>
              <button onclick="window.pwaManager.clearCache()" style="margin-top: 5px; padding: 2px 8px; font-size: 10px;">Clear Cache</button>
            `;
          }
        }
      }
    });

    document.body.appendChild(cacheInfo);
  }

  handleServiceWorkerMessage(event) {
    const { data } = event;
    
    if (data.type === 'CACHE_UPDATED') {
      this.showNotification('📦 Content updated and cached', 'info');
    } else if (data.type === 'OFFLINE_READY') {
      this.showNotification('📱 App ready for offline use', 'success');
    }
  }

  showUpdateNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 16px 20px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      z-index: 10001;
      box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
      backdrop-filter: blur(10px);
      cursor: pointer;
      transition: all 0.3s ease;
    `;
    
    notification.innerHTML = `
      🔄 New version available!<br>
      <small style="opacity: 0.8;">Click to update</small>
    `;

    notification.addEventListener('click', () => {
      if (this.swRegistration && this.swRegistration.waiting) {
        this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
      }
    });

    document.body.appendChild(notification);

    // Auto-remove after 10 seconds
    setTimeout(() => {
      notification.remove();
    }, 10000);
  }

  showNotification(message, type = 'info') {
    this.showConnectionNotification(message, type);
  }

  showConnectionNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 20px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      z-index: 10001;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      animation: slideDown 0.3s ease;
    `;

    const colors = {
      success: 'rgba(16, 185, 129, 0.9)',
      warning: 'rgba(245, 158, 11, 0.9)',
      error: 'rgba(239, 68, 68, 0.9)',
      info: 'rgba(59, 130, 246, 0.9)'
    };

    notification.style.background = colors[type] || colors.info;
    notification.style.color = 'white';
    notification.textContent = message;

    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideUp 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
  }
`;
document.head.appendChild(style);

// Initialize PWA Manager
document.addEventListener('DOMContentLoaded', () => {
  window.pwaManager = new PWAManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PWAManager;
}