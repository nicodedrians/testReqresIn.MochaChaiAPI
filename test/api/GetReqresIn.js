const request = require('supertest')
const baseUrl = require('../../environment/env')
const endPoint = require('../../environment/EndPoint')

describe('Get Request', () => {
    it('Get Single User by ID', async () => {
        const response = request(baseUrl())
        .get(endPoint.GET_SINGLE_USER)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Get Single Resource', async () => {
        const response = request(baseUrl())
        .get(endPoint.GET_SINGLE_RESOURCE)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Get Single User not Found', async() =>{
        const response = request(baseUrl())
        .get(endPoint.SINGLE_USER_NOT_FOUND)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Get List User', async() => {
        const response = request(baseUrl())
        .get(endPoint.GET_LIST_USERS)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Get List <resource>', async() => {
        const response = request(baseUrl())
        .get(endPoint.GET_LIST_RESOURCE)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Get Single <resource> not Found', async() => {
        const response = request(baseUrl())
        .get(endPoint.GET_SINGLE_RESOURCE_NOT_FOUND)
        console.log((await response).status)
        console.log((await response).body)
    })
})