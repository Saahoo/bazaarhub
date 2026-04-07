import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import common translations
const resources = {
  en: {
    common: {
      'listing.featured': 'Featured',
      'listing.contact': 'Contact Seller',
      'listing.save': 'Save',
      'listing.share': 'Share',
      'condition.new': 'New',
      'condition.like-new': 'Like New',
      'condition.good': 'Good',
      'condition.fair': 'Fair',
      'condition.poor': 'Poor',
      'navigation.home': 'Home',
      'navigation.browse': 'Browse',
      'navigation.sell': 'Sell',
      'navigation.messages': 'Messages',
      'navigation.dashboard': 'Dashboard',
    },
  },
  ps: {
    common: {
      'listing.featured': 'نمایان',
      'listing.contact': 'د فروخونکي سره په ارتباط',
      'listing.save': 'محفوظ کړه',
      'listing.share': 'شریک کړه',
      'condition.new': 'نوی',
      'condition.like-new': 'نوی جاته',
      'condition.good': 'ښه',
      'condition.fair': 'منصفانه',
      'condition.poor': 'ضعیف',
      'navigation.home': 'کور',
      'navigation.browse': 'لیدل',
      'navigation.sell': 'پلورل',
      'navigation.messages': 'پیغامونه',
      'navigation.dashboard': 'داشبورډ',
    },
  },
  pr: {
    common: {
      'listing.featured': 'برجسته',
      'listing.contact': 'تماس با فروشنده',
      'listing.save': 'ذخیره کن',
      'listing.share': 'به اشتراک',
      'condition.new': 'جدید',
      'condition.like-new': 'شبیه به جدید',
      'condition.good': 'خوب',
      'condition.fair': 'متوسط',
      'condition.poor': 'ضعیف',
      'navigation.home': 'صفحه اصلی',
      'navigation.browse': 'مرور',
      'navigation.sell': 'فروش',
      'navigation.messages': 'پیامها',
      'navigation.dashboard': 'داشبورد',
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
