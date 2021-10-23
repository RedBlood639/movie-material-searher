/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect'

import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { render } from '@testing-library/preact'

const theme = createMuiTheme()

interface RenderApolloOptions {
  addTypeName?: boolean
  mocks?: MockedResponse[]
}

export function renderApollo(
  element: React.ReactElement,
  { mocks = [], addTypeName = false }: RenderApolloOptions = {},
) {
  return render(
    <MockedProvider addTypename={addTypeName} mocks={mocks}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MockedProvider>,
  )
}

export { fireEvent, screen } from '@testing-library/preact'
