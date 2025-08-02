import { translations, Language } from '@/lib/i18n';

/**
 * 项目1数据获取函数 - 根据语言获取对应的翻译数据
 */

// 获取鸡尾酒数据
export const getAllCocktails = (language: Language) => translations[language]?.project1?.cocktails || translations.zh.project1.cocktails;

// 获取导航链接数据
export const getNavLinks = (language: Language) => translations[language]?.project1?.nav || translations.zh.project1.nav;

// 获取无酒精鸡尾酒列表
export const getMockTailLists = (language: Language) => translations[language]?.project1?.mockTailLists || translations.zh.project1.mockTailLists;

// 获取鸡尾酒列表
export const getCocktailLists = (language: Language) => translations[language]?.project1?.cocktailLists || translations.zh.project1.cocktailLists;

// 获取优点列表
export const getGoodLists = (language: Language) => translations[language]?.project1?.goodLists || translations.zh.project1.goodLists;

// 获取特色列表
export const getFeatureLists = (language: Language) => translations[language]?.project1?.featureLists || translations.zh.project1.featureLists;

// 获取营业时间
export const getOpeningHours = (language: Language) => translations[language]?.project1?.openingHours || translations.zh.project1.openingHours;

// 将导航对象转换为数组格式（向后兼容）
export const getNavLinksArray = (language: Language) => {
	const nav = translations[language].project1.nav;
	return [
		{ id: "cocktails", title: nav.cocktails },
		{ id: "about", title: nav.about },
		{ id: "menu", title: nav.menu },
		{ id: "contact", title: nav.contact }
	];
};

// 旧版导出（向后兼容，默认使用中文）
export const allCocktails = translations.zh.project1.cocktails;
export const navLinks = getNavLinksArray('zh');
export const mockTailLists = translations.zh.project1.mockTailLists;
export const cocktailLists = translations.zh.project1.cocktailLists;
export const goodLists = translations.zh.project1.goodLists;
export const featureLists = translations.zh.project1.featureLists;
export const openingHours = translations.zh.project1.openingHours;