
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { translations } from "@/translations/translations";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations.common[language];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-white hover:bg-white/10"
        >
          <Globe size={18} />
          <span className="sr-only">{t.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem
          className="flex items-center justify-between"
          onClick={() => language !== "en" && toggleLanguage()}
        >
          {t.english}
          {language === "en" && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center justify-between"
          onClick={() => language !== "ar" && toggleLanguage()}
        >
          {t.arabic}
          {language === "ar" && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
