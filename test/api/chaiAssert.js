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

    it('response body', async() => {
        expect((await response).body).to.haveOwnProperty('name')
    })
})

describe('Post Register User - Successful', () =>{
    const response = request(baseUrl())
    .post(endPoint.POST_REGISTER_USER_UNSUCCESSFUL)
    .send(DATA.REGISTER_USER)

    it('response status', async() =>{
        expect((await response).status).to.equal(200)
    })

    it('response body', async() => {
        expect((await response).body).to.haveOwnProperty('id')
        expect((await response).body).to.haveOwnProperty('token')
    })
})

describe('Get Single User by ID', () => {
    const response = request(baseUrl())
    .get(endPoint.GET_SINGLE_USER)

    it('response status', async() => {
        expect((await response).status).to.equal(200)
    })
})

describe('Get Single Source', () => {
    const response = request(baseUrl())
    .get(endPoint.GET_SINGLE_RESOURCE)

    it('response status', async() => {
        expect((await response).status).to.equal(200)
    })

    it('response body', async() => {
        expect((await response).body).to.haveOwnProperty('data')
        expect((await response).body).to.haveOwnProperty('support')
    })
})