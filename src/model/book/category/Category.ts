export type Category =
  'DEVELOP'
  | 'MANAGEMENT'
  | 'PLAN'
  | 'MARKETING'
  | 'SELF_IMPROVEMENT'
  | 'LICENSE'
  | 'DESIGN'
  | 'FICTION'
  | 'NONFICTION';

export const CategoryMenus: Category[] = [
  'DEVELOP'
  , 'MANAGEMENT'
  , 'PLAN'
  , 'MARKETING'
  , 'SELF_IMPROVEMENT'
  , 'LICENSE'
  , 'DESIGN'
  , 'FICTION'
  , 'NONFICTION'
]

export const CategoryDisplayText = {
  ['DEVELOP']: '개발',
  ['MANAGEMENT']: '경영',
  ['PLAN']: '기획',
  ['MARKETING']: '마케팅',
  ['SELF_IMPROVEMENT']: '자기계발',
  ['LICENSE']: '자격증',
  ['DESIGN']: '디자인',
  ['FICTION']: '소설',
  ['NONFICTION']: '비소설'
}

export const Categories: { [korean: string]: string } = {
  "개발": "DEVELOP",
  "경영": "MANAGEMENT",
  "기획": "PLAN",
  "마케팅": "MARKETING",
  "자기계발": "SELF_IMPROVEMENT",
  "자격증": "LICENSE",
  "디자인": "DESIGN",
  "소설": "FICTION",
  "비소설": "NONFICTION"
}