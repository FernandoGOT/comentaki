import React, { useContext, useState } from 'react'

import firebase from './firebase'
import { useDatabasePush } from './database'
import { AuthContext } from './auth'

const NewComment = () => {
  const auth = useContext(AuthContext)
  const [, save] = useDatabasePush('comments')
  const [comment, setComment] = useState('')

  if (auth.user === null) {
    return null
  }

  const { displayName, uid: userId } = auth.user
  const [ alternativeDisplayName ] = auth.user.email.split('@')

  const createComment = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: userId,
          name: displayName || alternativeDisplayName
        }
      })
      setComment('')
    }
  }

  return (
    <div>
      <textarea value={comment} onChange={evt => setComment(evt.target.value)} />
      <br />
      <button onClick={createComment}>Save</button>
    </div>
  )
}

export default NewComment