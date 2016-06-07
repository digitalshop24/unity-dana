'use strict';


export default class NewsCtrl {
    constructor(news, newsService, page, perPage) {
        this.news = news;
        this.page = page;
        this.perPage = perPage;
        this.busy = false;
        this.newsService = newsService;
    }

    loadMore() {
        if (this.busy) return;
        this.busy = true;
        this.newsService.get(++this.page, this.perPage)
            .then((res) => {
                this.news = this.news.concat(res);
                this.busy = false;
            }).catch(err => {
                this.busy = false;
            });
    }
}