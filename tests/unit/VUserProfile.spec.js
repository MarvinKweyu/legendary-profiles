import { shallowMount } from '@vue/test-utils'
import VUserProfile from '@/components/VUserProfile'
import user from './fixtures/user'


describe('VUserProfile', () =>{
    let props

    const build = () =>{
        const wrapper = shallowMount(VUserProfile, {
            propsData: props
        })
        return {
            wrapper,
            avatar: () => wrapper.find('.user-profile__avatar'),
            userName: () => wrapper.find('.user-profile__name'),
            bio: () => wrapper.find('.user-profile__bio'),
        }
    }

    beforeEach( () =>{
        props = {
            user
        }
    })

    it('renders the component', () =>{
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the main components', () =>{
        const {avatar, userName, bio} = build()

        expect(avatar().exists()).toBe(true)
        expect(avatar().attributes().src).toBe(props.user.avatar_url)

        expect(userName().exists()).toBe(true)
        expect(userName().text()).toBe(props.user.name)

        expect(bio().exists()).toBe(true)
        expect(bio().text()).toBe(props.user.bio)
    })
})

