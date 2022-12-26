import Link from "next/link";

export default function Disclamer() {
  return (
    <>
      <div className="mb-8 border border-orange-700 rounded-lg shadow-lg bg-base-100 collapse collapse-arrow border-opacity-40 bg-opacity-5">
        <input type="checkbox" className="peer" />
        <header className="bg-opacity-50 bg-primary-content peer-checked:border-b peer-checked:border-orange-700 collapse-title peer-checked:border-opacity-40">
          <h4 className="my-0 text-xl font-bold tracking-wide">Disclamer</h4>
        </header>
        <section className="collapse-content">
          <div className="pt-4 text-base">
            <p className="my-0">
              Il contenuto di queste pagine &egrave; da considerarsi per puro
              scopo di divulgazione. Nessuno dei membri de <em>La Crypta</em>{" "}
              &egrave; un consulente finanziario e quello che scrivono non deve
              essere considerato come un consiglio d&apos;investimento.
            </p>

            <Link
              className="mt-2 text-xs italic border-b border-current"
              href="/disclamer"
            >
              Approfondisci
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
