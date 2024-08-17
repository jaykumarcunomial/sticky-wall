/* eslint-disable @next/next/no-img-element */
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { needItems as items } from "@/constants/contstants";
import { IdentificationIcon } from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-indigo-400 via-purple-300 to-blue-400 bg-fixed min-h-dvh">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="pb-6">
              <div className="flex w-full items-center justify-between space-x-6 px-6 pt-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    {/* Title */}
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {item.title}
                    </h3>

                    {/* Status */}
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {item.status}
                    </span>
                  </div>
                </div>
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                  src={item.imageUrl}
                  alt=""
                />
              </div>
              <div className="mt-1 line-clamp-2 text-sm text-gray-500 px-6">
                {item.description}
              </div>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href="#"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-3 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href="#"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-3 text-sm font-semibold text-gray-900"
                  >
                    <IdentificationIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
