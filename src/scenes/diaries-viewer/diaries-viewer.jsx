import React, { useEffect, useState } from 'react'
import { DiaryTable } from '@/components'
import { findAllDiaries } from '@/services/diary-service'
import { LinkStudentToClass } from '@/scenes'

import './diaries-viewer.scss'

export const DiariesViewer = () => {
  const [diariesList, setDiariesList] = useState([])
  const [selectedDiary, setSelectedDiary] = useState()
  const [modalOpened, setModalOpened] = useState(false)

  useEffect(() => {
    findAllDiaries().then(response => {
      setDiariesList(response.data)
    })
  }, [])

  const updateDiariesList = updatedDiaries => {
    setDiariesList(updatedDiaries)
  }

  const toggleModal = (state, diaries) => {
    setModalOpened(state)
    setSelectedDiary(diaries)
  }

  return (
    <div className='diaries-viewer'>
      <div className='diaries-viewer__table-container'>
        <DiaryTable diaries={diariesList} toggleModal={toggleModal} />
      </div>
      <LinkStudentToClass
        parentCallback={updateDiariesList}
        modalOpened={modalOpened}
        toggleModal={toggleModal}
        selectedDiary={selectedDiary}
      />
    </div>
  )
}
