
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
        <DialogContent className="max-w-md bg-white border-2 border-green-200 shadow-2xl rounded-xl">
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {language === 'fa' ? 'درخواست شما ثبت شد!' : 'Application Received!'}
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              {language === 'fa' 
                ? 'تیم ما ظرف 24 ساعت با شما تماس خواهد گرفت'
                : 'Our team will contact you within 24 hours to get started'
              }
            </p>
            <Button onClick={resetModal} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
              {language === 'fa' ? 'بستن' : 'Close'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl bg-white border-2 border-amber-200 shadow-2xl rounded-xl">
        <DialogHeader className="pb-4">
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            {language === 'fa' ? 'عضویت در برنامه آزمایشی' : 'Join Pilot Program'}
          </DialogTitle>
          <DialogDescription className="text-lg text-amber-700 font-semibold pt-2">
            {language === 'fa'
              ? 'فرصت محدود - تنها 20 جا باقی مانده است'
              : 'Limited opportunity - Only 20 spots remaining'
            }
          </DialogDescription>
        </DialogHeader>

        {/* Enhanced Pilot Benefits */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl mb-6 border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
            <Shield className="w-5 h-5 text-green-600" />
            {language === 'fa' ? 'مزایای برنامه آزمایشی:' : 'Pilot Program Benefits:'}
          </h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{language === 'fa' ? '3 ماه دسترسی رایگان کامل' : '3-month free full access'}</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{language === 'fa' ? 'کاهش 20% زمان توقف' : 'Reduce downtime by 20%'}</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{language === 'fa' ? 'پشتیبانی اختصاصی و آموزش تیم' : 'Dedicated support & team training'}</span>
            </div>
            <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-xl border border-amber-200">
              <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span className="text-amber-800 font-medium">{language === 'fa' ? 'راه‌اندازی در کمتر از 1 هفته' : 'Setup in under 1 week'}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-sm font-semibold text-slate-700 mb-2 block">
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
              className="border-2 border-slate-200 focus:border-amber-500 py-3 text-lg rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-semibold text-slate-700 mb-2 block">
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
              className="border-2 border-slate-200 focus:border-amber-500 py-3 text-lg rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2 block">
              {language === 'fa' ? 'ایمیل *' : 'Email *'}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={language === 'fa' ? 'ایمیل شما' : 'Your email'}
              required
              className="border-2 border-slate-200 focus:border-amber-500 py-3 text-lg rounded-xl"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 py-3 text-lg border-2 rounded-xl"
            >
              {language === 'fa' ? 'لغو' : 'Cancel'}
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 text-lg font-semibold rounded-xl"
            >
              {language === 'fa' ? 'ارسال درخواست' : 'Apply Now'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PilotModal;
