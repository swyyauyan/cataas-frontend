import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CatTable from '@/components/CatTable.vue'

describe('CatTable.vue', () => {
  it('renders result table with correct tr, td, img', () => {
    const wrapper = shallowMount(CatTable, {
      propsData: {
        catTableCol: 3,
        catTableRow: 3,
        catPhoto: []
      }
    })
    expect(wrapper.findAll('.cat-table').exists()).equal(true)

    const trs = wrapper.findAll('tr')
    expect(trs.length).equal(3)

    const tds = wrapper.findAll('td')
    expect(tds.length).equal(9)

    const imgs = wrapper.findAll('img')
    expect(imgs.length).equal(9)
  })
})
