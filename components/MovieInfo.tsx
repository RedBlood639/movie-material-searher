/* eslint-disable no-underscore-dangle */
import { useReactiveVar } from '@apollo/client'
import styled from '@emotion/styled'
import {
  Button,
  Card,
  CardContent,
  Divider,
  Slide,
  Typography,
} from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'

import { MovieInfo, TvShowInfo } from '@/apollo/__generated__'
import { Favorite, favoritesVar } from '@/apollo/client'

import MoviesBox from './MoviesBox'

const StyledCard = styled(Card)`
  background-color: inherit;
  margin: ${({ theme }) => theme.spacing(11, 1, -8, 1)};
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
  }
`
const ImageWrapper = styled.div`
  height: 400px;
  position: relative;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 500px;
    width: 40%;
  }
`
const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 60%;
  }
`
const StyledTypography = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(1, 0)};
`
const StyledButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('md')} {
    align-self: center;
    height: 36px;
    max-width: 188px;
  }
`
const TitleWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    justify-content: space-between;
  }
`

interface Props {
  data: TvShowInfo | MovieInfo
}

export default function MovieInfoComponent({ data }: Props) {
  const favorites = useReactiveVar(favoritesVar)

  const isInFavorites = favorites.some(favorite => favorite.id === data.id)

  const addOrRemoveFromFavorites = () => {
    let newFavorites: Favorite[]

    if (isInFavorites) {
      newFavorites = favorites.filter(favorite => favorite.id !== data.id)
      favoritesVar(newFavorites)
    } else {
      newFavorites = [
        ...favorites,
        {
          id: data.id,
          media_type: data.media_type,
          poster_path: data.poster_path,
          title: data.title,
        },
      ]
      favoritesVar(newFavorites)
    }

    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <Slide direction="up" in>
      <div>
        <Head>
          <title>{data.title}</title>
        </Head>
        <StyledCard elevation={10}>
          <ImageWrapper>
            <Image
              alt={data.title}
              layout="fill"
              objectFit={data.backdrop_path ? 'cover' : 'contain'}
              src={data.backdrop_path || '/no-image.png'}
            />
          </ImageWrapper>
          <StyledCardContent>
            <TitleWrapper>
              <Typography gutterBottom variant="h5">
                {data.title}
              </Typography>
              <StyledButton
                color={isInFavorites ? 'secondary' : 'primary'}
                onClick={addOrRemoveFromFavorites}
                size="small"
                variant="contained"
              >
                {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
              </StyledButton>
            </TitleWrapper>
            <Typography paragraph>{data.overview}</Typography>
            <Divider />
            <StyledTypography>
              {data.__typename === 'MovieInfo' ? (
                <>
                  <b>Budget:</b> {data.budget}
                </>
              ) : (
                <>
                  <b>Seasons:</b>{' '}
                  {data.__typename === 'TvShowInfo' && data.number_of_seasons}
                </>
              )}
            </StyledTypography>
            <Divider />
            <StyledTypography>
              {data.__typename === 'MovieInfo' ? (
                <>
                  <b>Revenue:</b> {data.revenue}
                </>
              ) : (
                <>
                  <b>Episodes:</b>{' '}
                  {data.__typename === 'TvShowInfo' && data.number_of_episodes}
                </>
              )}
            </StyledTypography>
            <Divider />
            <StyledTypography>
              <b>Rating:</b> {data.vote_average}
            </StyledTypography>
            <Divider />
            <StyledTypography>
              <b>Release Date:</b> {data.release_date}
            </StyledTypography>
          </StyledCardContent>
        </StyledCard>
        {!!data.similar.results.length && (
          <MoviesBox movies={data.similar.results} title="Similar Movies" />
        )}
      </div>
    </Slide>
  )
}
