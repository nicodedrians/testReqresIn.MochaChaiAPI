const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../environment/env')
const DATA = require('../../environment/userData')
const endPoint = require('../../environment/EndPoint')

describe('Post Create User', () => {
    const response = request(baseUrl())
    .post(endPoint.POST_CREATE_USER)
    .send(DATA.CREATE_USER)

    it('response status', async() => {
        expect((await response).status).to.equal(201)
    })
})

describe('Post Register User - Successful', () =>{
    const response = request(baseUrl())
    .post(endPoint.POST_REGISTER_USER_UNSUCCESSFUL)
    .send(DATA.REGISTER_USER)

    it('response status', async() =>{
        expect((await response).status).to.equal(200)
    })
})