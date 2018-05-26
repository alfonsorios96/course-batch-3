"use strict";

var setLanguage = function setLanguage(language) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data/" + language + ".json");
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.response);
            var response = JSON.parse(xhr.response);
            var template = "\n                <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n                    <a class=\"navbar-brand\" href=\"#\">" + response.header + "</a>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-icon\"></span>\n                    </button>\n                    \n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                        <ul class=\"navbar-nav mr-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">" + response.nav[0] + "<span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">" + response.nav[1] + "</a>\n                        </li>\n                        </ul>\n                        <form class=\"form-inline my-2 my-lg-0\">\n                            <select name=\"idioma\" id=\"idioma\" onchange=\"setLanguage(this.value)\">\n                                <option value=\"es\">Espa\xF1ol</option>\n                                <option value=\"en\">Ingl\xE9s</option>\n                            </select>\n                        </form>\n                    </div>\n                </nav>\n\n                <section class=\"body\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                    <div class=\"card\">\n                                        <div class=\"card-body\">\n                                            <h5 class=\"card-title\">" + response.title + "</h5>\n                                            <p class=\"card-text\">" + response.content + "</p>\n                                        </div>\n                                    </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                    <div class=\"alert alert-light\" role=\"alert\">\n                                        " + response.comments[0] + "\n                                    </div>\n                                    <div class=\"alert alert-light\" role=\"alert\">\n                                        " + response.comments[1] + "\n                                    </div>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            ";
            var body = document.querySelector('body');
            body.innerHTML = template;
        } else {
            console.log(xhr.statusText);
        }
    };

    xhr.send();
};

(function () {
    setLanguage('es');
})();