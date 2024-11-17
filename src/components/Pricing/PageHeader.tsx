// components/TeamHeader.tsx
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface TeamHeaderProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageHeader: React.FC<TeamHeaderProps> = ({ 
  title = "Pricing",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/Pricing", active: true }
  ]
}) => {
  return (
    <div className="relative bg-black text-white py-16">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-12 gap-0.5">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="border border-gray-700"/>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        
        {/* Breadcrumbs */}
        <nav className="flex">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              {item.active ? (
                <span className="text-yellow-400">{item.label}</span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;