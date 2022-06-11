import { visit } from 'unist-util-visit';

const REPLACEMENTS = {
  '&copy;': /\(c\)/ig,
  '&trade;': /\(tm\)/ig,
  '&reg;': /\(r\)/ig,
  '&pm;': /\+\-/ig,
  '&copysr;': /\(p\)/ig,
  '$1..': /[\.\?\!]\.\.+/ig,
  '&ellipse;': /\.\.\.+/ig,
  '!!!': /!!!+/ig,
  '???': /\?\?\?+/ig,
  '&endash;': /\-\-/ig,
  '&emdash;': /\-\-\-/ig,
  ',': /,+/ig,
  '<mark>$1</mark>': /\=\=(.*?)\=\=/ig,
  '<ins>$1</ins>': /\+\+(.*?)\+\+/ig,
  '<sub>$1</sub>': /\~(.*?)\~/ig,
  '<sup>$1</sup>': /\^(.*?)\^/ig,
  '<input type="checkbox" $1 $2 $3>': /:::\s*checkb?o?x?( disabled)?( checked)?( indeterminate)?\s*:::/ig,
}

function transformer(ast) {
  visit(ast, 'text', visitor)

  function visitor(node) {
    if (!node.value) return;
    // if (node.value.includes('c[ ]')) 
    console.warn(node.value);
    Object.entries(REPLACEMENTS).forEach(([to, from]) => {
      node.value = node.value.replaceAll(from, to)
    });
    return node
  }
}

function plugin() {
  return transformer
}

export default plugin