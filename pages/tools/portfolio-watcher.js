import { ButtonConnect } from "../../components/connectButton";
import { useAccount } from "wagmi";

export default function PortfolioWatcher() {
  const { address } = useAccount();

  return (
    <>
      <header className="flex">
        <h2 className="items-center mr-auto text-lg font-medium">
          Portfolio Watcher
        </h2>

        <ButtonConnect />

        {address ? <p>My address is {address}</p> : null}
      </header>
    </>
  );
}
