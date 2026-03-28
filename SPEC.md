# SPEC.md — Curso Interactivo: De VB.NET a Symfony + Vue.js

## 1. Concepto & Visión

Plataforma de aprendizaje inmersiva para programadores VB.NET que quieren transit a PHP/Symfony/Vue.js. El curso se siente como un entorno de desarrollo moderno, no como una slideshow anticuada. Cada lección es una experiencia práctica con código real, comparativas lado a lado, y tests que desbloquean progreso. El tono es directo, técnico, sin academese.

**Público objetivo:** Programador VB.NET profesional que quiere diversificar a backend PHP con Symfony y frontend Vue.js.

---

## 2. Design Language

### Aesthetic Direction
Inspiración: IDE moderno (VS Code Dark+) mezclado con academia. Fondo oscuro tipo terminal, acentos de color en código, tipografía monospace para código y sans-serif humanista para texto.

### Color Palette
```
--bg-primary:      #0d1117   (fondo principal, tipo GitHub Dark)
--bg-secondary:    #161b22   (cards, panels)
--bg-code:         #1e2530   (bloques de código)
--border:          #30363d   (bordes sutiles)
--text-primary:    #e6edf3   (texto principal)
--text-secondary:  #8b949e   (texto secundario)
--accent-blue:     #58a6ff   (enlaces, highlights)
--accent-green:    #3fb950   (éxito, código VB.NET)
--accent-purple:   #a371f7   (código PHP)
--accent-orange:   #d29922   (warnings, notas)
--accent-red:      #f85149   (errores, test fallido)
```

### Typography
- **Títulos:** Inter (Google Fonts), 600-700 weight
- **Cuerpo:** Inter, 400 weight
- **Código:** JetBrains Mono (Google Fonts), 400-500 weight
- **Fallbacks:** system-ui, -apple-system, sans-serif / monospace

### Spatial System
- Base unit: 8px
- Card padding: 24px
- Gap entre secciones: 32px
- Border radius: 8px (cards), 4px (botones, inputs)

### Motion Philosophy
- Transiciones suaves de 200-300ms ease-out
- Hover en cards: elevación sutil (box-shadow)
- Progress bar: animación de llenado 600ms
- Código "typewriter" en ejemplos (opcional, subtle)

### Visual Assets
- Iconos: Lucide Icons (CDN)
- Logo: Texto "VB→PHP" estilizado (CSS, no imagen)
- Decorativos: Líneas de código como background pattern (muy sutil)

---

## 3. Layout & Structure

### Arquitectura SPA (Single Page Application)
```
index.html
├── Header fijo (logo + nav: Lecciones | Dashboard | Login)
├── Main content (router-view)
│   ├── LoginView (si no auth)
│   ├── DashboardView (resumen progreso global)
│   └── LeccionView (lección individual + test)
└── Footer (minimal)
```

### Responsive Strategy
- Mobile-first
- Breakpoints: 768px (tablet), 1024px (desktop)
- Código siempre scrollable horizontal en mobile
- Dashboard: grid de cards en desktop, stack en mobile

### Estructura de Lección
```
Lección #N: Título
├── Introducción (breve, 2-3 párrafos)
├── Comparativa VB.NET vs PHP (bloque lado a lado)
├── Ejemplo de código PHP (con syntax highlighting)
├── Ejercicio práctico (code snippet para estudiar)
├── Test de evaluación (4 preguntas, 4 opciones)
└── Botón "Marcar como completada" (solo si test aprobado)
```

---

## 4. Features & Interactions

### 4.1 Sistema de Auth (localStorage)
- Form login: usuario + password
- Password hardcoded: `curso2026` (para simplificar, sin backend)
- Datos almacenados: `{ user: "edu", password: "curso2026", completedLessons: [], progress: {} }`
- Logout disponible en header
- Persistencia: localStorage, expires en 30 días

### 4.2 Dashboard
- Shows: usuario, % global completado, streak (días seguidos)
- Cards: una por lección ( nº + título + ✓/✗ completada)
- Click en card → abre lección
- Filtro: Todas / Completadas / Pendientes

### 4.3 Vista de Lección
- Navegación: ← lección anterior | lección siguiente →
- Contenido: markdown renderizado (no MD library, innerHTML con sanitization básica)
- Bloques de código: syntax highlighting con Prism.js
- Comparativas VB.NET ↔ PHP: lado a lado (CSS grid)
- Test: 4 preguntas radio button, al final "Corregir"
- Score ≥ 70% → lección marcada completa + progress actualizado
- Score < 70% → mensaje "Inténtalo de nuevo" + puede repetir

### 4.4 Progress Persistence
```javascript
{
  user: "edu",
  completedLessons: [1, 3, 5],  // IDs de lecciones completadas
  testScores: { 1: 100, 3: 80, 5: 75 },
  lastAccess: "2026-03-28T10:00:00Z",
  streak: 5
}
```

### 4.5 Navegación
- Hash-based router (#/leccion/1, #/dashboard, #/login)
- Historial del navegador funcional (back/forward)
- Scroll to top al cambiar de lección

---

## 5. Component Inventory

### 5.1 Header
- Logo izquierda: "VB→PHP" 
- Nav centro: "Lecciones" | "Dashboard"
- Derecha: username + logout (si logueado) o "Login" (si no)
- Sticky top, blur backdrop

### 5.2 LessonCard
- Estados: default (borde gris), completed (borde verde + check), current (borde azul)
- Hover: elevación + borde más brillante
- Muestra: nº lección, título, estado

### 5.3 CodeBlock
- Header: lenguaje (PHP / VB.NET) con color indicator
- Body: código con Prism.js highlighting
- Botón "Copiar" en corner
- Scroll horizontal en mobile

### 5.4 ComparisonBlock
- CSS Grid 2 columnas
- Header: VB.NET (verde) | PHP (púrpura)
- Contenido alineado verticalmente

### 5.5 TestQuestion
- Pregunta numerada
- 4 opciones radio button
- Feedback visual post-submit: verde si correcta, rojo si incorrecta
- Explicación breve post-submit

### 5.6 ProgressBar
- Barra horizontal
- % completado
- Animación de llenado
- Color: verde si ≥ 70%, naranja si < 70%

### 5.7 Button
- Variants: primary (blue), success (green), danger (red)
- Estados: default, hover, active, disabled
- Size: sm, md, lg

---

## 6. Technical Approach

### Stack
- **HTML5** + **CSS3** (variables, grid, flexbox)
- **Vue 3** (CDN, Options API por familiaridad con VB.NET devs)
- **Prism.js** (syntax highlighting)
- **localStorage** (persistencia)
- **GitHub Pages** (hosting, SPA con hash routing funciona sin config extra)

### Arquitectura JS
```
js/
├── app.js           # Vue app principal + router
├── lessons.js       # Array de objetos lección
├── store.js         # Módulo localStorage (auth + progress)
└── components/       # Componentes Vue (inline o módulo)
```

### Estructura de Lección (objeto)
```javascript
{
  id: 1,
  title: "Configuración del entorno con XAMPP",
  category: "entorno",
  estimatedTime: "20 min",
  content: `...HTML string con markdown mezclado...`,
  codeExamples: [
    { lang: "vb", code: "...", label: "VB.NET" },
    { lang: "php", code: "...", label: "PHP" }
  ],
  test: [
    {
      question: "¿Qué archivo de XAMPP...?"
      options: ["A", "B", "C", "D"]
      correct: 0
      explanation: "..."
    }
  ]
}
```

### API Design
N/A — sin backend. Todo en localStorage.

### Routing (hash-based)
```
#/                  → Dashboard (si auth) o Login
#/login             → LoginView
#/dashboard         → DashboardView
#/leccion/:id       → LeccionView
```

---

## 7. Content — Lecciones

### MÓDULO 1: ENTORNO (3 lecciones)
1. Instalación y configuración de XAMPP
2. Virtual Hosts en Apache (httpd-vhosts.conf)
3. Composer y Symfony CLI

### MÓDULO 2: PHP FUNDAMENTOS (5 lecciones)
4. Sintaxis básica: variables, tipos, comentarios
5. Operadores y expresiones
6. Estructuras de control: if/else, switch
7. Bucles: for, foreach, while, do-while
8. Funciones y ámbito de variables

### MÓDULO 3: POO EN PHP (4 lecciones)
9. Clases y objetos (vs VB.NET Module/Class)
10. Herencia e interfaces
11. Traits y namespaces
12. Autoloading con Composer

### MÓDULO 4: SYMFONY (5 lecciones)
13. Instalación de proyecto Symfony
14. Rutas y controladores
15. Twig vs WebForms (comparativa)
16. Doctrine + SQL Server
17. Formularios y validación

### MÓDULO 5: VUE.JS (4 lecciones)
18. Vue 3: reactive data, computed, methods
19. Directivas: v-if, v-for, v-bind, v-on
20. Componentes en Vue 3
21. Integración Vue + Symfony API

### MÓDULO 6: PROYECTO FINAL (2 lecciones)
22. Diseñando la API REST con Symfony
23. Consumiendo la API desde Vue.js

**Total: 23 lecciones** — cada una con test de 3-5 preguntas

---

## 8. Testing Checklist

- [ ] Login/logout funciona y persiste en localStorage
- [ ] Todas las lecciones son navegables
- [ ] Tests corrigen correctamente (≥70% = aprobado)
- [ ] Progress se guarda tras completar lección
- [ ] Dashboard muestra progreso real
- [ ] Responsive en móvil (iPhone 12 size test)
- [ ] Syntax highlighting funciona en todos los bloques de código
- [ ] Navegación con flechas del navegador funciona
- [ ] Sin errores en consola
