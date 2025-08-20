import Button from "react-bootstrap/Button";
import main from "../assets/main.svg";

function Main_Wedo() {
  return (
    <main className="main-wedo">
      <div className="main-principal">
        <h1>Comunique. Colabore. Crie. </h1>
        <p>WeDo oferece um jeito eficaz de gerenciar seus projetos.</p>
        <Button variant="dark">Começar</Button>
      </div>
      <div className="main-secundario">
        <img src={main} alt="Imagem principal" />
        <div className="main-secundario-texto">
          <p>Velocidade e segurança</p>
          <img
            className="img-velocidade"
            src="https://signif-i.com/wp-content/uploads/2024/02/custom-1.svg"
            alt="Customização"
          />
        </div>

        <div className="main-secundario-texto">
          <p>Flexibilidade e agilidade</p>
          <img
            className="img-flexibilidade"
            src="https://signif-i.com/wp-content/uploads/2024/02/custom-2.svg"
            alt="Colaboração"
          />
        </div>

        <div className="main-secundario-texto">
          <p>Melhor colaboração</p>
          <img
            className="img-colaboracao"
            src="https://signif-i.com/wp-content/uploads/2024/02/custom-3.svg"
            alt="Integração"
          />
        </div>
      </div>
    </main>

    /* SITE PARA USAR COMO BASE:
    https://www.wix.com/templatesfr/3028-tech-company-we
    */
  );
}

export default Main_Wedo;
