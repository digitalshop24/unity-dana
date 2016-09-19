'use strict';

export default class ThxCtrl {
    constructor(session, historyGoods, requisits, $sce, $rootScope) {
    	this.sce = $sce;
    	this.session = session;
    	this.email = this.session.user.email;
        this.phone = this.session.user.phone;
        this.requisits = requisits;
        this.history = historyGoods[historyGoods.length - 1];
        this.requisits = requisits;
        this.req_content = this.sce.trustAsHtml(this.requisits.content);
    }
}
