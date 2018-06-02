# Decalogue and good practices (guideline)

![Centraal Academy](https://pbs.twimg.com/profile_images/899745664808042496/lcaiDyqJ_400x400.jpg)

## Git

### .gitignore

- One by project at root. `/`
- If you want exlude sub-directories or files nested you use: `/**/` eg. `folder/**/node_modules/` Exludes all node_modules into folder matches.
- [Docs](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) **Ignoring files**

### JavaScript

* Declare `object` & `function` camelCase
```js
const user = {
    // @todo
};

const myFunction = (optional = '') => {
    @todo
};
```

* Use mode strict
* Use `const` or `let`
* Autodescriptive variables Eg. `catch(error => error);`
* Use single quote `''`

License
----

MIT


**Free Software, Hell Yeah!**
