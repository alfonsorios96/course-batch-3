# Notas de Git

|### Comando|### Función|
|------|------|
|git remote|Indica los remotes sincronizados en local|
|git remote add <remote_alias> <ssh/https url> |Agrega un remote a nuestro local|
|git pull <remote> <branch|Baja información del repositorio|
|git push <remote> <branch>|Sube información al repositorio|
|git remote remove<remote_alias>|Elimina la dirección del origen alias|
|git branch <branch_name>|Crea una rama|
|git checkout <branch_name>|Cambiar a la rama branch_name|
|git checkout -b <branch_name>|Crea una rama y nos cambia a ella|
|git branch -d <branch_name>|Borra la rama (No debemos estar en ella)|
|git branch -D <branch_name>|Borra la rama aunque tenga commits o cambios pendientes|
|git merge <branch_name>|fusiona las branches (la que estamos posicionados) con la branch_name|
|ssh-keygen|Para generar ssh keys (opcional)|
|pbcopy < ~/.ssh/id_rsa.pub | Copia la llave pública
|git tag -a x.y.z -m|Descripcion de la version|
|git push --tags|Subir a repositorio la etiqueta|
|ssh-keygen`|Para generar ssh keys para hacerlo mas seguro|
|pbcopy < ~/.ssh/id_rsa.pub|Copia la llave pública|
