import React from 'react'
import Author from "../components/Author";

const Authors = ({authors, isFilter}) => {
  if (!authors) {
    return null
  }
  let scrollbarClass = 'w-full'
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
  }
  return (
    <div className={scrollbarClass}>
      {authors.map((author, i) => {
        console.log(author)
        return <Author
          key={i}
          idx={i}
          id={author.id}
          firstName={author.first_name}
          lastName={author.last_name}
          institution={author.institution}
          isAddedToFilter={author.isAddedToFilter}
          isFilter={isFilter}
        />
      })
      }
    </div>
  )
}

export default Authors
