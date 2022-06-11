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
}

function transformer(ast) {
  visit(ast, 'text', visitor)

  function visitor(node) {
    if (!node.value) return;
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