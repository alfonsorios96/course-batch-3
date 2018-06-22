# **[Centraal Academy](https://centraal.academy)**
-----------------------------------------------------
## Apuntes
_23-05-2018_

------------------------------------------------------
### [Git](https://git-scm.com)

#### Realizar Git Workflow

Para hacer Fork de un proyecto en Github, acceder a liga del repositorio a trabajar y dar click en el botón "Fork" para agregar un repositorio bifurcado a nuestro usuario de dicho proyecto.

![Git](http://hisham.hm/img/posts/github-fork.png)

#### Realizar clone del proyecto del Fork creado en el paso anterior.
git clone <urlRepositorio> ó git clone <sshRepositorio>

#### Verificar remotes

git remote -v => Indica los remotes sincronizados en local

#### Agregar Remotes

git remote add <remote_alias> <ssh/https url>` => Agrega un remote a nuestro local

#### Pull de repositorio y rama específica
git pull <remote> <branch>

#### Push de cambios a repositorio y rama específica
git push <remote> <branch>`

#### Eliminar remote 
git remote remove <remote_alias>`

#### Trabajando con ramas
git branch <branch_name>` => Crea una rama
git checkout <branch_name>` => Cambiar a la rama branch_name
git checkout -b <branch_name>` => Crea una rama y nos cambia a ella
git branch -d <branch_name> => Borra la rama (No debemos estar en ella)
git branch -D <branch_name> => Borra la rama aunque tenga commits o cambios pendientes.
git merge <branch_name> fusiona las branches (la que estamos posicionados) con la branch_name
#### Visualizar número determinado de commits
git log n -1
#### Generación de llave en GitHub
ssh-keygen` => para generar ssh keys
Copiar la llave pública y agregarla a GitHub
pbcopy < ~/.ssh/id_rsa.pub` => Copia la llave pública
![GitKey](https://jdblischak.github.io/2014-09-18-chicago/novice/git/img/github-ssh-keys.png)
#### Crear Tag
git tag -a 0.1.0
