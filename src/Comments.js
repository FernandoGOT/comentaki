import React from 'react'

import Comment from './Comment'
import { useDataabase } from './database'

const Comments = () => {
  const data = useDataabase('comments')

  if (!data) {
    return <p>Nenhum comentário enviado até o momento</p>
  }

  const ids = Object.keys(data)

  if (ids.length === 0) {
    return <p>Carregando...</p>
  }

  return ids.map(id => {
    return <Comment key={id} comment={data[id]} />
  })
}

export default Comments