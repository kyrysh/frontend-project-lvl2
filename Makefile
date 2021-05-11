install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .
	
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch

test-coverage:
		npm test -- --coverage --coverageProvider=v8