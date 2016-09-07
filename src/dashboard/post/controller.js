'use strict';


export default class PostCtrl {
    constructor(post, $sce, $rootScope) {
        this.post = post[0];
        this.sce = $sce;
        this.title = this.sce.trustAsHtml(this.post.title);
        this.body = this.sce.trustAsHtml(this.post.body);

    } 

}