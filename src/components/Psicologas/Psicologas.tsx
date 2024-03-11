import './Psicologas.css';
import Ana from './psico-ana.png';
import Camila from './psico-camila.png';
import Natalia from './psico-natalia.png';

function Doutoras() {
  return (
    <div className="layout-psicologas">
      <div className="psicologas">
          <div className="psico">
            <div className="img">
              <img src={Ana}/>
              <p>Ana Carolina Borgerth</p>
            </div>
            <p>
            Psicóloga  (CRP 07/30081) e Sócia-proprietária. Especialização em Terapia do Esquema. Atendimento em psicologia clínica de adolescentes, adultos, idosos, casais e família, com ênfase na Terapia Cognitivo-Comportamental.
            </p>
          </div>
          <div className="psico">
            <div className="img">
                <img src={Camila}/>
                <p>Camila Tochtrop</p>
              </div>
              <p>
              Psicóloga (CRP XXXXXXXX) e Sócia-proprietária. Mestre e Doutoranda em Psicologia. Formada em Terapia do Esquema. Autora de materiais com temáticas relacionadas à saúde mental. Atendimento de adolescentes, adultos e idosos e Supervisão Clínica com ênfase na Terapia Cognitivo-Comportamental e na Psicopatologia Descritiva.
              </p>
            </div>
          <div className="psico">
            <div className="img">
              <img src={Natalia}/>
              <p>Natália Coimbra</p>
            </div>
            <p>
            Psicóloga (CRP 07/31360) e Sócia-proprietária. Mestre e Doutoranda em Psicologia. Formada em Terapia do Esquema. Palestrante e autora de materiais com temáticas relacionadas à saúde mental. Atendimento de adolescentes, adultos e idosos e Supervisão Clínica com ênfase na Terapia Cognitivo-Comportamental e na Psicopatologia Descritiva.
            </p>
          </div>
      </div>
    </div>
  );
}

export default Doutoras;