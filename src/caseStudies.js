// ============================================================
//  Project detail pages, keyed by the project's `slug` in data.js.
//  Opened at  #/projects/<slug>
//  Screenshots live in /public/projects/<slug>/
//  `live` (optional) adds a "Visit live site" button.
// ============================================================

const erp = (name) => `/projects/retail-erp/${name}.jpg`;
const mfg = (name) => `/projects/manufacturing-erp/${name}.jpg`;
const qb = (name) => `/projects/qaabil/${name}.jpg`;

export const caseStudies = {
  'retail-erp': {
    title: 'Multi-Outlet Retail ERP',
    kind: 'ERP / Wholesale & Retail',
    tone: 'blue',
    intro:
      'A tailoring-materials wholesaler was running a factory and two retail shops on registers and spreadsheets. I built them one system that follows every roll of elastic and every rupee: from the supplier, through the factory, onto the shop shelf, into a customer invoice and back into the bank.',
    tags: ['Laravel', 'Filament', 'Livewire', 'Role-based access'],
    cover: { src: erp('sales-report'), caption: 'The sales report: eight filters and live totals across every outlet.' },
    facts: [
      { label: 'Type', value: 'Web-based ERP' },
      { label: 'Panels', value: 'Admin + one per outlet' },
      { label: 'Users', value: 'Owners, managers, data entry, riders' },
      { label: 'Status', value: 'Live online' },
    ],
    stats: [
      { value: '3', label: 'outlets in one system' },
      { value: '6', label: 'staff roles' },
      { value: '317', label: 'permission switches' },
      { value: '8', label: 'sales report filters' },
    ],
    steps: [
      {
        title: 'Two panels, one business',
        text:
          'The admin panel sees the whole company. Each outlet (the factory and every shop) gets its own panel, and the admin can "Enter outlet" to work inside any of them. Staff are assigned to outlets, so a shop manager only ever sees their own shop.',
        points: [
          'Roles from Super Admin down to Rider, each with fine-grained permissions',
          'One user can work across several outlets',
        ],
        shots: [
          { src: erp('outlets'), caption: 'Outlets: jump into any location with "Enter outlet".' },
          { src: erp('roles'), caption: 'Six roles, up to 317 individual permissions.' },
          { src: erp('users'), caption: 'Every user is tied to a role and their outlets.' },
        ],
      },
      {
        title: 'Set up the catalogue',
        text:
          'Everything starts with clean master data. Products are organised by category, brand and unit (rolls, yards, pieces, dozens), and each one carries a cost price, a selling price and live stock. Customers are tagged by city and area so sales can be sliced by region later.',
        points: [
          'Customers and suppliers start with opening balances, so old dues carry over',
          'Bulk-import customers from a spreadsheet',
          'Referral tracking: see who brought in each customer',
        ],
        shots: [
          { src: erp('products'), caption: 'Products with cost, selling price, stock and stock value.' },
          { src: erp('categories'), caption: 'Categories: elastic, buttons, fusing, needles…' },
          { src: erp('units'), caption: 'Units of measure: roll, yard, piece, dozen, kg.' },
          { src: erp('customers'), caption: 'Customers with city, area and opening balance.' },
          { src: erp('areas'), caption: 'Areas grouped by city for regional reporting.' },
          { src: erp('suppliers'), caption: 'Suppliers with running balances.' },
        ],
      },
      {
        title: 'Buy stock',
        text:
          'An outlet raises a purchase against a supplier. Stock goes up at that outlet and the supplier balance shows what is owed. When the business pays, a payment is drawn from a cash or bank account and the balance comes down. Anything sent back goes through a purchase return.',
        points: ['Purchase → Payment → Purchase return, all linked to the supplier ledger'],
        shots: [
          { src: erp('purchases'), caption: 'Purchases with supplier and grand total.' },
          { src: erp('payments'), caption: 'Supplier payments from any account.' },
          { src: erp('purchase-returns'), caption: 'Purchase returns.' },
        ],
      },
      {
        title: 'Move stock',
        text:
          'Most goods are made or packed at the factory and sent to the shops. A stock transfer takes quantity out of one outlet and puts it into another in one step, so nothing gets counted twice or lost in between. If a physical count does not match, an inventory adjustment fixes it with a record of who did it.',
        points: ['Each outlet sees its own stock and inventory valuation'],
        shots: [
          { src: erp('stock-transfers'), caption: 'Factory → shop stock transfers.' },
          { src: erp('inventory-adjustments'), caption: 'Inventory adjustments, each with its creator.' },
          { src: erp('outlet-stock'), caption: 'An outlet’s stock and its total value.' },
        ],
      },
      {
        title: 'Sell',
        text:
          'Sales are invoiced per customer with an optional discount. The invoice pulls in the customer’s area and city, stock leaves the outlet and the customer’s balance goes up by what they owe. Returns are linked back to the original sale.',
        points: [
          'Running totals sit above the sales list',
          'Export a full ledger or a product-by-product sales breakdown',
        ],
        shots: [
          { src: erp('sales'), caption: 'Sales with totals, discounts and exports.' },
          { src: erp('sale-returns'), caption: 'Sale returns linked to their invoice.' },
        ],
      },
      {
        title: 'Collect payments',
        text:
          'Money collected from customers is recorded as a receipt into a specific account. Receipts arrive as Pending and only count once an admin approves them, so cash brought in from the field is checked before it hits the books.',
        points: ['Pending → Approved workflow on every receipt'],
        shots: [{ src: erp('receipts'), caption: 'Receipts waiting for approval.' }],
      },
      {
        title: 'Track every rupee',
        text:
          'Cash in hand and bank accounts each keep an opening and a current balance. Deposits, transfers between accounts and expenses all move those balances, and expenses are tagged by category and outlet (salaries, fuel, freight, rent) so the owner can see where money goes.',
        points: ['Every document gets a readable number like EXP-05-Sep-2026-530'],
        shots: [
          { src: erp('accounts'), caption: 'Accounts with opening and current balance.' },
          { src: erp('deposits'), caption: 'Deposits.' },
          { src: erp('account-transfers'), caption: 'Transfers between accounts.' },
          { src: erp('expenses'), caption: 'Expenses by account, category and payment method.' },
          { src: erp('expense-categories'), caption: 'Expense categories.' },
        ],
      },
      {
        title: 'See the whole picture',
        text:
          'The sales report filters by outlet, customer, area, city, category, brand, product and date, and shows sales, units sold, returns, receivables, money received and what is still outstanding. Each outlet gets the same view for itself. The owner can export the company’s net position in one click, and the database can be backed up from the panel.',
        points: ['Ledger exports on almost every screen'],
        shots: [
          { src: erp('sales-report'), caption: 'Company-wide sales report.' },
          { src: erp('outlet-overview'), caption: 'The same report for a single outlet.' },
        ],
      },
    ],
  },

  'manufacturing-erp': {
    title: 'Thread Manufacturing ERP',
    kind: 'ERP / Manufacturing',
    tone: 'ink',
    intro:
      'The production side of a thread business. Raw yarn comes in, gets twisted, sent out for dyeing, wound onto spools and packed into finished boxes. Every one of those steps uses up some materials and creates others. This ERP plans each run, records what was used and made, and keeps a live ledger of stock and its value at every location.',
    tags: ['Laravel', 'Filament v5', 'Livewire', 'Role-based access'],
    cover: { src: mfg('inventory-ledger'), caption: 'The inventory ledger: every unit in and out, with a running balance and value.' },
    facts: [
      { label: 'Type', value: 'Manufacturing ERP' },
      { label: 'Covers', value: 'Purchase → production → dispatch' },
      { label: 'Locations', value: 'Factory, warehouses, dye house' },
      { label: 'Status', value: 'Live on-site' },
    ],
    stats: [
      { value: '6', label: 'material stages' },
      { value: '3', label: 'production processes' },
      { value: '4', label: 'stock locations' },
      { value: '594', label: 'permission switches' },
    ],
    steps: [
      {
        title: 'Model the materials',
        text:
          'Everything the factory touches is a material, and each one sits at a stage: raw material, twisted yarn, dyed yarn, winded yarn, spooled yarn, finished box. A material knows its brand, colour (article), unit and the material it is made from, so a red finished box links back to the red spooled yarn inside it.',
        points: [
          'Bulk-import materials, then assign types and units in one go',
          'Articles (colours) are tagged by how fast they sell',
          'Rate groups for pricing different colour families',
        ],
        shots: [
          { src: mfg('material-types'), caption: 'Six material stages, from raw yarn to finished box.' },
          { src: mfg('materials'), caption: 'Materials with brand, colour, unit, stage and source material.' },
          { src: mfg('articles'), caption: 'Articles (colours) with a sales-velocity tag.' },
          { src: mfg('rate-groups'), caption: 'Rate groups.' },
        ],
      },
      {
        title: 'Define the recipes',
        text:
          'A bill of materials (BOM) says what goes into each process for each product line: how much spooled yarn, how many folded boxes and labels it takes to pack one finished box. Production then uses these recipes, so nobody has to calculate consumption by hand.',
        shots: [
          { src: mfg('boms'), caption: 'BOMs per product line and process.' },
          { src: mfg('processes'), caption: 'Processes: winding, spooling, packing.' },
        ],
      },
      {
        title: 'Buy and receive',
        text:
          'Purchase orders go to suppliers with an expected delivery date. When goods arrive, a goods receipt books them into a specific location. It can be linked to its PO, delivered straight to a warehouse, or marked as a return against an earlier receipt.',
        points: ['PO → goods receipt → stock at the right location'],
        shots: [
          { src: mfg('purchase-orders'), caption: 'Purchase orders with expected delivery.' },
          { src: mfg('goods-receipts'), caption: 'Goods receipts by location, with return and delivery-order flags.' },
        ],
      },
      {
        title: 'Send out for dyeing',
        text:
          'Dyeing is done by an outside dye house. A dyeing plan (built with a planner tool) sets what is going to be dyed and by whom. Outsource goods receipts then track yarn leaving a warehouse for the dye house and coming back as dyed yarn, so stock held by a third party is never lost track of.',
        shots: [
          { src: mfg('dyeing-plans'), caption: 'Dyeing plans per dye house.' },
          { src: mfg('outsource-receipts'), caption: 'Yarn out to the dye house and back, each approved.' },
        ],
      },
      {
        title: 'Plan and run production',
        text:
          'A production plan lays out what to make. Each production run is logged against an employee and a process. Once it is approved, the system takes the input materials out of stock according to the BOM and adds the output: spooled yarn and boxes go out, finished boxes come in.',
        points: ['Every run goes through approval before it touches stock'],
        shots: [
          { src: mfg('production-plans'), caption: 'Production plans.' },
          { src: mfg('productions'), caption: 'Production runs by employee and process.' },
        ],
      },
      {
        title: 'Know your stock',
        text:
          'Every movement (receipts, dyeing, production, transfers, adjustments, dispatches) lands in one inventory ledger with quantity in, quantity out, running balance, rate and line value. A stock summary and export are one click away, and opening stock can be bulk-imported as inventory adjustments.',
        shots: [
          { src: mfg('inventory-ledger'), caption: 'Inventory ledger with running balance and value.' },
          { src: mfg('inventory-adjustments'), caption: 'Inventory adjustments, importable from a sheet.' },
        ],
      },
      {
        title: 'Dispatch and sell',
        text:
          'Finished goods leave through dispatches to customers. A sale is then raised against the dispatch, so what was shipped and what was billed always match.',
        shots: [{ src: mfg('dispatches'), caption: 'Dispatches to customers.' }],
      },
      {
        title: 'Pay the people',
        text:
          'Accounting covers the factory’s money: accounts with opening balances, expenses, transactions and payment methods. Employees can take advances, and payroll is run for a date range from a chosen account.',
        shots: [
          { src: mfg('employees'), caption: 'Employees with running balances.' },
          { src: mfg('advances'), caption: 'Staff advances, each approved.' },
          { src: mfg('payrolls'), caption: 'Payroll by date range.' },
          { src: mfg('accounts'), caption: 'Accounts.' },
          { src: mfg('opening-balances'), caption: 'Opening balance adjustments.' },
        ],
      },
      {
        title: 'Configure it',
        text:
          'Modules can be switched on per business, units convert per material, and there is a default location and opening-balance type. Access is controlled by roles with 594 individual permissions.',
        shots: [
          { src: mfg('app-settings'), caption: 'App settings: modules, unit conversions, defaults.' },
          { src: mfg('roles'), caption: 'Roles with 594 permissions.' },
        ],
      },
    ],
  },

  qaabil: {
    title: 'Qaabil',
    kind: 'EdTech / Learning Platform',
    tone: 'yellow',
    live: 'https://qaabil.io',
    intro:
      'Qaabil is built on one idea: knowledge should be free for anyone willing to share it. Cambridge IGCSE and A-Level courses are broken down to individual learning objectives. Students unlock access by uploading a teaching video that moderators approve, then learn from each other’s videos, take timed quizzes and track their progress to mastery. Teachers get a quiz builder that prints real test papers, and the whole public site is editable from the admin panel.',
    tags: ['Laravel', 'Filament', 'Livewire', 'Google & GitHub login', 'PDF generation'],
    cover: { src: qb('course-detail'), caption: 'A course page: 11 sections, 55 chapters and 242 learning objectives.' },
    facts: [
      { label: 'Type', value: 'EdTech platform + CMS' },
      { label: 'For', value: 'Cambridge IGCSE & A-Level students' },
      { label: 'Panels', value: 'Student, moderator, quiz builder, admin' },
      { label: 'Status', value: 'Live at qaabil.io' },
    ],
    stats: [
      { value: '4', label: 'signed-in panels' },
      { value: '242', label: 'objectives in one course' },
      { value: '4', label: 'quiz question types' },
      { value: '7', label: 'badge levels' },
    ],
    steps: [
      {
        title: 'The public site',
        text:
          'Visitors land on a marketing site that explains the model, lets them browse courses by qualification, and introduces Qaabil Academy, the physical tutoring centre in Kuala Lumpur built on the same platform. Students sign up with email, Google or GitHub.',
        points: ['Every course page is public, so students can see exactly what they would get before signing up'],
        shots: [
          { src: qb('home-hero'), caption: 'Home page hero slider.' },
          { src: qb('home-qualifications'), caption: 'Browse by qualification.' },
          { src: qb('courses'), caption: 'All courses with search and filters.' },
          { src: qb('academy-hero'), caption: 'The Education Centre page for the physical academy.' },
          { src: qb('academy-about'), caption: 'About the academy.' },
          { src: qb('login'), caption: 'Member login with Google and GitHub.' },
        ],
      },
      {
        title: 'Courses, down to the objective',
        text:
          'Content follows the Cambridge syllabus exactly: qualification → course → section → chapter → learning objective. Admins can import a whole course from Excel instead of typing it in, which is how a single A-Level course ends up with 242 objectives, each one ready for its own videos and quiz.',
        shots: [
          { src: qb('admin-courses'), caption: 'Courses, with Import from Excel.' },
          { src: qb('admin-sections'), caption: 'Sections of a course.' },
          { src: qb('admin-chapters'), caption: 'Chapters inside each section.' },
          { src: qb('admin-objectives'), caption: 'Learning objectives inside each chapter.' },
          { src: qb('course-chapters'), caption: 'On the site: every objective waits for its first video.' },
        ],
      },
      {
        title: 'Contribute to unlock',
        text:
          'Instead of a paywall, Qaabil asks for a contribution. A student records a video teaching a learning objective and uploads it. A moderator reviews it and either approves it or sends feedback. One approved video unlocks every course for 30 days. Students can still upgrade if they want instant access.',
        points: [
          'Moderators apply with a CV and are approved by the admin',
          'Videos can be filtered by language and focus type',
          'A free-access limit is configurable from settings',
        ],
        shots: [
          { src: qb('get-access'), caption: '"Knowledge should be free for everyone."' },
          { src: qb('how-it-works'), caption: 'Submit a video → get approved → unlock courses.' },
          { src: qb('objective-videos'), caption: 'Student videos under a learning objective.' },
          { src: qb('admin-videos'), caption: 'Every video with its course, chapter and objective.' },
          { src: qb('admin-moderators'), caption: 'Moderator applications, with CV and status.' },
        ],
      },
      {
        title: 'Learn and track progress',
        text:
          'Each student has their own panel. Every learning objective is marked Not started, Falling behind, Needs more practice or Mastery reached, and those roll up into a progress bar per course. Students can download a progress report, objective notes and course notes, and log their marks on past papers to download a past-paper report.',
        shots: [
          { src: qb('my-courses'), caption: 'My courses with progress.' },
          { src: qb('course-progress'), caption: 'Objectives by status: not started, behind, practice, mastery.' },
          { src: qb('course-logged-in'), caption: 'The course page once logged in, with notes and reports.' },
          { src: qb('past-papers'), caption: 'Past papers with your own marks per paper.' },
        ],
      },
      {
        title: 'Timed quizzes',
        text:
          'Every learning objective has a quiz, and every chapter has a test. Each question has its own countdown. When time runs out the question locks, and there is no going back to change an answer, so the quiz works like a real exam. Questions carry marks and a difficulty level from Rookie to Hacker.',
        points: [
          'Single choice, searchable dropdown, multiple select',
          'Choice plus a written explanation of the reasoning',
        ],
        shots: [
          { src: qb('quiz-intro'), caption: 'Get ready: questions, marks and rules.' },
          { src: qb('quiz-single'), caption: 'Single choice with a live timer.' },
          { src: qb('quiz-dropdown'), caption: 'Searchable dropdown answer.' },
          { src: qb('quiz-multi'), caption: 'Multiple select.' },
          { src: qb('quiz-locked'), caption: 'Time’s up: the question locks.' },
          { src: qb('quiz-reasoning'), caption: 'Answer plus written reasoning.' },
        ],
      },
      {
        title: 'Results that teach',
        text:
          'Submitting shows a score and accuracy straight away, then a question-by-question breakdown with the right answers highlighted next to the student’s own. One click retakes the quiz.',
        shots: [
          { src: qb('quiz-result'), caption: 'Score, correct, incorrect and accuracy.' },
          { src: qb('quiz-breakdown'), caption: 'Answer breakdown with the correct options.' },
        ],
      },
      {
        title: 'Badges and certificates',
        text:
          'Contributing is rewarded every month. Creator badges go from Bronze to Platinum for uploading videos, and reviewer badges go from Supporter to Influencer for reviewing them. Each badge comes with a downloadable certificate, and students can customise and download their own ID card.',
        shots: [
          { src: qb('dashboard'), caption: 'Earned badges with a certificate download.' },
          { src: qb('badges'), caption: 'Monthly progress toward the next badge.' },
        ],
      },
      {
        title: 'The quiz builder',
        text:
          'Teachers get their own panel for building test papers. They filter the question bank by course, section, chapter, objective, difficulty, marks and type, add questions with one click and watch the totals update. The finished quiz exports as a branded PDF test paper or as a marking scheme.',
        shots: [
          { src: qb('builder-list'), caption: 'Quizzes with question counts and total marks.' },
          { src: qb('builder-pool'), caption: 'Question pool filters and the paper being built.' },
          { src: qb('builder-table'), caption: 'Add questions straight from the bank.' },
          { src: qb('builder-pdf'), caption: 'The PDF paper, ready to print.' },
        ],
      },
      {
        title: 'Run it all from the admin',
        text:
          'The admin manages the question bank (with import), past papers by year and sitting, users and roles, and app-wide settings such as badge rules and per-panel options. It is also a CMS: every public page (home, pricing, academy, contact, privacy, terms) has its URL and every section editable without touching code.',
        shots: [
          { src: qb('admin-questions'), caption: 'Question bank with difficulty and import.' },
          { src: qb('admin-past-papers'), caption: 'Past papers by year and sitting.' },
          { src: qb('admin-users'), caption: 'Users with roles like student and quiz builder.' },
          { src: qb('admin-settings'), caption: 'Settings for branding, badges and each panel.' },
          { src: qb('admin-home-page'), caption: 'CMS: the home page, section by section.' },
          { src: qb('admin-academy-page'), caption: 'CMS: the academy page.' },
        ],
      },
    ],
  },
};
