import './buttonAtom.css'

const buttonAtom = (props) => {
  return (
    <button className={props.className}>{props.buttonText}</button>
  )
}

export default buttonAtom