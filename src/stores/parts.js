import { writable, derived } from 'svelte/store'

function processColor({ name, rgb }, quantity) {
  return { name, rgb, quantity };
}

export const loadingProgress = writable()
export const parts = writable()
export const sortedParts = derived(parts, ($parts) => {
  if (!$parts) return

  const groups = {};

  Array.from($parts).forEach(({ part, color, quantity }) => {
    const currentGroup = groups[part.part_num];
    color = processColor(color, quantity);

    if (currentGroup) {
      currentGroup.colors.push(color);
      currentGroup.quantity += quantity;
    } else {
      groups[part.part_num] = {
        part,
        colors: [color],
        quantity,
      };
    }
  });

  return Object.values(groups).sort((a, b) => b.quantity - a.quantity);
})
