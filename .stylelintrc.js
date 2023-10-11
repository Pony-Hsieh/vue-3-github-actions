module.exports = {
  // 將預設的警示由 錯誤 改為 警告
  defaultSeverity: 'warning',
  extends: [
    // The recommended shareable config for Stylelint
    'stylelint-config-recommended',
    // Recommended config for SCSS
    'stylelint-config-recommended-scss',
    // The recommended shareable Vue config for Stylelint.
    'stylelint-config-recommended-vue/scss',
    // Sorts CSS properties the way Recess did and Bootstrap does
    'stylelint-config-recess-order',
    // Runs Prettier as a Stylelint rule
    'stylelint-prettier/recommended',
    // Turns off conflicting rules when using Prettier for SCSS
    'stylelint-config-prettier-scss'
  ],
  rules: {
    // 不檢查 id 命名模式
    'selector-id-pattern': null,
    // 不檢查 class 命名模式
    'selector-class-pattern': null,
    // 在 @ 規則宣告之前是否要有空行，例如： @extend
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'blockless-after-blockless'],
        ignore: ['after-comment']
      }
    ],
    // 在規則宣告之前是否要有空行
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['inside-block'],
        ignore: ['after-comment']
      }
    ]
  }
}
