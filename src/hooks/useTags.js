import React, { createContext, useState, useContext } from "react";

const TagToPrintContext = createContext();

export default function TagToPrintProvider({ children }) {
  const [ tags, setTags ] = useState([]);

  const addTag = (tagNumber) => {
    setTags([...tags, tagNumber])
  }

  const deleteTag = (tagNumber) => {
    setTags(tags.filter((deletedtagNumber) => deletedtagNumber !== tagNumber))
  }

  return (
    <TagToPrintContext.Provider
      value={{
        tags,
        addTag,
        deleteTag
      }}
    >
      {children}
    </TagToPrintContext.Provider>
  )
}

export function useTagToPrint() {
  const context = useContext(TagToPrintContext);
  const { tags, addTag, deleteTag } = context;

  return { tags, addTag, deleteTag };
}
