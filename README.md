# JHB Portfolio — QA Automation Engineer

Portafolio personal de **Jonathan Hans Ballesteros**, orientado a **QA Automation, Software Testing y desarrollo de soluciones de automatización**.

El sitio presenta el perfil profesional, habilidades técnicas, experiencia, proyectos de automatización, pruebas de APIs, automatización móvil y pruebas no funcionales.

## 🌐 Sitio web

**Producción:**  
https://jonathan-hans-ballesteros.netlify.app/

## 👨‍💻 Sobre el proyecto

Este proyecto comenzó a partir de la plantilla:

**DevFolio - Developer Portfolio Template**

- Template: DevFolio - Developer Portfolio Template
- Autor original: HTML Codex
- Sitio: https://htmlcodex.com/developer-portfolio-template

La plantilla fue personalizada para convertirla en un portafolio profesional enfocado en QA Automation y Software Testing.

## 🚀 Tecnologías utilizadas

### Frontend

- HTML5
- CSS3
- JavaScript
- jQuery
- Bootstrap 4
- Font Awesome

### Librerías utilizadas

- WOW.js
- Waypoints
- Typed.js
- Owl Carousel
- Isotope
- Lightbox
- jQuery Bootstrap Validation

### Testing & Automation

El contenido del portafolio está orientado a tecnologías como:

- Java
- JavaScript
- TypeScript
- Selenium
- Playwright
- Serenity BDD
- Cucumber
- Screenplay Pattern
- Appium
- Karate
- REST Assured
- Postman
- JMeter
- Git
- GitHub
- Jenkins
- Docker
- Azure DevOps
- AWS CodePipeline
- SQL

## 📁 Estructura del proyecto

```text
developer-portfolio-template/
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── img/
│   ├── fotografías y logos
│   └── imágenes de proyectos
│
├── lib/
│   ├── animate/
│   ├── easing/
│   ├── isotope/
│   ├── lightbox/
│   ├── owlcarousel/
│   ├── typed/
│   └── wow/
│
├── mail/
│   ├── contact.js
│   ├── contact.php
│   └── jqBootstrapValidation.min.js
│
├── index.html
├── LICENSE.txt
└── README.md
```

## 🧩 Secciones del portafolio

El sitio incluye actualmente:

- **Inicio:** presentación profesional y perfil como QA Automation Engineer.
- **Sobre mí:** resumen del perfil y enfoque profesional.
- **Skills & Tecnologías:** principales conocimientos técnicos.
- **Experiencia Profesional:** enfoque en automatización y calidad de software.
- **Proyectos:** proyectos agrupados mediante filtros.
- **Formación:** educación y aprendizaje continuo.
- **Contacto:** formulario e información de contacto.

## 🗂️ Filtros de proyectos

La sección de proyectos utiliza **Isotope** para filtrar dinámicamente las tarjetas.

Categorías actuales:

- Todos
- Automatización
- Pruebas No Funcionales
- API
- Mobile

Cada proyecto utiliza una clase CSS asociada al filtro correspondiente. Por ejemplo:

```html
<div class="portfolio-item automation">
```

```html
<div class="portfolio-item api">
```

```html
<div class="portfolio-item mobile">
```

```html
<div class="portfolio-item non-functional">
```

## 🧪 Proyectos destacados

Entre los proyectos y tecnologías mostrados en el portafolio se encuentran:

### Serenity BDD

Framework de automatización utilizando Java, Cucumber y Screenplay.

### Playwright Automation

Automatización de aplicaciones web utilizando Playwright y JavaScript.

### Karate API Testing

Automatización y validación de APIs utilizando Karate Framework.

### Mobile Automation

Automatización de aplicaciones móviles utilizando Appium y Java.

### QA Automation Framework

Diseño de arquitecturas reutilizables para automatización y ejecución de pruebas.

### API & Integration Testing

Validación automatizada de servicios, integraciones y escenarios funcionales.

### Pruebas No Funcionales

Sección orientada a automatización de pruebas de rendimiento, carga y estrés, incluyendo herramientas como JMeter.

## 💻 Ejecución local

El proyecto puede ejecutarse localmente utilizando **XAMPP + Apache**.

### 1. Ubicar el proyecto

Copiar o ubicar el proyecto dentro de:

```text
C:\xampp\htdocs\
```

Por ejemplo:

```text
C:\xampp\htdocs\xampp\developer-portfolio-template
```

### 2. Iniciar Apache

Abrir XAMPP y arrancar:

```text
Apache
```

MySQL no es necesario para el contenido estático actual del portafolio.

### 3. Abrir el sitio

Dependiendo de la ubicación de la carpeta:

```text
http://localhost/xampp/developer-portfolio-template/
```

## ☁️ Despliegue

El sitio está preparado para desplegarse en Netlify.

También puede realizarse un despliegue manual utilizando Netlify CLI desde la carpeta del proyecto:

```bash
netlify login
```

Para generar un deploy de prueba:

```bash
netlify deploy --dir=.
```

Para publicar en producción:

```bash
netlify deploy --dir=. --prod
```

## 📬 Formulario de contacto

El proyecto conserva la estructura de formulario de contacto de la plantilla original:

```text
mail/
├── contact.js
├── contact.php
└── jqBootstrapValidation.min.js
```

El formulario utiliza AJAX para enviar los datos a `contact.php`.

> **Nota:** la ejecución de `contact.php` depende de un entorno con soporte para PHP/Apache, como XAMPP. Para el despliegue en Netlify se recomienda migrar este flujo a una solución compatible con Netlify Functions o un servicio externo de formularios.

## 🔧 Personalización

Para modificar el contenido principal:

- `index.html` → textos, secciones, proyectos y enlaces.
- `css/style.css` → estilos visuales, colores, botones y diseño.
- `js/main.js` → animaciones, navegación, filtros y comportamiento dinámico.
- `img/` → fotografías, logos e imágenes de proyectos.
- `mail/` → validación y procesamiento del formulario.

## 📌 Buenas prácticas para futuras actualizaciones

Antes de publicar cambios:

1. Realizar una copia de seguridad del proyecto.
2. Probar los cambios localmente con Apache.
3. Revisar los filtros de proyectos.
4. Verificar que las imágenes existan y utilicen exactamente el mismo nombre.
5. Comprobar el diseño en escritorio y móvil.
6. Generar primero un deploy de prueba en Netlify.
7. Publicar en producción únicamente después de validar el resultado.

## 🔗 Enlaces

- **Portafolio:** https://jonathan-hans-ballesteros.netlify.app/
- **GitHub:** https://github.com/Johans2018
- **LinkedIn:** https://www.linkedin.com/in/jonathan-hans-ballesteros-88785b181/

## 👤 Autor

**Jonathan Hans Ballesteros**

QA Automation Engineer | Software Testing | Automation

- GitHub: https://github.com/Johans2018
- LinkedIn: https://www.linkedin.com/in/jonathan-hans-ballesteros-88785b181/

## 📄 Licencia

La plantilla original DevFolio fue creada por **HTML Codex** y está sujeta a los términos de su licencia original.

Consultar:

https://htmlcodex.com/license

El código y las personalizaciones realizadas para el portafolio deben respetar la licencia de los recursos originales utilizados en el proyecto.
