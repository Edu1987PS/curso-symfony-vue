/**
 * Store.js - LocalStorage management for auth and progress
 */

const CourseStore = {
  // Keys
  AUTH_KEY: 'vbphp_auth',
  PROGRESS_KEY: 'vbphp_progress',
  
  // Default credentials
  DEFAULT_USER: 'edu',
  DEFAULT_PASS: 'curso2026',
  
  // Expiry (30 days)
  EXPIRY_DAYS: 30,
  
  /**
   * Get stored auth data
   */
  getAuth() {
    try {
      const data = localStorage.getItem(this.AUTH_KEY);
      if (!data) return null;
      
      const parsed = JSON.parse(data);
      const expiry = new Date(parsed.expiry);
      
      if (new Date() > expiry) {
        this.clearAuth();
        return null;
      }
      
      return parsed;
    } catch (e) {
      return null;
    }
  },
  
  /**
   * Save auth data
   */
  saveAuth(username) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + this.EXPIRY_DAYS);
    
    localStorage.setItem(this.AUTH_KEY, JSON.stringify({
      username,
      expiry: expiry.toISOString()
    }));
  },
  
  /**
   * Clear auth
   */
  clearAuth() {
    localStorage.removeItem(this.AUTH_KEY);
  },
  
  /**
   * Get stored progress
   */
  getProgress() {
    try {
      const data = localStorage.getItem(this.PROGRESS_KEY);
      if (!data) {
        return this.getDefaultProgress();
      }
      return JSON.parse(data);
    } catch (e) {
      return this.getDefaultProgress();
    }
  },
  
  /**
   * Get default progress
   */
  getDefaultProgress() {
    return {
      completedLessons: [],
      testScores: {},
      lastAccess: new Date().toISOString(),
      streak: 0,
      lastStreakDate: null
    };
  },
  
  /**
   * Save progress
   */
  saveProgress(progress) {
    localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
  },
  
  /**
   * Update streak
   */
  updateStreak() {
    const progress = this.getProgress();
    const today = new Date().toDateString();
    const lastDate = progress.lastStreakDate ? new Date(progress.lastStreakDate).toDateString() : null;
    
    if (lastDate === today) {
      // Already updated today
      return progress.streak;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastDate === yesterday.toDateString()) {
      // Consecutive day
      progress.streak += 1;
    } else if (lastDate !== today) {
      // Streak broken
      progress.streak = 1;
    }
    
    progress.lastStreakDate = new Date().toISOString();
    progress.lastAccess = new Date().toISOString();
    
    this.saveProgress(progress);
    return progress.streak;
  },
  
  /**
   * Get user
   */
  getUser() {
    const auth = this.getAuth();
    return auth ? auth.username : null;
  },
  
  /**
   * Get streak
   */
  getStreak() {
    const progress = this.getProgress();
    return progress.streak || 0;
  },
  
  /**
   * Check if lesson is completed
   */
  isLessonCompleted(lessonId) {
    const progress = this.getProgress();
    return progress.completedLessons.includes(lessonId);
  },
  
  /**
   * Mark lesson as completed
   */
  completeLesson(lessonId, score) {
    const progress = this.getProgress();
    
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
    }
    
    progress.testScores[lessonId] = score;
    progress.lastAccess = new Date().toISOString();
    
    this.saveProgress(progress);
    this.updateStreak();
  },
  
  /**
   * Get test score for lesson
   */
  getTestScore(lessonId) {
    const progress = this.getProgress();
    return progress.testScores[lessonId] || null;
  },
  
  /**
   * Reset all progress
   */
  resetProgress() {
    localStorage.removeItem(this.PROGRESS_KEY);
  }
};

// Make available globally
window.CourseStore = CourseStore;
