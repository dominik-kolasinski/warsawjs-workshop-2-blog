(function(){
    class PostAddComponent{
        constructor(data){
            this.template = document.querySelector('#template-post-add-dom-component').innerHTML;
            this.$container = document.querySelector('#add-post');
            this.render(data);
            this.addEventListeners();
        }

        addEventListeners(){
            let $form = this.$container.querySelector('form');
            $form.addEventListener('submit', (e) => {
                e.preventDefault();
                let data = new FormData($form);
                let formDataObject = {};
                for(let [key,value] of data) {
                    console.log([key,value]);
                    formDataObject[key] = value;
                };

                window.namespace.runtime.trigger('form-sent', formDataObject);
            });

        }

        render(data){
            let compiledTemplate = Mustache.render(this.template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compiledTemplate, 'text/html');
            let $templateToRender = $document.querySelector('section');
            this.$container.appendChild($templateToRender);
        }
    }

    window.namespace.components.PostAddComponent = PostAddComponent;
}());


