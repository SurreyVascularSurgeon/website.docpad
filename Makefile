push-live:
	docpad deploy-ghpages --env static

generate:
	docpad generate --env static

run:
	docpad -p 9780 run

run-static:
	docpad -p 9780 run --env static