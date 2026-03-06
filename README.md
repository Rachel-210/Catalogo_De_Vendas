# 🏍️ Catálogo Digital de Motocicletas - Sistema Dinâmico

Este é um projeto de **Catálogo Interativo de Vendas**, desenvolvido para oferecer uma experiência premium na visualização de motocicletas e planos de consórcio/financiamento. O diferencial técnico deste projeto é a gestão de dados **totalmente externa via Google Sheets**, permitindo atualizações de preços e planos em tempo real sem a necessidade de alterar o código-fonte.


## 🚀 Funcionalidades

* **Vitrine Interativa:** Exibição de modelos com alta fidelidade visual.
* **Gestão via Planilha (CMS Serverless):** Todos os valores de parcelas, créditos e modelos são alimentados por um arquivo CSV dinâmico do Google Sheets.
* **Modal de Consórcio Inteligente:** Tabela dinâmica que filtra e exibe planos específicos para cada modelo selecionado.
* **Cálculo de Planos:** Exibição clara de prazos e valores de parcelas.
* **Design Responsivo:** Otimizado para dispositivos móveis, garantindo boa navegabilidade em qualquer tamanho de tela.
* **Conversão Direta:** Botões de contato integrados para facilitar o fechamento de vendas.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do catálogo.
* **CSS3:** Estilização personalizada, efeitos de transição e responsividade.
* **JavaScript (ES6+):** Lógica de consumo de API (fetch), manipulação de DOM e filtragem de dados dinâmicos.
* **Google Sheets API (CSV):** Utilizado como banco de dados ágil para gerenciamento de estoque e preços.

## 📊 Estrutura do Banco de Dados (Google Sheets)

Para o funcionamento correto, a planilha de suporte deve seguir a seguinte estrutura de colunas:

| Coluna A | Coluna B | Coluna C | Coluna D |
| :--- | :--- | :--- | :--- |
| `id_moto` | `valor_credito` | `prazo` | `valor_parcela` |

* **id_moto:** Identificador único (ex: neos, fluo).
* **valor_credito:** Valor total do bem.
* **prazo:** Quantidade de meses (ex: 72x).
* **valor_parcela:** Valor mensal correspondente.


## 📱 Visualização Mobile

O projeto conta com ajustes específicos para dispositivos móveis, como:
* Prevenção de zoom automático em campos de input no iOS.
* Rolagem suave em tabelas de consórcio.
* Interface adaptada para navegação com uma mão.

---
Desenvolvido para modernizar processos de venda e facilitar a atualização de dados para vendedores e clientes.
