import PremiumButton from "../../components/ui/PremiumButton";

type ConversationSubmitProps = {
  disabled?: boolean;
};

export default function ConversationSubmit({
  disabled = false,
}: ConversationSubmitProps) {
  return (
    <div className="mt-10 flex flex-col gap-5">

      <PremiumButton
        href="#"
      >
        Erstgespräch anfragen
      </PremiumButton>

      <p
        className="
          text-center
          text-[13px]
          font-light
          leading-6
          text-slate-500
        "
      >
        Wir melden uns in der Regel innerhalb eines Werktages.
      </p>

    </div>
  );
}