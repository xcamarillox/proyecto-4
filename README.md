## PROYECTO 4: Appetitoso / Restaurant App
- #### (scroll for the english version)
- #### Probado en Chrome


La Página/App de **Appetitoso** presenta a sus usuarios un restaurante italiano de gran prestigio, para lo cual dicho sitio debe estar a la altura y no descuidar la elegancia acorde al estilo del restaurante. La App muestra el detalle de sus valores, su menú, una sección para reservas y una sección de contacto. No hace falta decir que el resultado buscado es el de un desarollo profesional.

Se utilizan herramientas como **Parcel** (en desarrollo) para "empaquetar" el código y facilitar su implementación en producción. **React** es el eje central del proyecto, framework utilizado para manipular elementos DOM, además de manejar las interacciones del usuario. Se adjunta una librería a React, como lo es **React Router** como administrador de rutas. **React Bootstrap** también se incluye en el proyecto, sacando provecho de sus plantillas o estilos CSS. Se añade la funcionalidad de "toasts" con la versatilidad de **Toastify JS**. El resultado del desarrollo de la aplicación es una Single Page Application (SPA), que brinda una experiencia muy fluida al usuario del sitio. 

En el Backend se utiliza **Firebase/Firestore**, servicio de **Google** que resulta una manera eficiente y muy potente como almacenamiento pemanente de datos. Con este servicio los usuarios podrán ingesar al sistema (loguearse) posterior a crear una cuenta con correo electrónico o con la autenticación de un correo de Gmail. La finalidad de ingresar es la de realizar reservaciones en el restaurante y consultarlas de una manera simple y elegante.

### Algunos objetivos técnicos que se buscan son los siguientes:

 - Una sección o página sobre la información principal del restaurante.
 - Una sección de datos de contacto, ubicación y correo electrónico.
 - Un componente que permita reservar una mesa en una hora y fecha específica para un usuario.
 - Un componente que incluya el menú completo del restaurante.
 - Un componente que enliste las reservaciones del usuario.
 - Una sección de blog con algunos artículos enlistados.
 - Componentes bajo **"Hooks"**. (Se utilizan useState, useEffect, useContext y useRef).
 - Uso de props con React.
 - Uso de los servicios de autenticación de **Firebase** (sign Up, sign In y sign Out).
 - Uso de la funcionalidad de autenticación con Google y recuperación de cuenta con correo.
 - Uso de los servicios de la **Firestore** (CRUD de datos).
 - CSS para el aspecto visual de componentes.
 - Adaptado a móviles.

### Pasos para su puesta en marcha de forma local
 **- Requerimientos:** Solamente el **archivo .env** que previamente te haré llegar. Si no cuentas con el archivo y estas interesado en el proyecto contactamente y con gusto te lo hago llegar. De todas maneras puedes revizar el **live demo**, te aseguro que funciona exactamente igual.
 1. En consola ejecuta: **git clone [https://github.com/xcamarillox/proyecto-4](https://github.com/xcamarillox/proyecto-4)** o bien puedes acceder en tu navegador a [https://github.com/xcamarillox/proyecto-4](https://github.com/xcamarillox/proyecto-4). En el apartado de code, seleccionar download ZIP. Esto ultimo si no te interesa el historial de commits o la data de GIT (no tan recomendable).
 2. Coloca el archivo **.env** en el directorio raíz del proyecto (en el mismo lugar está el package.json). Este archivo protege las claves privadas y se te proporciona de antemano (no se incluye al proyecto de GIT/GITHUB por ese motivo).
 3. En consola dirigete al directorio raíz del proyecto y ejecuta **npm install**
 4. En consola ejecuta: **npm start**
 5. Abre tu navegador y coloca **http://localhost:1234/** en la barra de dirección. Parcel genera esa dirección generalmente, si no funciona coloca la dirección que te menciona la terminal.
 6. Listo, ahora puedes hacer pruebas del proyecto. Si adicionalmente se busca hacer un deploy ejecuta en consola: **npm run build**
 
- [live demo](https://xcamarillox.github.io/proyecto-4/index.html)

_________________


## PROYECTO 4: Appetitoso / Restaurant App
- #### Tested in Chrome


The **Appetitoso** Page/App presents its users with a highly prestigious Italian restaurant, for which said site must be up to the task and not neglect the elegance according to the style of the restaurant. The App shows the detail of its values, its menu, a section for reservations and a contact section. It goes without saying that the desired result is that of professional development.

Tools such as **Parcel** (in development) are used to "package" the code and make it easier to deploy to production. **React** is the central axis of the project, a framework used to manipulate DOM elements, in addition to handling user interactions. A library is attached to React, such as **React Router** as a route manager. **React Bootstrap** is also included in the project, taking advantage of its templates or CSS styles. Added "toasts" functionality with the versatility of **Toastify JS**. The result of the application development is a Single Page Application (SPA), which provides a very fluid experience to the user of the site.

In the Backend, **Firebase/Firestore** is used, a **Google** service that is an efficient and very powerful way to permanently store data. With this service, users will be able to enter the system (log in) after creating an account with email or with the authentication of a Gmail. The purpose of entering is to make reservations at the restaurant and consult them in a simple and elegant way.

### Some technical objectives that are sought are the following:

- A section or page about the main information of the restaurant.
- A section of contact information, location and email.
- A component that allows you to reserve a table at a specific time and date for a user.
- A component that includes the full menu of the restaurant.
- A component that lists the user's reservations.
- A blog section with some articles listed.
- Components under **"Hooks"**. (useState, useEffect, useContext, and useRef are used.)
- Use of props with React.
- Use of **Firebase** authentication services (sign Up, sign In and sign Out).
- Use of the functionality of authentication with Google and account recovery with email.
- Use of **Firestore** services (data CRUD).
- CSS for the visual appearance of components.
- Adapted to mobiles.

### Steps for its local implementation

 **- Requirements:** Only the **.env file** that I will send you previously. If you do not have the file and you are interested in  the project, contact me and I will gladly send it to you. Anyway you can review the **live demo**, I assure you that it works  exactly the same.
 1. In console execute: **git clone [https://github.com/xcamarillox/proyecto-4](https://github.com/xcamarillox/proyecto-4)** or you can access on your web browser to [https://github.com/xcamarillox/proyecto-4](https://github.com/xcamarillox/proyecto-4). In the code section, select download ZIP. The latter if you are not interested in commit history or GIT data (not so recommended).
 2. Place the **.env** file in the root directory of the project (in the same place is the package.json). This file protects the private keys and is provided to you in advance (it is not included in the GIT/GITHUB project for that reason).
 3. In console go to the root directory of the project and run **npm install**
 4. In console execute: **npm start**
 5. Open your browser and put **http://localhost:1234/** in the address bar. Parcel generally generates that address, if it doesn't work, put the address that the terminal mentions.
 6. Ready, you can now test the project. If additionally you want to do a deploy, run in the console: **npm run build**

- [live demo](https://xcamarillox.github.io/proyecto-4/index.html)