import ContactezNous from "../components/Contact/ContactezNous";
import RdvSection from "../components/Contact/RdvSection";
import TitlePage from "../components/TitlePage/TitlePage";

export default function Contact({ Contacts }) {
  return (
    <main>
      <TitlePage title="Contact" />
      <ContactezNous />
      <RdvSection Contacts={Contacts} />
    </main>
  );
}
