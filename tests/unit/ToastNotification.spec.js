import {shallowMount, createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'
import initialState from '@/store/state'
import ToastNotification from '@/components/ToastNotification'
import errorDetail from './fixtures/error'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("ToastNotification", () =>{

    let props
    const build = () =>{
        const wrapper =  shallowMount(ToastNotification, {
            propsData: props
        })

        return {
            wrapper,
            toastHeader: () => wrapper.find('.toast-header'),
            toastBody: () => wrapper.find('.toast-body'),
            toastCloseBtn: () => wrapper.find('.btn-close')
        }
    }

    beforeEach(() =>{
         props = {
            errorDetail
        }
    })

    it("renders the component", () =>{
        const { wrapper }=  build()
        expect(wrapper.html()).toMatchSnapshot();
    })

    it("renders main sections of the component", () =>{
        const {toastHeader, toastBody, toastCloseBtn} = build()

        expect(toastHeader().exists()).toBe(true)

        expect(toastBody().exists()).toBe(true)
        expect(toastBody().text()).toContain(props.errorDetail.userSearch)

        expect(toastCloseBtn().exists()).toBe(true)

    })
})