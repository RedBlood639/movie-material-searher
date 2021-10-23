import { useReactiveVar } from '@apollo/client'
import styled from '@emotion/styled'
import {
  Badge,
  ClickAwayListener,
  Divider,
  IconButton,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core'
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@material-ui/icons'
import { useEffect, useRef, useState } from 'react'

import { favoritesVar } from '@/apollo/client'

import FavoritesCard from './FavoritesCard'

const StyledMenuList = styled(MenuList)`
  width: 250px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 300px;
  }
`
const StyledTypography = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(1)};
`
const StyledPaper = styled(Paper)`
  max-height: 60vh;
  overflow: auto;
`

export default function Favorites() {
  const favorites = useReactiveVar(favoritesVar)
  const [toggle, setToggle] = useState(false)
  const iconButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const initialFavorites = localStorage.getItem('favorites')
    if (initialFavorites) {
      try {
        favoritesVar(JSON.parse(initialFavorites))
      } catch (error) {
        localStorage.removeItem('favorites')
      }
    }
  }, [])

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <>
      <IconButton
        ref={iconButtonRef}
        aria-label="open favorites"
        disabled={!favorites.length}
        onClick={handleToggle}
      >
        <Badge badgeContent={favorites.length} color="secondary">
          {toggle ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </Badge>
      </IconButton>
      <Popper
        anchorEl={iconButtonRef.current}
        disablePortal
        open={toggle}
        placement="bottom-end"
      >
        <ClickAwayListener onClickAway={handleToggle} touchEvent={false}>
          <StyledPaper elevation={10}>
            <StyledTypography variant="overline">Favorites</StyledTypography>
            <Divider />
            <StyledMenuList disablePadding>
              {favorites.map(favorite => (
                <FavoritesCard
                  key={favorite.id}
                  favorite={favorite}
                  handleToggle={handleToggle}
                />
              ))}
            </StyledMenuList>
          </StyledPaper>
        </ClickAwayListener>
      </Popper>
    </>
  )
}
