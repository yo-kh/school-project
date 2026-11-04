"use client";

import { useState } from "react";
import Link from "next/link";

export default function DropDown({ placeholder, options}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <div
                className="flex flex-row items-center gap-2 cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <h3 className="uppercase">{placeholder}</h3>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            <div
                className={`flex flex-col overflow-hidden transition-all duration-300 ${
                    open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {Object.entries(options ?? {}).map(([key, value]) => (
                    <Link
                        key={key}
                        className="cursor-pointer p-2 hover:bg-black/10"
                        href={value}
                    >
                        {key}
                    </Link>
                ))}
            </div>
        </div>
    );
}