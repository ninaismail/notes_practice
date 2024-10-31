import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <ThemeToggle/>
      <Outlet />
    </>
  )
}