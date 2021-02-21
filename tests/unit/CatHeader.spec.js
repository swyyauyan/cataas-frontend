import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CatHeader from '@/components/CatHeader.vue'

describe('CatHeader.vue', () => {
  it('renders title with 2 cat icons', () => {
    const wrapper = shallowMount(CatHeader)
    const icons = wrapper.findAll('img')
    expect(icons.length).equal(2)
  })

  it('renders with correct titles', () => {
    const wrapper = shallowMount(CatHeader)
    const text = wrapper.find('p').text()
    expect(text).equal('- FIND YOUR CAT -')
  })
})
