import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "react-bootstrap";
import "./styles.scss";
import Formulario from "../components/Formulario";
import HelpButton from '../components/HelpButton';
import SettingsButton from "../components/SettingsButton";
import { useState, useEffect } from 'react';
import { BoxArrowUpRight } from "react-bootstrap-icons";

function App() {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
  }, [fontSize]);

  
  return (
    <div className="fundo-gradiente">

      <Container className="align-items-center min-vh-100 py-5">

        <Row className="justify-content-center w-100">

          <Col xs={11} sm={10} md={8} lg={6} xl={6}>

            <div className="centralizar-coluna conteudo-logo mt-5">
          
              <img src="/img/logo.png" alt="Logo da Polícia Civil do Espírito Santo" className="logo"/>
              <h1>Sistema de Denúncias</h1>
              <p>Portal de Acesso Seguro</p>

              <a href="https://deppi.lovable.app/" target="_blank">
                <span>Portal da Delegacia Especializada de Proteção à Pessoa Idosa</span><BoxArrowUpRight/>
              </a>

            </div>

            <div className="coluna-principal p-3">
              <div>

                <h2>Criar nova conta</h2>
                <p>Preencha os dados abaixo para se cadastrar. Todos os campos são obrigatórios.</p>
                <hr/>

              </div>

              <Formulario />
  
                <div className="botoes-laterais">

                  <SettingsButton currentSize={fontSize} onSizeChange={setFontSize}></SettingsButton>
                  <HelpButton />

                </div>

            </div>

          </Col>

        </Row>
        
      </Container>

    </div>
  );
}
export default App;
