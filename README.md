# Vue Lesson 09 - Dynamic Styling

## What I Learned

- **`:class` binding** - String syntax (`:class="inputClass"`) or object syntax (`:class="{ user1: inputClass === 'user1' }"`)
- **Computed properties** - Auto-recalculate when dependencies change, good for complex class logic
- **`v-model`** - Shorthand for `:value` + `@input`, creates two-way data binding
- **`@click`** - Shorthand for `v-on:click`, triggers methods on click events
- **`:style` binding** - Apply inline styles dynamically with object syntax (camelCase properties)

## What Was Difficult

- **`:class` vs `:style`** - Understanding when to use CSS classes vs inline styles
- **Computed vs methods** - Computed properties are cached, methods execute every time
- **Object syntax** - Keys as class names, values as boolean expressions
- **Naming consistency** - Bugs from typos like `toggleParagraphVisible` vs `paragraphIsVisible`
- **CDN issues** - Vue not loading with `file://` protocol, needed local HTTP server
