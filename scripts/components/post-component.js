(function(){
    class PostComponent{
        constructor(data){
            this.template = document.querySelector('#template-post-component').innerHTML;
            this.$container = document.querySelector('#display-post');
            this.render(data);
        }

        render(data){
            let compiledTemplate = Mustache.render(this.template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compiledTemplate, 'text/html');
            let $templateToRender = $document.querySelector('section');
            this.$container.appendChild($templateToRender);
        }
    }

    window.namespace.components.PostComponent = PostComponent;
}());