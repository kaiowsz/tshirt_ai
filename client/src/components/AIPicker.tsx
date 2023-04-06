import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}: any) => {
  return (
    <div className="aipicker-container">
      <textarea 
      placeholder="Ask AI..."
      id="" 
      rows={5}
      value={prompt}
      onChange={event => setPrompt(event.target.value)}
      className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton type="outline" title="Asking AI..." customStyles="text-xs" handleClick={() => {}} />
        ) : (
          <>
          <CustomButton type="outline" title="AI Full" handleClick={() => handleSubmit("full")} customStyles="text-xs" />
          <CustomButton type="filled" title="AI Logo" handleClick={() => handleSubmit("logo")} customStyles="text-xs" />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker