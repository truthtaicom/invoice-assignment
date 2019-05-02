import React from 'react'
import styled from 'styled-components'

const StyledList = styled.div`

`

export interface IList {
  data: Array<any>,
  renderItem: (item: any, idx: number) => any
}

const SimpleList: React.FC<IList> = ({ data, renderItem }) => {
  if(!data || !data.length) return null;

  return (
    <StyledList>
      {
        data.map(renderItem)
      }
    </StyledList>
  )
}

export default SimpleList