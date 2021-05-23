import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper
  let checkButton

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false,
        disabled: false
      }
    })
    checkButton = wrapper.find('.check-button')
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.find('.check-button__text').text()).toBe('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    expect(checkButton.classes()).not.toContain('check-button--selected')
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', async () => {
    await wrapper.setProps({ selected: true })
    expect(checkButton.classes()).toContain('check-button--selected')
  })

  // Write additional tests based on the new logic added to the CheckButton component as part of the challenge

  it('should not attach the dynamic "check-button--disabled" class when the disabled prop is set to false' , () => {
    expect(checkButton.classes()).not.toContain('check-button--disabled')
  })

  it('should attach the dynamic "check-button--disabled" class when the disabled prop is set to true' , async () => {
    await wrapper.setProps({ disabled: true })
    expect(checkButton.classes()).toContain('check-button--disabled')
  })

  it('should emit a value of the property "toggle-selected" when clicked on', async () => {
    await checkButton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggle-selected')
  })

  it('should emit the value passed as prop when clicked on', async () => {
    await checkButton.trigger('click')
    expect(wrapper.emitted()['toggle-selected'][0]).toEqual(['dummy-value'])
  })
})
