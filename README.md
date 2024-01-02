# Lithuanian JavaScript Girl professional 3D World

Welcome to my interactive portfolio project! This website showcases my skills using cutting-edge technologies like React and Vite. The dynamic 3D models of islands, powered by the Three.js library, respond to your gestures, allowing you to explore various aspects of my professional journey.

As you swipe through the 3D island, informative pop-ups appear at specific scroll positions. These pop-ups provide insights into my background, job experiences, tools proficiency, and side work ventures. In one of these pop-ups, you'll find details about the creation of this very project – developed entirely by me. The design, featuring an engaging and interactive interface, reflects my commitment to both functionality and aesthetics.

Explore and enjoy the immersive experience as you learn more about me, my skills, and the technologies behind this project. Thank you for visiting!

Also, I've created a single page, where you can see all details of my professional journey in a more classic page with a downloadable CV. 

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
