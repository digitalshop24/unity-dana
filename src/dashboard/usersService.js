'use strict';

export default class UsersService {
    constructor(api) {
        this.api = api;
    }

    subscribe(email, novelty = true, price = true) {
        return this.api.post('/users/subscription',{
            params: {
                email,
                price,
                new: novelty
            }
        }).then((res) => {
            return res.data;
        })
    }
}