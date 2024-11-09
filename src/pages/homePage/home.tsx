import ButtonComponente from "../../globalComponents/button"
import NavbarHomePage from "./components/navBarHomePage"
import SearchIcon from '@mui/icons-material/Search';
import InsightsIcon from '@mui/icons-material/Insights';
import ButtonIcon from "../../globalComponents/buttonIcon";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
function Home() {
    return (
        <div>
            <NavbarHomePage />
            <div className="container-fluid mt-3">
                <div className="card">
                    <div className="card-body">
                        <section className="bg-preto text-white text-center py-5">
                            <div className="container">
                                <h1>Bem-vindo à FAQEase!</h1>
                                <p>Conheça nossos produtos para automatizar o seu negócio.</p>
                            </div>
                        </section>
                        <section id="produtos" className="py-5">
                            <div className="container">
                                <p className="text-center">Nossas automatizações são especializadas em interações via WhatsApp. Obtenha a licença de acesso ao bot para desbloquear as funcionalidades.</p>
                                <br />
                                <h2 className="text-center mb-4"><b>Nossas Automatizações</b></h2>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card bg-preto text-white">
                                            <ButtonIcon
                                                icone={<InsightsIcon />}
                                                color="inherit"
                                                size="large"
                                                disabled={false}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">BOT para o seu comércio via WhatsApp</h5>
                                                <ButtonComponente
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
                                    <div className="col-md-4 mb-4  d-inline-block h-100">
                                        <div className="card bg-preto text-white">
                                            <ButtonIcon
                                                icone={<SettingsSuggestIcon />}
                                                color="inherit"
                                                size="large"
                                                disabled={false}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">BOT para suporte ao cliente via WhatsApp</h5>
                                                <ButtonComponente
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
                                    <div className="col-md-4 mb-4">
                                        <div className="card bg-preto text-white">
                                            <ButtonIcon
                                                icone={<PrecisionManufacturingIcon />}
                                                color="inherit"
                                                size="large"
                                                disabled={false}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">IA Personalizada para atendimento mais dinâmico</h5>
                                                <ButtonComponente
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
        </div>
    )
}

export default Home