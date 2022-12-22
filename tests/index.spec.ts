/// <reference types="mocha" />
import { expect } from 'chai';
import { unnest } from '../src'

describe('Testing Lib', () => {
    it('SUCCESS: Returns a object equals if has nothing to unnest', async () => {
        const testVar = {
            name: 'Fernando',
            age: 20
        }
        const result = await unnest(testVar)

        expect(JSON.stringify(testVar)).to.be.eq(JSON.stringify(result))
    })
    it('SUCCESS: Unnests Arrays', async () => {
        const testVar = {
            name: 'Fernando',
            age: 20,
            fruits: ['banana', 'apple']
        }
        const resultVar = {
            name: 'Fernando',
            age: 20,
            fruits_0: 'banana',
            fruits_1: 'apple'
        }
        const result = await unnest(testVar)

        expect(JSON.stringify(resultVar)).to.be.eq(JSON.stringify(result))
    })
    it('SUCCESS: Unnests Object', async () => {
        const testVar = {
            name: 'Fernando',
            age: 20,
            address: {
                street: 'Av. Marmota',
                zip_code: 13685,
                numbers: {
                    from: 1,
                    to: 100
                }
            }
        }
        const resultVar = {
            name: 'Fernando',
            age: 20,
            address_street: 'Av. Marmota',
            address_zip_code: 13685,
            address_numbers_from: 1,
            address_numbers_to: 100,
        }
        const result = await unnest(testVar)

        expect(JSON.stringify(resultVar)).to.be.eq(JSON.stringify(result))
    })
    it('SUCCESS: Unnests Objects and Arrays', async () => {
        const testVar = {
            name: 'Fernando',
            age: 20,
            address: {
                street: 'Av. Marmota',
                zip_code: 13685,
                numbers: {
                    from: 1,
                    to: 100
                }
            },
            fruits: ['banana', 'apple'],
            config: {
                favorite_numbers: [1,2,3]
            }
        }
        const resultVar = {
            name: 'Fernando',
            age: 20,
            address_street: 'Av. Marmota',
            address_zip_code: 13685,
            fruits_0: 'banana',
            fruits_1: 'apple',
            address_numbers_from: 1,
            address_numbers_to: 100,
            config_favorite_numbers_0: 1,
            config_favorite_numbers_1: 2,
            config_favorite_numbers_2: 3,
        }
        const result = await unnest(testVar)

        expect(JSON.stringify(resultVar)).to.be.eq(JSON.stringify(result))
    })
})
