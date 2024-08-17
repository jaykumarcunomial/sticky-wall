/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowLongRightIcon,
  ArrowTopRightOnSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import DetailsModal from "./DetailsModal";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const filterItems = [
  {
    name: "All",
    label: "all",
  },
  {
    name: "Self-Posted",
    label: "myrequirements",
  },
];

export default function LookingFor({ items }) {
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState(filterItems[0].label);

  return (
    <>
      <div className="max-w-2xl space-y-5 bg-gray-200 bg-opacity-80 px-4 py-5 rounded-md h-min">
        {/* Header */}
        <div className="px-0.5 flex items-center justify-between">
          {/* Title */}
          <div className="font-semibold text-xl">Looking For</div>

          <div className="flex items-center gap-3">
            {/* Filters */}
            <div className="flex items-center gap-1">
              {filterItems.map((item, index) => (
                <button key={index} type="button">
                  <span
                    className={classNames(
                      active === item.label
                        ? "bg-yellow-50 text-yellow-800 ring-yellow-600/10"
                        : "bg-gray-50 text-gray-600 ring-gray-500/10",
                      "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                    )}
                    onClick={() => setActive(item.label)}
                  >
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {/* View All Link */}
            <Link href="/lookingfor">
              <ArrowTopRightOnSquareIcon className="size-4 text-indigo-500 hover:text-indigo-600" />
            </Link>
          </div>
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
                  onClick={() => setOpen(true)}
                >
                  {active === "myrequirements" ? "View responses" : "Connect"}
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
