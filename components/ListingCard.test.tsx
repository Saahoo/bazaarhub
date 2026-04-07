// __tests__/components/ListingCard.test.tsx
import { render, screen } from '@testing-library/react';
import { ListingCard } from '@/components/marketplace/ListingCard';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n/test-config';

describe('ListingCard', () => {
  const mockListing = {
    id: 'test-123',
    title_en: 'Test Listing',
    price: 1000,
    currency: 'USD',
    location: { city: 'Kabul' },
    images: ['/test.jpg'],
    created_at: '2024-01-01',
    // ... other required fields
  };

  it('renders listing information correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ListingCard listing={mockListing} locale="en" />
      </I18nextProvider>
    );
    
    expect(screen.getByText('Test Listing')).toBeInTheDocument();
    expect(screen.getByText('$1,000')).toBeInTheDocument();
    expect(screen.getByText('Kabul')).toBeInTheDocument();
  });

  it('displays featured badge when is_featured is true', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ListingCard 
          listing={{ ...mockListing, is_featured: true }} 
          locale="en" 
        />
      </I18nextProvider>
    );
    
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });
});