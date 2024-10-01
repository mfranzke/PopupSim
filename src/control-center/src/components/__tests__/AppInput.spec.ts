import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import AppInput from '../AppInput.vue'

const commonProps = {
  modelValue: 'initial input value',
  id: 'my-input',
  title: 'My Input',
  placeholder: 'please enter some text'
}

describe('AppInput', () => {
  test('renders the input field', () => {
    const wrapper = shallowMount(AppInput, {
      props: commonProps
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders the an error message', () => {
    const wrapper = shallowMount(AppInput, {
      props: {
        ...commonProps,
        invalid: true
      },
      slots: {
        default: 'My error message'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('emits when input changes', () => {
    const wrapper = shallowMount(AppInput, {
      props: commonProps
    })
    wrapper.find('input').setValue('my input')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['my input'])
  })
})