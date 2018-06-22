# Centraal Academy - Web Mobile Specialist (NOTES) 23-05-2018

# GIT - comandos

# Repositorios remotos
Agregar repositorio remoto
```sh
$ git remote add <remote_alias> <ssh/https url>
```

Eliminar repositorios remotos
```sh
$ git remote remove <remote_alias>`
```

Publicar en un repositorio remoto especifico
```sh
$ git push <remote> <branch>`
```
 
 # Branchs en GIT
 Creacion de branch
 
 ```sh
$ git checkout -b name-of-branch
```

Cambio entre branchs
```sh
$ git checkout name-of-branch
```

Visualizar branchs existentes
```sh
$ git branch
```
Merge entre branchs
```sh
$ git merge name-branch
```
 
Eliminar branchs
```sh
$ git branch -d name-branch
```
 Visualizacion de logs sobre el branch ordenados de forma descendente
 ```sh
$ git log -n 1
```
 
 # Tags
 
 creacion de tag
 ```sh
$ git tag -a 0.1.0
```

Publicacion de tags
```sh
$ git push --all tags
```


# SSH key
Para generar un llave SSH
```sh
$ ssh-keygen
// copiar ssh key
$ pbcopy < ~/.ssh/id_rsa.pub
```
 
# Recomendacion de Nomeclatura para commits [Karma](http://karma-runner.github.io/2.0/dev/git-commit-msg.html)


# Git workflow
Actualizacion del repositorio local desde upstream
```sh
$ git pull upstream master
```
 Agregar cambios
```sh
$ git add .
```
Generar commit
```sh
$ git commit -m "este es un commit"
```
Antes de realizar push sobre fork se realiza un pull sobre upstream
```sh
$ git pull upstream master
```