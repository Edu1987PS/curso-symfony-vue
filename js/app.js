/**
 * app.js - Vue 3 Application for VB→PHP Course
 */

console.log('[VB→PHP Course] Starting app...');

const { createApp, ref, computed, onMounted } = Vue;

if (typeof Vue === 'undefined') {
  console.error('[VB→PHP Course] Vue not loaded!');
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerHTML = '<div style="padding:2rem;color:#f85149;">Error: Vue no cargó correctamente. Por favor recarga la pagina (Ctrl+Shift+R).</div>';
  });
}

// Module structure
const MODULES = [
  { id: 1, title: "Entorno de desarrollo" },
  { id: 2, title: "PHP Fundamentos" },
  { id: 3, title: "POO en PHP" },
  { id: 4, title: "Symfony Framework" },
  { id: 5, title: "Vue.js" },
  { id: 6, title: "Proyecto Final" }
];

const CATEGORY_LABELS = {
  entorno: "Entorno",
  php: "PHP",
  poo: "POO",
  symfony: "Symfony",
  vue: "Vue.js",
  proyecto: "Proyecto"
};

// Create Vue App
const app = createApp({
  setup() {
    // Store
    const store = window.CourseStore;

    // State
    const isLoggedIn = ref(false);
    const currentRoute = ref('home');
    const currentLessonId = ref(null);
    const loginForm = ref({ username: '', password: '' });
    const loginError = ref('');
    const lessonFilter = ref('all');
    const testAnswers = ref({});
    const testSubmitted = ref(false);
    const testScore = ref(null);
    const testPassed = ref(false);
    const pendingLessonId = ref(null);

    // Computed
    const totalLessons = computed(() => window.LESSONS.length);

    const completedCount = computed(() => {
      const progress = store.getProgress();
      return progress.completedLessons.length;
    });

    const globalProgress = computed(() => {
      return Math.round((completedCount.value / totalLessons.value) * 100);
    });

    const currentLesson = computed(() => {
      if (!currentLessonId.value) return null;
      return window.LESSONS.find(l => l.id === currentLessonId.value);
    });

    const prevLessonId = computed(() => {
      if (!currentLessonId.value) return null;
      const prev = currentLessonId.value - 1;
      return prev >= 1 ? prev : null;
    });

    const nextLessonId = computed(() => {
      if (!currentLessonId.value) return null;
      const next = currentLessonId.value + 1;
      return next <= totalLessons.value ? next : null;
    });

    const filteredLessons = computed(() => {
      const progress = store.getProgress();
      let lessons = window.LESSONS;

      if (lessonFilter.value === 'completed') {
        lessons = lessons.filter(l => progress.completedLessons.includes(l.id));
      } else if (lessonFilter.value === 'pending') {
        lessons = lessons.filter(l => !progress.completedLessons.includes(l.id));
      }

      return lessons;
    });

    const allQuestionsAnswered = computed(() => {
      if (!currentLesson.value || !currentLesson.value.test) return false;
      const questions = currentLesson.value.test;
      return questions.every((_, idx) => testAnswers.value[idx] !== undefined);
    });

    const modules = computed(() => {
      return MODULES.map(m => ({
        ...m,
        lessons: window.LESSONS.filter(l => l.module === m.id)
      }));
    });

    // Methods
    function checkAuth() {
      const auth = store.getAuth();
      isLoggedIn.value = !!auth;

      if (isLoggedIn.value) {
        store.updateStreak();
      }
    }

    function login() {
      const { username, password } = loginForm.value;

      if (username === store.DEFAULT_USER && password === store.DEFAULT_PASS) {
        store.saveAuth(username);
        isLoggedIn.value = true;
        loginError.value = '';
        
        // Redirect to pending lesson or dashboard
        if (pendingLessonId.value) {
          currentLessonId.value = pendingLessonId.value;
          currentRoute.value = 'lesson';
          pendingLessonId.value = null;
        } else {
          navigateTo('dashboard');
        }
      } else {
        loginError.value = 'Credenciales incorrectas. Usa: edu / curso2026';
      }
    }

    function logout() {
      store.clearAuth();
      isLoggedIn.value = false;
      currentRoute.value = 'home';
      navigateTo('home');
    }

    function navigateTo(route, params = null) {
      currentRoute.value = route;

      if (route === 'lesson' && params) {
        currentLessonId.value = parseInt(params);
        resetTest();
      }
    }

    function isLessonCompleted(lessonId) {
      return store.isLessonCompleted(lessonId);
    }

    function getCategoryLabel(category) {
      return CATEGORY_LABELS[category] || category;
    }

    function highlightCode(code, lang) {
      // Handle undefined or null code
      if (!code) {
        return '';
      }
      
      try {
        if (typeof hljs !== 'undefined' && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
        }
      } catch (e) {
        console.warn('[VB→PHP Course] Highlight error:', e);
      }
      // Fallback: escape HTML
      return String(code)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    function copyCode(code) {
      navigator.clipboard.writeText(code).then(() => {
        showToast('Codigo copiado al portapapeles', 'success');
      }).catch(() => {
        showToast('Error al copiar', 'error');
      });
    }

    function submitTest() {
      if (!currentLesson.value || !currentLesson.value.test) return;

      const questions = currentLesson.value.test;
      let correct = 0;

      questions.forEach((q, idx) => {
        if (testAnswers.value[idx] === q.correct) {
          correct++;
        }
      });

      testScore.value = Math.round((correct / questions.length) * 100);
      testPassed.value = testScore.value >= 70;
      testSubmitted.value = true;

      if (testPassed.value) {
        store.completeLesson(currentLessonId.value, testScore.value);
        showToast('Leccion completada!', 'success');
      }
    }

    function retryTest() {
      resetTest();
    }

    function resetTest() {
      testAnswers.value = {};
      testSubmitted.value = false;
      testScore.value = null;
      testPassed.value = false;
    }

    function showToast(message, type = 'success') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
        <span>${message}</span>
      `;
      container.appendChild(toast);
      lucide.createIcons();

      setTimeout(() => {
        toast.remove();
      }, 3000);
    }

    function handleHashChange() {
      const hash = window.location.hash.slice(1) || '/';
      
      // First check auth
      checkAuth();

      if (hash === '/' || hash === '') {
        currentRoute.value = isLoggedIn.value ? 'dashboard' : 'home';
      } else if (hash === '/login') {
        currentRoute.value = 'login';
      } else if (hash === '/dashboard') {
        currentRoute.value = isLoggedIn.value ? 'dashboard' : 'login';
      } else if (hash === '/lessons') {
        currentRoute.value = isLoggedIn.value ? 'lessons' : 'login';
      } else if (hash.startsWith('/lesson/')) {
        const id = hash.split('/')[2];
        if (isLoggedIn.value) {
          currentLessonId.value = parseInt(id);
          currentRoute.value = 'lesson';
          pendingLessonId.value = null;
          resetTest();
        } else {
          // Store pending lesson and redirect to login
          pendingLessonId.value = parseInt(id);
          currentRoute.value = 'login';
        }
      }
    }

    // Lifecycle
    onMounted(() => {
      checkAuth();
      handleHashChange();
      window.addEventListener('hashchange', handleHashChange);
      lucide.createIcons();
    });

    // Navigation helper (for template)
    function navigate(route, params = null) {
      navigateTo(route, params);
    }

    return {
      // State
      store,
      isLoggedIn,
      currentRoute,
      currentLessonId,
      loginForm,
      loginError,
      lessonFilter,
      testAnswers,
      testSubmitted,
      testScore,
      testPassed,

      // Computed
      totalLessons,
      completedCount,
      globalProgress,
      currentLesson,
      prevLessonId,
      nextLessonId,
      filteredLessons,
      allQuestionsAnswered,
      modules,

      // Methods
      login,
      logout,
      navigateTo,
      isLessonCompleted,
      getCategoryLabel,
      highlightCode,
      copyCode,
      submitTest,
      retryTest
    };
  }
});

// Mount app
try {
  app.mount('#app');
  console.log('[VB→PHP Course] Vue app mounted successfully');
} catch (err) {
  console.error('[VB→PHP Course] Error mounting Vue app:', err);
  document.getElementById('app').innerHTML = '<div style="padding:2rem;color:#f85149;">Error al iniciar la aplicacion. Por favor recarga la pagina.</div>';
}

// Initial icon setup
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
