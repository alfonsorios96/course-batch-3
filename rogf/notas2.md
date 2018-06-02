### Comandos  git para ramas

| Comando  | Descripcion |
| ------------- | ------------- |
| ```git remote -v``` | Indica los remotes sincronizados en local  |
| `git remote add <remote_alias> <ssh/https url>` | Agrega un remote a nuestro local  |
| `git branch <branch_name>` | Crea una rama  |
| `git checkout <branch_name>` | Cambiar a la rama branch_name  |
| ``git remote remove <remote_alias>`` | Borra origen remoto  |
| `git checkout -b <branch_name>` | Crea una rama y nos cambia a ella  |
| `git branch -d <branch_name>` | Borra la rama (No debemos estar en ella)  |
|`git branch -D <branch_name>`  | Borra la rama aunque tenga commits o cambios pendientes.  |
| `git merge <branch_name>` | Fusiona las branches (la que estamos posicionados) con la branch_name  |
| `ssh-keygen` | Para generar ssh keys  |
| `pbcopy < ~/.ssh/id_rsa.pub` |  Copia la llave pública |



### Comandos git para tagssss


| Comando  | Descripcion |
| ------------- | ------------- |
| `git tag` | Muestra tags |
| `git tag -a v1.4 -m "my version 1.4"` | Crea tag con anotacion |