install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
babelfile:
	npx babel src --out-dir dist
lint:
	npx eslint .
