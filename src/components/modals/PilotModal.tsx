
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pilot program application:', formData);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setFormData({ name: '', company: '', email: '' });
    onClose();
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={resetModal}>
        <DialogContent className="max-w-md">
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {language === 'fa' ? 'درخواست شما ثبت شد!' : 'Application Received!'}
            </h3>
            <p className="text-slate-600 mb-6">
              {language === 'fa' 
                ? 'تیم ما ظرف 24 ساعت با شما تماس خواهد گرفت'
                : 'Our team will contact you within 24 hours to get started'
              }
            </p>
            <Button onClick={resetModal} className="w-full">
              {language === 'fa' ? 'بستن' : 'Close'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            {language === 'fa' ? 'عضویت در برنامه آزمایشی' : 'Join Pilot Program'}
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            {language === 'fa'
              ? 'فرصت محدود - تنها 20 جا باقی مانده است'
              : 'Limited opportunity - Only 20 spots remaining'
            }
          </DialogDescription>
        </DialogHeader>

        {/* Pilot Benefits */}
        <div className="bg-slate-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            {language === 'fa' ? 'مزایای برنامه آزمایشی:' : 'Pilot Program Benefits:'}
          </h4>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{language === 'fa' ? '3 ماه دسترسی رایگان کامل' : '3-month free full access'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{language === 'fa' ? 'کاهش 20% زمان توقف' : 'Reduce downtime by 20%'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{language === 'fa' ? 'پشتیبانی اختصاصی و آموزش تیم' : 'Dedicated support & team training'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{language === 'fa' ? 'راه‌اندازی در کمتر از 1 هفته' : 'Setup in under 1 week'}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              {language === 'fa' ? 'نام *' : 'Full Name *'}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={language === 'fa' ? 'نام شما' : 'Your name'}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-medium">
              {language === 'fa' ? 'شرکت *' : 'Company *'}
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder={language === 'fa' ? 'نام شرکت' : 'Company name'}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              {language === 'fa' ? 'ایمیل تجاری *' : 'Business Email *'}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@company.com"
              required
              className="mt-1"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              {language === 'fa' ? 'انصراف' : 'Cancel'}
            </Button>
            <Button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-600">
              <Users className="w-4 h-4 mr-2" />
              {language === 'fa' ? 'درخواست عضویت' : 'Apply Now'}
            </Button>
          </div>
        </form>

        <p className="text-xs text-slate-500 text-center mt-4">
          {language === 'fa' 
            ? '🔒 اطلاعات شما محفوظ و مطابق GDPR محافظت می‌شود'
            : '🔒 Your data is secure and GDPR compliant'
          }
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PilotModal;
