import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types'
import { Image } from '@/assets/images'
import './input-file.scss'
import { Button } from '@/components'

export const InputFile = ({ parentCallback }) => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    parentCallback(files)
  }, [files])

  const mapFiles = () => {
    return files.map(file => {
      return <img src={URL.createObjectURL(file)} alt='arquivo carregado' />
    })
  }

  const onDrop = acceptedFiles => {
    setFiles(files.concat(acceptedFiles))
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  return (
    <div className='outline-none' {...getRootProps()}>
      <input {...getInputProps()} />
      {files.length === 0 ? (
        <div className='input-file-container'>
          <i className='input-file-container__icon'>
            <Image icon='Upload' />
          </i>
          <span className='input-file-container__span'>
            Arraste e solte os arquivos aqui!
          </span>
          <span className='input-file-container__span'>OU</span>
          <Button text='Faça upload dos arquivos' />
        </div>
      ) : (
        <div className='input-image-container'>{mapFiles()}</div>
      )}
    </div>
  )
}

InputFile.propTypes = {
  parentCallback: PropTypes.func.isRequired,
}
