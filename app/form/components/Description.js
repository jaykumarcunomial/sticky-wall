import { PaperClipIcon } from "@heroicons/react/24/outline";

export default function Description() {
  return (
    <div className="mx-auto max-w-4xl bg-white p-5 space-y-5 py-10 rounded-3xl">
      <div>
        <div className="text-lg font-medium">Description</div>
        <div className="pt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit habitasse id,
          nullam feugiat torquent lacus odio commodo in tristique primis,
          venenatis curabitur natoque quisque justo magna magnis turpis. Proin
          egestas convallis consequat massa facilisis fermentum, fames ad porta
          non cubilia aliquet, vitae nibh erat neque montes. Tempus maecenas
          vehicula nostra ligula hendrerit commodo fringilla posuere auctor
          porta proin fames sem, sociosqu erat congue in iaculis purus platea
          nibh est feugiat malesuada. At iaculis nisl auctor aptent orci donec
          bibendum odio, eu cubilia fusce ornare mattis congue mus, metus
          phasellus nascetur diam vel egestas duis. Fusce molestie litora lacus
          suspendisse ridiculus, nisl aenean vitae faucibus eros quam, cursus
          habitant et aliquet.
        </div>
      </div>

      <div>
        <div className="text-lg font-medium">Supporting documents</div>
        <ul role="list" className="pt-2 rounded-md">
          <li className="flex items-center justify-between py-1 pr-5 text-sm leading-6">
            <div className="flex w-0 flex-1 items-center">
              <PaperClipIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                <span className="truncate font-medium">
                  resume_back_end_developer.pdf
                </span>
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Download
              </a>
            </div>
          </li>
          <li className="flex items-center justify-between py-1 pr-5 text-sm leading-6">
            <div className="flex w-0 flex-1 items-center">
              <PaperClipIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                <span className="truncate font-medium">
                  coverletter_back_end_developer.pdf
                </span>
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Download
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
