'use strict';

export default class UpdateService {
    constructor(api) {
        this.api = api;
    }

    updateSetting() {
        return this.api.get('/settings/parse').then((res) => {
            return res.data;
        })
    }
}
