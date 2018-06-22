class Main {
    contructor() {
    }
    
    loadContentByLanguage(language) {
        const getData = new GetData();
        getData.getDataByLanguaje(language).then((data) => {
            this.makeView(data);
        }, (error) => {
            console.error('error: ', error);
            this.showError();
        });
    }

    makeView(content) {
        this.makeHeader(content.header);
        this.makePosts(content.postList);
        this.makeFooter(content.footer);
    }
    
    makeHeader(headerData) {
        const HEADER = document.querySelector('header');
        const title = HEADER.querySelector('#title');
        title.textContent = headerData.title;
        const menu = HEADER.querySelector('#menu');
        let items = '';
        for(const item of headerData.menu) {
            items += `<a href="${item.url}">${item.name}</a>`;
        }
        menu.innerHTML = items;
    }

    makePosts(postList) {
        const LIST_OF_POSTS = document.querySelector('#list-of-post');
        let items = '';
        for (const post of postList) {
            items += this.createPostElement(post);
        }
        LIST_OF_POSTS.innerHTML = items;
    }

    createPostElement(postData){
        const postItem = `
            <div class="post">
                <h2 class="title">${postData.title}</h2>
                <div class="description">${postData.description}</div>
                <a class="btn btn-primary" href="${postData.link.ref}">${postData.link.text}</a>
            </div>
        `;
        return postItem;
    }

    makeFooter(footerData) {
        const FOOTER = document.querySelector('footer');
        FOOTER.textContent = footerData.content;
    }

    showError() {
        alert('Error to load content of blog');
    }
}


// Load initial content
(() => {
    const main = new Main();
    document.getElementById('spanish').addEventListener('click', () => {
        main.loadContentByLanguage('es');
    });
    
    document.getElementById('english').addEventListener('click', () => {
        main.loadContentByLanguage('en');
    });

    main.loadContentByLanguage('es');

})();