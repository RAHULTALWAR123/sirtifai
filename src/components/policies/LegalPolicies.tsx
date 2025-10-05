/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import TermsAndConditions from './TermsAndConditions';
import CancellationPolicy from './CancellationPolicy';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy';
import CookiesPolicy from './CookiesPolicy';

type PolicyTab = 'terms' | 'cancellation' | 'privacy' | 'refund' | 'cookies';

const LegalPolicies = () => {
  const [activeTab, setActiveTab] = useState<PolicyTab>('terms');

  const tabs = [
    { id: 'terms', label: 'Sirtifai Terms & Conditions', component: TermsAndConditions },
    { id: 'cancellation', label: 'Cancellation Policy', component: CancellationPolicy },
    { id: 'privacy', label: 'Privacy Policy', component: PrivacyPolicy },
    { id: 'refund', label: 'Sirtifai Refund Policy', component: RefundPolicy },
    { id: 'cookies', label: 'Sirtifai Cookies Policy', component: CookiesPolicy },
  ];

  // Handle URL hash navigation on component mount and hash changes
  useEffect(() => {
    const handleHashNavigation = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.replace('#', '');
        console.log('Current hash:', hash);
        if (hash && tabs.some(tab => tab.id === hash)) {
          console.log('Setting active tab to:', hash);
          setActiveTab(hash as PolicyTab);
        }
      }
    };

    // Handle initial hash with a small delay to ensure it's available
    const timer = setTimeout(handleHashNavigation, 50);

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [tabs]);

  const handleTabChange = (tabId: PolicyTab) => {
    setActiveTab(tabId);
    // Update URL hash without page reload
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${tabId}`);
    }
  };

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || TermsAndConditions;

  return (
    <div className="bg-[#FEF7F1] min-h-screen">
      <div className="max-w-screen-xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-[#FE7743] mb-6">Legal Policies</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as PolicyTab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-[#FE7743] text-[#FE7743]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <div className="min-h-[400px]">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPolicies;
