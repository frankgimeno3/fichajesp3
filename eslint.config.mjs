import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Desactiva la regla que prohíbe interfaces vacías
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      // Permite usar `any` (aunque no es lo ideal)
      "@typescript-eslint/no-explicit-any": "off",

      // Permite tener variables definidas y no usadas
      "@typescript-eslint/no-unused-vars": "off",

      // Permite usar `as const` en lugar de forzar `const`
      "@typescript-eslint/prefer-as-const": "off",

      // Desactiva la advertencia de comillas no escapadas en JSX
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
