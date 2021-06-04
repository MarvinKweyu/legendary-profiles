jest.mock('@/store/actions') // look for src/store/__mocks__/actions instead of original actions

import { shallowMount , createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import UserView from "@/views/UserView";
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import ToastNotification from '@/components/ToastNotification'
import initialState from '@/store/state'
// import actions, i.e mock file from line 1
import actions from '@/store/actions'
import userFixture from './fixtures/user'
import errorFixture from './fixtures/error'

const localVue = createLocalVue()
// set local vue instance
localVue.use(Vuex)

describe("UserView", () => {
  let state
  // create function to build test structure
  const build = () =>{
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        state, 
        actions
      })
  
    })

    // return object containing wrapper and all selectors /elements/
    // utilities that can be used among tests
    return {
      wrapper,
      // findComponent is being preferred to hte use of find() for components.
      // find will continue to work for valid selectors
      // selectors are returned as functions as we want to control when they are
      // actually searched for
      userSearchForm: () => wrapper.findComponent(VUserSearchForm),
      userProfile: () => wrapper.findComponent(VUserProfile),
      toastNotification: () => wrapper.findComponent(ToastNotification)
    }
  }

  beforeEach(() =>{
    jest.resetAllMocks() //reset mock functions to original states
    // reset the state after each test
    state = { ...initialState}
  })

  it("renders the component", () => {
    // render first level of its dependencies
    const { wrapper } = build()
    // html() will take a snapshot - 'picture' for the component
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders main child components', () =>{
    const { userSearchForm, userProfile } = build()
    // search for main children components
    // call selectors as functions
    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })

  it('passes a bound user prop to user profile component', () =>{
    state.user = userFixture
    const { userProfile } = build()
    //after passing data , confirm that VUserProfile has received the same user// as a prop
    expect(userProfile().vm.user).toBe(state.user)
  })
  it('passes an error message to the toast notification component', () =>{
    state.error = errorFixture
    const { toastNotification } = build()
    expect(toastNotification().vm.errorDetail).toBe(state.error)

  })
  it('Displays toast notification only if user is not found', () =>{
    state.error = {}
    const {toastNotification} = build()
    expect(toastNotification().exists()).toBe(false)
  })

  it('searches for a user when received submitted', () =>{
    const expectedUser = 'kuroski'
    const { userSearchForm } = build()
    //manually emit event
    userSearchForm().vm.$emit('submitted', expectedUser)
    // expect the store action to be called after the event emission
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    // confirm that we are sending the correct payload
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({username: expectedUser})
  })
  
});
