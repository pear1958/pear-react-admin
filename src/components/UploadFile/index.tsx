import { FC, memo, useEffect, useState } from 'react'
import { Image, Upload, type UploadFile } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { RcFile, UploadProps } from 'antd/es/upload'
import { message } from '@/hooks/useMessage'

interface Props {
  value?: string[]
  onChange?: (value: string[]) => void
}

const UploadFile: FC<Props> = ({ value, onChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  useEffect(() => {
    if (!value?.length) return
    const result = value.map(
      (item, index) =>
        ({
          uid: String(index),
          name: item,
          url: item,
          status: 'done'
        } as UploadFile)
    )
    setFileList(result)
  }, [value])

  const handleChange: UploadProps['onChange'] = ({ file, fileList: newFileList }) => {
    // console.log('file.status', file.status)

    if (file.status === 'uploading') {
      setFileList(newFileList)
      return
    }

    if (file.status === 'done') {
      const { code, data } = file.response || {}

      if (String(code)[0] === '2') {
        const filePath = data.filePaths[0]
        // file.url = filePath
        file.url =
          'https://react.baiwumm.com/static/image/2023-08-31/2c0bdf2c-5182-41f2-9b31-8dbfc74530f9.png'
        // 预览: file.thumbUrl（优先） → file.url（备选） → 自动生成预览（如果是本地文件）
        setFileList([...newFileList])

        if (onChange) {
          const urls = newFileList.map(item => item.url)
          onChange(urls)
        }
      }
    }
  }

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleRemove = (file: UploadFile) => {
    const newFileList = fileList.filter(f => f.uid !== file.uid)
    setFileList(newFileList)
    // 返回 true 表示允许删除
    return true
  }

  const uploadProps: UploadProps = {
    listType: 'picture-card',
    // Upload 组件通过 fileList 属性控制显示的文件列表
    // 如果没有将后端返回的 URL 赋值给 fileList，图片将无法回显
    fileList,
    name: 'file',
    headers: {
      authorization: 'authorization-text'
    },
    action: '/api/tools/upload',
    beforeUpload: file => {
      const isLt20M = file.size / 1024 / 1024 < 20
      if (!isLt20M) {
        message.error('图片必须小于20MB!')
      }
      return isLt20M
    },
    // 需要在 onChange 事件中获取上传结果并更新 fileList
    onChange: handleChange,
    onRemove: handleRemove,
    onPreview: handlePreview
  }

  return (
    <>
      <Upload {...uploadProps}>
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>上传</div>
        </div>
      </Upload>

      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: visible => setPreviewOpen(visible),
            afterOpenChange: visible => !visible && setPreviewImage('')
          }}
          src={previewImage}
        />
      )}
    </>
  )
}

export default memo(UploadFile)
