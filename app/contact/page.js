import Header from "@/components/Header";

export default function Contact() {
  return (
    <main>
      <Header />
      <h1 className="text-3xl mb-4">Contact</h1>
      <div className="space-y-3">
        <a className="btn btn-primary inline-block" href="https://wa.me/254737525933" target="_blank" rel="noreferrer">WhatsApp</a>
        <a className="btn btn-outline inline-block" href="tel:+254737525933">Call</a>
        <a className="btn btn-outline inline-block" href="sms:+254737525933">SMS</a>
        <p>Email: <a className="underline" href="mailto:mwangacreations@gmail.com">mwangacreations@gmail.com</a></p>
        <p>Regions: Nyamira • Kisii • Migori (HQ: Ekerenyo, Nyamira)</p>
      </div>
    </main>
  );
}
