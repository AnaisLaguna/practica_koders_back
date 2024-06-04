/*
API: conjunto de funciones y procedimientos que cumlen una o muchas funciones con el fin de ser utilizadas por otro
software

ejemplo:
-   FileSystem API
    -   write


que es rest y restful
son apis que se construyen con backend

rest => arquitectura que es un 
-    protocolo cliente servidor sin estado(estado: caracteristicas y valores a travez del tiempo) http
-   conjunto de operaciones bien definidas (get,post,delete)
-   sintaxis universal (/recurso/identificcador) si se quiere hacer un peticion es la misma
    llamada si se esta haciendo una llamada de cualquier lenguaje la url es la misma
-   uso de hipermedia (html,xml json)

se denomina restful a un servicio que implementa REST

RESTful => se denomina a un servicio que implemtnea el servicio completo restful sigue las caracteristicas de rest

                                    ARQUITECTURA LIMPIA

para mantener el codig mas sencillo y administraion de archivos, se arquitectura el proyecto
para darle responsabilidades a los archivos.
en la arquitectura solo se pueden comunicar las capas de afuera hacia adentro

la aplicacion es como los ogros (tienen capas), estas capas son:
-   capa donde esta la interfaz de usuario web, la capa web se comunican los gateway y controladores (funciones enpoint)
-   capa device*/
