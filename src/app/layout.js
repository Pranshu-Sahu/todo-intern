import "./globals.css";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Section */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <Header />
          {/* Main Content Wrapper */}
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
