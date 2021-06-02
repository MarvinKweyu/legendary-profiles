import { shallowMount , createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import UserView from "@/views/UserView";
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import initialState from '@/store/state'
import userFixture from './fixtures/user'

const localVue = createLocalVue()
// set local vue instance
localVue.use(Vuex)

describe("UserView", () => {
  let state
  // create function to build test structure
  const build = () =>{
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({state})
  
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
      userProfile: () => wrapper.findComponent(VUserProfile)
    }
  }

  beforeEach(() =>{
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
  
});
