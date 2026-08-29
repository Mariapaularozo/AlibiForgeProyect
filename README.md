# 🔮 AlibiForge

**AlibiForge** Es una plataforma web interactiva construida con **React** y **Vite** diseñada para la creación colaborativa, validación y gestión de coartadas (*alibis*). El sistema cuenta con un modelo de reputación, sistema de testigos comunitarios (*Alibi Chain*), cálculo de credibilidad, penalizaciones por deserción y rankings globales.

**✨Este proyecto fue hecho por:** Maria Paula y Sofía. :D 

---

## 🚀 Características Principales

- **Gestión de Usuarios y Perfiles**:
  - Registro e inicio de sesión con alias, contraseñas y especialidades (*Excusa Creativa*, *Detallista*, *Improvisador*, *Conspirador*).
  - Puntuación de credibilidad dinámica y sistema de bloqueo temporal si la credibilidad cae por debajo de cero.
- **Creación de Coartadas (Create Alibi)**:
  - Formulario con validación de al menos 3 detalles clave.
  - Selección de situaciones mediante sistema de etiquetas (*TagSystem*).
  - Guardado en estado de borrador (*Draft*) o envío a revisión (*Submitted* / *UnderReview*).
- **Cadena de Coartadas (Alibi Chain)**:
  - Sistema de respaldo donde otros usuarios pueden unirse como testigos para aumentar el índice de credibilidad.
  - Mecánica de deserción con penalización de credibilidad tanto para el autor como para el resto de los testigos.
- **Validación y Detección de Falsedades**:
  - Evaluación comunitaria basada en tres métricas: *Credibilidad*, *Creatividad* y *Consistencia*.
  - Detección de coartadas falsas con penalización severa y cambio de estado a *Rejected*.
- **Rankings y Estadísticas (Leaderboards)**:
  - *Master of Deceit*: Mayor índice de credibilidad acumulado.
  - *Most Creative*: Mayor promedio en creatividad.
  - *Most Consistent*: Mayor consistencia en testimonios.
  - *Most Wanted*: Usuarios con mayor número de coartadas generadas.

---
### 📎 Una pequeña nota: 
El proyecto fue hecho por ramas y para ver toda su funcionalidad hay que revisar las ramas. ¡Echale un ojo! Cada una tiene partes importantes para AlibiForge. Muhcas gracias :)

## 📁 Estructura del Proyecto

```text
AlibiForgeProyect/
├── src/
│   ├── pages/
│   │   ├── AlibiChain.jsx       # Gestión de cadena de testigos y deserciones
│   │   ├── coartadas.js         # Lógica de cálculo de credibilidad y persistencia de coartadas
│   │   ├── CreateAlibi.jsx      # Formulario de creación y borrador de coartadas
│   │   ├── Login.jsx            # Autenticación de usuarios
│   │   ├── Perfil.jsx           # Panel de usuario, métricas de credibilidad y estado de bloqueo
│   │   ├── Registro.jsx         # Registro de nuevos usuarios y selección de especialidad
│   │   ├── TagSystem.js         # Definición de etiquetas y situaciones predeterminadas
│   │   └── usuarios.jsx         # Componente de tarjeta de coartada y votación comunitaria
│   ├── utils/
│   │   ├── Charts.js            # Algoritmos para cálculo de rankings y estadísticas
│   │   └── usuarios.js          # Persistencia en localStorage y control de credibilidad
│   ├── App.jsx                  # Configuración de rutas y navegación principal
│   ├── index.css                # Estilos globales y utilidades de diseño (Tailwind CSS)
│   └── main.jsx                 # Punto de entrada de la aplicación React
├── index.html                   # Documento HTML base
├── package.json                 # Dependencias y scripts del proyecto
└── vite.config.js               # Configuración del entorno de desarrollo Vite
