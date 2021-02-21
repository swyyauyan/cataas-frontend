import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CatView from '@/components/CatView.vue'

describe('CatView.vue', () => {
  it('renders question to ask number of cats', () => {
    const wrapper = shallowMount(CatView)
    const question = wrapper.find('p').text()
    expect(question).equal('How many cat(s) you want?')
  })

  it('renders input field for catTableCol', () => {
    const wrapper = shallowMount(CatView)
    expect(wrapper.findAll('#catTableCol').exists()).equal(true)
  })

  it('renders input field for catTableRow', () => {
    const wrapper = shallowMount(CatView)
    expect(wrapper.findAll('#catTableRow').exists()).equal(true)
  })

  it('renders button for getting gif cat', () => {
    const wrapper = shallowMount(CatView)
    expect(wrapper.find('button').text()).equal('Get moving cats!')
  })

  it('renders input for getting talking cat', () => {
    const wrapper = shallowMount(CatView)
    expect(wrapper.find('#catSay').exists()).equal(true)
  })
})
