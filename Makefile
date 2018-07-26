build:
	rm -r dist/ || echo ""
	node scripts/build.js

deploy:build
	git add -A 
	git commit -m "deploy"
	npm version patch && git push origin master --tag
  