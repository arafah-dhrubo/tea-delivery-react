import React, { useEffect, useState } from 'react'

const useFeedback = () => {
  const [feedback, setFeedback] = useState([])
  useEffect(() => {
    fetch('feedback.json')
      .then(res => res.json())
      .then(data => setFeedback(data))
  }, [])
  return feedback
}

export default useFeedback
