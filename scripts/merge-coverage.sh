#!/usr/bin/env bash

COVERAGE_DIR="coverage"
COVERAGE_INPUT_DIR="${COVERAGE_DIR}/input"
INTERESTED_COVERAGE_DIRS=(
    "e2e"
    "apps/dashboard"
    "apps/widget"
)

# Setup coverage directory
rm -rf $COVERAGE_DIR
mkdir -p $COVERAGE_INPUT_DIR

# Copy coverage to input dir
for dir in ${INTERESTED_COVERAGE_DIRS[@]}; do
    # create file_name by replacing / with _
    file_name=$(echo $dir | sed -r 's/\//_/g')
    cp $dir/coverage/coverage-final.json $COVERAGE_INPUT_DIR/$file_name.json
done

npx nyc report --temp-dir $COVERAGE_INPUT_DIR --report-dir $COVERAGE_DIR --reporter lcov