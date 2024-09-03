default:
	@echo 'Escolha o comando que voce quer executar.' + \ 'Ex.: make check'
	@echo Lista de comandos:
	@echo * check - Analisa o codigo estaticamente (usando eslint e prettier)
	@echo * run - Executa o projeto frontend
	@echo * check-prettier - Analisa o codigo estaticamente (usando somente prettier)
	@echo * prettier - Reescreve os arquivos usando o padrao configurado no Prettier (prettier --write)

# @echo "  * build - Constrói o projeto frontend"
# @echo "  * storybook - Executa a aplicação Storybook "
# @echo "  * test - Executa os testes automatizados"


check: check-prettier lint

lint:
	npm run lint

lint-fix:
	npx eslint --fix

check-prettier:
	npx prettier . --check

run:
	npm run dev

prettier:
	npx prettier . --write

# build:
# 	npm run build

# storybook:
# 	npm run storybook

# test:
# 	npm run test
