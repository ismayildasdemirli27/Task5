# JavaScript DOM Manipulation — 5 Practical Tasks

**Mövzular:** DOM Selecting, Creating Elements, Modifying Elements, Removing Elements, `classList`, `addEventListener()`, Event Object və Event Delegation.

Tapşırıqlar **Easy → Hard** ardıcıllığı ilə hazırlanıb. Hər tapşırıq üçün HTML, CSS və JavaScript istifadə edin.

> **Vizual bələdçi:** Hər tapşırıqda `text` blokları içərisində ASCII wireframe (xəttlər, qutular və oxlar) verilib. Bunlar yekun dizaynın məcburi piksel ölçülü surəti deyil, tələbənin quracağı interfeysin və kliklərdən sonrakı davranışın təxmini görünüşüdür. GitHub Markdown Preview-də daha rahat oxunur.

| № | Tapşırıq | Səviyyə | Müddət |
|---|---|---|---|
| 1 | Interactive Color Changer | Easy | 15–20 dəq. |
| 2 | Live Character Counter | Easy | 20–25 dəq. |
| 3 | Dynamic Product Cards | Medium | 25–35 dəq. |
| 4 | Interactive FAQ Accordion | Medium | 30–40 dəq. |
| 5 | Task Management System | Hard | 40–50 dəq. |

---

## 🟢 Task 1 — Interactive Color Changer (Easy)

**Mövzular:** `querySelector()`, `textContent`, `style`, `addEventListener()`, `click`

### Tapşırığın məqsədi

İstifadəçinin düymələr vasitəsilə bir elementin arxa fon rəngini dəyişə bildiyi interaktiv sistem hazırlayın.

### Tələblər

1. HTML-də `div` elementi yaradın və ona `id="colorBox"` verin.
2. Elementin başlanğıc rəngi boz olmalıdır.
3. Üç düymə yaradın: `Red`, `Green`, `Blue`.
4. Düymələrə `addEventListener()` vasitəsilə `click` hadisəsi əlavə edin.
5. `Red` düyməsinə klik edildikdə elementin fonu qırmızı olmalıdır.
6. `Green` düyməsinə klik edildikdə elementin fonu yaşıl olmalıdır.
7. `Blue` düyməsinə klik edildikdə elementin fonu mavi olmalıdır.
8. Elementin daxilində seçilmiş rəngin adı göstərilməlidir.

### Gözlənilən nəticə

Başlanğıcda boz rəngli `Gray` yazılı qutu görünür. Rəng düyməsinə klik edildikdə qutunun fonu və yazısı uyğun rəngə dəyişir.

### Vizual görünüş (Wireframe)

**Başlanğıc vəziyyət:**

```text
┌────────────────────────────────────────────┐
│             COLOR CHANGER                  │
│                                            │
│   ┌────────────────────────────────────┐   │
│   │                                    │   │
│   │                Gray                │   │
│   │            (boz fon)               │   │
│   │                                    │   │
│   └────────────────────────────────────┘   │
│                                            │
│      [ Red ]   [ Green ]   [ Blue ]        │
└────────────────────────────────────────────┘
```

**İstifadəçi `Blue` düyməsinə klik etdikdə:**

```text
[ Blue ] klik  ───────────────►  #colorBox
                                    │
                                    ▼
                          ┌─────────────────┐
                          │      Blue       │
                          │    (mavi fon)   │
                          └─────────────────┘
```

**Yoxlama:** `Red → Green → Blue` ardıcıllığı ilə klik etdikdə həm rəng, həm də yazı dəyişməlidir.

### Başlanğıc kod

**HTML:**

```html
<div id="colorBox">Gray</div>

<button id="redBtn">Red</button>
<button id="greenBtn">Green</button>
<button id="blueBtn">Blue</button>
```

**JavaScript:**

```javascript
const colorBox = document.querySelector("#colorBox");

const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");

// Write your code here
```

### Bonus

`Reset` düyməsi yaradın. Klik edildikdə elementin rəngi yenidən boz olsun.

---

## 🟢 Task 2 — Live Character Counter (Easy)

**Mövzular:** `querySelector()`, `value`, `textContent`, `addEventListener()`, `input`, `classList`

### Tapşırığın məqsədi

İstifadəçi `textarea` daxilində mətn yazdıqca simvolların sayını hesablayan və maksimum limiti göstərən sistem hazırlayın.

### Tələblər

1. HTML-də `textarea` elementi yaradın.
2. Maksimum simvol limiti 100 olmalıdır.
3. İstifadəçi yazı yazdıqca simvolların sayı avtomatik yenilənməlidir.
4. Simvolların sayı `45 / 100` formatında göstərilməlidir.
5. Qalan simvolların sayı ayrıca göstərilməlidir.
6. Mətnin uzunluğu 80-i keçdikdə sayğacın rəngi narıncı olmalıdır.
7. Mətnin uzunluğu 100-ə çatdıqda sayğacın rəngi qırmızı olmalıdır.
8. İstifadəçi 100 simvoldan artıq mətn daxil edə bilməməlidir.

### Gözlənilən nəticə

İstifadəçi 45 simvol yazdıqda `45 / 100` və `Remaining: 55` görünməlidir. Limitə çatdıqda sayğac qırmızı olmalıdır.

### Vizual görünüş (Wireframe)

**İstifadəçi mətn yazarkən:**

```text
┌───────────────────────────────────────────────┐
│             CHARACTER COUNTER                 │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │ Hello! I am learning JavaScript DOM.    │  │
│  │                                         │  │
│  │                                         │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  Remaining: 64                  36 / 100      │
│  ██████████████░░░░░░░░░░░░░░░░░░░░░░░░       │
└───────────────────────────────────────────────┘
```

*Qeyd: Yuxarıdakı mətn və rəqəmlər dizayn nümunəsidir; real sayğac yazılmış simvolların faktiki sayını göstərməlidir. Progress bar əlavə etmək istəyə bağlıdır.*

**Rəng dəyişməsi:**

```text
0–80 simvol    ──► Normal rəng
81–99 simvol  ──► Narıncı rəng
100 simvol    ──► Qırmızı rəng

[ İstifadəçi yazır ] → input event → value.length
                                  ├──► counter
                                  └──► remaining
```

### Başlanğıc kod

**HTML:**

```html
<textarea
    id="message"
    maxlength="100"
    placeholder="Write your message..."
></textarea>

<p id="counter">0 / 100</p>
<p id="remaining">Remaining: 100</p>
```

**JavaScript:**

```javascript
const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const remaining = document.querySelector("#remaining");

// Write your code here
```

### Bonus

`Clear` düyməsi əlavə edin. Düyməyə klik edildikdə mətn silinsin və sayğac sıfırlansın.

---

## 🟡 Task 3 — Dynamic Product Cards (Medium)

**Mövzular:** `createElement()`, `append()`, `textContent`, `dataset`, `addEventListener()`, Arrays, Objects

### Tapşırığın məqsədi

JavaScript-də saxlanılan məhsul məlumatlarından istifadə edərək dinamik Product Cards yaradın. İstifadəçi məhsulları səbətə əlavə edə bilməlidir.

### Tələblər

1. Verilmiş `products` Array-indən istifadə edin.
2. Hər məhsul üçün JavaScript vasitəsilə ayrıca Card yaradın.
3. Hər Card daxilində məhsulun adı, qiyməti və `Add to Cart` düyməsi olmalıdır.
4. Card-lar `createElement()` ilə yaradılmalıdır.
5. Məhsullar `productContainer` elementinə əlavə edilməlidir.
6. `Add to Cart` düyməsinə klik edildikdə məhsul səbətə əlavə edilməlidir.
7. Səbətdəki məhsulların ümumi sayı və ümumi qiyməti göstərilməlidir.
8. Eyni məhsul bir neçə dəfə əlavə edilə bilməlidir.

### Başlanğıc məlumatlar

```javascript
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 }
];
```

### Gözlənilən nəticə

Dörd məhsul Card-ı görünməlidir. Məsələn, `Laptop` və `Mouse` səbətə əlavə edildikdə `Cart: 2 items` və `Total: $1225` göstərilməlidir.

### Vizual görünüş (Wireframe)

**Məhsul siyahısı:**

```text
┌────────────────────────────────────────────────────┐
│                    PRODUCT STORE                   │
│                                                    │
│  ┌────────────────────┐  ┌────────────────────┐    │
│  │       Laptop       │  │       Mouse        │    │
│  │       $1200        │  │        $25         │    │
│  │   [ Add to Cart ]  │  │   [ Add to Cart ]  │    │
│  └────────────────────┘  └────────────────────┘    │
│                                                    │
│  ┌────────────────────┐  ┌────────────────────┐    │
│  │      Keyboard      │  │      Monitor       │    │
│  │        $75         │  │       $300         │    │
│  │   [ Add to Cart ]  │  │   [ Add to Cart ]  │    │
│  └────────────────────┘  └────────────────────┘    │
│                                                    │
│  Shopping Cart                                     │
│  Cart: 2 items                    Total: $1225     │
└────────────────────────────────────────────────────┘
```

**Klikdən sonra məlumat axını:**

```text
[ Laptop: Add to Cart ] ──► cart.push(laptop)
                                   │
                                   ▼
                              Cart: 1 item
                              Total: $1200
                                   │
[ Mouse: Add to Cart ] ───────► cart.push(mouse)
                                   │
                                   ▼
                              Cart: 2 items
                              Total: $1225
```

**Yoxlama:** `Mouse` düyməsinə iki dəfə klik edildikdə səbətə iki ədəd Mouse əlavə edilməlidir.

### Başlanğıc kod

**HTML:**

```html
<div id="productContainer"></div>

<h3>Shopping Cart</h3>
<p id="cartCount">Cart: 0 items</p>
<p id="totalPrice">Total: $0</p>
```

**JavaScript:**

```javascript
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 }
];

const productContainer = document.querySelector("#productContainer");
const cartCount = document.querySelector("#cartCount");
const totalPrice = document.querySelector("#totalPrice");

const cart = [];

// Write your code here
```

### Bonus

`Remove from Cart` funksionallığı əlavə edin. İstifadəçi səbətdən məhsul sildikdə ümumi say və qiymət yenilənsin.

---

## 🟡 Task 4 — Interactive FAQ Accordion (Medium)

**Mövzular:** `querySelectorAll()`, `addEventListener()`, `classList`, `nextElementSibling`, Event Object

### Tapşırığın məqsədi

İstifadəçi suallara klik etdikdə cavabların açılıb-bağlandığı FAQ Accordion sistemi hazırlayın.

### Tələblər

1. HTML-də ən azı 4 FAQ elementi yaradın.
2. Hər FAQ elementi sual və cavabdan ibarət olmalıdır.
3. Başlanğıcda bütün cavablar gizli olmalıdır.
4. Suala klik edildikdə həmin cavab açılmalıdır.
5. Açıq suala yenidən klik edildikdə cavab bağlanmalıdır.
6. Eyni anda yalnız bir cavab açıq qala bilər.
7. Aktiv sualın CSS class-ı `active` olmalıdır.
8. Açıq sualın sağ tərəfində `−`, bağlı sualın sağ tərəfində `+` göstərilməlidir.

### Gözlənilən nəticə

Suala klik etdikdə onun cavabı görünməli və `+` işarəsi `−` ilə əvəz olunmalıdır. Başqa sual açıldıqda əvvəlki cavab bağlanmalıdır.

### Vizual görünüş (Wireframe)

**Başlanğıcda bütün cavablar bağlıdır:**

```text
┌────────────────────────────────────────────────┐
│                   FAQ                          │
│                                                │
│  ┌──────────────────────────────────────────┐  │
│  │ What is DOM?                          +  │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │ What is querySelector()?              +  │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │ What is addEventListener()?           +  │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │ What is Event Bubbling?               +  │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**Birinci suala klik etdikdə:**

```text
┌──────────────────────────────────────────────┐
│ What is DOM?                              −  │  ◄── Active
│                                              │
│ DOM stands for Document Object Model.        │
├──────────────────────────────────────────────┤
│ What is querySelector()?                  +  │
├──────────────────────────────────────────────┤
│ What is addEventListener()?               +  │
├──────────────────────────────────────────────┤
│ What is Event Bubbling?                   +  │
└──────────────────────────────────────────────┘
```

**Davranış:**

```text
1-ci sualı aç → 1-ci cavab görünür
         │
         ▼
2-ci sualı aç → 1-ci cavab bağlanır, 2-ci açılır
         │
         ▼
2-ci suala yenidən klik → bütün cavablar bağlanır
```

### Başlanğıc kod

**HTML:**

```html
<div class="faq-item">
    <button class="faq-question">
        What is DOM?
        <span>+</span>
    </button>
    <p class="faq-answer">
        DOM stands for Document Object Model.
    </p>
</div>

<div class="faq-item">
    <button class="faq-question">
        What is querySelector()?
        <span>+</span>
    </button>
    <p class="faq-answer">
        It selects the first matching element.
    </p>
</div>

<!-- Add two more FAQ items -->
```

**JavaScript:**

```javascript
const questions = document.querySelectorAll(".faq-question");

// Write your code here
```

### Bonus

Accordion açılıb-bağlanarkən CSS `transition` istifadə edərək animasiya əlavə edin.

---

## 🔴 Task 5 — Task Management System (Hard)

**Mövzular:** DOM Manipulation, `createElement()`, `append()`, `remove()`, `classList`, `addEventListener()`, Event Delegation, Arrays, Objects, `filter()`

### Tapşırığın məqsədi

İstifadəçinin gündəlik tapşırıqlarını idarə edə biləcəyi interaktiv Task Management System hazırlayın.

İstifadəçi yeni tapşırıq əlavə etməli, tamamlamalı, silməli və statusuna əsasən filtrləyə bilməlidir.

### Tələblər

1. HTML-də yeni tapşırıq daxil etmək üçün `input` və `Add Task` düyməsi yaradın.
2. İstifadəçi boş mətn daxil etdikdə yeni tapşırıq yaradılmamalıdır.
3. Hər tapşırıq aşağıdakı Object formatında saxlanılmalıdır:

```javascript
{
    id: 1,
    text: "Learn JavaScript",
    completed: false
}
```

4. Tapşırıqlar `tasks` adlı Array daxilində saxlanılmalıdır.
5. Yeni tapşırıq əlavə edildikdə DOM-da yeni element yaradılmalıdır.
6. Hər tapşırığın yanında `Complete` və `Delete` düymələri olmalıdır.
7. `Complete` düyməsi tapşırığın `completed` statusunu dəyişməlidir.
8. Tamamlanmış tapşırıqların üzərindən xətt çəkilməlidir.
9. `Delete` düyməsi tapşırığı həm Array-dən, həm də səhifədən silməlidir.
10. `All`, `Active` və `Completed` filter düymələri işləməlidir.
11. Ümumi və tamamlanmış tapşırıqların sayı göstərilməlidir.
12. Tapşırıqların silinməsi və tamamlanması üçün Event Delegation istifadə edin.

### Gözlənilən nəticə

İstifadəçi tapşırıq əlavə etdikdə siyahıda görünməlidir. `Complete` düyməsi statusu dəyişməli, `Delete` düyməsi tapşırığı silməli, filter düymələri isə uyğun tapşırıqları göstərməlidir.

### Vizual görünüş (Wireframe)

**Əsas interfeys:**

```text
┌──────────────────────────────────────────────────────┐
│                TASK MANAGEMENT SYSTEM                │
│                                                      │
│  ┌─────────────────────────────────┐ ┌────────────┐  │
│  │ Enter a new task...             │ │ Add Task   │  │
│  └─────────────────────────────────┘ └────────────┘  │
│                                                      │
│  [ All ]       [ Active ]       [ Completed ]         │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ ✓  Learn DOM Manipulation     [Complete][Delete]│  │
│  ├────────────────────────────────────────────────┤  │
│  │ ○  Practice Event Listeners   [Complete][Delete]│  │
│  ├────────────────────────────────────────────────┤  │
│  │ ○  Build a Todo App           [Complete][Delete]│  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  Total: 3                         Completed: 1       │
└──────────────────────────────────────────────────────┘
```

`✓` — tamamlanmış task (mətni üzərindən xətli), `○` — aktiv task. Bunlar vizual işarələrdir; HTML-də istənilən uyğun dizayn istifadə oluna bilər.

**Task əlavə etmə:**

```text
Input: "Study JavaScript"
          │
          ▼
     [ Add Task ]
          │
          ▼
 tasks Array-ə yeni Object əlavə olunur
          │
          ▼
 DOM-da yeni <li> görünür
          │
          ▼
 Total: 3  ─────────────►  Total: 4
```

**Tamamlama, silmə və filter:**

```text
[ Complete ] → completed: false → true → classList
[ Delete ]   → Array-dən sil → DOM-u yenilə
[ All ]      → bütün task-lar
[ Active ]   → yalnız completed: false
[ Completed ]→ yalnız completed: true
```

**Yoxlama ssenarisi:** 3 task yaradın → birini tamamlayın → `Completed` filter-i seçin → yalnız tamamlanmış task görünməlidir → həmin task-ı silin → sayğac yenilənməlidir.

### Başlanğıc kod

**HTML:**

```html
<form id="taskForm">
    <input id="taskInput" placeholder="Enter a task">
    <button type="submit">Add Task</button>
</form>

<div id="filters">
    <button data-filter="all">All</button>
    <button data-filter="active">Active</button>
    <button data-filter="completed">Completed</button>
</div>

<ul id="taskList"></ul>

<p id="totalTasks">Total: 0</p>
<p id="completedTasks">Completed: 0</p>
```

**JavaScript:**

```javascript
const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");

const filterButtons = document.querySelectorAll("[data-filter]");

let tasks = [];
let nextId = 1;

// Write your code here
```

### Bonus

`localStorage` istifadə edərək tapşırıqları brauzerdə saxlayın. Səhifə yeniləndikdə tapşırıqlar itməməlidir.

---

## Ümumi qaydalar

- Hər tapşırığı ayrıca qovluqda hazırlayın.
- HTML, CSS və JavaScript fayllarını ayrı saxlayın.
- DOM əməliyyatlarını JavaScript vasitəsilə yerinə yetirin.
- Event-ləri `addEventListener()` ilə idarə edin.
- Tapşırıqların əsas funksionallığını hazır kitabxanalardan istifadə etmədən hazırlayın.
- Kodları müxtəlif input və klik ssenariləri ilə yoxlayın.
- Başlanğıc kodu tamamlayın; hazır həll təqdim olunmur.

**GitHub repository adı:** `javascript-dom-challenges`
