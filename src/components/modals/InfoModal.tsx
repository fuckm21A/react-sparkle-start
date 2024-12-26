import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InfoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
}

const InfoModal = ({ isOpen, onOpenChange, title, content }: InfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-4">{title}</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;