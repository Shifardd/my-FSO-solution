const Message = ({message, color}) => {
  const styleObject = `message ${color}`
  if (message === null) {
    return null
  }
  return (
    <div className={styleObject}>
      {message}
    </div>
  )
}

export default Message