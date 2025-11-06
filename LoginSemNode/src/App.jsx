import './App.css';
import logo from "./img/logo.png";
import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function App() {
  // Estados separados para cada popover
  const [anchorEmail, setAnchorEmail] = useState(null);
  const [anchorSenha, setAnchorSenha] = useState(null);

  // Funções email
  const handleOpenEmail = (event) => setAnchorEmail(event.currentTarget);
  const handleCloseEmail = () => setAnchorEmail(null);
  const openEmail = Boolean(anchorEmail);

  ///Funções senha
  const handleOpenSenha = (event) => setAnchorSenha(event.currentTarget);
  const handleCloseSenha = () => setAnchorSenha(null);
  const openSenha = Boolean(anchorSenha);

  return (
    <div className='esmaecerposicao'>
      <div className='esmaecerfundo'></div>
      <div className='centraliza'>
        <img src={logo} alt="Logo" className='logo' />
        <p className='titulosite'>
          DEPPI - Delegacia Especializada de Proteção à Pessoa Idosa
        </p>
        <p className='portalseguro'>Portal de Acesso Seguro</p>

        <a href="link.com" className='portaldeppi'>
          <p>Portal da Delegacia Especializada de Proteção<br />à Propriedade Intelectual (DEPPI)</p>
        </a>

        <div className="login">
          <h1 className="acessoconta">Acesse sua conta</h1>
          <p className='subtexto'>Entre com suas credenciais para continuar.</p>

          <div className="textosacesso linha-label">
            <h1 className="label-text">
              Nome de Usuário ou Endereço de E-mail<br />
              para Acesso ao Sistema</h1>
            <button
              className='botaoinfo'
              onMouseEnter={handleOpenEmail}
              onMouseLeave={handleCloseEmail}>?</button>
          </div>

          <Popover
            id="popover-email"
            sx={{ pointerEvents: 'none' }}
            open={openEmail}
            anchorEl={anchorEmail}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handleCloseEmail}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>
              Digite seu nome de usuário ou e-mail cadastrado no sistema.
              <br />
              Para testes, use: <b>demo@sistema.com</b> ou apenas <b>demo</b>.
            </Typography>
          </Popover>

          <div className='conteudo'>
            <input type="email" placeholder='usuario@exemplo.com' />
          </div>
          <p className='subtexto'>Digite seu e-mail ou nome de usuário cadastrado.</p>
          <div className="textosacesso linha-label">
            <h1 className="label-text">
              Senha de Acesso ao Sistema de Denúncias
            </h1>
            <button
              className='botaoinfo'
              onMouseEnter={handleOpenSenha}
              onMouseLeave={handleCloseSenha}
            >
              ?
            </button>
          </div>

          <Popover
            id="popover-senha"
            sx={{ pointerEvents: 'none' }}
            open={openSenha}
            anchorEl={anchorSenha}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handleCloseSenha}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>
              Digite sua senha de acesso. A senha deve ter pelo menos 8 caracteres.
              <br />
              Para testes, use: <b>senha123</b>.
            </Typography>
          </Popover>

          <div className='conteudo'>
            <input type="password" placeholder='Senha' />
          </div>
          <div className='subtexto'>Digite sua senha cadastrada.</div>

          <button className='entrar'>Entrar</button>
          <a className='linkredefinirsenha' href="link.com" target="_blank" rel="noopener noreferrer">
            <p>Redefinir senha esquecida</p>
          </a>

          <div className="linha-ou">
            <hr /><span>ou</span><hr />
          </div>

          <div className='novaconta'>
            <p>Não tem uma conta? <a className='linkredefinirsenha' href="link.com" target="_blank" rel="noopener noreferrer">Criar nova conta no sistema</a></p>
          </div>
        </div>

        <div className="divisao"></div>

        <p className='rodape'>
          © 2024 DEPPI - Delegacia Especializada de Proteção à Pessoa Idosa. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default App;