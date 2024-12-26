import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface StoreLocation {
  name: string;
  address: string;
  image: string;
  mapsUrl: string;
}

const locations: StoreLocation[] = [
  {
    name: "Fiori Les Berges du Lac",
    address: "Rue du Lac Tibériade, Les Berges du lac, La Marsa, Tunisia",
    image: "Thestore.png",
    mapsUrl: "https://maps.google.com/?q=Les+Berges+du+Lac,+La+Marsa,+Tunisia",
  },
  {
    name: "Fiori Tunisia Mall",
    address: "Tunisia mall en face Zara et Zayn",
    image: "Thestand.png",
    mapsUrl: "https://maps.google.com/?q=Tunisia+Mall,+Tunisia",
  },
];

interface StoreLocationsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const StoreLocationsModal = ({ isOpen, onOpenChange }: StoreLocationsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[800px] bg-white p-6 rounded-lg shadow-xl border border-[#6D0201]/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-6 text-[#6D0201]">
            Nos Boutiques
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg h-[200px] md:h-[300px] transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-black bg-white/90">
                  <p className="text-lg font-semibold line-clamp-1">{location.name}</p>
                  <p className="text-sm mt-1 text-gray-600 line-clamp-2">{location.address}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreLocationsModal;