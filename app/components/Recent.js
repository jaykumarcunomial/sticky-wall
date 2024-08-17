import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function Recent({ items }) {
  return (
    <div className="max-w-2xl space-y-5 bg-white px-4 py-5 rounded-md h-min">
      {/* Header */}
      <div className="px-0.5 flex items-center justify-between">
        <div className="font-semibold text-xl">Interesting to know</div>
        <button
          type="button"
          className="focus:ring-1 rounded-full ring-gray-500"
        >
          <EllipsisHorizontalIcon className="size-6" />
        </button>
      </div>

      {/* Items */}
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((message, index) => (
          <li
            key={index}
            className="relative bg-white px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
          >
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <a href="#" className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="truncate text-sm font-medium text-gray-900">
                    {message.sender}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {message.subject}
                  </p>
                </a>
              </div>
              <time
                dateTime={message.datetime}
                className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >
                {message.time}
              </time>
            </div>
            <div className="mt-1">
              <p className="line-clamp-2 text-sm text-gray-600">
                {message.preview}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
