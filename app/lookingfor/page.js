/* eslint-disable @next/next/no-img-element */

const items = [
  {
    title: "Looking for Next.js Developers",
    description:
      "Must have skills in tailwindcss, headlessui, heroicons and other packages.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "Freelancer Required for Upcoming Project",
    description:
      "An upcoming project in Node Express for an esteemed organization. Minimum 5 years of experience required.",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    title: "Database Engineer Needed",
    description:
      "Analysis of big data on hadoop. Skilled technical knowledge of Hadoop on distributed archiitecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    title: "Vacancy for Software Development Engineer II at Google Inc.",
    description:
      "Master's degree or PhD in Computer Science or related technical field. 1 year of experience building developer tools that improve developer velocity, code quality, and code health (e.g., compilers, automated releases, code design and testing, and test automation frameworks). Experience developing accessible technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    title: "Looking for Next.js Developers",
    description:
      "Must have skills in tailwindcss, headlessui, heroicons and other packages.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "Freelancer Required for Upcoming Project",
    description:
      "An upcoming project in Node Express for an esteemed organization. Minimum 5 years of experience required.",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    title: "Database Engineer Needed",
    description:
      "Analysis of big data on hadoop. Skilled technical knowledge of Hadoop on distributed archiitecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    title: "Vacancy for Software Development Engineer II at Google Inc.",
    description:
      "Master's degree or PhD in Computer Science or related technical field. 1 year of experience building developer tools that improve developer velocity, code quality, and code health (e.g., compilers, automated releases, code design and testing, and test automation frameworks). Experience developing accessible technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Example() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="ease-in-out transition relative space-y-2 hover:shadow-lg rounded-lg border border-transparent bg-white px-6 py-5 shadow-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={item.imageUrl}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <button type="button" className="w-full text-left">
                    <p className="truncate text-base font-medium text-gray-900 hover:text-indigo-600">
                      {item.title}
                    </p>
                  </button>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
