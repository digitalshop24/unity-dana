'use strict';

import angular from 'angular';
import config from './config';

export default class AuthService {
    constructor(api, session, $rootScope) {
        this.api = api;
        this.session = session;
        this.$rootScope = $rootScope;

    }

    register(credentials) {
        return this.api.post('/users', credentials).then(response => {
            // console.log('response', response);
            this.initSession(response);
            return this.session;
        }).catch(response => {
            throw response.data;
        });
    }

    editPassword(credentials) {
        return this.api.put('/users/password/change', credentials).then(response => {
            this.initSession(response);
            return this.session;
        }).catch(response => {
            throw response.data;
        });
    }

    editInfo(credentials) {
        return this.api.put('/users/edit', credentials).then(response => {
            this.session.user = Object.assign(this.session.user, response.data.user);
            return this.session;
        }).catch(response => {
            throw response.data;
        });
    }

    sendNewPass(credentials) {
        return this.api.put('/users/password/reset', credentials).then(response => {
            return this.session;
        }).catch(response => {
            throw response.data;
        });
    }


    login(credentials) {
        return this.api.post('/users/sign_in', credentials).then(response => {
            this.initSession(response);
            return this.session;
        }).catch(response => {
            throw response.data;
        });
    }

    recoverPass(credentials) {
        return this.api.post('/users/password', credentials).then(response => {
            return this.session;
        }).catch(response => {
            throw response.data;
        });
    }

    initSession(response) {
        console.log(response);
        this.session.token = response.data.user.auth_token;
        this.session.user = Object.assign(this.session.user, response.data.user);
        this.session.isAuthenticated = true;

    }

    isGuest(){
        return this.session.user.isGuest();
    }

    logout() {
        return this.api.delete('/users/sign_out').then(response => {
            this.session.invalidate();
            return this.session;
        }).catch(response => {
            throw response.data.error;
        });
    }

    updateSetting() {
        return this.api.get('/settings/parse').then((res) => {
            return res.data;
        })
    }
    sendPrice() {
        return this.api.get('/settings/delivery').then((res) => {
            return res.data;
        })
    }
}

