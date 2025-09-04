"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="sm"
        className="p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
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
          className="h-6 w-6"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-4 px-6 space-y-4">
          <Link
            href="#"
            className="block text-blue-900 hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
          <Link
            href="#"
            className="block text-blue-900 hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Área do Cliente
          </Link>
          <div className="pt-4 border-t border-gray-200">
            <Button className="w-full" size="lg">
              Assine Agora
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 