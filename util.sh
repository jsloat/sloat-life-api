#!/bin/bash

# (watch: 'true' | 'false') => void
_build() {
  local watch=$1
  local watchStr=$([ $watch == 'true' ] && echo ' --watch' || echo '')
  babel src --out-dir dist --extensions .ts --delete-dir-on-start$watchStr
}

build() {
  _build false
}

build_watch() {
  _build true
}
