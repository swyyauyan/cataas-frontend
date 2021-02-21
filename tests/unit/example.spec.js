import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CatTable from '@/components/CatTable.vue'

describe('CatTable.vue', () => {
  it('renders title', () => {
    const wrapper = shallowMount(CatTable, { catTableCol: 1, catTableRow: 2, catPhoto: new Array(2).fill(1) })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
