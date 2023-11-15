import React, { memo, useEffect } from 'react'
import 'vditor/dist/index.css'
import Vditor from 'vditor'
import { selectTheme } from 'store/theme.slice'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { BASE_URL } from 'service/request/config'
import { uploadPicture } from 'service/file'

interface MdEditorProps {
  vditorRef: React.MutableRefObject<any>
}

const MdEditor = memo((props: MdEditorProps) => {
  const token = sessionStorage.getItem('token')
  const { vditorRef } = props
  const theme = useSelector(selectTheme)
  useEffect(() => {
    vditorRef.current = new Vditor('vditor', {
      minHeight: 500,
      placeholder: '请输入内容',
      theme: theme === 'dark' ? 'dark' : 'classic',
      toolbar: [
        'emoji',
        'headings',
        'bold',
        'italic',
        'strike',
        'link',
        '|',
        'list',
        'ordered-list',
        'check',
        'outdent',
        'indent',
        '|',
        'quote',
        'line',
        'code',
        'inline-code',
        'insert-before',
        'insert-after',
        '|',
        'upload',
        'table',
        '|',
        'undo',
        'redo',
        '|',
        'fullscreen',
        'edit-mode',
        {
          name: 'more',
          toolbar: [
            'both',
            'code-theme',
            'content-theme',
            'export',
            'outline',
            'preview',
            'devtools',
            'info',
            'help',
          ],
        },
      ],
      upload: {
        accept: 'image/jpg, image/jpeg, image/png', //规定上传的图片格式
        url: `${BASE_URL}/file/upload`, //请求的接口
        multiple: false,
        fieldName: 'file',
        linkToImgUrl: `${BASE_URL}/file/upload`,

        filename(name) {
          return name
            .replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '')
            .replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '')
            .replace('/\\s/g', '')
        },
        handler(files) {
          console.log(files)
          let imgUrl = ''
          const formData = new FormData()
          const name = files[0].name
          formData.append('picture', files[0])
          uploadPicture(formData).then((res) => {
            imgUrl = res.data as string
            vditorRef?.current?.insertValue(`![${name}](http://${res.data})`)
          })
          return imgUrl
        },
      },
    })
  }, [theme, vditorRef])

  return (
    <VditorContainer>
      <div id="vditor" className="vditor text-t3" />
    </VditorContainer>
  )
})

const VditorContainer = styled.div`
  .vditor-reset {
    --tw-text-opacity: 1;
    color: rgb(var(--t3) / var(--tw-text-opacity)) !important;
  }
  margin-top: 20px;
`

export default MdEditor
