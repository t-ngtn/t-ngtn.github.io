export:
	npm run export
	touch ./out/.nojekyll

publish:
	git add ./out
	git commit -m "export"
	git push origin main

deploy:
	git subtree push --prefix out origin gh-pages