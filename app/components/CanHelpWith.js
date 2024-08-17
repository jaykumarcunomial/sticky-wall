/* eslint-disable @next/next/no-img-element */
"use client";

import { EllipsisHorizontalIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import DetailsModal from "./DetailsModal";

export default function CanHelpWith({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="max-w-2xl space-y-5 bg-gray-200 bg-opacity-80 px-4 py-5 rounded-md h-min">
        {/* Header */}
        <div className="px-0.5 flex items-center justify-between">
          <div className="font-semibold text-xl">Can Help With</div>
          <button
            type="button"
            className="focus:ring-1 rounded-full ring-gray-500"
          >
            <EllipsisHorizontalIcon className="size-6" />
          </button>
        </div>

        {/* Items */}
        <div className="space-y-3">
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
                    <p className="truncate text-base font-medium text-gray-900">
                      {item.title}
                    </p>
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
                  onClick={() => setOpen(true)}
                >
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add button */}
        <button
          type="button"
          className="px-1 flex items-center gap-2 text-gray-700 hover:text-blue-600"
        >
          <PlusIcon className="size-5" />
          <span>Add a requirement</span>
        </button>
      </div>

      {/* Details Modal */}
      <DetailsModal open={open} setOpen={setOpen} />
    </>
  );
}
