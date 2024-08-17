/* eslint-disable @next/next/no-img-element */

import Description from "./components/Description";
import Form from "./components/Form";
import Header from "./components/Header";
import Partners from "./components/Partners";

export default function FormPage() {
  return (
    <div className="py-10 bg-gradient-to-tl from-indigo-400 via-purple-300 to-blue-400 bg-fixed min-h-dvh space-y-5 px-2 lg:px-0">
      <Header />
      <Description />
      <Partners />
      <Form />
    </div>
  );
}
