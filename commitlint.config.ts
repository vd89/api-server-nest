import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: [ '@commitlint/config-conventional' ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'auth',
        'users',
        'api',
        'database',
        'config',
        'middleware',
        'guards',
        'interceptors',
        'pipes',
        'filters',
        'modules',
        'services',
        'controllers',
        'dto',
        'entities',
        'migrations',
        'types',
        'interfaces',
        'decorators'
      ]
    ],
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style changes (formatting, semicolons, etc)
        'refactor', // Code refactoring
        'test',     // Adding or updating tests
        'chore',    // Maintenance tasks, dependency updates
        'perf',     // Performance improvements
        'ci',       // CI/CD changes
        'build',    // Build system changes
        'revert'    // Revert previous commit
      ]
    ],
    'type-case': [ 2, 'always', 'lower-case' ],
    'type-empty': [ 2, 'never' ],
    'scope-case': [ 2, 'always', 'lower-case' ],
    'subject-case': [ 2, 'never', [ 'sentence-case', 'start-case', 'pascal-case', 'upper-case' ] ],
    'subject-empty': [ 2, 'never' ],
    'subject-full-stop': [ 2, 'never', '.' ],
    'header-max-length': [ 2, 'always', 72 ],
    'body-leading-blank': [ 1, 'always' ],
    'body-max-line-length': [ 2, 'always', 100 ],
    'footer-leading-blank': [ 1, 'always' ],
    'footer-max-line-length': [ 2, 'always', 100 ]
  }
};

export default config;