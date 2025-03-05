
import React from 'react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  image: string;
  featured?: boolean;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  address,
  price,
  beds,
  baths,
  area,
  image,
  featured = false,
  className,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className={cn(
        'group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md',
        featured ? 'md:col-span-2' : '',
        className
      )}
    >
      <div className="relative overflow-hidden">
        <div className={cn('aspect-[4/3]', isLoading ? 'image-loading' : '')}>
          <img
            src={image}
            alt={title}
            className={cn(
              'h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105',
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
            onLoad={handleImageLoad}
          />
        </div>
        
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-3 top-3 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm transition-all hover:bg-white"
        >
          <Heart className={cn('h-5 w-5', isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600')} />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pt-12">
          <span className="inline-block rounded-md bg-accent px-2 py-1 text-xs font-medium text-white">
            Venda
          </span>
          <p className="mt-1 text-lg font-semibold text-white">{formatter.format(price)}</p>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{title}</h3>
        
        <div className="mt-1 flex items-center text-sm text-gray-500">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="line-clamp-1">{address}</span>
        </div>
        
        <div className="mt-4 flex justify-between border-t border-gray-100 pt-4 text-sm">
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4 text-gray-400" />
            <span>{beds} {beds === 1 ? 'Quarto' : 'Quartos'}</span>
          </div>
          
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4 text-gray-400" />
            <span>{baths} {baths === 1 ? 'Banheiro' : 'Banheiros'}</span>
          </div>
          
          <div className="flex items-center">
            <Square className="mr-1 h-4 w-4 text-gray-400" />
            <span>{area}m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
