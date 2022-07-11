<script lang="ts">
	import type { Font, FontVariant } from '$lib/WebFontImporterTypes';
  // https://fonts.bunny.net/css?family=amiri:400|goldman:400
  // <link rel="preconnect" href="https://fonts.googleapis.com">
  // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  // <link href="https://fonts.googleapis.com/css2?family=Amiri&family=Cookie&family=Fugaz+One&family=Goldman&family=Monofett&family=Mukta&family=Oswald&family=Playball&family=Roboto:ital,wght@0,100;0,700;1,700&display=swap" rel="stylesheet">
  type weightNum = {
    [key:string]:number
  }
  /** hash for weight lookups */
  const weightToNum: weightNum  = {
    'Thin': 100,
    'Light': 300,
    'Regular': 400,
    'Medium': 500,
    'Bold': 700,
    'Black': 900,
    'Thini': 100,
    'Lighti': 300,
    'Regulari': 400,
    'Mediumi': 500,
    'Boldi': 700,
    'Blacki': 900,
    '100': 100,
    '300': 300,
    '400': 400,
    '500': 500,
    '700': 700,
    '900': 900,
    '100i': 100,
    '300i': 300,
    '400i': 400,
    '500i': 500,
    '700i': 700,
    '900i': 900
  }

  const isItalic = (variant: FontVariant): boolean => {
    return typeof variant === 'string' ? variant.endsWith('i') : variant?.italics;
  }
	export let source: "google"| "bunny" = 'google';

	export let fonts:Font[] = [];
  
  // Roboto:ital,wght@0,100;0,700;1,700
  // Montserrat:wght@100;300
  const buildGoogleFontParam = (font:Font): string => {
    let fontParam = font.family;
    if ((font.variants || []).length < 1) return fontParam;
    fontParam += ':';
    const hasItalics = font.variants.find((v:FontVariant) => isItalic(v));
    if (hasItalics) fontParam += 'ital,';
    fontParam += 'wght@';
    fontParam += font.variants.map((variant:FontVariant) => {
      let italicsMarker = '';
      if (hasItalics) {
        italicsMarker = '0,'
        if(isItalic(variant)) italicsMarker = '1,';
      }
      if (typeof variant === 'string') return `${italicsMarker}${weightToNum[variant]}`;
      return `${italicsMarker}${weightToNum[variant.variant]}`;
    }).join(';')
    return fontParam;
  }

  const buildGoogleFontURI = ():string => {
    const fontParams = fonts.map(buildGoogleFontParam).join('&')
    return `https://fonts.googleapis.com/css2?${fontParams}&display=swap`
  }

  const buildBunnyFontURI = ():string => {
    const fontParams = fonts.map((font) => {
      const weights = font.variants.map((variant) => {
        if (typeof variant === 'string') return variant;
        return weightToNum[variant.variant] + (isItalic(variant) ? 'i' : '');
      }).join(',');
      return `${font.family}:${weights}`
    }).join('|')
    return `https://fonts.bunny.net/css?${fontParams}`;
  }

	const fontURI = source === 'bunny' ? buildBunnyFontURI() : buildGoogleFontURI();


</script>

{#if source == 'google'}
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
{/if}

<link href={fontURI} rel="stylesheet" />
