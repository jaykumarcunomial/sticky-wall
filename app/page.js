/* eslint-disable @next/next/no-img-element */

import LookingFor from "./components/LookingFor";
import CanHelpWith from "./components/CanHelpWith";
import Recent from "./components/Recent";
import Chat from "./components/Chat";
import { messages, needItems, provideItems } from "@/constants/contstants";

export default function Home() {
  return (
    <div className="bg-gradient-to-tl from-indigo-400 via-purple-300 to-blue-400 bg-fixed min-h-dvh">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-8 gap-5 p-8">
        {/* Looking For */}
        <div className="col-span-3">
          <LookingFor items={needItems} />
        </div>

        {/* Can Help With */}
        <div className="col-span-3">
          <CanHelpWith items={provideItems} />
        </div>

        {/* Column 3 */}
        <div className="col-span-2 space-y-5">
          <Chat />
          <Recent items={messages} />
        </div>
      </div>
    </div>
  );
}
