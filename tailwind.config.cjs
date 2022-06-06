module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,md,mdx,mds}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primarySoft: 'var(--color-primarySoft)',
        primaryBold: 'var(--color-primaryBold)',
        primaryBg: 'var(--color-primaryBg)',
        primaryBgSoft: 'var(--color-primaryBgSoft)',
        primaryBgSofter: 'var(--color-primaryBgSofter)',
        onPrimaryBg: 'var(--color-onPrimaryBg)',
        onPrimaryBgSoft: 'var(--color-onPrimaryBgSoft)',
        onPrimaryBgSofter: 'var(--color-onPrimaryBgSofter)',

        neutralBg: 'var(--color-neutralBg)',
        neutralBgSoft: 'var(--color-neutralBgSoft)',
        neutralBgSofter: 'var(--color-neutralBgSofter)',
        neutral: 'var(--color-neutral)',
        neutralBold: 'var(--color-neutralBold)',
        neutralSoft: 'var(--color-neutralSoft)',
        onNeutralBg: 'var(--color-onNeutralBg)',
        onNeutralBgSoft: 'var(--color-onNeutralBgSoft)',
        onNeutralBgSofter: 'var(--color-onNeutralBgSofter)',
      },
    },
  },
  plugins: [],
}
