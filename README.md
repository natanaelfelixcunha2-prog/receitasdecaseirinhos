# Receitas de Caseirinhos em Casa — Portal de Informações Legais (Portugal)

Website oficial e independente de conformidade legal, termos de utilização, política de privacidade (RGPD) e política de reembolso para o produto digital **"Receitas de Caseirinhos em Casa"**, estruturado para consumidores em Portugal.

---

## 📁 Estrutura do Repositório

```text
/
├── index.html          # Página inicial com os 3 cartões de acesso às políticas
├── termos.html         # Termos e Condições de Utilização (Decreto-Lei n.º 24/2014)
├── privacidade.html    # Política de Privacidade e Proteção de Dados (RGPD UE 2016/679)
├── reembolso.html      # Política de Reembolso e Livre Resolução (DL 24/2014 e DL 84/2021)
├── css/
│   └── style.css       # Estilos CSS3 puros, responsivos e otimizados para impressão (@media print)
├── js/
│   └── script.js       # JavaScript moderno (menu móvel, ano automático, TOC e atalhos)
├── vercel.json         # Configuração oficial para alojamento na Vercel (URLs limpas e cabeçalhos de segurança)
├── .gitignore          # Ficheiros ignorados pelo Git (node_modules, dist, .vercel, etc.)
└── package.json        # Configuração do projeto e scripts de compilação
```

---

## 🚀 Como Publicar no GitHub e Vercel

### 1. Criar Repositório no GitHub
1. Aceda ao [GitHub](https://github.com) e crie um novo repositório (público ou privado).
2. No seu computador ou terminal local, inicialize o git e suba os ficheiros:
   ```bash
   git init
   git add .
   git commit -m "feat: site oficial de políticas legais"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

### 2. Ligar e Publicar na Vercel
1. Aceda a [vercel.com](https://vercel.com) e inicie sessão com a sua conta GitHub.
2. Clique em **"Add New Project"** e escolha o repositório que acabou de criar.
3. A Vercel deteta automaticamente a configuração através do ficheiro `vercel.json` e `package.json`.
4. Clique em **"Deploy"**.
5. Em menos de 1 minuto o site estará publicado e acessível com certificado SSL (HTTPS) gratuito!

### 3. Associar Domínio Próprio (Opcional)
- No painel da Vercel, aceda a **Settings > Domains**.
- Adicione o seu domínio ou subdomínio (exemplo: `legal.seusite.pt` ou `politicas.seusite.pt`).
- Siga as indicações de DNS (apontar CNAME para `cname.vercel-dns.com`).

---

## ⚖️ Conformidade Legal Integrada
- **Decreto-Lei n.º 24/2014:** Contratos celebrados à distância e direito de livre resolução (14 dias).
- **Decreto-Lei n.º 84/2021:** Fornecimento de conteúdos e serviços digitais.
- **Regulamento (UE) 2016/679 (RGPD) & Lei n.º 58/2019:** Proteção de dados pessoais e direitos perante a CNPD.
- **Lei n.º 144/2015:** Informação sobre Resolução Alternativa de Litígios (CNIACC).
- **Código do Direito de Autor e dos Direitos Conexos:** Proteção dos materiais originais contra pirataria e revenda não autorizada.
