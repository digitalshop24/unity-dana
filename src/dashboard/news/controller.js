'use strict';


export default class NewsCtrl {
    constructor(news, newsService, page, perPage, category) {
        this.news = news;
        this.page = page;
        this.perPage = perPage;
        this.category = category;
        this.busy = false;
        this.newsService = newsService;
    }

    loadMore() {
        if (this.busy) return;
        this.busy = true;
        this.newsService.get(++this.page, this.perPage, this.category)
            .then((res) => {
                this.news = this.news.concat(res);
                this.busy = !res.length;
            }).catch(err => {
                this.busy = false;
            });
    }
}