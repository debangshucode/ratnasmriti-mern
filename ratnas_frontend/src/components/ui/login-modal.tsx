"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const portalRoot = document.getElementById("modal-root");
  if (!portalRoot) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add authentication logic here
    onClose(); // close modal
    navigate("/admin"); // go to admin page
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm relative">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Login</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg p-2 text-black"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-lg p-2 text-black"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
