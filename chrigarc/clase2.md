# Clase 2

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Repositorios del curso
| Propietario | Proyecto | URL | Alias |
| ------ | ------ | ------ | ------ |
| Alfonso | web-mobile-specialist | https://github.com/alfonsorios96/web-mobile-specialist/ | 
| Alfonso | course-batch-3 | https://github.com/alfonsorios96/course-batch-3 | upstream | 
| Chrigarc | course-batch-3 | https://github.com/chrigarc/course-batch-3 | origin |

## Comandos nuevos de git
| Comando | Uso |
| ------ | ------ |
| `git remote -v` | Indica los remotes (repositorios) sincronizados en local |
| `git remote add <remote_alias> <ssh/https url>` | Agrega un remote(repositorio) a nuestro local |
| `git pull <remote> <branch>` | Actualiza los cambios del remoto de la rama indicada |
| `git push <remote> <branch>` | Sube los cambios al remoto y rama seleccionda|
| `git remote remove <remote_alias>` | Elimina del proyecto el remoto indicado |
| `git branch <branch_name>` | Crea una nueva rama | 
| `git checkout <branch_name>` | Nos cambia a la rama indicada | 
| `git checkout -b <branch_name>` | Crea una nueva rama y nos cambia hacia ella |
| `git branch -d <branch_name>` | Elimina la rama indicada mientras no le estemos usando |
| `git branch -D <branch_name>` | Borra la rama aunque tenga commits o cambios pendientes. | 
| `git merge <branch_name>` | fusiona las branches (la que estamos posicionados) con la branch_name | 

## Pasos para que git no solicite todo el tiempo el usuario y contraseña
* Generar la llave de seguridad con `ssh-keygen`
* Buscar el codigo de la llave generada en ~/.ssh/id_rsa.pub
* Copiar la llave nueva dentro de la administración de llaves de GitHub
* Actualizar el .git/config para que la comunicación con GitHub sea por medio de SSH

