import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function PortfolioWatcher() {
  return (
    <>
      <header className="flex">
        <h2 className="items-center mr-auto text-lg font-medium">
          Portfolio Watcher
        </h2>
        <ConnectButton accountStatus="avatar" chainStatus="icon" />
      </header>
    </>
  );
}
