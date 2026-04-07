import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number,
  currency: string = 'AFN',
  locale: string = 'en'
): string {
  const formatter = new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'fa-AF', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(price);
}

export function formatLocation(location: string, locale: string = 'en'): string {
  // location is typically "Kabul, Afghanistan" or just the city name
  const parts = location.split(',').map((part) => part.trim());
  return parts[0]; // Return just the city for display
}

export function formatDate(
  date: string | Date,
  locale: string = 'en',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'fa-AF', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(dateObj);
}

export function formatTimeAgo(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  
  return formatDate(dateObj);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function generateId(prefix?: string): string {
  const id = Math.random().toString(36).substring(2, 15) +
             Math.random().toString(36).substring(2, 15);
  return prefix ? `${prefix}_${id}` : id;
}

export function getConditionColor(condition: string): string {
  const colors: Record<string, string> = {
    'new': 'bg-green-500',
    'like-new': 'bg-emerald-500',
    'good': 'bg-blue-500',
    'fair': 'bg-yellow-500',
    'poor': 'bg-red-500',
  };
  return colors[condition] || 'bg-gray-500';
}

export function truncate(text: string, length: number = 100): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  // Basic validation for Afghan phone numbers
  const phoneRegex = /^(\+93|0)?[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length >= 9) {
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
  }
  return phone;
}
