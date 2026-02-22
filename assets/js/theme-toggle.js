/**
 * Theme Toggle System
 * - Dark mode is the default
 * - User preference is saved in localStorage
 * - Smooth transitions between themes
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'theme-preference';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  /**
   * Get the current theme from localStorage or default to dark
   */
  function getTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored || THEME_DARK;
  }

  /**
   * Set the theme on the document
   */
  function setTheme(theme) {
    if (theme === THEME_LIGHT) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleButton(theme);
  }

  /**
   * Toggle between dark and light themes
   */
  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    setTheme(newTheme);
  }

  /**
   * Update the toggle button text
   */
  function updateToggleButton(theme) {
    const button = document.getElementById('theme-toggle-btn');
    if (button) {
      if (theme === THEME_DARK) {
        button.innerHTML = '☀️ Light Mode';
        button.setAttribute('aria-label', 'Switch to light mode');
      } else {
        button.innerHTML = '🌙 Dark Mode';
        button.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  }

  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }

  /**
   * Create and inject the toggle button
   */
  function createToggleButton() {
    const button = document.createElement('button');
    button.id = 'theme-toggle-btn';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle theme');
    button.onclick = toggleTheme;
    
    document.body.appendChild(button);
    updateToggleButton(getTheme());
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      createToggleButton();
    });
  } else {
    initTheme();
    createToggleButton();
  }

  // Expose toggle function globally for manual triggering if needed
  window.toggleTheme = toggleTheme;
})();

