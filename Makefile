install: npm install

start:
	npx babel-node src/bin/brain-games.js

game-even:
	npx babel-node src/bin/brain-even.js

game-calc:
	npx babel-node src/bin/brain-calc.js

publish:
	npm publish

lint:
	 npx eslint .
