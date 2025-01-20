import React from 'react';
import { X } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  const handleStudentRegistration = () => {
    // You'll provide the Google Form URL later
    alert('Student registration form will be available soon!');
    onClose();
  };

  const handleBusinessRegistration = () => {
    // You'll provide the Google Form URL later
    alert('Business registration form will be available soon!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-brand-black-light p-8 rounded-lg shadow-xl max-w-md w-full relative border border-brand-gold/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-gold hover:text-brand-gold-light"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-brand-gold mb-6 text-center">Register</h2>

        <div className="space-y-4">
          <button
            onClick={handleStudentRegistration}
            className="w-full bg-brand-gold text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold-light transition-colors"
          >
            Register as Student
          </button>
          <button
            onClick={handleBusinessRegistration}
            className="w-full border-2 border-brand-gold text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-black transition-colors"
          >
            Register as Business
          </button>
        </div>
      </div>
    </div>
  );
}