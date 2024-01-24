export:
	@npm run export
	touch ./out/.nojekyll

publish:
	@git add ./out
	@git commit -m "Export"
	@git push origin main

deploy:
	@git subtree push --prefix out origin gh-pages