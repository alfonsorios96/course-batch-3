# NOTES

### Workflow

3 capas

  - Remote Upstream(Master, QA, develop)
  - Remote
  - Local

```sh
$ git checkout <branch>
$ git pull
$ git add <filename>
$ git commit -m "Commit name"
$ git pull
$ git push
// Create pull request
```
### Md

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1].

- index.html
- README.md
- CHANGELOG.md

### Versions

Given a version number MAJOR(X).MINOR(Y).PATCH(Z), increment the:

- MAJOR(X) version when you make incompatible API changes,
- MINOR(Y) version when you add functionality in a backwards-compatible manner, and
- PATCH(Z) version when you make backwards-compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
