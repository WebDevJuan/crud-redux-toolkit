# Crud con react-toolkit
## Node Version
La versión de node corresponde con la **18.0.0**

## Finalidad del proyecto
Este es un Crud de una lista de tareas sin estilos utilizando ReactJS.

## Librerías significativas
 - Uuid 
	https://www.npmjs.com/package/uuid
 - React-redux
	https://www.npmjs.com/package/react-redux
 - React-toolkit
    https://www.npmjs.com/package/@reduxjs/toolkit
 - React-router-dom
    https://www.npmjs.com/package/react-router-dom


## Instalar Eslint

   - Comando de instalación:
			   
			 npm i -D eslint (activar extensión eslint)
			   
   - Instalar extensión ESLint
   
   - Comando para configurar eslint: 

			npx eslint --init 
			
     
    - Podemos probar para ver los errores de un fichero con el siguiente comando:
    
		    	npx lint src/...
		    
		    
    - Podemos probar para solucionar los errores de un fichero
   
		     	npx lint src/... --fix
		     

   **NOTAS:** 
   
   - Podemos añadir la siguiente confg al extends 
        
		        extends: [
		            'plugin:react/recommended',
		            'plugin:react/jsx-runtime', -> NEW
		            'standard',
		            'eslint-config-prettier' -> NEW // Esto permitirá que prevalezcan las reglas 			        de prettier sobre las del eslint
		        ],


## Instalar Prettier
   - Crear fichero .prettierc
   - Comando de instalación: 
  
			 npm i -D prettier (activar extensión eslint)
			 
   - Comando para formatear un archivo: 
   
			 npx prettier src/... ()
			   
   - Opciones de settings (file/preferences/settings/ -> format on save - format file on save (checked) )
   - Intalar extensión prettier
   - Definir formateador por defecto botón derecho sobre un fichero (format with -> default formatter)
    
## Configurar las opciónes de terminal en el package.json

   - Añadir los ficheros .prettierignore y .eslintignore
   - Configuración package.json:
   
            "format": "prettier -- write .",
            "lint": "eslint --fix . --ext .js,.jsx"
