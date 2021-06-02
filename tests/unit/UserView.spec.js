import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

describe("UserView", () => {
  // create function to build test structure
  const build = () =>{
    const wrapper = shallowMount(UserView, {
      data: () => ({
        // have info of researched user
        user: {}
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
      userProfile: () => wrapper.findComponent(VUserProfile)
    }
  }

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
    const { wrapper, userProfile } = build()
    wrapper.setData({
      user: {
        name: 'Marvin'
      }
    })
    //after passing data , confirm that VUserProfile has received the same user
  // as a prop
  expect(userProfile().vm.user).toBe(wrapper.vm.user)
  })
  
});
