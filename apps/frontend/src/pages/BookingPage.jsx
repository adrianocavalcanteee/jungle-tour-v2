import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  // se vier de um card específico, você pode passar o id via querystring/estado
  const tourId = null; // ou pegue de params/query
  return (
    <section className="tours">
      <div className="container">
        <div className="section-title">
          <h2>Solicitar reserva</h2>
          <p>Preencha os dados e retornaremos com confirmação e formas de pagamento.</p>
        </div>
        <BookingForm tourId={tourId} />
      </div>
    </section>
  );
}
