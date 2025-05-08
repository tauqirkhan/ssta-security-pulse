
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

/**
 * Custom hook to easily access translations based on current language
 * @param {string} section - The section of translations to access
 * @returns {object} - Translations for the current language and specified section
 */
export const useTranslation = (section) => {
  const { language } = useLanguage();
  
  // Get translations for the specified section, or return an empty object if section doesn't exist
  const sectionTranslations = translations[section] || {};
  
  // Check if the language exists in this section
  if (!sectionTranslations[language]) {
    console.warn(`Missing translations for language '${language}' in section '${section}'`);
    // Fallback to English if the requested language doesn't exist
    return sectionTranslations['en'] || {};
  }
  
  // Return translations for current language in the specified section
  return sectionTranslations[language];
};
