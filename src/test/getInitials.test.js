import { getInitials } from '../utils/getInitials'

describe('It should return initials from full name', () => {
  it('Should return initials', () => {
    const name = 'Jude Ezekiel'

    expect(getInitials(name)).toBe('JE')
  })

  it('Should return initials for first name', () => {
    const name = 'Jude'

    expect(getInitials(name)).toBe('J')
  })

  it('Should return no initials', () => {
    const name = ''

    expect(getInitials(name)).toBe('')
  })

  it('Should not throw error when no initial is passed', () => {
    expect(getInitials()).toBe('')
  })
})
