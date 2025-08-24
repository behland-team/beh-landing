import React from 'react'
import {useTranslations} from 'next-intl';

export default function Header() {
    const t = useTranslations("HomePage");
  return (
      <div>{t("title")}</div>
  )
}
