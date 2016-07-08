'use strict';

export default class ContactsService {
    constructor(api) {
        this.api = api;
    }

    postContact(response) {
        return this.api.post('/feedbacks', response).then((res) => {
            return res.data;
        })
    }
}
