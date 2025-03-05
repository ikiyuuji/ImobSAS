
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
  className,
}) => {
  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/20',
        className
      )}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/5 transition-transform duration-700 ease-out group-hover:scale-150"></div>
      
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
        {icon}
      </div>
      
      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
      
      <p className="mb-6 text-gray-600">{description}</p>
      
      <a 
        href={link} 
        className="inline-flex items-center text-accent transition-all duration-300 group-hover:translate-x-2"
      >
        Saiba mais
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

export default ServiceCard;
