import ContactezNous from "../components/Contact/ContactezNous";
import RdvSection from "../components/Contact/RdvSection";

export default function Contact({ Contacts }) {
  return (
    <main>
      <ContactezNous />
      <RdvSection Contacts={Contacts} />
    </main>
  );
}
