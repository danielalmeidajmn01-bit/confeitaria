# Documento de Especificação: Regras de Negócio e Design System — Confeitaria Artesanal

Este documento estabelece as diretrizes funcionais, regras de negócio e padrões visuais (Design System) para o desenvolvimento da plataforma web da confeitaria, tomando como referência estrutural e estética o template *Cake Shop*.

---

## 1. Visão Geral do Produto
A plataforma é um ecossistema digital voltado para uma confeitaria artesanal que combina **venda direta de produtos**, **educação gastronômica (Inscrição em Cursos/Workshops)** e **produção de conteúdo (Blog/Receitas)**, sustentados por uma forte identidade institucional e prova social.

---

## 2. Regras de Negócio (RN)

### 2.1. Catálogo de Produtos
* **RN01 — Categorização de Produtos:** Todos os itens devem estar vinculados a pelo menos uma categoria principal (ex: *Bolo de Chocolate, Bolo Personalizados, Bolo de Potes, Bolos de Cobertura, Bolo sem Cobertura, Brigadeiros*).
* **RN02 — Exibição na Vitrine:** Cada card de produto deve exibir obrigatoriamente: imagem principal, tag de categoria, nome do produto e preço unitário (ou por kit/dúzia).
* **RN03 — Detalhes do Produto:** A página interna do produto deve permitir:
  * Seleção de quantidade.
  * Escolha de variações (ex: tamanho, sabor do recheio, mensagem personalizada no bolo).
  * Visualização de descrição detalhada, ingredientes/alergênicos e avaliações de clientes.  

### 2.2. Cursos e Workshops (`Class`)
* **RN04 — Captação de Alunos:** A plataforma deve oferecer um formulário dedicado na página inicial e uma página exclusiva para inscrição em aulas de confeitaria.
* **RN05 — Dados Obrigatórios de Inscrição:** Nome completo, telefone/WhatsApp, seleção da modalidade/turma desejada (ex: *Confeitaria Básica, Decoração com Bicos, Bolos Artísticos*) e campo para observações/nível de experiência.
* **RN06 — Gestão de Vagas:** Cada turma/curso possui um limite máximo de vagas e datas pré-definidas. Ao atingir o limite, o status deve mudar para *"Lista de Espera"* ou *"Esgotado"*.

### 2.3. Institucional e Prova Social (`About` & `Team`)
* **RN06 — Indicadores de Especialidade:** Exibição de barras de progresso animadas destacando os pilares da marca (ex: *Design de Bolos - 95%*, *Aulas de Confeitaria - 80%*, *Receitas Exclusivas - 90%*).
* **RN07 — Apresentação da Equipe (`Our Team`):** Exibição dos chefs e confeiteiros principais com foto, nome, cargo/especialidade e links para redes sociais profissionais (exibido no hover).
* **RN08 — Depoimentos (`Testimonial`):** Carrossel com avaliações reais de clientes contendo foto/avatar, nome, cidade, nota (1 a 5 estrelas) e comentário.
* **RN09 — Integração Social (Instagram):** Galeria em mosaico puxando fotos recentes do perfil oficial da confeitaria (`@suaconfeitaria`) para gerar desejo visual e prova social.

---

## 3. Design System (Identidade Visual e UI)

O Design System foi projetado para transmitir **aconchego, tradição artesanal, sofisticação e apetite visual**, equilibrando tipografia clássica com elementos modernos e limpos.

### 3.1. Paleta de Cores

| Token | Nome | Hexadecimal | Uso Principal |
| :--- | :--- | :--- | :--- |
| `--color-primary` | **Laranja Damasco (Brand)** | `#F08632` | Botões principais (CTAs), destaques de seção, preços, ícones ativos e badges. |
| `--color-primary-hover` | **Caramelo Tostado** | `#D97220` | Estado de *hover* em botões e links principais. |
| `--color-secondary` | **Creme Baunilha (Surface)** | `#FDF3EA` | Fundo de seções alternadas (Cursos, Depoimentos), cards suaves e áreas de respiro. |
| `--color-bg-light` | **Branco Chantilly** | `#FFFFFF` | Fundo principal da página, cards de produtos e cabeçalho. |
| `--color-bg-dark` | **Chocolate Amargo** | `#111111` | Fundo do rodapé (Footer) para alto contraste e ancoragem visual. |
| `--color-text-main` | **Cacau Intenso** | `#111111` | Títulos principais, nomes de produtos e textos de alta hierarquia. |
| `--color-text-muted` | **Café Suave** | `#444444` / `#666666` | Parágrafos descritivos, depoimentos e textos secundários. |
| `--color-border` | **Açúcar Mascavo Claro** | `#E1E1E1` | Linhas divisórias, bordas de inputs e contornos sutis de cards. |

### 3.2. Tipografia

A combinação tipográfica une a elegância editorial das serifas com a legibilidade geométrica das fontes sem serifa.

* **Fonte de Exibição / Títulos (`--font-display`):** `Playfair Display` (Google Fonts)
  * *Estilo:* Serifada, alto contraste, elegante e clássica.
  * *Pesos:* `700 (Bold)` e `700 Italic` (usada para dar ênfase artística em subtítulos e chamadas).
* **Fonte de Corpo e UI (`--font-sans`):** `Montserrat` (Google Fonts)
  * *Estilo:* Sem serifa, moderna, limpa e geométrica.
  * *Pesos:* `400 (Regular)` para textos corridos, `500 (Medium)` para menus e labels, `600 (SemiBold)` e `700 (Bold)` para botões, preços e tags em caixa alta.

#### Escala Tipográfica
* **H1 (Hero Banner):** `46px` / Line-height `1.2` / `Playfair Display Bold`
* **H2 (Títulos de Seção):** `36px` / Line-height `1.3` / `Playfair Display Bold`
* **H3 (Títulos de Cards / Subseções):** `20px` / Line-height `1.4` / `Montserrat SemiBold`
* **Subtítulo de Seção (Eyebrow):** `14px` / Letter-spacing `4px` / Uppercase / `Montserrat Bold` (Cor: `#F08632`)
* **Corpo de Texto:** `15px` / Line-height `1.7` / `Montserrat Regular`
* **Botões e Tags:** `14px` / Letter-spacing `2px` / Uppercase / `Montserrat SemiBold`

### 3.3. Espaçamento e Grid
* **Container Máximo:** `1170px` centralizado com padding lateral de `15px`.
* **Sistema de Grid:** 12 colunas com *gutter* (espaçamento entre colunas) de `30px`.
* **Espaçamento Vertical entre Seções:** `100px` (Desktop) e `60px` (Mobile).
* **Border Radius (Arredondamento):**
  * Botões e Inputs: `0px` ou `2px` (bordas retas e clássicas, estilo editorial) ou `50px` (estilo pílula para botões secundários). *Recomendação: manter `2px` para fidelidade ao template.*
  * Cards de Depoimento / Modais: `4px`.

### 3.4. Componentes Principais (UI Kit)

1. **Botão Primário (`.btn-primary`):**
   * Fundo: `#F08632` | Texto: `#FFFFFF` | Padding: `14px 30px` | Tipografia: `Montserrat 600`, `14px`, Uppercase, `letter-spacing: 2px`.
   * Hover: Fundo `#D97220`, transição suave de `0.3s ease`.
2. **Card de Produto (`.product-card`):**
   * Imagem quadrada (`1:1`) com fundo neutro ou ambientado.
   * Badge da categoria flutuando na borda inferior da imagem (Fundo `#FFFFFF`, texto `#111111`, sombra suave `0 2px 10px rgba(0,0,0,0.08)`).
   * Área inferior centralizada com Título do Produto e Preço.
   * Interação: No *hover* do card, o preço desliza para cima e desaparece, dando lugar ao link sublinhado em `#F08632`: **"Adicionar ao carrinho"**.
3. **Carrossel de Categorias (`.category-slider`):**
   * Ícones lineares (outline) minimalistas de doces (cupcake, fatia de bolo, donut, biscoito) na cor `#F08632`.
   * Ao passar o mouse ou selecionar, o fundo do item ganha um preenchimento circular ou quadrado em `#F08632` e o ícone/texto torna-se `#FFFFFF`.
4. **Inputs de Formulário (`.form-control`):**
   * Altura: `50px` | Fundo: `#FFFFFF` | Borda: `1px solid #E1E1E1` | Padding: `0 20px`.
   * Focus: Borda muda para `#F08632`, sem *outline* padrão do navegador.
5. **Barras de Progresso (`.skill-bar`):**
   * Trilho de fundo: `#E1E1E1` (altura `8px`).
   * Preenchimento ativo: `#111111` (altura `8px`) com tooltip numérico flutuante acima da ponta da barra.

---

## 4. Arquitetura de Informação (Sitemap Sugerido)

```text
Home (Página Inicial)
├── Hero Banner (Chamada principal + CTA "Nossos Bolos")
├── Sobre Nós (História da confeitaria + Barras de especialidade)
├── Filtro de Categorias (Carrossel de ícones)
├── Vitrine de Produtos em Destaque (Grid 4x2 com ação rápida)
├── Seção de Cursos/Workshops (Formulário de inscrição + Vídeo/Foto)
├── Nossa Equipe (Grid de Confeiteiros)
├── Depoimentos (Carrossel de avaliações)
├── Galeria Instagram (Mosaico visual + Link para perfil)
└── Mapa & Rodapé (Horários, Links legais)

Páginas Internas
├── Detalhes do Produto
├── Cursos (Cronograma, ementa e inscrição)
├── Sobre Nós (Detalhes da produção e história)
└── Contato (Formulário de atendimento + Localização)
```