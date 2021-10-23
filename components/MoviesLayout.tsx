import styled from '@emotion/styled'

import { NowPlaying, Upcoming } from '@/apollo/__generated__'
import MoviesBox from '@/components/MoviesBox'
import Pagination from '@/components/Pagination'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface Props {
  data: NowPlaying | Upcoming
  path: string
  title?: string
}

export default function MoviesLayout({ data, path, title }: Props) {
  return (
    <Container>
      <MoviesBox movies={data.results} title={title} />
      <Pagination
        currentPage={data.page}
        path={path}
        totalPages={data.total_pages}
      />
    </Container>
  )
}
