import { renderApollo } from '@/lib/setupTests'
import Error404 from '@/pages/404'

describe('tv page', () => {
  it('should take a snapshot', () => {
    const { baseElement } = renderApollo(<Error404 />)

    expect(baseElement).toMatchSnapshot()
  })
})
