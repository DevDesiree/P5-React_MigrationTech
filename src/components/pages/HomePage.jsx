import "./homePage.css"
import NavbarMolecule from '../molecules/navbar/NavbarMolecule'
import ButtonAtom from '../atoms/button/ButtonAtom'
import SectionBannerMolecule from "../molecules/sectionBanner/SectionBannerMolecule"

const HomePage = () => {
  return (
    <>
      <NavbarMolecule></NavbarMolecule>
      <SectionBannerMolecule></SectionBannerMolecule>
      <ButtonAtom className={"btn-style"} buttonText={"Hola"} />

    </>
  )
}

export default HomePage