// src/components/MainLayout.js
import Sidebar from './Sidebar'; // Direct import from components

const MainLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 overflow-y-auto p-4">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;