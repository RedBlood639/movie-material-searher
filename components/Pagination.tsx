import styled from '@emotion/styled'
import { Pagination, PaginationItem } from '@material-ui/core'
import Link from 'next/link'

const StyledPagination = styled(Pagination)`
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`

interface Props {
  currentPage: number
  path: string
  totalPages: number
}

export default function PaginationComponent({
  currentPage,
  path,
  totalPages,
}: Props) {
  return (
    <StyledPagination
      count={totalPages}
      page={currentPage}
      renderItem={({ page, ...otherProps }) => {
        const item = <PaginationItem {...otherProps} page={page} />
        return page ? <Link href={`/${path}/${page}`}>{item}</Link> : item
      }}
    />
  )
}
