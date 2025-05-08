
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
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { translations } from "@/translations/translations";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations.common[language] || translations.common.en;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-8 w-8 p-0 text-white hover:bg-white/10 transition-all rounded-full"
        >
          <Globe size={18} />
          <span className="sr-only">{t.language}</span>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-ssta-gold text-[10px] font-bold text-black">
            {language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-36 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-md overflow-hidden"
      >
        <DropdownMenuItem
          className="flex items-center justify-between px-3 py-2 cursor-pointer"
          onClick={() => language !== "en" && toggleLanguage()}
        >
          <span className="font-medium">{t.english}</span>
          {language === "en" && <Check className="h-4 w-4 ml-2 text-ssta-gold" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center justify-between px-3 py-2 cursor-pointer"
          onClick={() => language !== "ar" && toggleLanguage()}
        >
          <span className="font-medium">{t.arabic}</span>
          {language === "ar" && <Check className="h-4 w-4 ml-2 text-ssta-gold" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
