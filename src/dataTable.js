import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
width: 80%;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
`

const Table = styled.table`
border-collapse: collapse;
`
const Cell = styled.td`
border: .2rem solid green;
`
const Head = styled.th`
border: .2rem solid green;
`
const Title = styled.h3`
border: .3rem solid yellow;
margin-bottom: 0;
margin-top: 0;
`
export default function DataTable ({ dataObjectArray, tableState }) {
  return (
      <Container style={{ paddingTop: '1rem' }}>
        <Title>{tableState}</Title>
    <Table>
            <colgroup span={dataObjectArray[0].length}></colgroup>
        <thead>
            <tr>
                {Object.keys(dataObjectArray[0]).map((entry, i) => {
                  return (
            <Head key={i}>{entry}</Head>
                  )
                })}
            </tr>
        </thead>
        <tbody>
            {dataObjectArray.map((object, i) => {
              if (tableState === 'authors') {
                return (
                  <tr key={i}>
                    <Cell>{object.author_id}</Cell>
                    <Cell>{object.name_last}</Cell>
                    <Cell>{object.name_first}</Cell>
                    <Cell>{object.country}</Cell>
                  </tr>
                )
              }
              return (
                  <tr key={i}>
                    <Cell>{object.isbn}</Cell>
                    <Cell>{object.title}</Cell>
                    <Cell>{object.author_id}</Cell>
                    <Cell>{object.year_pub}</Cell>
                    <Cell>{object.description}</Cell>
                  </tr>
              )
            })}
        </tbody>
    </Table>
    </Container>
  )
}

DataTable.propTypes = {
  dataObjectArray: PropTypes.array.isRequired,
  tableState: PropTypes.string.isRequired
}
