import LegalLayout from "../components/legal/LegalLayout";
import LegalInfoCard from "../components/legal/LegalInfoCard";

export default function ImpressumPage() {
  return (
    <LegalLayout
      eyebrow="IMPRESSUM"
      title="Transparenz schafft Vertrauen."
      intro="Rechtliche Informationen sind für uns kein Pflichtprogramm, sondern Teil einer offenen und vertrauensvollen Zusammenarbeit. Nachfolgend finden Sie alle gesetzlich erforderlichen Angaben zu Nielsen Energy Operations."
    >
      <LegalInfoCard />
    </LegalLayout>
  );
}