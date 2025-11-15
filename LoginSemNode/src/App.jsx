import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function App() {

  //useState para controle dos popopvers de ajuda
  const [anchorEmail, setAnchorEmail] = useState(null);
  const [anchorSenha, setAnchorSenha] = useState(null);

  //Funções Email
  const handleOpenEmail = (event) => setAnchorEmail(event.currentTarget);
  const handleCloseEmail = () => setAnchorEmail(null);
  const openEmail = Boolean(anchorEmail);

  //Funções Senha
  const handleOpenSenha = (event) => setAnchorSenha(event.currentTarget);
  const handleCloseSenha = () => setAnchorSenha(null);
  const openSenha = Boolean(anchorSenha);

  return (
    <div className='esmaecerposicao'>
      {/*Fundo esmaecido para o fundo ficar bonito*/}
      <div className='esmaecerfundo' tabIndex={0} role="presentation"></div>
      {/*div para manter os componentes centralizados fora do container*/}
      <div className='centraliza' tabIndex={0} role="region" aria-label="Conteúdo principal">
        {/*logo da polícia*/}
        <img src="/api/placeholder/200/80" alt="Logo DEPPI" className='logo' tabIndex={0} />
        {/*Titulo Principal*/}
        <h1 className='titulosite' tabIndex={0}>
          DEPPI - Delegacia Especializada de Proteção à Pessoa Idosa
        </h1>
        {/*subtítulo afirmando que é um portal de navegação segura*/}
        <p className='portalseguro' tabIndex={0}>Portal de Acesso Seguro</p>
        {/*link para página principal do departamento de polícia da polícia civil ---  necessário atualizar o link*/}
        <a href="link.com" className='portaldeppi' tabIndex={0}>
          Portal da Delegacia Especializada de Proteção à Propriedade Intelectual (DEPPI)
        </a>
        {/*login se trata do container principal, contendo os inputs*/}
        <main className="login" tabIndex={0} role="main">
          <h2 className="acessoconta" tabIndex={0}>Acesse sua conta</h2>
          <p className='subtexto' tabIndex={0}>Entre com suas credenciais para continuar.</p>
          {/*input do email início*/}
          <div className="textosacesso linha-label" tabIndex={0} role="group" aria-label="Campo de usuário">
            <label htmlFor="email-input" className="label-texto" tabIndex={0}>
              Nome de Usuário ou Endereço de E-mail para Acesso ao Sistema
            </label>
            {/*botão do Popover com as informações extras sobre como inserir o email*/}
            <button
              type="button"
              className='botaoinfo'
              aria-label="Ajuda sobre nome de usuário"
              onMouseEnter={handleOpenEmail}
              onMouseLeave={handleCloseEmail}
              onFocus={handleOpenEmail}
              onBlur={handleCloseEmail}
              tabIndex={0}
            >
              ?
            </button>
          </div>
          {/*Popover indicando como fazer acesso ao email*/}
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
            {/*input do email*/}
          <div className='conteudo' tabIndex={0} role="group">
            <input 
              id="email-input"
              type="email" 
              placeholder='usuario@exemplo.com'
              aria-describedby="email-help"
              tabIndex={0}
            />
          </div>
          <p id="email-help" className='subtexto' tabIndex={0}>Digite seu e-mail ou nome de usuário cadastrado.</p>
            {/*início do input de senha*/}
          <div className="textosacesso linha-label" tabIndex={0} role="group" aria-label="Campo de senha">
            <label htmlFor="senha-input" className="label-texto" tabIndex={0}>
              Senha de Acesso ao Sistema de Denúncias
            </label>
            {/*botão do poppover*/}
            <button
              type="button"
              className='botaoinfo'
              aria-label="Ajuda sobre senha"
              onMouseEnter={handleOpenSenha}
              onMouseLeave={handleCloseSenha}
              onFocus={handleOpenSenha}
              onBlur={handleCloseSenha}
              tabIndex={0}
            >
              ?
            </button>
          </div>
            {/*interação do poppover*/}
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
            {/*input da senha*/}
          <div className='conteudo' tabIndex={0} role="group">
            <input 
              id="senha-input"
              type="password" 
              placeholder='Senha'
              aria-describedby="senha-help"
              tabIndex={0}
            />
          </div>
          <p id="senha-help" className='subtexto' tabIndex={0}>Digite sua senha cadastrada.</p>

          <button type="button" className='entrar' tabIndex={0}>Entrar</button>
          {/*link para redefinição de senha --  atualizar o link*/}
          <a className='linkredefinirsenha' href="link.com" tabIndex={0}>
            Redefinir senha esquecida
          </a>
            {/*linha --OU-- apenas design*/}
          <div className="linha-ou" tabIndex={0} role="separator" aria-label="Separador ou">
            <hr /><span tabIndex={0}>ou</span><hr />
          </div>
            {/*link para cadastro de conta // caso a pessoa não tenha conta
            // atualizar link*/}
          <div className='novaconta' tabIndex={0} role="group">
            <p tabIndex={0}>
              Não tem uma conta? <a className='linkredefinirsenha' href="link.com" tabIndex={0}>Criar nova conta no sistema</a>
            </p>
          </div>
        </main>
              {/*separador para introdução do rodapé*/}
        <div className="divisao" tabIndex={0} role="separator"></div>
              {/*rodapé com direitos reservados*/}
        <footer className='rodape' tabIndex={0}>
          © 2024 DEPPI - Delegacia Especializada de Proteção à Pessoa Idosa. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default App; 
