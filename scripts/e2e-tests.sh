#!/usr/bin/env bash

# Clean up old coverage
rm -rf .nyc_output

# Run playwright for e2e tests
npx playwright install --with-deps chromium
yarn playwright test

# Combine e2e test coverage
npx nyc report -t .nyc_output --report-dir e2e/coverage --reporter json