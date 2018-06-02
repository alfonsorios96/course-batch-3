# 22 - Mayo - 2018
Hablamos sobre las reglas que git recomienda para el versionamiento de código
lsa cuales enumeramos de esta forma:
1. git pull **upstream** master
2. Trabajar en Local
3. git add (all/./file/directory)
4. git commit -m “mensaje”
5. git pull **upstream** master
6.1. git push origin **upstream**
6.2. hacer pull request
7. Resolver conflictos manualmente

[![N|Solid](gitCicle.png)]
---
### Sistema de tags para versionar Software X.Y.Z
| Tag | Significado |
| ------ | ------ |
| X |  **Major** para cambios publicos, se modifican o eliminan funcionalidades|
| Y |  **Minor** para cambios nuevos |
| Z |  **Patch** soluciones de bugs, |

#####   Ejemplos
0.0.0
1.0.0
1.2.0
3.4.5
7.2344.42323
