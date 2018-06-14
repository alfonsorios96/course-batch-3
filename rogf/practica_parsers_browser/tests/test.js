import {TagTools} from '../src/TagTools.js';
import {StyleTools} from '../src/StyleTools.js';


describe("Tags", function () {

    it("Obtener todas", function () {

        let stringFromFile = '<html><head><title>Title of the document</title></head><body>Content of the document......</body></html>';

        let tags = [ '<html>', '<head>', '<title>', '</title>', '</head>', '<body>', '</body>', '</html>' ];
                
        expect( TagTools.getAllTags(stringFromFile).toString() ).toBe( tags.toString());
    });

    it("Es Abierta", function () {
        
        let tag = '<drfs>';

        expect( TagTools.isOpen(tag) ).toBe( true );
    });

    it("Es Cierre", function () {

        let tag = '</drfs>';
        
        expect( TagTools.isClose(tag) ).toBe( true );
    });

    it("Es Auto-Cierre", function () {
        
        let tag = '<img src="files/image.png" />';

        expect( TagTools.isAutoClose(tag) ).toBe( true );
    });

    it("Es Style (Open)", function () {
        
        let tag = '<style>';

        expect( TagTools.isStyle(tag) ).toBe( true );
    });
    
    it("Es Style (Close)", function () {
        
        let tag = '</style>';

        expect( TagTools.isStyle(tag) ).toBe( true );
    });

    it("Extract Style", function () {

        let stringFromfile = '<html><head><style>a{color:red;}</style><title>Title of the document</title></head><body>Content of the document......</body><style>xyz</style></html>';

        expect( TagTools.extractNextStyle(stringFromfile) ).toBe('a{color:red;}');
    });
    
    it("RemoveStyle", function () {

        let stringFromfile = '<html><head><style>a{color:red;}</style><title>Title of the document</title></head><body>Content of the document......</body><style>xyz</style></html>';

        let stringFromfileAfter = '<html><head><title>Title of the document</title></head><body>Content of the document......</body><style>xyz</style></html>';

        expect( TagTools.removeNextStyle(stringFromfile.toString()) ).toBe( stringFromfileAfter );
    });

});

describe("Attr", function () {

    it("Extraer atributos", function () {

        expect(TagTools.getAttrs('<input type="x" id="y">')).toEqual([{
            key : 'type',
            value : 'x'
}, {
            key : 'id',
            value : 'y'
}]);
    });
    
});

describe("CSS", function () {

    it("Extraer reglas", function () {

        let stringFromFile = 'h1{color:#00f;background-color:#ff0;border:1px solid #000}p{color:red}';

        let rules = [ 'h1{color:#00f;background-color:#ff0;border:1px solid #000}', 'p{color:red}' ];
                
        expect( StyleTools.getRules(stringFromFile) ).toEqual( rules );
    });
    
    it("Extraer selectores", function () {

        let rule = "p , h3, div > h5 {  color  : red   }";
        
        let selectors = ["p", "h3", "div > h5", ];
        
        expect( StyleTools.getSelectors(rule) ).toEqual(selectors);
    });
    
    it("Extraer styles", function () {

        let rule = "p , h3, div > h5 {  color  : red ; border-color:pink;  }";
        
        let styles = [{key:"color", value:"red"}, {key:"border-color", value:"pink"} ];
        
        expect( StyleTools.getStyles(rule) ).toEqual(styles);
    });

});