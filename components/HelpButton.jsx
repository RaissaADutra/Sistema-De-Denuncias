import {QuestionCircle} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function HelpButton () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="circle-button centralizar-coluna" variant="light" onClick={handleShow}><QuestionCircle  size={24} /></Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Ajuda de Acessibilidade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="popup">
                        <p>Recursos de acessibilidade disponíveis neste sistema</p>

                        <h2>Navegação por Teclado</h2>
                        <ul>
                            <li className="p-1"><div className="tecla p-1">Tab</div> - Navegar entre elementos</li>
                            <li className="p-1"><div className="tecla p-1">Shift + Tab</div> - Navegar para trás</li>
                            <li className="p-1"><div className="tecla p-1">Enter ou Espaço</div> - Ativar botões e links</li>
                            <li className="p-1"><div className="tecla p-1">Esc</div> - Fechar diálogos</li>
                        </ul>

                        <h2>Pular Navegação</h2>
                        <p>Pressione <div className="tecla p-1">Tab</div> na primeira vez que carregar a página para acessar o link "Pular para o conteúdo principal".</p>

                        <h2>Zoom e Redimensionamento</h2>
                        <p>Use <div className="tecla p-1">Ctrl +</div> e <div className="tecla p-1">Ctrl -</div> (ou <div className="tecla p-1">Cmd +</div> e <div className="tecla p-1">Cmd -</div> no Mac) para aumentar ou diminuir o tamanho do texto. O sistema suporta zoom de até 200%.</p>

                        <h2>Leitores de Tela</h2>
                        <p>Este sistema é compatível com leitores de tela como NVDA, JAWS e VoiceOver. Todos os elementos interativos possuem rótulos apropriados e mensagens de erro são anunciadas automaticamente.</p>

                        <h2>Tempo de Sessão</h2>
                        <p>Você receberá um aviso 60 segundos antes da sua sessão expirar, com a opção de estender o tempo de conexão.</p>

                        <h2>Suporte e Contato</h2>
                        <p>Se você tiver dificuldades de acessibilidade ou sugestões de melhorias, entre em contato através do email: <a href="#">acessibilidade@sistema.com</a></p>

                        <h2>Conformidade WCAG</h2>
                        <p>Este sistema foi desenvolvido seguindo as Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1 nos níveis A, AA e AAA quando possível.</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HelpButton;