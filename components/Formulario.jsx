import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { QuestionCircle } from "react-bootstrap-icons";

function Formulario() {
  return (
    <Form>

      <Form.Group>
        <div className="input-label">
          <Form.Label className="text-label">Nome de usuário</Form.Label>
          <Button variant="info" className="help-button"><QuestionCircle className="azul-icone" size={15}/></Button>
        </div>
        <Form.Control type="input" placeholder="Insira seu nome de usuário..."></Form.Control>
        <Form.Text>Escolha um nome único que será usado para acessar o sistema</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-label mt-3">Endereço de email</Form.Label>
        <Button variant="info" className="help-button"><QuestionCircle className="center azul-icone" size={15}/></Button>
        <Form.Control type="email" placeholder="Insira seu email..." />
        <Form.Text>Informe um endereço de e-mail válido e ativo que você tenha acesso</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-label mt-3">Data de nascimento</Form.Label>
        <Button variant="info" className="help-button"><QuestionCircle className="center azul-icone" size={15}/></Button>
        <Form.Control type="date" />
        <Form.Text>Selecione sua data de nascimento no formato dia/mês/ano</Form.Text>
      </Form.Group>
      
      <Form.Group>
        <Form.Label className="text-label mt-3">Senha</Form.Label>
        <Button variant="info" className="help-button"><QuestionCircle className="center azul-icone" size={15}/></Button>
        <Form.Control type="password" placeholder="Insira sua senha..." />
        <Form.Text>A senha deve ter no mínimo 8 caracteres e incluir letras, números e caracteres especiais (!@#$%^&*) para garantir segurança</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-label mt-3">Senha</Form.Label>
        <Button variant="info" className="help-button"><QuestionCircle className="center azul-icone" size={15}/></Button>
        <Form.Control type="password" placeholder="Insira sua senha..." />
        <Form.Text>Digite exatamente a mesma senha informada acima para confirmação</Form.Text>
      </Form.Group>

      <Button className="submit-button mt-3" variant="dark" type="submit">Cadastrar</Button>
    </Form>
  );
}

export default Formulario;