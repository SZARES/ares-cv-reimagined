
import React, { useState } from 'react';
import { X, Send, Mail, Phone, MessageSquare } from 'lucide-react';
import { useCV } from '../context/CVContext';
import { toast } from 'sonner';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { cvData } = useCV();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado con éxito!', {
      description: 'Me pondré en contacto contigo pronto.',
    });
    onClose();
  };

  // Extract email and phone from contact string
  const email = cvData.contact.split('|')[2]?.trim() || 'brusssilva904@gmail.com';
  const phone = cvData.contact.split('|')[1]?.trim() || '969455288';

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-fade-in">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cv-primary to-cv-accent"></div>
        
        <button 
          className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-cv-dark mb-6 gradient-text">Contactame</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-cv-primary/10 text-cv-primary">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${email}`} className="text-cv-text hover:text-cv-primary transition-colors">
                  {email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-cv-primary/10 text-cv-primary">
                  <Phone size={18} />
                </div>
                <a href={`tel:${phone}`} className="text-cv-text hover:text-cv-primary transition-colors">
                  {phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-cv-primary/10 text-cv-primary">
                  <MessageSquare size={18} />
                </div>
                <span className="text-cv-text">Piura, Perú</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cv-primary/50"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cv-primary/50"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cv-primary/50"
                  required
                  value={formData.message}
                  onChange={handleChange as any}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cv-primary to-cv-secondary text-white py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Send size={16} className="mr-2" />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
