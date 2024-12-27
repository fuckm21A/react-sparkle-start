import React, { useState } from 'react';
import { Product } from '@/types/product';
import { playTickSound } from '@/utils/audio';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SizeSelector from '../product-detail/SizeSelector';
import PersonalizationButton from '../product-detail/PersonalizationButton';
import GiftContainer from './containers/GiftContainer';

interface GiftBasket3DProps {
  items: Product[];
  onItemDrop: (item: Product, size: string, personalization: string) => void;
}

const GiftBasket3D = ({ items, onItemDrop }: GiftBasket3DProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [personalization, setPersonalization] = useState('');
  const [droppedItem, setDroppedItem] = useState<Product | null>(null);
  const [targetContainer, setTargetContainer] = useState<number>(0);

  const container1Items = items.slice(0, 2); // Main container: 2 items
  const container2Items = items.slice(2, 3); // Side container 1: 1 item
  const container3Items = items.slice(3, 4); // Side container 2: 1 item

  const handleDrop = (containerId: number) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData('product'));
    setDroppedItem(item);
    setTargetContainer(containerId);
    setShowDialog(true);
    playTickSound();
  };

  const handleConfirm = () => {
    if (droppedItem && selectedSize && onItemDrop) {
      onItemDrop(droppedItem, selectedSize, personalization);
      setShowDialog(false);
      setSelectedSize('');
      setPersonalization('');
      setDroppedItem(null);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 h-[600px]">
        {/* Main container - Takes full width on top */}
        <div className="h-[300px]">
          <GiftContainer
            items={container1Items}
            maxItems={2}
            onDrop={handleDrop(0)}
            containerTitle="Pack Principal"
            className="h-full bg-white/95 backdrop-blur-sm shadow-xl rounded-xl border border-gray-100"
          />
        </div>
        
        {/* Bottom containers - Two equal columns */}
        <div className="grid grid-cols-2 gap-4 h-[250px]">
          <GiftContainer
            items={container2Items}
            maxItems={1}
            onDrop={handleDrop(1)}
            containerTitle="Pack Secondaire 1"
            className="h-full bg-white/95 backdrop-blur-sm shadow-xl rounded-xl border border-gray-100"
          />
          <GiftContainer
            items={container3Items}
            maxItems={1}
            onDrop={handleDrop(2)}
            containerTitle="Pack Secondaire 2"
            className="h-full bg-white/95 backdrop-blur-sm shadow-xl rounded-xl border border-gray-100"
          />
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[500px] bg-white/95">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif text-[#6D0201] mb-4">
              Personnalisez votre article
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <SizeSelector
              selectedSize={selectedSize}
              sizes={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']}
              onSizeSelect={setSelectedSize}
            />
            
            <PersonalizationButton
              productId={droppedItem?.id || 0}
              onSave={setPersonalization}
              initialText={personalization}
            />

            <button
              onClick={handleConfirm}
              className={`w-full py-4 rounded-xl text-white font-medium ${
                !selectedSize
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#6D0201] hover:bg-[#590000]'
              }`}
              disabled={!selectedSize}
            >
              Confirmer
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GiftBasket3D;