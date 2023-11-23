import { describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils'
import SignUpPage from './SignUpPage.vue'

describe('SignUpPage', ()=>{
    const wrapper = mount(SignUpPage)
    describe('layout', () =>{
        it('has SignUp header', ()=>{
            expect(wrapper.find('h2').text()).eq('Sign Up')
        })
        it('has username input', () => {
            expect(wrapper.find('input').exists()).toBeTruthy()
        })
        it('has email placeholder', () => {
            expect(wrapper.find('[placeholder="email"]').exists()).toBeTruthy()
        })
        it('has sign up button', () => {
            expect(wrapper.find('button').text()).eq("signup");
        })
    }) 

    describe('interactions', () => {
        it('Engedélyezni kell a gombot mikor a password mezobe irtunk valamit', async ()=>{
            const button = wrapper.find('button')
            const password = wrapper.find('[type="password"]')
            const passwordRepeat = wrapper.find('[id="password-repeat"]')
            await password.setValue('P4ssword')
            await passwordRepeat.setValue('P4ssword')
            expect(button.element.disabled).toBe(false)
        })
    })
})