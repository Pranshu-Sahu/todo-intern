import "./globals.css";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { TasksProvider } from "./contexts/TasksProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex border-8">
      <TasksProvider>
        {/* Sidebar */}
        <Sidebar />
        {/* Main Section */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <Header />
          {/* Main Content Wrapper */}
          <main className="flex-1 p-4 bg-green-100">
            {children}
          </main>
        </div>
        </TasksProvider>
      </body>
    </html>
  );
}
