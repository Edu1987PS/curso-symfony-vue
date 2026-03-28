window.LESSONS = [
  {
    "id": 1,
    "title": "Instalacion de XAMPP en Windows",
    "category": "entorno",
    "module": 1,
    "estimatedTime": "30 min",
    "content": "<h2>Que es XAMPP?</h2><p>XAMPP es un paquete que incluye Apache (servidor web), MySQL/MariaDB (base de datos), PHP y Perl. Es la forma mas facil de tener un entorno de desarrollo PHP completo en Windows.</p><h2>Descarga</h2><ol><li>Ve a <a href='https://www.apachefriends.org/download.html' target='_blank'>apachefriends.org</a></li><li>Descarga la version de XAMPP para Windows (PHP 8.x recomendado)</li><li>Ejecuta el instalador</li></ol><h2>Instalacion paso a paso</h2><ol><li>Ejecuta el archivo .exe como Administrador</li><li>En el Wizard, haz clic en Next</li><li>Selecciona los componentes necesarios: <ul><li>Apache (requerido)</li><li>MySQL (requerido para bases de datos)</li><li>PHP (requerido)</li><li>phpMyAdmin (gestion visual de BD)</li></ul></li><li>Elige la carpeta de instalacion (recomendado: C:\\xampp)</li><li>Haz clic en Next > Next > Finishing</li></ol><h2>Verificar instalacion</h2><ol><li>Abre el XAMPP Control Panel</li><li>Haz clic en Start junto a Apache</li><li>Abre tu navegador y escribe: <code>http://localhost</code></li><li>Deberias ver la pagina de inicio de XAMPP</li></ol><h2>Solucionar problemas comunes</h2><ul><li><strong>Port 80 en uso:</strong> Skype, IIS o Skype pueden usar el puerto 80. Cambia a otro puerto en httpd.conf.</li><li><strong>UAC en Windows:</strong> Si da errores de permisos, ejecuta como Administrador.</li></ul>",
    "codeExamples": [
      {
        "lang": "bash",
        "label": "Verificar PHP desde CMD",
        "code": "cd C:\\xampp\\php\nphp -v\n# Deberia mostrar: PHP 8.x.x"
      }
    ],
    "comparison": {
      "vbnet": "' En VB.NET/Windows Forms no necesitas XAMPP\n' .NET tiene su propio servidor IIS Express\n' includedo en Visual Studio\n'\n' Para proyectos web ASP.NET:\n' 1. Install Visual Studio\n' 2. Create New > ASP.NET Web Application\n' 3. IIS Express arranca automaticamente",
      "php": "<?php\n// Con XAMPP instalado, creas archivos PHP en:\n// C:\\xampp\\htdocs\\mi-proyecto\\\n// Y accedes via:\n// http://localhost/mi-proyecto/index.php\n\n// PHP es lenguaje server-side\n// Se ejecuta en el servidor, no en el navegador\n?>"
    },
    "test": [
      {
        "question": "Que incluye XAMPP?",
        "options": [
          "Solo PHP",
          "Apache + MySQL + PHP",
          "Solo MySQL",
          "Solo Apache"
        ],
        "correct": 1,
        "explanation": "XAMPP incluye Apache (servidor web), MySQL/MariaDB (BD) y PHP."
      },
      {
        "question": "Que puerto usa Apache por defecto?",
        "options": [
          "3306",
          "80",
          "443",
          "8080"
        ],
        "correct": 1,
        "explanation": "Apache usa el puerto 80 por defecto para HTTP."
      },
      {
        "question": "Donde se instalan los archivos web?",
        "options": [
          "C:\\Windows",
          "C:\\xampp\\htdocs",
          "C:\\Program Files",
          "C:\\Users"
        ],
        "correct": 1,
        "explanation": "Los archivos van en C:\\xampp\\htdocs y se acceden via http://localhost/"
      }
    ]
  },
  {
    "id": 2,
    "title": "Virtual Hosts en XAMPP",
    "category": "entorno",
    "module": 1,
    "estimatedTime": "25 min",
    "content": "<h2>Que son los Virtual Hosts?</h2><p>Los Virtual Hosts permiten tener multiples sitios web en el mismo servidor Apache. En lugar de acceder a <code>http://localhost/mi-proyecto</code>, puedes usar <code>http://mi-proyecto.test</code>.</p><h2>Por que usarlos?</h2><ul><li>URLs mas profesionales en desarrollo</li><li>Simulan mejor el entorno de produccion</li><li>Cada proyecto tiene su propia configuracion</li></ul><h2>Configuracion</h2><h3>Paso 1: Editar httpd-vhosts.conf</h3><p>Archivo: <code>C:\\xampp\\apache\\conf\\extra\\httpd-vhosts.conf</code></p><h3>Paso 2: Agregar entrada DNS local</h3><p>Archivo: <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p><pre>127.0.0.1    mi-proyecto.test</pre>",
    "codeExamples": [
      {
        "lang": "apache",
        "label": "httpd-vhosts.conf",
        "code": "# Agregar al final del archivo\n\n<VirtualHost *:80>\n    DocumentRoot \"C:/xampp/htdocs/mi-proyecto\"\n    ServerName mi-proyecto.test\n    <Directory \"C:/xampp/htdocs/mi-proyecto\">\n        Options Indexes FollowSymLinks\n        AllowOverride All\n        Require all granted\n    </Directory>\n</VirtualHost>"
      }
    ],
    "comparison": {
      "vbnet": "' En IIS/VB.NET se llama \"Sites\" en IIS Manager\n' O en IIS Express con applicationhost.config:\n'\n' <site name=\"MiProyecto\" id=\"2\">\n'   <bindings>\n'     <binding protocol=\"http\" bindingInformation=\":8080:localhost\" />\n'   </bindings>\n'   <application path=\"/\" applicationPool=\"MiProyecto\" />\n' </site>",
      "php": "<?php\n// Una vez configurado el Virtual Host:\n// http://mi-proyecto.test/index.php\n// en lugar de:\n// http://localhost/mi-proyecto/index.php\n?>"
    },
    "test": [
      {
        "question": "Que son los Virtual Hosts?",
        "options": [
          "Servidores fisicos",
          "Dominios virtuales en el mismo servidor",
          "Bases de datos",
          "Extensiones de PHP"
        ],
        "correct": 1,
        "explanation": "Permiten tener múltiples sitios con diferentes dominios en un mismo servidor Apache."
      },
      {
        "question": "Donde se define el Virtual Host en XAMPP?",
        "options": [
          "httpd.conf principal",
          "httpd-vhosts.conf",
          "php.ini",
          "hosts de Windows"
        ],
        "correct": 1,
        "explanation": "Se define en httpd-vhosts.conf dentro de conf/extra/."
      }
    ]
  },
  {
    "id": 3,
    "title": "Composer: Gestion de dependencias PHP",
    "category": "entorno",
    "module": 1,
    "estimatedTime": "30 min",
    "content": "<h2>Que es Composer?</h2><p>Composer es el gestor de dependencias de PHP. Es similar a npm en Node.js o NuGet en .NET. Permite descargar y actualizar librerias automaticamente.</p><h2>Instalacion en Windows</h2><ol><li>Descarga Composer desde <a href='https://getcomposer.org/download/' target='_blank'>getcomposer.org</a></li><li>Ejecuta el instalador</li><li>Asegurate de marcar \"Developer Mode\" si ya tienes PHP</li><li>Siguiente > Browse > Selecciona php.exe de XAMPP > Next</li><li>Finalizar</li></ol><h2>Verificar instalacion</h2>",
    "codeExamples": [
      {
        "lang": "bash",
        "label": "Comandos Composer",
        "code": "# Verificar instalacion\ncomposer --version\n\n# Crear proyecto Symfony\ncomposer create-project symfony/skeleton mi-proyecto\n\n# Instalar dependencia\ncomposer require symfony/http-foundation\n\n# Actualizar todas las dependencias\ncomposer update\n\n# Instalar desde composer.json\ncomposer install"
      }
    ],
    "comparison": {
      "vbnet": "' .NET usa NuGet para dependencias\n' En Visual Studio:\n' Tools > NuGet Package Manager > Manage NuGet Packages\n'\n' O por consola (Package Manager Console):\n' Install-Package Newtonsoft.Json\n'\n' O dotnet CLI:\n' dotnet add package Newtonsoft.Json",
      "php": "<?php\n// composer.json ejemplo:\n// {\n//     \"require\": {\n//         \"symfony/http-foundation\": \"^6.0\"\n//     }\n// }\n\n// Composer instala las dependencias en vendor/\n// Y genera un autoload.php para cargar clases automaticamente\n\nrequire 'vendor/autoload.php';\n\nuse Symfony\\Component\\HttpFoundation\\Request;\n$request = Request::createFromGlobals();\n?>"
    },
    "test": [
      {
        "question": "Que es Composer?",
        "options": [
          "Un framework PHP",
          "Gestor de dependencias PHP",
          "Un editor de codigo",
          "Un servidor web"
        ],
        "correct": 1,
        "explanation": "Composer es el gestor de dependencias estandar de PHP."
      },
      {
        "question": "Donde instala Composer las dependencias?",
        "options": [
          "En el proyecto",
          "En vendor/",
          "En C:\\Windows",
          "En htdocs"
        ],
        "correct": 1,
        "explanation": "Composer instala las librerías en la carpeta vendor/."
      },
      {
        "question": "Que archivo define las dependencias en PHP?",
        "options": [
          "package.json",
          "composer.json",
          "Gemfile",
          "requirements.txt"
        ],
        "correct": 1,
        "explanation": "composer.json define las dependencias del proyecto PHP."
      }
    ]
  },
  {
    "id": 4,
    "title": "Symfony CLI: Instalacion y uso",
    "category": "entorno",
    "module": 1,
    "estimatedTime": "25 min",
    "content": "<h2>Que es Symfony CLI?</h2><p>Symfony CLI es una herramienta de linea de comandos para crear y gestionar proyectos Symfony. Tambien incluye un servidor local integrado.</p><h2>Instalacion en Windows</h2><ol><li>Descarga desde <a href='https://symfony.com/download' target='_blank'>symfony.com/download</a></li><li>Ejecuta el instalador o usa: <code> scoop install symfony-cli </code> (si usas Scoop)</li></ol><h2>Comandos basicos</h2>",
    "codeExamples": [
      {
        "lang": "bash",
        "label": "Symfony CLI comandos",
        "code": "# Crear nuevo proyecto\nsymfony new mi-proyecto --full\n\n# Iniciar servidor local\ncd mi-proyecto\nsymfony serve\n\n# Con HTTPS local\nsymfony serve --daemon\n\n# Ver rutas disponibles\nsymfony debug:router\n\n# Ver servicios\nsymfony debug:container"
      }
    ],
    "comparison": {
      "vbnet": "' .NET tiene dotnet CLI:\n'\n' dotnet new webapp -o mi-proyecto\n' cd mi-proyecto\n' dotnet run\n'\n' dotnet CLI es similar a Symfony CLI",
      "php": "<?php\n// Symfony CLI crea proyecto con estructura:\n// mi-proyecto/\n// ├── bin/\n// │   └── console\n// ├── config/\n// ├── public/\n// │   └── index.php\n// ├── src/\n// ├── var/\n// ├── vendor/\n// └── composer.json\n?>"
    },
    "test": [
      {
        "question": "Que es Symfony CLI?",
        "options": [
          "Un framework",
          "Herramienta CLI para Symfony",
          "Un editor",
          "Una base de datos"
        ],
        "correct": 1,
        "explanation": "Symfony CLI es la herramienta de línea de comandos para proyectos Symfony."
      },
      {
        "question": "Que comando inicia el servidor Symfony?",
        "options": [
          "php server:start",
          "symfony serve",
          "symfony run",
          "symfony start"
        ],
        "correct": 1,
        "explanation": "symfony serve inicia el servidor local de desarrollo."
      }
    ]
  },
  {
    "id": 5,
    "title": "Configurar VS Code para PHP",
    "category": "entorno",
    "module": 1,
    "estimatedTime": "20 min",
    "content": "<h2>VS Code para PHP</h2><p>Visual Studio Code es el editor recomendado para PHP. Es gratuito, ligero y con extensiones tiene soporte completo.</p><h2>Extensiones esenciales</h2><ul><li><strong>PHP Intelephense:</strong> Autocompletado y analisis de codigo</li><li><strong>PHP Debug:</strong> Depuracion con Xdebug</li><li><strong>PHP Server:</strong> Servidor PHP integrado</li></ul><h2>Configuracion</h2>",
    "codeExamples": [
      {
        "lang": "json",
        "label": ".vscode/settings.json",
        "code": "{\n  \"php.suggest.basic\": false,\n  \"php.validate.enable\": true,\n  \"php.validate.executablePath\": \"C:/xampp/php/php.exe\",\n  \"files.associations\": {\n    \"*.php\": \"php\"\n  }\n}"
      }
    ],
    "comparison": {
      "vbnet": "' VB.NET usa Visual Studio, no VS Code\n' Visual Studio tiene:\n' - IntelliSense integrado\n' - Depurador completo\n' - Designer para WinForms/WPF\n'\n' VS Code con extensiones emula algunas\n' funcionalidades de Visual Studio para PHP",
      "php": "<?php\n// VS Code + PHP Intelephense proporciona:\n// - Autocompletado de funciones PHP\n// - Ir a definicion (F12)\n// - Find references\n// - Refactoring basico\n?>"
    },
    "test": [
      {
        "question": "Cual extension da autocompletado para PHP?",
        "options": [
          "Python extension",
          "PHP Intelephense",
          "JavaScript extension",
          "C# extension"
        ],
        "correct": 1,
        "explanation": "PHP Intelephense proporciona autocompletado avanzado para PHP."
      },
      {
        "question": "Donde se configuran las asociaciones de archivos en VS Code?",
        "options": [
          "En package.json",
          "En .vscode/settings.json",
          "En launch.json",
          "En tasks.json"
        ],
        "correct": 1,
        "explanation": "Las configuraciones van en .vscode/settings.json."
      }
    ]
  },
  {
    "id": 6,
    "title": "Variables y tipos de datos en PHP",
    "category": "php",
    "module": 2,
    "estimatedTime": "30 min",
    "content": "<h2>Variables en PHP</h2><p>Las variables en PHP empiezan con <code>$</code>. PHP es de tipado debil (lootype), lo que significa que no necesitas declarar el tipo.</p><h2>Tipos basicos</h2><ul><li><strong>string:</strong> Cadenas de texto</li><li><strong>int:</strong> Numeros enteros</li><li><strong>float:</strong> Numeros decimales</li><li><strong>bool:</strong> true/false</li><li><strong>array:</strong> Arreglos</li><li><strong>null:</strong> Valor nulo</li></ul>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Variables PHP",
        "code": "<?php\n// Variables\n$nombre = 'Edu';\n$edad = 30;\n$altura = 1.75;\n$esMayor = true;\n$nulo = null;\n\n// Tipos\ngettype($nombre);  // 'string'\ngettype($edad);     // 'integer'\ngettype($altura);   // 'double'\ngettype($esMayor);  // 'boolean'\n\n// Conversion de tipos\n$numero = (int) '42';      // int 42\n$texto = (string) 123;      // string '123'\n$booleano = (bool) 1;      // true\n\n// Variables variables\n$var = 'hola';\n$$var = 'mundo';  // $hola = 'mundo'\necho $hola;  // 'mundo'\n?>"
      }
    ],
    "comparison": {
      "vbnet": "' VB.NET usa tipado fuerte\n' Dim nombre As String = \"Edu\"\n' Dim edad As Integer = 30\n' Dim altura As Double = 1.75\n' Dim esMayor As Boolean = True\n'\n' VB.NET NO permite:\n' Dim x = \"texto\"\n' x = 123  ' Error de tipo\n'\n' PHP permite:\n' $x = \"texto\";\n' $x = 123;  ' Funciona",
      "php": "<?php\n// PHP es de tipado debil:\n$a = 'texto';\n$a = 123;  // Allowed in PHP\n\n// JavaScript es similar:\n// let a = 'texto';\n// a = 123;  // Allowed\n\n// Python es de tipado dinamico fuerte:\n// a = 'texto'\n// a = 123  # Tambien funciona\n?>"
    },
    "test": [
      {
        "question": "Como se declara una variable en PHP?",
        "options": [
          "var nombre",
          "$nombre",
          "let nombre",
          "Dim nombre"
        ],
        "correct": 1,
        "explanation": "Las variables en PHP empiezan con $."
      },
      {
        "question": "PHP es de tipado...",
        "options": [
          "Estatico",
          "Fuerte",
          "Debil",
          "Ninguno"
        ],
        "correct": 2,
        "explanation": "PHP es de tipado debil: no necesita declarar tipos y convierte automaticamente."
      },
      {
        "question": "Cual es el tipo de '42' entre comillas?",
        "options": [
          "integer",
          "string",
          "float",
          "boolean"
        ],
        "correct": 1,
        "explanation": "'42' es un string porque esta entre comillas."
      }
    ]
  },
  {
    "id": 7,
    "title": "Operadores en PHP",
    "category": "php",
    "module": 2,
    "estimatedTime": "25 min",
    "content": "<h2>Operadores aritmeticos</h2><p>Para operaciones matematicas basicas.</p><h2>Operadores de comparacion</h2><p>Para comparar valores. Ojo: <code>==</code> compara valor, <code>===</code> compara valor Y tipo.</p><h2>Operadores logicos</h2><p>Para combinar condiciones.</p>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Operadores PHP",
        "code": "<?php\n// Aritmeticos\n$a = 10;\n$b = 3;\necho $a + $b;  // 13\necho $a - $b;  // 7\necho $a * $b;  // 30\necho $a / $b;  // 3.333\necho $a % $b;   // 1 (resto)\n\n// Comparacion\nvar_dump(5 == '5');   // true (valor igual)\nvar_dump(5 === '5');  // false (tipo diferente)\nvar_dump(5 !== '5');  // true\nvar_dump(5 > 3);      // true\nvar_dump(5 <= 5);     // true\n\n// Logicos\n$x = true;\n$y = false;\nvar_dump($x && $y);  // false\nvar_dump($x || $y);  // true\nvar_dump(!$y);       // true\n\n// Null coalescing (PHP 7+)\n$nombre = $_GET['nombre'] ?? 'Anonimo';\n\n// Spaceship (PHP 7+)\nvar_dump(5 <=> 10);  // -1\nvar_dump(10 <=> 10); // 0\nvar_dump(10 <=> 5);  // 1\n?>"
      }
    ],
    "comparison": {
      "vbnet": "' VB.NET usa operadores similares pero diferentes simbolos\n'\n' Aritmeticos: +, -, *, /, Mod\n' Comparacion: =, <>, <, >, <=, >=\n' Logicos: And, Or, Not, AndAlso, OrElse\n'\n' Dim a = 10 Mod 3  ' 1 (resto)\n'\n' VB.NET NO tiene === (usa GetType)\n' If valor.GetType = GetType(Integer) Then...",
      "php": "<?php\n// Operador nave espacial (spaceship) es unico de PHP:\n// $a <=> $b\n// Devuelve -1, 0, o 1 segun $a sea menor, igual o mayor\n\n// Null coalescing??= (PHP 7+)\n$a = null;\n$a ??= 'default';  // $a = 'default'\n\n$a = 'valor';\n$a ??= 'default';  // $a sigue siendo 'valor'\n?>"
    },
    "test": [
      {
        "question": "Cual operador compara valor Y tipo?",
        "options": [
          "==",
          "===",
          "=",
          "!="
        ],
        "correct": 1,
        "explanation": "=== compara tanto el valor como el tipo (identidad)."
      },
      {
        "question": "Que hace Mod en VB.NET / % en PHP?",
        "options": [
          "Division",
          "Multiplicacion",
          "Resto",
          "Suma"
        ],
        "correct": 2,
        "explanation": "Mod/% devuelve el resto de la division."
      },
      {
        "question": "Que hace $a ??= 'default'?",
        "options": [
          "Asigna siempre",
          "Asigna si es null",
          "Compara",
          "Suma"
        ],
        "correct": 1,
        "explanation": "??= asigna solo si la variable es null (null coalescing assignment)."
      }
    ]
  },
  {
    "id": 8,
    "title": "Condicionales: if, elseif, else, switch",
    "category": "php",
    "module": 2,
    "estimatedTime": "25 min",
    "content": "<h2>Estructuras condicionales</h2><p>Permiten ejecutar codigo segun una condicion.</p><h2>Sintaxis if-elseif-else</h2><h2>Operador ternario</h2><p>Forma compacta para condiciones simples.</p><h2>Switch</h2><p>Para multiples casos de una misma variable.</p>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Condicionales PHP",
        "code": "<?php\n$dia = date('N');  // 1=Lunes, 7=Domingo\n\n// if-elseif-else\nif ($dia == 1) {\n    echo 'Hoy es Lunes';\n} elseif ($dia == 2) {\n    echo 'Hoy es Martes';\n} elseif ($dia >= 3 && $dia <= 5) {\n    echo 'Dia laboral';\n} else {\n    echo 'Fin de semana';\n}\n\n// Operador ternario (compact)\n$resultado = ($edad >= 18) ? 'Mayor' : 'Menor';\n$clase = $esActivo ? 'active' : 'inactive';\n\n// Ternario encadenado (PHP 7+)\n$status = ($nota >= 9) ? 'Sobresaliente'\n            : ($nota >= 7) ? 'Notable'\n            : ($nota >= 5) ? 'Aprobado'\n            : 'Suspendido';\n\n// Switch\nswitch ($color) {\n    case 'rojo':\n        echo 'Color rojo';\n        break;\n    case 'azul':\n    case 'verde':\n        echo 'Color frio';\n        break;\n    default:\n        echo 'Color desconocido';\n}\n\n// Match (PHP 8+)\n$tipo = match($status) {\n    'active' => 'Usuario activo',\n    'inactive' => 'Usuario inactivo',\n    'banned' => 'Usuario baneado',\n    default => 'Estado desconocido',\n};\n?>"
      }
    ],
    "comparison": {
      "vbnet": "' VB.NET usa If-Then-ElseIf-Else\n' Y Select Case en lugar de switch\n'\n' Dim dia = 3\n' If dia = 1 Then\n'     Console.WriteLine(\"Lunes\")\n' ElseIf dia = 2 Then\n'     Console.WriteLine(\"Martes\")\n' Else\n'     Console.WriteLine(\"Otro dia\")\n' End If\n'\n' Select Case dia\n'     Case 1\n'         Console.WriteLine(\"Lunes\")\n'     Case 2 To 5\n'         Console.WriteLine(\"Laborable\")\n'     Case Else\n'         Console.WriteLine(\"Fin\")\n' End Select",
      "php": "<?php\n// Match es nuevo en PHP 8 (como switch pero devuelve valor)\n$resultado = match($opcion) {\n    'a' => 'Opcion A',\n    'b' => 'Opcion B',\n    default => 'Otra',\n};\n// match es mas limpio que switch para asignaciones\n?>"
    },
    "test": [
      {
        "question": "Cual es la sintaxis correcta del operador ternario?",
        "options": [
          "if $a ? 'si' : 'no'",
          "$a ? 'si' : 'no'",
          "$a ?: 'no'",
          "'si' ?: $a"
        ],
        "correct": 1,
        "explanation": "La sintaxis es: condicion ? valor_si_true : valor_si_false"
      },
      {
        "question": "Que falta en un switch para que no caiga al siguiente caso?",
        "options": [
          "break",
          "continue",
          "exit",
          "return"
        ],
        "correct": 0,
        "explanation": "break evita que la ejecucion caiga al siguiente case (fall-through)."
      },
      {
        "question": "Match esta disponible desde PHP...?",
        "options": [
          "PHP 5",
          "PHP 7",
          "PHP 8",
          "PHP 9"
        ],
        "correct": 2,
        "explanation": "Match es nuevo en PHP 8."
      }
    ]
  },
  {
    "id": 9,
    "title": "Clases y Objetos en PHP",
    "category": "poo",
    "module": 3,
    "estimatedTime": "50 min",
    "content": "<h2>Introduccion a la POO en PHP</h2><p>PHP es un lenguaje hibrido: permite programacion procedural y orientada a objetos. Desde PHP 5, la OOP esta completamente implementada.</p><h2>Clases basicas</h2><p>Una clase es un molde para crear objetos.</p><h2>Visibilidad</h2><ul><li><strong>public:</strong> accesible desde cualquier parte</li><li><strong>protected:</strong> accesible desde la clase y sus subclases</li><li><strong>private:</strong> solo accesible desde la propia clase</li></ul>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Clases PHP",
        "code": "<?php\nclass Usuario {\n    const TIPO_USUAL = 'normal';\n    \n    public string $nombre;\n    protected int $edad;\n    private string $password;\n    private static int $contador = 0;\n    \n    public function __construct(string $nombre, string $email) {\n        $this->nombre = $nombre;\n        $this->email = $email;\n        self::$contador++;\n    }\n    \n    public function getEdad(): int {\n        return $this->edad;\n    }\n    \n    public function setEdad(int $edad): void {\n        if ($edad >= 0) $this->edad = $edad;\n    }\n    \n    public static function getContador(): int {\n        return self::$contador;\n    }\n}\n\n$u = new Usuario('Edu', 'edu@example.com');\necho Usuario::getContador();\n?>"
      }
    ],
    "comparison": {
      "vbnet": "' VB.NET\n' Public Class Usuario\n'     Public Property Nombre As String\n'     Protected Edad As Integer\n'     Private Password As String\n' End Class",
      "php": "<?php\n// Visibilidad:\n// public = Public\n// protected = Protected\n// private = Private\n?>"
    },
    "test": [
      {
        "question": "Cual es la visibilidad private?",
        "options": [
          "Acceso total",
          "Solo desde la clase",
          "Desde subclases",
          "Desde cualquier lugar"
        ],
        "correct": 1,
        "explanation": "private solo permite acceso desde la propia clase."
      },
      {
        "question": "Que es __construct?",
        "options": [
          "Destructor",
          "Constructor",
          "Metodo estatico",
          "Constante"
        ],
        "correct": 1,
        "explanation": "__construct es el constructor, se ejecuta al crear el objeto."
      }
    ]
  },
  {
    "id": 10,
    "title": "Herencia e interfaces en PHP",
    "category": "poo",
    "module": 3,
    "estimatedTime": "45 min",
    "content": "<h2>Herencia en PHP</h2><p>PHP soporta herencia simple: una clase puede heredar de UNA sola clase padre.</p><h2>Interfaces</h2><p>Definen un contrato. Una clase puede implementar MULTIPLES interfaces.</p><h2>Clases abstractas</h2><p>No se pueden instanciar, solo heredar.</p>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Herencia PHP",
        "code": "<?php\nabstract class Animal {\n    abstract public function hacerSonido(): string;\n}\n\ninterface Mascota {\n    public function jugar(): void;\n}\n\ninterface TresDimensional {\n    public function getVolumen(): float;\n}\n\nclass Perro extends Animal implements Mascota {\n    public function hacerSonido(): string {\n        return 'Guau!';\n    }\n    \n    public function jugar(): void {\n        echo 'Busca la pelota';\n    }\n}\n\nclass Gato extends Animal implements Mascota {\n    public function hacerSonido(): string {\n        return 'Miau!';\n    }\n    \n    public function jugar(): void {\n        echo 'Persigue el puntero laser';\n    }\n}\n\n// Uso\n$perro = new Perro();\necho $perro->hacerSonido();\n$perro->jugar();\n?>"
      }
    ],
    "comparison": {
      "vbnet": "' VB.NET usa Inherits e Implements\n' Public Class Perro\n'     Inherits Animal\n'     Implements Mascota\n' End Class",
      "php": "<?php\n// PHP: class Hija extends Padre implements Interfaz1, Interfaz2\n// VB.NET: Class Hija\n//     Inherits Padre\n//     Implements Interfaz1, Interfaz2\n// End Class\n?>"
    },
    "test": [
      {
        "question": "Cuantas clases puede heredar PHP?",
        "options": [
          "Ilimitadas",
          "Una sola",
          "Dos",
          "Ninguna"
        ],
        "correct": 1,
        "explanation": "PHP solo permite herencia simple."
      },
      {
        "question": "Para que sirven las interfaces?",
        "options": [
          "Reutilizar codigo",
          "Definir un contrato",
          "Crear objetos",
          "Herencia multiple"
        ],
        "correct": 1,
        "explanation": "Las interfaces definen un contrato que las clases deben cumplir."
      }
    ]
  },
  {
    "id": 11,
    "title": "Traits y namespaces",
    "category": "poo",
    "module": 3,
    "estimatedTime": "40 min",
    "content": "<h2>Traits</h2><p>Los Traits resuelven la limitacion de herencia simple permitiendo reutilizar codigo horizontalmente.</p><h2>Namespaces</h2><p>Organizan codigo y evitan conflictos de nombres.</p>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Traits y namespaces",
        "code": "<?php\n// Traits\ntrait Logger {\n    public function log(string $msg): void {\n        echo '[LOG] ' . date('Y-m-d H:i:s') . \": $msg\\n\";\n    }\n}\n\ntrait Timestamps {\n    private DateTime $createdAt;\n    \n    public function __construct() {\n        $this->createdAt = new DateTime();\n    }\n    \n    public function getCreatedAt(): DateTime {\n        return $this->createdAt;\n    }\n}\n\nclass Usuario {\n    use Logger, Timestamps;\n    \n    public string $nombre;\n    \n    public function __construct(string $nombre) {\n        $this->nombre = $nombre;\n    }\n}\n\n$u = new Usuario('Edu');\n$u->log('Usuario creado');\n\n// Namespaces\nnamespace App\\Modelos;\n\nclass Usuario {\n    public string $rol = 'usuario';\n}\n\nnamespace App\\Servicios;\n\nclass Usuario {\n    public string $permisos = 'lectura';\n}\n?>"
      }
    ],
    "comparison": {
      "vbnet": "' VB.NET no tiene traits\n' Usa herencia de interfaces o mixins\n'\n' Namespaces en VB.NET:\n' Namespace App.Modelos\n'     Class Usuario\n'     End Class\n' End Namespace",
      "php": "<?php\n// Traits son como copiar-y-pegar codigo\n// pero organizado\n\n// use trait TraitNombre;\n\n// Namespaces son como folders\n// namespace App\\Modelos;\n// class Usuario { }\n?>"
    },
    "test": [
      {
        "question": "Que resuelven los Traits?",
        "options": [
          "Herencia multiple",
          "Rendimiento",
          "Seguridad",
          "Tipos"
        ],
        "correct": 0,
        "explanation": "Los Traits permiten compartir metodos entre clases sin herencia multiple."
      },
      {
        "question": "Que hace namespace App\\Modelos?",
        "options": [
          "Crea una clase",
          "Crea un folder logico",
          "Importa archivos",
          "Define una interfaz"
        ],
        "correct": 1,
        "explanation": "namespace crea una organizacion logica del codigo."
      }
    ]
  },
  {
    "id": 12,
    "title": "Autoloading con Composer - PSR-4",
    "category": "poo",
    "module": 3,
    "estimatedTime": "35 min",
    "content": "<h2>Autoloading</h2><p>Permite cargar clases automaticamente sin include/require.</p><h2>PSR-4</h2><p>Estandar que mapea namespaces a carpetas: App\\Modelos\\Usuario → src/Modelos/Usuario.php</p>",
    "codeExamples": [
      {
        "lang": "json",
        "label": "composer.json",
        "code": "{\n  \"autoload\": {\n    \"psr-4\": {\n      \"App\\\\\\\\\": \"src/\"\n    }\n  }\n}"
      },
      {
        "lang": "php",
        "label": "Estructura",
        "code": "mi-proyecto/\n├── src/\n│   ├── Modelos/\n│   │   └── Usuario.php    → namespace App\\Modelos\n│   └── Servicios/\n│       └── EmailService.php → namespace App\\Servicios\n├── vendor/\n│   └── autoload.php\n└── public/\n    └── index.php"
      },
      {
        "lang": "php",
        "label": "Uso",
        "code": "<?php\nrequire 'vendor/autoload.php';\n\nuse App\\Modelos\\Usuario;\nuse App\\Servicios\\EmailService;\n\n$u = new Usuario('Edu', 'edu@example.com');\n$email = new EmailService();\n?>"
      }
    ],
    "comparison": {
      "vbnet": "' .NET carga clases automaticamente\n' si estan en el mismo assembly\n'\n' Imports App.Modelos\n' Dim u As New Usuario()",
      "php": "<?php\n// Composer genera el autoloader\n// que busca clases en vendor/autoload.php\n// segun las规则 PSR-4\n?>"
    },
    "test": [
      {
        "question": "Que hace composer dump-autoload?",
        "options": [
          "Instala deps",
          "Regenera autoloader",
          "Crea proyecto",
          "Limpia cache"
        ],
        "correct": 1,
        "explanation": "Regenera el archivo de autoloading."
      },
      {
        "question": "PSR-4 mapea namespaces a...",
        "options": [
          "Archivos",
          "Carpetas",
          "Funciones",
          "Variables"
        ],
        "correct": 1,
        "explanation": "PSR-4 mapea namespaces a carpetas del filesystem."
      }
    ]
  },
  {
    "id": 13,
    "title": "Instalacion y estructura de proyecto Symfony",
    "category": "symfony",
    "module": 4,
    "estimatedTime": "45 min",
    "content": "<h2>Crear proyecto Symfony</h2><p>Usa Composer para crear un nuevo proyecto Symfony skeleton.</p><h2>Estructura</h2><ul><li><strong>bin/:</strong> Ejecutables de consola</li><li><strong>config/:</strong> Configuracion</li><li><strong>public/:</strong> Document root</li><li><strong>src/:</strong> Tu codigo</li><li><strong>var/:</strong> Cache y logs</li><li><strong>vendor/:</strong> Dependencias</li></ul>",
    "codeExamples": [
      {
        "lang": "bash",
        "label": "Crear proyecto",
        "code": "composer create-project symfony/skeleton mi-proyecto\ncd mi-proyecto\ncomposer require symfony/framework-pack\nphp -S localhost:8000 -t public"
      },
      {
        "lang": "bash",
        "label": "Estructura",
        "code": "mi-proyecto/\n├── bin/console\n├── config/\n│   ├── packages/\n│   ├── routes.yaml\n│   └── services.yaml\n├── public/\n│   └── index.php\n├── src/\n│   ├── Controller/\n│   ├── Entity/\n│   └── Repository/\n├── var/cache/\n├── vendor/\n└── composer.json"
      }
    ],
    "test": [
      {
        "question": "Que comando crea proyecto Symfony?",
        "options": [
          "symfony new",
          "composer create-project symfony/skeleton",
          "php symfony init",
          "composer init"
        ],
        "correct": 1,
        "explanation": "composer create-project symfony/skeleton crea el proyecto."
      },
      {
        "question": "Cual es el document root?",
        "options": [
          "src/",
          "config/",
          "public/",
          "var/"
        ],
        "correct": 2,
        "explanation": "public/ es el document root de Symfony."
      }
    ]
  },
  {
    "id": 14,
    "title": "Rutas y Controladores en Symfony",
    "category": "symfony",
    "module": 4,
    "estimatedTime": "45 min",
    "content": "<h2>Rutas en Symfony</h2><p>Las rutas mapean URLs a controladores usando atributos PHP 8+.</p><h2>Controladores</h2><p>Los controladores reciben una peticion y devuelven una Response.</p>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Controlador",
        "code": "<?php\nnamespace App\\Controller;\n\nuse Symfony\\Component\\HttpFoundation\\Response;\nuse Symfony\\Component\\HttpFoundation\\JsonResponse;\nuse Symfony\\Component\\Routing\\Annotation\\Route;\n\nclass DefaultController {\n    \n    #[Route('/', name: 'home')]\n    public function index(): Response {\n        return new Response('<h1>Bienvenido!</h1>');\n    }\n    \n    #[Route('/hola/{nombre}', name: 'saludo')]\n    public function saludo(string $nombre): Response {\n        return new Response(\"Hola, $nombre!\");\n    }\n    \n    #[Route('/api/usuarios', methods: ['GET'])]\n    public function usuarios(): JsonResponse {\n        return new JsonResponse([\n            ['id' => 1, 'nombre' => 'Ana'],\n            ['id' => 2, 'nombre' => 'Luis']\n        ]);\n    }\n}"
      }
    ],
    "test": [
      {
        "question": "Que atributo define rutas en Symfony?",
        "options": [
          "@Route",
          "#[Route]",
          "Route:",
          "->route()"
        ],
        "correct": 1,
        "explanation": "#[Route] es el atributo PHP 8 para definir rutas."
      },
      {
        "question": "Que devuelve un controlador?",
        "options": [
          "String",
          "Response",
          "View",
          "Array"
        ],
        "correct": 1,
        "explanation": "Los controladores devuelven un objeto Response."
      }
    ]
  },
  {
    "id": 15,
    "title": "Twig: motor de plantillas",
    "category": "symfony",
    "module": 4,
    "estimatedTime": "45 min",
    "content": "<h2>Que es Twig?</h2><p>Twig es el motor de plantillas de Symfony. Separa logica de presentacion.</p><h2>Sintaxis</h2><ul><li><strong>{{ variable }}:</strong> Imprimir</li><li><strong>{% comando %}:</strong> Logica (for, if)</li><li><strong>{# comentario #}:</strong> Comentarios</li></ul>",
    "codeExamples": [
      {
        "lang": "html",
        "label": "base.html.twig",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>{% block title %}Mi App{% endblock %}</title>\n</head>\n<body>\n    {% block body %}{% endblock %}\n</body>\n</html>"
      },
      {
        "lang": "html",
        "label": "usuario/lista.html.twig",
        "code": "{% extends 'base.html.twig' %}\n\n{% block title %}Lista de Usuarios{% endblock %}\n\n{% block body %}\n    <h1>Usuarios</h1>\n    \n    {% for usuario in usuarios %}\n        <li>{{ usuario.nombre }}</li>\n    {% endfor %}\n{% endblock %}"
      }
    ],
    "test": [
      {
        "question": "Que hace {{ variable }} en Twig?",
        "options": [
          "Asigna valor",
          "Imprime valor",
          "Comenta",
          "Condicional"
        ],
        "correct": 1,
        "explanation": "{{ }} imprime valores escapando HTML."
      },
      {
        "question": "Que sintaxis es para if/for?",
        "options": [
          "{{ if }}",
          "{% if %}",
          "<% if %>",
          "// if"
        ],
        "correct": 1,
        "explanation": "{% %} se usa para estructuras de control."
      }
    ]
  },
  {
    "id": 16,
    "title": "Doctrine ORM con SQL Server",
    "category": "symfony",
    "module": 4,
    "estimatedTime": "50 min",
    "content": "<h2>Doctrine ORM</h2><p>Doctrine es el ORM (Object-Relational Mapper) de Symfony. Mapea clases PHP a tablas de BD.</p><h2>Entidades</h2><p>Las entidades son clases que representan tablas.</p>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Entidad Usuario",
        "code": "<?php\nnamespace App\\Entity;\n\nuse Doctrine\\ORM\\Mapping as ORM;\nuse Symfony\\Component\\Validator\\Constraints as Assert;\n\n#[ORM\\Entity]\n#[ORM\\Table(name: 'usuarios')]\nclass Usuario {\n    \n    #[ORM\\Id]\n    #[ORM\\GeneratedValue]\n    #[ORM\\Column(type: 'integer')]\n    private ?int $id = null;\n    \n    #[ORM\\Column(type: 'string', length: 100)]\n    #[Assert\\NotBlank]\n    private string $nombre;\n    \n    #[ORM\\Column(type: 'string', length: 180, unique: true)]\n    #[Assert\\Email]\n    private string $email;\n    \n    #[ORM\\Column(type: 'datetime_immutable')]\n    private \\DateTimeImmutable $createdAt;\n    \n    public function __construct() {\n        $this->createdAt = new \\DateTimeImmutable();\n    }\n}"
      }
    ],
    "test": [
      {
        "question": "Que es Doctrine?",
        "options": [
          "Servidor BD",
          "ORM",
          "Plantilla",
          "Router"
        ],
        "correct": 1,
        "explanation": "Doctrine es el ORM de Symfony."
      },
      {
        "question": "Que atributo marca una entidad?",
        "options": [
          "#[Entity]",
          "#[ORM\\Entity]",
          "#[Table]",
          "#[ORM\\Table]"
        ],
        "correct": 1,
        "explanation": "#[ORM\\Entity] marca una clase como entidad."
      }
    ]
  },
  {
    "id": 17,
    "title": "Formularios y validacion",
    "category": "symfony",
    "module": 4,
    "estimatedTime": "45 min",
    "content": "<h2>Formularios en Symfony</h2><p>Symfony genera formularios automaticamente desde las entidades.</p><h2>Validacion</h2><p>Usa atributos (constraints) para validar datos.</p>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Entidad con validacion",
        "code": "<?php\nuse Symfony\\Component\\Validator\\Constraints as Assert;\n\nclass Usuario {\n    #[Assert\\NotBlank(message: 'El nombre es obligatorio')]\n    #[Assert\\Length(min: 3, max: 100)]\n    private string $nombre;\n    \n    #[Assert\\NotBlank]\n    #[Assert\\Email(message: 'Email invalido')]\n    private string $email;\n    \n    #[Assert\\NotBlank]\n    #[Assert\\Length(min: 8)]\n    private string $password;\n}"
      },
      {
        "lang": "php",
        "label": "Controlador",
        "code": "<?php\npublic function registro(Request $request): Response {\n    $usuario = new Usuario();\n    $form = $this->createForm(UsuarioType::class, $usuario);\n    \n    $form->handleRequest($request);\n    \n    if ($form->isSubmitted() && $form->isValid()) {\n        // Guardar en BD\n        $em->persist($usuario);\n        $em->flush();\n        \n        return $this->redirectToRoute('home');\n    }\n    \n    return $this->render('registro.html.twig', [\n        'form' => $form->createView()\n    ]);\n}"
      }
    ],
    "test": [
      {
        "question": "Como se valida en Symfony?",
        "options": [
          "IF manual",
          "Atributos/constraints",
          "JavaScript",
          "Solo en BD"
        ],
        "correct": 1,
        "explanation": "Symfony usa atributos como #[Assert\\NotBlank]."
      },
      {
        "question": "Cuando se valida el formulario?",
        "options": [
          "Nunca",
          "Solo al enviar",
          "$form->isValid()",
          "Automaticamente"
        ],
        "correct": 2,
        "explanation": "$form->isValid() valida contra los constraints."
      }
    ]
  },
  {
    "id": 18,
    "title": "Vue 3 Introduction",
    "category": "vue",
    "module": 5,
    "estimatedTime": "40 min",
    "content": "<h2>Que es Vue.js?</h2><p>Vue.js es un framework JavaScript progresivo para construir interfaces de usuario.</p><h2>Vue 3 Composition API</h2><p>Usa funciones como ref() y computed().</p><h2>Reactividad</h2><p>Vue detecta automaticamente cambios en variables reactivas.</p>",
    "codeExamples": [
      {
        "lang": "html",
        "label": "Vue basico",
        "code": "<div id=\"app\">\n    <h1>{{ titulo }}</h1>\n    <p>Contador: {{ contador }}</p>\n    <p>Doble: {{ doble }}</p>\n    <button @click=\"incrementar\">+1</button>\n</div>\n\n<script type=\"module\">\nimport { createApp, ref, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'\n\ncreateApp({\n    setup() {\n        const titulo = ref('Mi app Vue 3')\n        const contador = ref(0)\n        const doble = computed(() => contador.value * 2)\n        \n        function incrementar() {\n            contador.value++\n        }\n        \n        return { titulo, contador, doble, incrementar }\n    }\n}).mount('#app')\n</script>"
      }
    ],
    "test": [
      {
        "question": "Que hace ref()?",
        "options": [
          "Crea elemento",
          "Crea variable reactiva",
          "Crea componente",
          "Crea watcher"
        ],
        "correct": 1,
        "explanation": "ref() crea una variable reactiva."
      },
      {
        "question": "Como se accede al valor de una ref?",
        "options": [
          "$valor",
          "valor.value",
          "this.valor",
          "@valor"
        ],
        "correct": 1,
        "explanation": "En el script, se usa .value para acceder."
      }
    ]
  },
  {
    "id": 19,
    "title": "Directivas Vue: v-if, v-for, v-bind, v-on",
    "category": "vue",
    "module": 5,
    "estimatedTime": "35 min",
    "content": "<h2>Directivas Vue</h2><p>Atributos especiales que anaden funcionalidad al DOM.</p><ul><li><strong>v-if:</strong> Condicionales</li><li><strong>v-for:</strong> Bucles</li><li><strong>v-bind:</strong> Bindear atributos (abreviado :)</li><li><strong>v-on:</strong> Eventos (abreviado @)</li><li><strong>v-model:</strong> Two-way binding</li></ul>",
    "codeExamples": [
      {
        "lang": "html",
        "label": "Directivas Vue",
        "code": "<div id=\"app\">\n    <!-- Condicional -->\n    <p v-if=\"esMiembro\">Bienvenido VIP</p>\n    <p v-else>Registrate</p>\n    \n    <!-- Bucle -->\n    <ul>\n        <li v-for=\"tarea in tareas\" :key=\"tarea.id\">\n            {{ tarea.texto }}\n        </li>\n    </ul>\n    \n    <!-- Eventos -->\n    <button @click=\"incrementar\">+1</button>\n    \n    <!-- Two-way binding -->\n    <input v-model=\"nombre\">\n    <p>Hola {{ nombre }}</p>\n</div>"
      }
    ],
    "test": [
      {
        "question": "v-if es para?",
        "options": [
          "Iterar",
          "Condicionales",
          "Eventos",
          "Estilos"
        ],
        "correct": 1,
        "explanation": "v-if controla si un elemento existe."
      },
      {
        "question": "Cual es la abreviacion de v-on:click?",
        "options": [
          ":click",
          "@click",
          "*click",
          "v-click"
        ],
        "correct": 1,
        "explanation": "@ es la abreviacion de v-on:."
      }
    ]
  },
  {
    "id": 20,
    "title": "Componentes en Vue 3",
    "category": "vue",
    "module": 5,
    "estimatedTime": "40 min",
    "content": "<h2>Componentes Vue</h2><p>Bloques reutilizables de interfaz.</p><h2>Props</h2><p>Datos que el padre pasa al hijo.</p><h2>Events</h2><p>Los hijos emiten eventos al padre.</p><h2>Slots</h2><p>Permiten insertar contenido.</p>",
    "codeExamples": [
      {
        "lang": "javascript",
        "label": "Componente Tarjeta",
        "code": "export default {\n    name: 'TarjetaUsuario',\n    props: {\n        nombre: { type: String, required: true },\n        email: String,\n        avatar: { type: String, default: '/img/default.png' }\n    },\n    emits: ['click', 'eliminar'],\n    setup(props, { emit }) {\n        function handleClick() {\n            emit('click', props.nombre)\n        }\n        return { handleClick }\n    },\n    template: `\n        <div class=\"tarjeta\" @click=\"handleClick\">\n            <img :src=\"avatar\" :alt=\"nombre\">\n            <h3>{{ nombre }}</h3>\n            <p>{{ email }}</p>\n        </div>\n    `\n}"
      },
      {
        "lang": "html",
        "label": "Uso del componente",
        "code": "<tarjeta-usuario\n    v-for=\"u in usuarios\"\n    :key=\"u.id\"\n    :nombre=\"u.nombre\"\n    :email=\"u.email\"\n    @click=\"seleccionar\"\n/>"
      }
    ],
    "test": [
      {
        "question": "Que son las props?",
        "options": [
          "Eventos",
          "Datos del padre al hijo",
          "Metodos",
          "Estilos"
        ],
        "correct": 1,
        "explanation": "props son datos que se pasan de padre a hijo."
      },
      {
        "question": "Como emiten eventos los hijos?",
        "options": [
          "this.emit()",
          "$emit()",
          "emit()",
          "sendEvent()"
        ],
        "correct": 2,
        "explanation": "emit('evento', payload) en setup()."
      }
    ]
  },
  {
    "id": 21,
    "title": "Integracion Vue 3 con API de Symfony",
    "category": "vue",
    "module": 5,
    "estimatedTime": "45 min",
    "content": "<h2>Vue como cliente API</h2><p>Vue consume endpoints JSON via fetch o axios.</p><h2>Metodos HTTP</h2><ul><li><strong>GET:</strong> Obtener datos</li><li><strong>POST:</strong> Crear</li><li><strong>PUT:</strong> Actualizar</li><li><strong>DELETE:</strong> Eliminar</li></ul>",
    "codeExamples": [
      {
        "lang": "javascript",
        "label": "Vue + API",
        "code": "const { ref, onMounted } = Vue\n\ncreateApp({\n    setup() {\n        const usuarios = ref([])\n        const cargando = ref(false)\n        \n        async function obtenerUsuarios() {\n            cargando.value = true\n            try {\n                const res = await fetch('/api/usuarios')\n                usuarios.value = await res.json()\n            } finally {\n                cargando.value = false\n            }\n        }\n        \n        async function crearUsuario(datos) {\n            await fetch('/api/usuarios', {\n                method: 'POST',\n                headers: { 'Content-Type': 'application/json' },\n                body: JSON.stringify(datos)\n            })\n            await obtenerUsuarios()\n        }\n        \n        onMounted(obtenerUsuarios)\n        \n        return { usuarios, cargando, crearUsuario }\n    }\n}).mount('#app')"
      }
    ],
    "test": [
      {
        "question": "GET sirve para?",
        "options": [
          "Crear",
          "Obtener datos",
          "Actualizar",
          "Eliminar"
        ],
        "correct": 1,
        "explanation": "GET solicita datos del servidor."
      },
      {
        "question": "POST sirve para?",
        "options": [
          "Obtener",
          "Crear datos",
          "Eliminar",
          "Actualizar"
        ],
        "correct": 1,
        "explanation": "POST envia datos nuevos al servidor."
      }
    ]
  },
  {
    "id": 22,
    "title": "Disenando la API REST completa",
    "category": "proyecto",
    "module": 6,
    "estimatedTime": "50 min",
    "content": "<h2>API REST para Gestion de Tareas</h2><p>Vamos a disenar una API REST completa.</p><h2>Endpoints</h2><ul><li>GET /api/tareas - Listar todas</li><li>POST /api/tareas - Crear</li><li>GET /api/tareas/{id} - Obtener una</li><li>PUT /api/tareas/{id} - Actualizar</li><li>DELETE /api/tareas/{id} - Eliminar</li></ul><h2>Codigos HTTP</h2><ul><li>200 OK</li><li>201 Created</li><li>204 No Content</li><li>400 Bad Request</li><li>404 Not Found</li></ul>",
    "codeExamples": [
      {
        "lang": "php",
        "label": "Controlador API",
        "code": "<?php\n#[Route('/api/tareas')]\nclass TareaApiController {\n    #[Route('', methods: ['GET'])]\n    public function index(): JsonResponse {\n        $tareas = $this->tareaRepo->findAll();\n        return $this->json(['data' => $tareas]);\n    }\n    \n    #[Route('', methods: ['POST'])]\n    public function crear(Request $request): JsonResponse {\n        $data = json_decode($request->getContent(), true);\n        $tarea = new Tarea();\n        $tarea->setTitulo($data['titulo']);\n        $this->em->persist($tarea);\n        $this->em->flush();\n        return $this->json(['data' => $tarea], 201);\n    }\n}"
      }
    ],
    "test": [
      {
        "question": "201 Created es para?",
        "options": [
          "GET exitoso",
          "POST creo recurso",
          "DELETE exitoso",
          "Error"
        ],
        "correct": 1,
        "explanation": "201 indica que un nuevo recurso fue creado."
      },
      {
        "question": "204 se usa en?",
        "options": [
          "GET",
          "POST",
          "DELETE exitoso",
          "Error"
        ],
        "correct": 2,
        "explanation": "204 No Content para DELETE exitoso."
      }
    ]
  },
  {
    "id": 23,
    "title": "Frontend Vue 3 completo - Gestion de tareas",
    "category": "proyecto",
    "module": 6,
    "estimatedTime": "60 min",
    "content": "<h2>Aplicacion Vue 3 completa</h2><p> CRUD completo de tareas con Vue 3.</p><h2>Funcionalidades</h2><ul><li>Listar tareas</li><li>Crear tarea</li><li>Marcar completada</li><li>Eliminar tarea</li><li>Filtrar</li></ul>",
    "codeExamples": [
      {
        "lang": "html",
        "label": "App Vue completa",
        "code": "<div id=\"app\">\n    <h1>Gestor de Tareas</h1>\n    \n    <form @submit.prevent=\"agregarTarea\">\n        <input v-model=\"nuevaTarea\" placeholder=\"Nueva tarea\">\n        <button type=\"submit\">Agregar</button>\n    </form>\n    \n    <ul>\n        <li v-for=\"t in tareas\" :key=\"t.id\" :class=\"{completada: t.completada}\">\n            <input type=\"checkbox\" v-model=\"t.completada\" @change=\"guardar\">\n            {{ t.titulo }}\n            <button @click=\"eliminar(t.id)\">X</button>\n        </li>\n    </ul>\n</div>\n\n<script>\nconst { createApp, ref, onMounted } = Vue\n\ncreateApp({\n    setup() {\n        const tareas = ref([])\n        const nuevaTarea = ref('')\n        \n        function agregarTarea() {\n            if (nuevaTarea.value.trim()) {\n                tareas.value.push({\n                    id: Date.now(),\n                    titulo: nuevaTarea.value,\n                    completada: false\n                })\n                nuevaTarea.value = ''\n                guardar()\n            }\n        }\n        \n        function eliminar(id) {\n            tareas.value = tareas.value.filter(t => t.id !== id)\n            guardar()\n        }\n        \n        function guardar() {\n            localStorage.setItem('tareas', JSON.stringify(tareas.value))\n        }\n        \n        onMounted(() => {\n            const saved = localStorage.getItem('tareas')\n            if (saved) tareas.value = JSON.parse(saved)\n        })\n        \n        return { tareas, nuevaTarea, agregarTarea, eliminar }\n    }\n}).mount('#app')\n</script>"
      }
    ],
    "test": [
      {
        "question": "Que hace v-model en un input?",
        "options": [
          "Solo mostrar",
          "Two-way binding",
          "Solo lectura",
          "Eventos"
        ],
        "correct": 1,
        "explanation": "v-model sincroniza input y variable bidireccionalmente."
      },
      {
        "question": "@submit.prevent previene?",
        "options": [
          "Click",
          "Recarga del form",
          "Hover",
          "Focus"
        ],
        "correct": 1,
        "explanation": "@submit.prevent evita la recarga de pagina."
      }
    ]
  }
];