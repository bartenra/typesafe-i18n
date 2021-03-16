// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import React, { useState } from 'react';
import type { Locales, TranslationFunctions } from './i18n-types'
import { baseLocale, i18nObject } from './i18n-util'

type I18nContextType = {
	setLocale: (locale: Locales) => void,
	loaded: boolean,
	locale: Locales,
	LL: TranslationFunctions
}

const fallbackLL = new Proxy({} as TranslationFunctions, {
	get: (_target, key: string) => () => key,
})

export function useI18n(localeToInitialize: Locales = baseLocale): I18nContextType {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [locale, setCurrentLocale] = useState<Locales>(baseLocale);
	const [LL, setLL] = useState<TranslationFunctions>(fallbackLL);

	const setLocale = (locale: Locales) => {
		setCurrentLocale(locale)
		setLL(i18nObject(locale))
		setLoaded(true)
	}

	if (!loaded) setLocale(localeToInitialize)

	return { setLocale, loaded, locale, LL }
}

const I18nContext = React.createContext<I18nContextType>({} as I18nContextType)

export default I18nContext