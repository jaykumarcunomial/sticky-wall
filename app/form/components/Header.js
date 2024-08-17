/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="mx-auto max-w-4xl bg-white p-5 space-y-5 rounded-3xl">
      {/* Title */}
      <div className="text-center text-xl sm:text-3xl font-medium">
        Application form for Innovation of the Year Selection
      </div>

      {/* Poster */}
      <img
        src="https://accubate-prod.azurewebsites.net/document/sidbi/ad743734-6387-4123-ac70-4284bc2ba178"
        className="max-w-full w-full object-scale-down h-auto max-h-64"
        alt=""
      />

      {/* Last Date */}
      <div className="text-center text-sm font-medium">
        Last Date to apply: 11 Sep 2024 11:59:59 pm
      </div>
    </div>
  );
}
