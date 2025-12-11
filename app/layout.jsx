import Link from "next/link";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
            <Navbar/>
          <div className="flex">
            <div className="basis-2/12 p-2 bg-gray-300 h-screen">
                <Sidebar/>
            </div>
            <div className="basis-10/12 p-2">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
