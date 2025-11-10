import Button from 'react-bootstrap/Button';
import {Gear} from 'react-bootstrap-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Range from '../components/Range';
import Range1 from '../components/Range1';

function SettingsButton ({ currentSize, onSizeChange }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className="circle-button centralizar-coluna" variant="light" onClick={handleShow}><Gear size={24}/></Button>
        

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Preferências de Leitura</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="popup">
                    <Form>
                        <p>Personalize a apresentação visual do conteúdo conforme suas necessidades</p>
                        <Range currentSize={currentSize} onSizeChange={onSizeChange} />
                        <Range1 currentSize={currentSize} onSizeChange={onSizeChange} />
                        
                        <p>Largura máxima da coluna</p>
                        <Form.Select defaultValue={80}>
                            <option value="sl">Sem limite</option>
                            <option value="80">80 caracteres (recomendado)</option>
                            <option value="60">60 caracteres</option>
                            <option value="100">100 caracteres</option>
                        </Form.Select>

                        <p>Esquema de cores</p>
                        <Form.Select defaultValue={"padrao"}>
                            <option value="padrao">Padrão</option>
                            <option value="alto-contraste">Alto contraste</option>
                            <option value="sepia">Sépia</option>
                            <option value="azul-claro">Azul claro</option>
                            <option value="verde-suave">Verde suave</option>
                        </Form.Select>

                        <div>
                            <h2>Exemplo de Texto</h2>
                            <p>Este é um exemplo de como o texto aparecerá com as configurações selecionadas. Você pode ajustar o espaçamento entre linhas, o tamanho da fonte, a largura da coluna e as cores de fundo e texto para melhor atender suas necessidades de leitura.</p>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                <Button variant="primary" onClick={() => alert('Alterações salvas')}>Salvar Alterações</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default SettingsButton;