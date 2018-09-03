module.exports = {
    "extends": "airbnb",
    "rules": {
      "import/prefer-default-export": "off",
      "react/no-array-index-key": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "comma-dangle": ["error", "never"],
      "react/destructuring-assignment": [false, "always"],
      "implicit-arrow-linebreak": "off",
      "arrow-body-style": "off"
    },
    "globals": {
      "document": true,
      "fetch": true
    }
};
