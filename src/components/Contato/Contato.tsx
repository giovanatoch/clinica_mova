import './Contato.css'

function Contato() {
  return (
    <div className="layout-contato">
      <div className="clinica">
        <h3> Clínica</h3>
        <p>Rua Dr. Florêncio Ygartua, 131, sala 404 - Moinhos de Vento, Porto Alegre - RS</p>

        <h3>HORÁRIO DE ATENDIMENTO</h3>
        <p>Segunda a Sexta-feira, das 8h às 20h.</p>
      </div>
      <div className="contatos">
        <h3>Contatos</h3>
        <p>Ana Carolina Borgerth: +55 51 9913-0989 (WhatsApp)</p>
        <p>Camila Tochtrop: +55 51 9136-7213 (WhatsApp)</p>
        <p>Natália Coimbra: +55 51 8613-6703 (WhatsApp)</p>
      </div>
    </div>
  )
}

export default Contato;
