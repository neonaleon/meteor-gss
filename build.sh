#!/bin/sh

version="2.0.0"
tempDir=".build"

rm -rf ${tempDir}
mkdir -p ${tempDir}
cd ${tempDir}
wget https://github.com/gss/engine/archive/v${version}.tar.gz
tar xfvz v${version}.tar.gz
cd -
cp .build/engine-${version}/dist/gss.js lib/client/gss.js