import './footer.css'
export function Footer() {
    return (
        <div className="destaqueFooter">
            <footer>

                <ul className="listaLinguas"> {/*Links para trocar a linguagem da página, localizados no rodapé*/}
                    <li>Portugues (Brasil)</li>
                    <li><a href="/">English (US)</a></li>
                    <li><a href="/">Español</a></li>
                    <li><a href="/">Français (France)</a></li>
                    <li><a href="/">Italiano</a></li>
                    <li><a href="/">Deutsch</a></li>
                    <li><a href="/">العربية</a></li>
                    <li><a href="/">हिन्दी</a></li>
                    <li><a href="/">中文(简体)</a></li>
                    <li><a href="/">日本語</a></li>
                    <li><a href="/"></a></li>
                </ul>
                <select name="mobileLang" id="mobileLang">
                    <option value="Portugues Brasil">Portugues (Brasil)</option>
                    <option value="English US">English (US)</option>
                    <option value="Espanol">Español</option>
                    <option value="Francais France">Français (France)</option>
                    <option value="Italiano">Italiano</option>
                    <option value="Deutsch">Deutsch</option>
                    <option value=">العربية">العربية</option>
                    <option value="हिन्दी">हिन्दी</option>
                    <option value="中文 简体">中文(简体)</option>
                    <option value="日本語">日本語</option>
                </select>
                <div className="stroke"></div>
                <ul className="links"> {/*Links úteis relacionados ao site*/}
                    <li><a href="https://www.facebook.com/reg/">Cadastre-se</a></li>
                    <li><a href="https://www.facebook.com/login/">Entrar</a></li>
                    <li><a href="https://messenger.com/">Messenger</a></li>
                    <li><a href="https://www.facebook.com/lite/">Facebook Lite</a></li>
                    <li><a href="https://www.facebook.com/watch/">Watch</a></li>
                    <li><a href="https://www.facebook.com/places/">Locais</a></li>
                    <li><a href="https://www.facebook.com/games/">Jogos</a></li>
                    <li><a href="https://www.facebook.com/marketplace/">Marketplace</a></li>
                    <li><a href="https://pay.facebook.com/">Facebook Pay</a></li>
                    <li><a href="https://www.oculus.com/">Oculus</a></li>
                    <li><a href="https://portal.facebook.com/">Portal</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://www.bulletin.com/">Boletim</a></li>
                    <li><a href="https://www.facebook.com/local/lists/245019872666104/">Local</a></li>
                    <li><a href="https://www.facebook.com/fundraisers/">Campanhas de arrecadação de fundos</a></li>
                    <li><a href="https://www.facebook.com/biz/directory/">Serviços</a></li>
                    <li><a href="https://www.facebook.com/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D">Central de Informações de Votação</a></li>
                    <li><a href="https://www.facebook.com/groups/explore/">Grupos</a></li>
                    <li><a href="https://about.facebook.com/">Sobre</a></li>
                    <li><a href={'https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto'}>Criar anúncio</a></li>
                    <li><a href="https://www.facebook.com/pages/create/?ref_type=site_footer">Criar Página</a></li>
                    <li><a href="https://developers.facebook.com/?ref=pf">Desenvolvedores</a></li>
                    <li><a href="https://www.facebook.com/careers/?ref=pf">Carreiras</a></li>
                    <li><a href="https://www.facebook.com/privacy/explanation/">Privacidade</a></li>
                    <li><a href="https://www.facebook.com/policies/cookies/">Cookies</a></li>
                    <li><a href="https://www.facebook.com/help/568137493302217">Escolhas para anúncios</a></li>
                    <li><a href="https://www.facebook.com/policies?ref=pf">Termos</a></li>
                    <li><a href="https://www.facebook.com/help/?ref=pf">Ajuda</a></li>
                    <li><a href="https://www.facebook.com/help/637205020878504">Carregamento de contatos e não usuáriosConfiguraçõesRegistro de Atividades</a></li>
                </ul>
            </footer>
        </div>
    )
}