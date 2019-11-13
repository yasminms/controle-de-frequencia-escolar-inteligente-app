import React from 'react'
import PropTypes from 'prop-types'
import { DiaryRow } from '@/components'

import './diary-table.scss'

export const DiaryTable = ({ diaries, toggleModal }) => {
  const mapDiaries = () => {
    return diaries.map(diary => (
      <DiaryRow diary={diary} toggleModal={toggleModal} />
    ))
  }

  return (
    <div className='diary-table-container'>
      <div className='diary-table-container__title'>
        <span>Visualize os diários</span>
      </div>
      <table className='diary-table-container__table'>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Sala</th>
            <th>Turma</th>
            <th>Disciplina</th>
            <th>Professor</th>
            <th>Alunos</th>
          </tr>
        </thead>
        <tbody>{mapDiaries()}</tbody>
      </table>
    </div>
  )
}

DiaryTable.propTypes = {
  diaries: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
