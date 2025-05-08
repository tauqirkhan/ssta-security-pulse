
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

/**
 * Gets a specific translation for the current language
 * @param {string} section - The section of translations to access
 * @param {string} key - The specific translation key to access
 * @param {string} fallback - Optional fallback text if translation is not found
 * @returns {string} - The translated string
 */
export const getTranslation = (section, key, fallback = '') => {
  const { language } = useLanguage();
  
  try {
    const sectionTranslations = translations[section] || {};
    const langTranslations = sectionTranslations[language] || sectionTranslations['en'] || {};
    
    return langTranslations[key] || fallback;
  } catch (error) {
    console.warn(`Translation not found for ${section}.${key} in ${language}`);
    return fallback;
  }
};
