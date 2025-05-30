import Link from 'next/link';
import "../../styles/globals.css";
import Sidebar from '../../src/components/Sidebar';
import Header from '../../src/components/Header';

export default function DashboardLayout({ children }) {
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    {/* Sidebar */}
       <Sidebar />

    {/* Main section (content + top header) */}
        <div className="flex-1 ml-64 flex flex-col">
        
            <Header />
            <main className="flex-1 p-8">    
            {children}
            </main>
        </div>
    </div>
  );
}