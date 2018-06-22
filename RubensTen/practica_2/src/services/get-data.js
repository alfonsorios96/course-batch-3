const contextPath = window.location.protocol + "//" + window.location.host + '/';
class GetData {
    constructor() {
        this.http = new Http();
    }

    /**
     * Return info of blog by language(es|en)
     * @param {string} languaje define the languaje to get
     */
    getDataByLanguaje(languaje) {
        const URL = contextPath + `data/${languaje}.json`;
        return new Promise((resolve, reject) => {
            this.http.get(URL).then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
}