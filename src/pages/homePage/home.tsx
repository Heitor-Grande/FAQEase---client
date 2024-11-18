import ButtonComponente from "../../globalComponents/button"
import NavbarHomePage from "./components/navBarHomePage"
import SearchIcon from '@mui/icons-material/Search';
import InsightsIcon from '@mui/icons-material/Insights';
import ButtonIcon from "../../globalComponents/buttonIcon";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Footer from "../../globalComponents/footer";
import InputPadrao from "../../globalComponents/inputPadrao";
import { useState } from "react";
import formulario from "./interfaces/formulario";
import SendIcon from '@mui/icons-material/Send';
function Home() {
    const [formulario, setFomulario] = useState<formulario>({
        nome: "",
        email: "",
        texto: ""
    })
    function setValuesFormulario(propriedade: string, evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFomulario({
            ...formulario,
            [propriedade]: evento.target.value
        })
    }
    return (
        <div>
            <NavbarHomePage />
            <div className="container-fluid mt-3">
                <div className="card">
                    <section className="bg-preto text-white text-center py-5">
                        <div className="container">
                            <h1>Bem-vindo à GSD!</h1>
                            <p>Conheça nossos produtos para automatizar o seu negócio.</p>
                        </div>
                    </section>
                    <div className="card-body">
                        <section id="produtos" className="py-5">
                            <div className="container">
                                <p className="text-center">Nossas automatizações são especializadas em interações via WhatsApp. Obtenha a licença de acesso ao bot para desbloquear as funcionalidades.</p>
                                <br />
                                <h2 className="text-center mb-4"><b>Nossas Automatizações</b></h2>
                                <div className="row">
                                    <div className="col-md-4 mb-4 m-auto">
                                        <div className="card bg-preto text-white">
                                            <div className="card-header">
                                                <h5 className="fs-4">FAQEaser</h5>
                                            </div>
                                            <ButtonIcon
                                                type="button"
                                                icone={<PrecisionManufacturingIcon />}
                                                color="inherit"
                                                size="large"
                                                disabled={false}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">
                                                    Chega de complicação!
                                                </h5>
                                                <h5 className="card-title text-center">
                                                    Agora seus clientes podem criar contas e fazer pedidos diretamente pelo WhatsApp,
                                                    de forma prática e rápida.
                                                </h5>
                                                <h5 className="card-title text-center">
                                                    Automatize o atendimento,
                                                    economize tempo e ofereça uma experiência incrível para o seu público.
                                                </h5>
                                                <br />
                                                <ButtonComponente
                                                    type="button"
                                                    variant="contained"
                                                    texto="Saiba Mais"
                                                    disabled={false}
                                                    size="medium"
                                                    icone={<SearchIcon />}
                                                    color="error"
                                                    style={{ width: "100%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-3">
                <p className="text-center mb-3">Quer saber como funciona? Fale com a gente e leve sua comunicação para o próximo nível!</p>
                <form action="">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm col-md-12 col-lg-12">
                                    <p className="text-center">Você pode entrar em contato via formulário para mais detalhes</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm col-md-6 col-lg-6 m-auto">
                                    <div className="col-sm col-md-7 col-lg-7">
                                        <InputPadrao
                                            size="small"
                                            label="Nome Completo"
                                            variant="outlined"
                                            value={formulario.nome}
                                            onchange={function (e) {
                                                setValuesFormulario("nome", e)
                                            }}
                                            disabled={false}
                                            color="primary"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-sm col-md-6 col-lg-6 m-auto">
                                    <InputPadrao
                                        size="small"
                                        label="E-mail para contato"
                                        variant="outlined"
                                        value={formulario.email}
                                        onchange={function (e) {
                                            setValuesFormulario("email", e)
                                        }}
                                        disabled={false}
                                        color="primary"
                                    />
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-sm col-md-6 col-lg-6 m-auto">
                                    <InputPadrao
                                        size="small"
                                        label="Digite aqui sua dúvida..."
                                        variant="outlined"
                                        value={formulario.texto}
                                        multiline={true}
                                        rows={10}
                                        onchange={function (e) {
                                            setValuesFormulario("texto", e)
                                        }}
                                        disabled={false}
                                        color="primary"
                                    />
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-sm col-md-6 col-lg-6 m-auto text-end">
                                    <ButtonComponente
                                        variant="contained"
                                        texto="Enviar Formulário"
                                        disabled={false}
                                        size="small"
                                        color="error"
                                        type="submit"
                                        icone={<SendIcon />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Home