```python
import os

readme_content = """# 🏛️ Alagoinhas Data Observatory (ODA) — Camada de Transformação (Dataform)

Este repositório contém a pipeline de transformação de dados do **Observatório de Dados de Alagoinhas (ODA)**. Utilizando o **Dataform** nativo no **Google Cloud Platform (GCP)**, o projeto adota os princípios da Engenharia de Dados Moderna para centralizar, governar, documentar e transformar dados públicos do município de Alagoinhas/BA em ativos de inteligência prontos para análise.

A arquitetura de dados segue o padrão **Medallion Architecture** (Bronze, Silver e Gold), processando dados brutos de saúde, administração, finanças e infraestrutura urbana, disponibilizando-os de forma transparente e otimizada no **BigQuery**.

---

## 🏗️ Arquitetura de Dados (Medallion)

O fluxo de transformação é dividido logicamente em três camadas estruturadas dentro do BigQuery:


```

```text
README.md gerado com sucesso!


```

[ Dados Brutos / Extração ]
│
▼
┌──────────────────────┐
│    Camada BRONZE     │ ──► Dados brutos (landing zone/raw), tipados exatamente
│   (dados_alagoinhas) │     como extraídos das fontes originais.
└──────────────────────┘
│
▼
┌──────────────────────┐
│    Camada SILVER     │ ──► Limpeza, padronização de strings, conversão de datas,
│ (_silver / de-dedup) │     remoção de duplicadas e aplicação de chaves de negócio.
└──────────────────────┘
│
▼
┌──────────────────────┐
│     Camada GOLD      │ ──► Modelagem dimensional (fato/dimensão), agregações,
│ (_gold / analytics)  │     views otimizadas prontas para Looker Studio e Power BI.
└──────────────────────┘

```

1. **Bronze (`dados_alagoinhas_bronze`):** Tabelas declaradas como fontes (`declarations.sqlx`). Armazenam o histórico bruto sem transformações destrutivas.
2. **Silver (`dados_alagoinhas_silver`):** Onde ocorre a higienização. Correção de encoding, padronização de nomes de bairros de Alagoinhas, tratamento de nulos e tipagem estrita (ex: `TIMESTAMP`, `DATE`).
3. **Gold (`dados_alagoinhas_gold`):** Camada de negócios. Tabelas e Views consolidadas (ex: `acidentedetrabalho_alagoinhas_gold_v`) com métricas agregadas para subsidiar a tomada de decisão pública.

---

## 📁 Estrutura do Repositório

A organização do projeto segue a convenção padrão do Dataform, segmentada por domínios de negócio municipais:

```text
├── definitions/
│   ├── _sources/             # Declarações das tabelas da camada Bronze
│   │   └── declarations.sqlx 
│   ├── saude/                # Scripts de transformação do domínio de Saúde Pública
│   │   ├── acidentes_de_trabalho_silver.sqlx   # Camada Silver (Limpeza e Dedup)
│   │   └── acidentes_alagoinhas_gold.sqlx      # Camada Gold (Métricas para Analytics)
│   └── infraestrutura/       # Outros domínios municipais (ex: transporte, obras)
├── includes/                 # Funções JavaScript reutilizáveis (UDFs, macros)
├── dataform.json             # Configurações do ambiente de compilação
└── workflow_settings.yaml    # Definições do workflow (Projeto GCP, Dataset Padrão)

```

---

## 🛠️ Tecnologias Utilizadas

* **Dataform:** Orquestração, dependências e modelagem baseada em SQLX.
* **Google BigQuery:** Data Warehouse serverless onde todo o processamento de computação distribuída ocorre.
* **JavaScript (Inline/Includes):** Utilizado para reaproveitamento de código e geração dinâmica de blocos SQL.

---

## 🚀 Como Desenvolver e Executar

### Pré-requisitos

Certifique-se de que o seu usuário ou Service Account possui as seguintes permissões IAM no projeto do GCP:

* `BigQuery Data Editor`
* `BigQuery Job User`
* `Dataform Editor`

### Exemplo de Código SQLX (Padrão ODA)

Ao criar novos arquivos de transformação (`.sqlx`), certifique-se de configurar o bloco `config` adequadamente e utilizar a função `ref()` para mapear o grafo de dependências automaticamente:

```sql
config {
  type: "view", // ou "table", "incremental"
  schema: "dados_alagoinhas_gold",
  name: "acidentedetrabalho_alagoinhas_gold_v",
  description: "Dados consolidados de acidentes de trabalho para o município de Alagoinhas/BA",
  tags: ["saude", "gold"]
}

SELECT 
  id_acidente,
  data_notificacao,
  bairro_estabelecimento,
  CGC_formatado,
  COUNT(1) AS total_ocorrencias
FROM ${ref("acidentes_de_trabalho_silver")}
GROUP BY 1, 2, 3, 4

```

### Comandos Úteis no Console / CLI

* **Formatar código:** Clique em `Format` no editor do Dataform ou use a CLI para manter o padrão estético do SQLX.
* **Visualizar Grafo:** Utilize a aba `Compiled graph` para auditar visualmente a árvore de dependências (linhagem do dado) antes de rodar a execução.

---

## 📊 Governança e Qualidade de Dados

* **Documentação Embutida:** Todas as definições de tabelas críticas devem conter a propriedade `description` detalhada no bloco `config`.
* **Linhagem de Dados:** Nunca utilize nomes rígidos de tabelas (`projeto.dataset.tabela`) no corpo do `SELECT`. Use sempre `${ref("nome_da_tabela")}` para garantir que o Dataform rastreie o fluxo de dados corretamente e evite erros de compilação.

---

Developed for **TERRITÓRIO — Inteligência de Dados para o Setor Público**.

*Focando na transparência e eficiência da gestão pública do município de Alagoinhas/BA.*
"""

with open("README.md", "w", encoding="utf-8") as f:
f.write(readme_content)

print("README.md gerado com sucesso!")

```


Você pode baixá-lo e adicioná-lo diretamente à raiz do seu repositório Git!

```
