/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { Star as StarIcon } from '@material-ui/icons'
import Image from 'next/image'
import Link from 'next/link'

import {
  NowPlayingResults,
  SimilarResults,
  UpcomingResults,
} from '@/apollo/__generated__'

const CardContainer = styled(Card)`
  width: 150px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 170px;
  }
`
const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`
const StyledStarIcon = styled(StarIcon)`
  font-size: 20px;
  margin-right: 3px;
  vertical-align: top;
`
const StyledTypography = styled(Typography)`
  overflow: auto;
`

interface Props {
  movie: UpcomingResults | NowPlayingResults | SimilarResults
}

export default function MovieCard({ movie }: Props) {
  return (
    <CardContainer>
      <Link href={`/${movie.media_type}/${movie.id}`}>
        <CardActionArea>
          <Image
            alt={movie.title}
            height={300}
            objectFit={movie.poster_path ? 'cover' : 'contain'}
            src={movie.poster_path || '/no-image.png'}
            width={200}
          />
          <StyledCardContent>
            <StyledTypography variant="inherit">{movie.title}</StyledTypography>
            <Typography color="textSecondary">
              {movie.__typename === 'SimilarResults' ||
              movie.__typename === 'UpcomingResults' ? (
                movie.release_date
              ) : (
                <>
                  <StyledStarIcon />
                  {movie.__typename === 'NowPlayingResults' &&
                    movie.vote_average}
                </>
              )}
            </Typography>
          </StyledCardContent>
        </CardActionArea>
      </Link>
    </CardContainer>
  )
}
