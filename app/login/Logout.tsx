"use client";

import { logout } from "../utils/manageCookies";
export default function Logout() {
  return (
    <button
      className="p-2 bg-red-100 rounded shadow-md border"
      onClick={logout}
    >
      Logout
    </button>
  );
}
