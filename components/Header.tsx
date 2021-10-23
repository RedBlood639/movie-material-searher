import { useReactiveVar } from '@apollo/client'
import styled from '@emotion/styled'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@material-ui/icons'
import Link from 'next/link'

import { prefersDarkModeVar } from '@/apollo/client'

import Favorites from './Favorites'
import Logo from './Logo'
import SearchBar from './SearchBar'

const StyledToolbar = styled(Toolbar)`
  padding: ${({ theme }) => theme.spacing(0, 1)};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing(0, 2)};
  }
`
const StyledIconButton = styled(IconButton)`
  margin-left: auto;
`

export default function Header() {
  const prefersDarkMode = useReactiveVar(prefersDarkModeVar)

  const toggleTheme = () => {
    const toggle = !prefersDarkMode
    prefersDarkModeVar(toggle)
    localStorage.setItem('darkMode', JSON.stringify(toggle))
  }

  return (
    <AppBar color="inherit" position="fixed">
      <StyledToolbar disableGutters>
        <Link href="/">
          <IconButton aria-label="go to home page">
            <Logo prefersDarkMode={prefersDarkMode} />
          </IconButton>
        </Link>
        <SearchBar />
        <StyledIconButton aria-label="theme switch" onClick={toggleTheme}>
          {prefersDarkMode ? <LightIcon /> : <DarkIcon />}
        </StyledIconButton>
        <Favorites />
      </StyledToolbar>
    </AppBar>
  )
}
