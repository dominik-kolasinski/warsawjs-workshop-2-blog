(function(){
    let PostController = window.namespace.controllers.PostController;
    let router = window.namespace.router;

    document.addEventListener("DOMContentLoaded", function() {
        const postControllerObject = new PostController();

        router.get('/posts', () => {
            postControllerObject.onPostListHandler();
        });

        router.get('/post/:id', (req) => {
            postControllerObject.onPostHandler(req);
        });

        if(!router.path()){
            router.navigate('/posts');
        }
        
    });

})();