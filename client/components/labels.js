import React from 'react'

const Labels = ({ labels }) => {
  return (
    <div>
      <h1>Labels</h1>
      <ul>
        {labels && labels.map(label => <p key={label.id}>{label.title}</p>)}
      </ul>
    </div>
  )
}

export default Labels
