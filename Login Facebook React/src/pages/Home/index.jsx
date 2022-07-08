import faceLogo from '../../images/facebook.png'
import { Input } from '../../components/Inputs/Input'
import { InfoLogo } from '../../components/InfoLogo/InfoLogo';
import { CriarPagina } from '../../components/CriarPagina/CriarPagina';
import { Footer } from '../../components/Footer/Footer';
import '../../styles/global.css'
import './index.css'
export function Home() {
  return (
    <div className='pagina'>
      <section id="conteudoPrincipal">
        <div className="meio">
          <div className="infoMeio">
            <p><img src={faceLogo} alt="Logo do Facebook" id='faceLogo' /></p> {/*Adicionando logo do facebook ao body*/}
            <p><InfoLogo /></p>
          </div>
          <Input />
          <CriarPagina />
        </div>
      </section>
      <Footer />
    </div>
  )
}