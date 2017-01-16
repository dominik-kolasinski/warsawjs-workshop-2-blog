/**
 * Created by ddd on 15/01/2017.
 */
(function(){

    let PostComponent = window.namespace.components.PostComponent;
    let PostAddComponent = window.namespace.components.PostAddComponent;
    let PostModel = window.namespace.models.PostModel;
    let router = window.namespace.router;

    class PostController{
        constructor(){
            this.postList=[];
            window.namespace.runtime.on('form-sent', (payload) => {
                payload.id = uuid.v4();
                this.postList.push(payload);
                new PostComponent(payload);
            });
        }

        onPostListHandler(){
            this._clearContainer();
            console.log('posty');
            new PostAddComponent();
            this.postList.forEach((post) => {
                new PostComponent(post);
            } );
        }

        _clearContainer(){
            document.querySelector('#display-post').innerHTML = '';
            document.querySelector('#add-post').innerHTML = '';
        }
        onPostHandler(req){
            this._clearContainer();
            console.log('post');
            let id = req.params.id;
            let post = this.postList.find((post) => {
                return post.id === id;
            });

            new PostComponent(post);
        }
    }
    window.namespace.controllers.PostController = PostController;

})();