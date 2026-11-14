import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Check,
  Loader2,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
  Wrench,
} from 'lucide-react';
import { ALSO_AVAILABLE_SERVICES, CORE_SERVICES } from '../../data/services';
import { SITE } from '../../data/site';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { CustomSelect, SelectOption } from './CustomSelect';

interface QuoteFormProps {
  defaultService?: string;
}

interface FormState {
  name: string;
  phone: string;
  town: string;
  state: string;
  service: string;
  propertyType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  town?: string;
  state?: string;
  service?: string;
  propertyType?: string;
}

const STATE_OPTIONS: SelectOption[] = [
  { value: 'Massachusetts', label: 'Massachusetts', description: 'Western MA communities' },
  { value: 'Connecticut', label: 'Connecticut', description: 'Northern & Central CT communities' },
];

const SERVICE_OPTIONS: SelectOption[] = [
  ...(SITE.promo.active
    ? [
        {
          value: SITE.promo.title,
          label: `${SITE.promo.title} (${SITE.promo.priceLabel})`,
          description: SITE.promo.note,
        },
      ]
    : []),
  ...CORE_SERVICES.map((s) => ({
    value: s.title,
    label: s.title,
    description: s.category,
  })),
  ...ALSO_AVAILABLE_SERVICES.map((s) => ({
    value: s.title,
    label: s.title,
    description: 'Additional home service',
  })),
  {
    value: 'Not sure yet',
    label: 'Not sure yet',
    description: 'Help me inspect and recommend what is needed',
  },
];

const PROPERTY_OPTIONS: SelectOption[] = [
  { value: 'Home', label: 'Home', description: 'Single-family, multi-family, or condo' },
  { value: 'Commercial', label: 'Commercial', description: 'Office, retail, or managed property' },
];

export const QuoteForm: React.FC<QuoteFormProps> = ({ defaultService = '' }) => {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    town: '',
    state: 'Massachusetts',
    service: defaultService || 'Professional Gutter Cleaning',
    propertyType: 'Home',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }

    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 7) {
      nextErrors.phone = 'Please enter a valid callback phone number.';
    }

    if (!form.town.trim()) {
      nextErrors.town = 'Please enter your town or city.';
    }

    if (!form.state) {
      nextErrors.state = 'Please choose Massachusetts or Connecticut.';
    }

    if (!form.service) {
      nextErrors.service = 'Please select a service.';
    }

    if (!form.propertyType) {
      nextErrors.propertyType = 'Please choose Home or Commercial.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setForm({
      name: '',
      phone: '',
      town: '',
      state: 'Massachusetts',
      service: defaultService || 'Professional Gutter Cleaning',
      propertyType: 'Home',
      message: '',
    });
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-sm bg-[#0F1F3D] border border-white/15 p-8 sm:p-10 text-white shadow-xl"
      >
        <div className="w-14 h-14 rounded-sm bg-[#F26A1B] flex items-center justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.12, type: 'spring', stiffness: 280, damping: 18 }}
          >
            <Check size={28} className="text-white" strokeWidth={2.75} />
          </motion.div>
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF8A3D]">
          Estimate Request Received
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">
          Thank you, {form.name.split(' ')[0]}.
        </h3>
        <p className="mt-3 text-[#D9DEE5] leading-relaxed">
          We received your request for <strong className="text-white">{form.service}</strong> in{' '}
          <strong className="text-white">
            {form.town}, {form.state}
          </strong>
          . We will review the details and follow up with your free estimate shortly.
        </p>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
          <Button variant="outlineLight" onClick={handleReset} type="button">
            Send Another Request
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm bg-[#0F1F3D] border border-white/15 p-6 sm:p-8 lg:p-10 text-white shadow-xl relative"
    >
      <div className="mb-7 pb-5 border-b border-white/10">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF8A3D]">
          Free Estimate Request
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5">
          Tell us about your roofline.
        </h3>
      </div>

      <div className="space-y-5">
        {/* Row 1: Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className={cn(errors.name && 'animate-shake')}>
            <label
              htmlFor="quote-name"
              className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#D9DEE5] mb-1.5"
            >
              Your Name <span className="text-[#F26A1B]">*</span>
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F26A1B] pointer-events-none"
              />
              <input
                id="quote-name"
                type="text"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="Full name"
                className={cn(
                  'w-full rounded-sm border bg-[#14284B]/80 pl-10 pr-3.5 py-3 text-sm text-white placeholder:text-[#D9DEE5]/45 transition-colors focus:outline-none',
                  errors.name
                    ? 'border-red-400 focus:ring-2 focus:ring-red-400/30'
                    : 'border-white/20 focus:border-[#F26A1B] focus:ring-2 focus:ring-[#F26A1B]/30'
                )}
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-300" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className={cn(errors.phone && 'animate-shake')}>
            <label
              htmlFor="quote-phone"
              className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#D9DEE5] mb-1.5"
            >
              Callback Phone <span className="text-[#F26A1B]">*</span>
            </label>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F26A1B] pointer-events-none"
              />
              <input
                id="quote-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                placeholder="(413) 000-0000"
                className={cn(
                  'w-full rounded-sm border bg-[#14284B]/80 pl-10 pr-3.5 py-3 text-sm text-white placeholder:text-[#D9DEE5]/45 transition-colors focus:outline-none',
                  errors.phone
                    ? 'border-red-400 focus:ring-2 focus:ring-red-400/30'
                    : 'border-white/20 focus:border-[#F26A1B] focus:ring-2 focus:ring-[#F26A1B]/30'
                )}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-300" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Town/City + Custom State Select */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className={cn(errors.town && 'animate-shake')}>
            <label
              htmlFor="quote-town"
              className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#D9DEE5] mb-1.5"
            >
              Town / City <span className="text-[#F26A1B]">*</span>
            </label>
            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F26A1B] pointer-events-none"
              />
              <input
                id="quote-town"
                type="text"
                value={form.town}
                onChange={(e) => {
                  setForm({ ...form, town: e.target.value });
                  if (errors.town) setErrors({ ...errors, town: undefined });
                }}
                placeholder="e.g. Northampton, Suffield"
                className={cn(
                  'w-full rounded-sm border bg-[#14284B]/80 pl-10 pr-3.5 py-3 text-sm text-white placeholder:text-[#D9DEE5]/45 transition-colors focus:outline-none',
                  errors.town
                    ? 'border-red-400 focus:ring-2 focus:ring-red-400/30'
                    : 'border-white/20 focus:border-[#F26A1B] focus:ring-2 focus:ring-[#F26A1B]/30'
                )}
              />
            </div>
            {errors.town && (
              <p className="mt-1.5 text-xs text-red-300" role="alert">
                {errors.town}
              </p>
            )}
          </div>

          <CustomSelect
            label="State"
            required
            value={form.state}
            onChange={(val) => {
              setForm({ ...form, state: val });
              if (errors.state) setErrors({ ...errors, state: undefined });
            }}
            options={STATE_OPTIONS}
            icon={<MapPin size={16} />}
            error={errors.state}
          />
        </div>

        {/* Row 3: Service + Property Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <CustomSelect
            label="Service Needed"
            required
            value={form.service}
            onChange={(val) => {
              setForm({ ...form, service: val });
              if (errors.service) setErrors({ ...errors, service: undefined });
            }}
            options={SERVICE_OPTIONS}
            icon={<Wrench size={16} />}
            error={errors.service}
          />

          <CustomSelect
            label="Property Type"
            required
            value={form.propertyType}
            onChange={(val) => {
              setForm({ ...form, propertyType: val });
              if (errors.propertyType) setErrors({ ...errors, propertyType: undefined });
            }}
            options={PROPERTY_OPTIONS}
            icon={<Building2 size={16} />}
            error={errors.propertyType}
          />
        </div>

        {/* Row 4: Message */}
        <div>
          <label
            htmlFor="quote-message"
            className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#D9DEE5] mb-1.5"
          >
            Project Notes (Optional)
          </label>
          <div className="relative">
            <MessageSquare
              size={16}
              className="absolute left-3.5 top-3.5 text-[#F26A1B] pointer-events-none"
            />
            <textarea
              id="quote-message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Share story height, leaking corners, clogged downspouts, or anything you are noticing..."
              className="w-full rounded-sm border border-white/20 bg-[#14284B]/80 pl-10 pr-3.5 py-3 text-sm text-white placeholder:text-[#D9DEE5]/45 transition-colors focus:border-[#F26A1B] focus:outline-none focus:ring-2 focus:ring-[#F26A1B]/30 resize-y"
            />
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending Request...
              </>
            ) : (
              <>
                <Send size={17} />
                Request Free Estimate
              </>
            )}
          </Button>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#D9DEE5]/70">
            Free estimates · No obligation
          </span>
        </div>
      </div>
    </form>
  );
};
