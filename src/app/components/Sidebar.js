// src/app/components/Sidebar.js
import Link from 'next/link';

const navItems = [
  { name: 'All Tasks', href: '/alltasks' },
  { name: 'Today', href: '/today' },
  { name: 'Important', href: '/important' },
  { name: 'Planned', href: '/planned' },
  { name: 'Assigned to Me', href: '/assigned' },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-offWhite border-r h-screen p-4  bg-green-50">
      {/* User Profile Section */}
      <div className="flex items-center mb-8">
        <img
          src="/man.avif"
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">Hey, Pranshu </p>
        </div>
      </div>
      
      {/* Navigation Items */}
      <nav className=' bg-white rounded-3xl'>
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <div className="flex items-center space-x-2 p-2 rounded hover:bg-green-50 hover:text-green-800 cursor-pointer">
              {/* Icon placeholder */}
              <span className="w-6 h-6 bg-gray-400 rounded"></span>
              <span className='font-bold'>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
