import ContactezNous from "../components/Contact/ContactezNous";
import RdvSection from "../components/Contact/RdvSection";

export default function Contact({ adress, commune, mail, tel }) {
  return (
    <main>
      <ContactezNous />
      <RdvSection adress={adress} commune={commune} mail={mail} tel={tel} />
    </main>
  );
}
