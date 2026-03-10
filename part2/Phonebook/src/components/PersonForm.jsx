const PersonForm = ({onSubmit, name, handleName, number, handleNumber}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <Input value={name} onChange={handleName} />
      </div>
      <div>
        number: <Input value={number} onChange={handleNumber} />
      </div>
      <div>
        <Button type="submit" text="save" />
      </div>
    </form>
  ) 
}

const Input = ({value, onChange}) => {
  return (
    <input value={value} onChange={onChange} />
  )
}

const Button = ({type, text}) => {
  return (
    <button type={type}>
      {text}
    </button>
  )
}

export default PersonForm