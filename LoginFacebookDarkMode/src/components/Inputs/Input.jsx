import './input.css'
export function Input() {
    return (
        <section id="campoDadosLogin">{/* Seção da caixa de login*/}
            <div className="inputArea"> {/*Caixa de de login e senha*/}
                <input type="text" placeholder="Email ou telefone" id="login" />
                <input type="password" id="senha" placeholder="Senha" />
                <input type="Button" value="Entrar" id="enviar" /> {/*Botão de envio de formulário*/}
                <a href="/" id="esqueceuSenhaLink">Esqueceu a senha?</a>
                <div className="stroke"></div> {/*Linha de separação entre informações de login e criar conta*/}
                <input type="button" value="Criar nova Conta" id="criarConta" />{/*Botão para criar uma nova conta*/}
            </div>
        </section>
    )
}