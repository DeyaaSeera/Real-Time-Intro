import Header from "./components/Header/Header";
import LongPollingComponent from "./components/LongPollingComponent/LongPollingComponent";
import MatchList from "./components/MatchList/MatchList";
import ServerSendEvents from "./components/ServerSendEvents/ServerSendEvents";
import ShortPollingComponent from "./components/ShortPollingComponent/ShortPollingComponent";
import SocketComponent from "./components/Socket/SocketComponent";

export default function Home() {
  return (
    <>
      <Header />
      <MatchList />
      {/* <ShortPollingComponent /> */}
      {/* <LongPollingComponent /> */}
      {/* <ServerSendEvents /> */}
      {/* <SocketComponent /> */}
    </>
  );
}
