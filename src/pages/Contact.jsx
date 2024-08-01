import ContactezNous from "../components/Contact/ContactezNous";
import RdvSection from "../components/Contact/RdvSection";
import TitlePage from "../components/TitlePage/TitlePage";

export default function Contact({ Contacts }) {
  return (
    <>
      <TitlePage title="Contact" />
      <main>
        <ContactezNous />
        <RdvSection Contacts={Contacts} />
      </main>
    </>
  );
}
