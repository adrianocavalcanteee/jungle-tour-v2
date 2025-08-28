import { useState } from "react";
import { createBooking } from "../services/bookingService";

export default function BookingForm({ tourId }) {
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "",
    data: "", pessoas: 1, mensagem: ""
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setErr("");
    try {
      await createBooking({ tourId, ...form, pessoas: Number(form.pessoas) });
      setOk(true);
      setForm({ nome:"",email:"",telefone:"",data:"",pessoas:1,mensagem:"" });
    } catch (e) {
      setErr(e?.response?.data?.message || "Falha ao enviar reserva");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      {ok && <div className="alert success">Pedido enviado! Em breve entraremos em contato.</div>}
      {err && <div className="alert danger">{err}</div>}

      <input name="nome" placeholder="Nome completo" value={form.nome} onChange={onChange} required />
      <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
      <input name="telefone" placeholder="Telefone (WhatsApp)" value={form.telefone} onChange={onChange} />
      <input name="data" type="date" value={form.data} onChange={onChange} required />
      <select name="pessoas" value={form.pessoas} onChange={onChange}>
        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} pessoa(s)</option>)}
      </select>
      <textarea name="mensagem" placeholder="Observações (opcional)" value={form.mensagem} onChange={onChange} />
      <button className="cta-button" type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Solicitar reserva"}
      </button>
    </form>
  );
}
