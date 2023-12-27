import NavbarMolecule from '../molecules/navbar/NavbarMolecule'
import ButtonAtom from '../atoms/button/buttonAtom'

const HomePage = () => {
  return (
    <>
        <NavbarMolecule></NavbarMolecule>
        <ButtonAtom className={"btn-style"} buttonText={"Hola"}/>
    </>
  )
}

export default HomePage