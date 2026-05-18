# Dataform Transformations Pipeline

Repositório responsável pelas transformações e modelagem de dados utilizando **Dataform** e **BigQuery**, seguindo princípios modernos de Engenharia de Dados para construção de pipelines escaláveis, organizados e rastreáveis.

## 📌 Objetivo

Este projeto centraliza a lógica de transformação dos dados, promovendo:

- Organização do fluxo analítico
- Padronização das regras de negócio
- Construção de pipelines reproduzíveis
- Versionamento via Git
- Linhagem de dados (DAG)
- Separação entre camadas de dados
- Governança e rastreabilidade

As transformações são executadas por meio do **Dataform**, que gera e gerencia dependências automaticamente dentro do ambiente do BigQuery.

---

## 🏗 Arquitetura

O projeto segue uma estrutura baseada em camadas:

```text
Raw/Bronze
     ↓
Silver
     ↓
Gold
```

### Bronze
Camada responsável pela ingestão inicial dos dados.

Características:

- Dados brutos
- Poucas transformações
- Preservação máxima da origem
- Aramazenamento _Cloud Storage_

### Silver (DATAFORM)

Camada de tratamento e refinamento:

- Limpeza
- Padronização
- Conversão de tipos
- Remoção de inconsistências
- Enriquecimento

### Gold (BIGQUERY)

Camada analítica destinada ao consumo:

- Métricas de negócio
- Tabelas finais
- KPIs
- Dashboards
- Data marts

---

## 📂 Estrutura do Projeto

```text
.
├── definitions/
│   ├── silver/
│   ├── / /
|   ├── .sqlx
├── includes/
│   ├── .yaml
│   └── .yaml
│
├── workflow_settings.yaml
└── README.md
```

### Descrição dos diretórios

| Pasta | Descrição |
|---------|------------|
| definitions | Arquivos SQLX das transformações |
| includes | Funções auxiliares reutilizáveis |
| bronze | Dados brutos |
| silver | Dados tratados |
| gold | Dados analíticos |
| workflow_settings.yaml | Configurações do ambiente |


---

## ⚙ Tecnologias Utilizadas

- Dataform
- BigQuery
- SQLX
- JavaScript
- GitHub
- Google Cloud Platform

---

## 🚀 Execução

Instalar dependências:

```bash
npm install
```

Compilar:

```bash
dataform compile
```

Executar:

```bash
dataform run
```

Gerar DAG:

```bash
dataform compile --json
```

---

## 🔄 Fluxo de Desenvolvimento

1. Criar nova branch

```bash
git checkout -b feature/nova-transformacao
```

2. Desenvolver transformações

3. Validar localmente

4. Realizar commit

```bash
git add .

git commit -m "feat: adiciona transformação camada silver"
```

5. Abrir Pull Request

---

## 📈 Linhagem de Dados

O Dataform cria automaticamente uma DAG (Directed Acyclic Graph), permitindo visualizar:

- Dependências entre tabelas
- Ordem de execução
- Fluxo de transformação
- Impacto de alterações

Isso facilita manutenção, auditoria e evolução do pipeline.

---

## 📋 Convenções

### Nome de tabelas

Exemplo:

```text
silver_clientes
gold_vendas_mensais
gold_kpi_faturamento
```

### Nome de arquivos

```text
clientes_trabalho_gold_v.sqlx
vendas_trabalho_gold_et.sqlx
faturamento_mensal_gold_mt.sqlx

A última sigla define o tipo de tabela (external, view, etc.)
```

---

## 🔐 Boas práticas

- Evitar SQL duplicado
- Reutilizar funções
- Utilizar descrições
- Versionar alterações
- Manter nomenclatura padronizada
- Documentar regras de negócio
- Criar dependências explícitas

---



