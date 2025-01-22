"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ activeCategory, setActiveCategory, categories }) {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative flex h-16 justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  alt="Your Company"
                  src="/images/freebubbles.png"
                  className="h-8 w-auto"
                />
              </div>
              <div className="flex items-center hidden md:inline-flex">
                <p className="text-gray-900 font semi-bold">Catalog produse</p>
              </div>
              <a
                href="#"
                className="hidden md:inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Decarca catalog
              </a>
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
            
            
             {/* Desktop Navigation */}
             <div className="hidden lg:flex lg:space-x-4">
                {categories.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveCategory(tab)}
                    className={classNames(
                      activeCategory === tab
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                      "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
          </div>

          {/* Mobile Navigation */}
          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={classNames(
                    activeCategory === tab
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "block rounded-md px-3 py-2 text-base font-medium w-full text-left"
                  )}
                >
                  {tab}
                </button>
              ))}
              <div className="flex justify-end mt-4 mr-5">
              <a
                href="#"
                className="lg:hidden md:inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Decarca catalog
              </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

