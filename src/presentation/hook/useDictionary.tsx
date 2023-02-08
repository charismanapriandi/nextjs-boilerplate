import { getDictionaries } from "@core";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function useDictionary() {
  const { locale } = useRouter()

  return useMemo(() => {
    if (locale === 'id' || locale === 'en')
      return getDictionaries(locale)

    return getDictionaries('id')
  }, [locale])
}