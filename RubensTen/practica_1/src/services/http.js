class Http {
    constructor() {}
    request (url, body) {
        const promise = new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
        return promise;
    }

    get(url) {
        console.log('get called');
        return this.request(url, null);
    }
}