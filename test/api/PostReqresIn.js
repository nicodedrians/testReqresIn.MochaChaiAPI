const request = require('supertest')
const baseUrl = require('../../environment/env')
const DATA = require('../../environment/userData')
const endPoint = require('../../environment/EndPoint')

describe('Post Reqres.in', () => {
    it('Post Create User', async() => {
        const response = request(baseUrl())
        .post(endPoint.POST_CREATE_USER)
        .send(DATA.CREATE_USER)
        console.log((await response).status)
        console.log((await response).body)
    })
    it('Post Register User - SUCCESSFUL', async () =>{
        const response = request(baseUrl())
        .post(endPoint.POST_REGISTER_USER_SUCCESSFUL)
        .send(DATA.REGISTER_USER)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Post Register User - UNSUCCESSFUL', async() => {
        const response = request(baseUrl())
        .post(endPoint.POST_REGISTER_USER_UNSUCCESSFUL)
        .send(DATA.REGISTER_USER_UNSUCCESSFUL)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Post Login SUCCESFUL', async() => {
        const response = request(baseUrl())
        .post(endPoint.POST_LOGIN_SUCCESSFUL)
        .send(DATA.LOGIN_SUCCESSFUL)
        console.log((await response).status)
        console.log((await response).body)
    })
    
    it('Post Login UNSUCCESSFUL', async() => {
        const response = request(baseUrl())
        .post(endPoint.POST_LOGIN_UNSUCCESSFUL)
        .send({
            "email": "peter@klaven"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})
