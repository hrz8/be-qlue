#!/bin/bash
for fn in ./mig33/inner_folder/*.txt; do mv "$fn" "${fn/.txt}.dat"; done
