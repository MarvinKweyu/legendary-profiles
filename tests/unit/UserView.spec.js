import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";

describe("UserView", () => {
  it("renders the component", () => {
    // render first level of its dependencies
    const wrapper = shallowMount(UserView);
    // html() will take a snapshot - 'picture' for the component
    expect(wrapper.html()).toMatchSnapshot();
  });
});
