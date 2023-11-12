import React, { memo, useEffect } from 'react'
import 'vditor/dist/index.css'
import Vditor from 'vditor'
import { selectTheme } from 'store/theme.slice'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

interface MdEditorProps {
  vditorRef: React.MutableRefObject<any>
}

const MdEditor = memo((props: MdEditorProps) => {
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
    })
  }, [theme])

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
