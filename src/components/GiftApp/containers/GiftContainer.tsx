import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types/product';
import { Plus } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GiftContainerProps {
  items: Product[];
  maxItems: number;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  containerTitle: string;
  className?: string;
}

const GiftContainer = ({ 
  items, 
  maxItems, 
  onDrop, 
  containerTitle,
  className = "" 
}: GiftContainerProps) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (items.length < maxItems) {
      setIsDraggingOver(true);
    }
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (items.length < maxItems) {
      setIsDraggingOver(false);
      onDrop(e);
    }
  };

  return (
    <div 
      className={`relative rounded-xl bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden border border-gray-100 ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-4">
        <h3 className="text-lg font-medium text-[#6D0201] mb-3">{containerTitle}</h3>
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white rounded-lg p-3 shadow-sm border border-gray-50"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-50">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-sm text-[#6D0201]">
                            {item.price} TND
                          </p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                      {item.size && <p>Taille: {item.size}</p>}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </AnimatePresence>

          {items.length < maxItems && (
            <div className="h-20 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-sm text-gray-500">
                {isDraggingOver ? (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <Plus className="w-6 h-6 text-[#6D0201]" />
                  </motion.div>
                ) : (
                  `${maxItems - items.length} emplacement${maxItems - items.length > 1 ? 's' : ''} disponible${maxItems - items.length > 1 ? 's' : ''}`
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftContainer;