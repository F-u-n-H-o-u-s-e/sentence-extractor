## Modules

<dl>
<dt><a href="#module_scanner">scanner</a></dt>
<dd><p>Сканер масиву тегів.
Забезпечує двосторонню навігацію в масиві тегів</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Token">Token</a></dt>
<dd><p>Клас тега</p>
</dd>
<dt><a href="#Scanner">Scanner</a></dt>
<dd><p>Клас сканера</p>
</dd>
</dl>

<a name="module_scanner"></a>

## scanner
Сканер масиву тегів.
Забезпечує двосторонню навігацію в масиві тегів

<a name="exp_module_scanner--module.exports"></a>

### module.exports(tokens) ⇒ [<code>Scanner</code>](#Scanner) ⏏
Повертає примірник [Scanner](#Scanner).

**Kind**: Exported function  
**Returns**: [<code>Scanner</code>](#Scanner) - примірник [Scanner](#Scanner)  

| Param | Type | Description |
| --- | --- | --- |
| tokens | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |

<a name="Token"></a>

## Token
Клас тега

**Kind**: global class  

* [Token](#Token)
    * [new Token(index, data, scanner)](#new_Token_new)
    * [.atLeft(count)](#Token+atLeft) ⇒ <code>token</code>
    * [.atRight(count)](#Token+atRight) ⇒ <code>token</code>
    * [.atIndex(pos)](#Token+atIndex) ⇒ <code>token</code>
    * [.next()](#Token+next) ⇒ <code>token</code>
    * [.prev()](#Token+prev) ⇒ <code>token</code>
    * [.arroundLeft(count)](#Token+arroundLeft) ⇒ <code>token</code>
    * [.arroundRight(count)](#Token+arroundRight) ⇒ <code>token</code>
    * [.arround(count)](#Token+arround) ⇒ <code>token</code>

<a name="new_Token_new"></a>

### new Token(index, data, scanner)
Створює примірник тега.


| Param | Type | Description |
| --- | --- | --- |
| index | <code>int</code> | Позиція в масиві. |
| data | <code>\*</code> | Значення тега. |
| scanner | [<code>Scanner</code>](#Scanner) | Посилання на [Scanner](#Scanner). |

<a name="Token+atLeft"></a>

### token.atLeft(count) ⇒ <code>token</code>
Повертає тег ліворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) ліворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | зміщення. |

<a name="Token+atRight"></a>

### token.atRight(count) ⇒ <code>token</code>
Повертає тег праворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) праворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | зміщення. |

<a name="Token+atIndex"></a>

### token.atIndex(pos) ⇒ <code>token</code>
Повертає тег на вказаній позиції

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) на позиції {pos}.  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>int</code> | позиція. |

<a name="Token+next"></a>

### token.next() ⇒ <code>token</code>
Повертає наступний тег

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Token+prev"></a>

### token.prev() ⇒ <code>token</code>
Повертає попередній тег

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Token+arroundLeft"></a>

### token.arroundLeft(count) ⇒ <code>token</code>
Повертає масив тегів ліворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Token+arroundRight"></a>

### token.arroundRight(count) ⇒ <code>token</code>
Повертає масив тегів праворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Token+arround"></a>

### token.arround(count) ⇒ <code>token</code>
Повертає масив тегів навколо

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner"></a>

## Scanner
Клас сканера

**Kind**: global class  

* [Scanner](#Scanner)
    * [new Scanner(tokens)](#new_Scanner_new)
    * [.token(pos)](#Scanner+token) ⇒ <code>token</code>
    * [.first()](#Scanner+first) ⇒ <code>token</code>
    * [.last()](#Scanner+last) ⇒ <code>token</code>
    * [.atLeft(token, count)](#Scanner+atLeft) ⇒ <code>token</code>
    * [.atRight(token, count)](#Scanner+atRight) ⇒ <code>token</code>
    * [.next(token)](#Scanner+next) ⇒ <code>token</code>
    * [.prev(token)](#Scanner+prev) ⇒ <code>token</code>
    * [.arroundLeft(token, count)](#Scanner+arroundLeft) ⇒ <code>token</code>
    * [.arroundRight(token, count)](#Scanner+arroundRight) ⇒ <code>token</code>
    * [.arround(token, count)](#Scanner+arround) ⇒ <code>token</code>

<a name="new_Scanner_new"></a>

### new Scanner(tokens)
Створює примірник сканера.


| Param | Type | Description |
| --- | --- | --- |
| tokens | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |

<a name="Scanner+token"></a>

### scanner.token(pos) ⇒ <code>token</code>
Повертає тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>int</code> | Порядковий номер тега в масиві (індекс). |

<a name="Scanner+first"></a>

### scanner.first() ⇒ <code>token</code>
Повертає перший тег масива

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Scanner+last"></a>

### scanner.last() ⇒ <code>token</code>
Повертає останній тег масива

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Scanner+atLeft"></a>

### scanner.atLeft(token, count) ⇒ <code>token</code>
Повертає тег ліворуч від поточного тега

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token) ліворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | зміщення. |

<a name="Scanner+atRight"></a>

### scanner.atRight(token, count) ⇒ <code>token</code>
Повертає тег праворуч від поточного тега

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token) праворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | зміщення. |

<a name="Scanner+next"></a>

### scanner.next(token) ⇒ <code>token</code>
Повертає наступний від поточного тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token), наступний за поточним.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |

<a name="Scanner+prev"></a>

### scanner.prev(token) ⇒ <code>token</code>
Повертає попередній від поточного тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token), попередній від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |

<a name="Scanner+arroundLeft"></a>

### scanner.arroundLeft(token, count) ⇒ <code>token</code>
Повертає масив тегів ліворуч від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), ліворуч від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner+arroundRight"></a>

### scanner.arroundRight(token, count) ⇒ <code>token</code>
Повертає масив тегів праворуч від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), праворуч від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner+arround"></a>

### scanner.arround(token, count) ⇒ <code>token</code>
Повертає масив тегів навколо від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), навколо від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

## Modules

<dl>
<dt><a href="#module_parser">parser</a></dt>
<dd><p>Парсер текстів на українській мові.
Перетворює вхідний масив тегів у вихідний масив тегів з використанням граматичних правил.</p>
</dd>
<dt><a href="#module_scanner">scanner</a></dt>
<dd><p>Сканер масиву тегів.
Забезпечує двосторонню навігацію в масиві тегів</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Token">Token</a></dt>
<dd><p>Клас тега</p>
</dd>
<dt><a href="#Scanner">Scanner</a></dt>
<dd><p>Клас сканера</p>
</dd>
</dl>

<a name="module_parser"></a>

## parser
Парсер текстів на українській мові.
Перетворює вхідний масив тегів у вихідний масив тегів з використанням граматичних правил.

<a name="exp_module_parser--module.exports"></a>

### module.exports(data, grammar) ⇒ <code>Promise</code> ⏏
Повертає масив тегів, отриманих в результаті перетворення на основі граматичних правил.

**Kind**: Exported function  
**Returns**: <code>Promise</code> - Проміс, який буде повертати масив тегів.  
**Throws**:

- <code>ParserException</code> "Iteration limit unbounded", якщо кількість ітерацій перевищує довжину вхідного масиву тегів


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |
| grammar | <code>Array.&lt;Rule&gt;</code> | Граматика (масив правил). |

<a name="module_scanner"></a>

## scanner
Сканер масиву тегів.
Забезпечує двосторонню навігацію в масиві тегів

<a name="exp_module_scanner--module.exports"></a>

### module.exports(tokens) ⇒ [<code>Scanner</code>](#Scanner) ⏏
Повертає примірник [Scanner](#Scanner).

**Kind**: Exported function  
**Returns**: [<code>Scanner</code>](#Scanner) - примірник [Scanner](#Scanner)  

| Param | Type | Description |
| --- | --- | --- |
| tokens | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |

<a name="Token"></a>

## Token
Клас тега

**Kind**: global class  

* [Token](#Token)
    * [new Token(index, data, scanner)](#new_Token_new)
    * [.atLeft(count)](#Token+atLeft) ⇒ <code>token</code>
    * [.atRight(count)](#Token+atRight) ⇒ <code>token</code>
    * [.atIndex(pos)](#Token+atIndex) ⇒ <code>token</code>
    * [.next()](#Token+next) ⇒ <code>token</code>
    * [.prev()](#Token+prev) ⇒ <code>token</code>
    * [.arroundLeft(count)](#Token+arroundLeft) ⇒ <code>token</code>
    * [.arroundRight(count)](#Token+arroundRight) ⇒ <code>token</code>
    * [.arround(count)](#Token+arround) ⇒ <code>token</code>

<a name="new_Token_new"></a>

### new Token(index, data, scanner)
Створює примірник тега.


| Param | Type | Description |
| --- | --- | --- |
| index | <code>int</code> | Позиція в масиві. |
| data | <code>\*</code> | Значення тега. |
| scanner | [<code>Scanner</code>](#Scanner) | Посилання на [Scanner](#Scanner). |

<a name="Token+atLeft"></a>

### token.atLeft(count) ⇒ <code>token</code>
Повертає тег ліворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) ліворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | зміщення. |

<a name="Token+atRight"></a>

### token.atRight(count) ⇒ <code>token</code>
Повертає тег праворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) праворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | зміщення. |

<a name="Token+atIndex"></a>

### token.atIndex(pos) ⇒ <code>token</code>
Повертає тег на вказаній позиції

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) на позиції {pos}.  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>int</code> | позиція. |

<a name="Token+next"></a>

### token.next() ⇒ <code>token</code>
Повертає наступний тег

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Token+prev"></a>

### token.prev() ⇒ <code>token</code>
Повертає попередній тег

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Token+arroundLeft"></a>

### token.arroundLeft(count) ⇒ <code>token</code>
Повертає масив тегів ліворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Token+arroundRight"></a>

### token.arroundRight(count) ⇒ <code>token</code>
Повертає масив тегів праворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Token+arround"></a>

### token.arround(count) ⇒ <code>token</code>
Повертає масив тегів навколо

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner"></a>

## Scanner
Клас сканера

**Kind**: global class  

* [Scanner](#Scanner)
    * [new Scanner(tokens)](#new_Scanner_new)
    * [.token(pos)](#Scanner+token) ⇒ <code>token</code>
    * [.first()](#Scanner+first) ⇒ <code>token</code>
    * [.last()](#Scanner+last) ⇒ <code>token</code>
    * [.atLeft(token, count)](#Scanner+atLeft) ⇒ <code>token</code>
    * [.atRight(token, count)](#Scanner+atRight) ⇒ <code>token</code>
    * [.next(token)](#Scanner+next) ⇒ <code>token</code>
    * [.prev(token)](#Scanner+prev) ⇒ <code>token</code>
    * [.arroundLeft(token, count)](#Scanner+arroundLeft) ⇒ <code>token</code>
    * [.arroundRight(token, count)](#Scanner+arroundRight) ⇒ <code>token</code>
    * [.arround(token, count)](#Scanner+arround) ⇒ <code>token</code>

<a name="new_Scanner_new"></a>

### new Scanner(tokens)
Створює примірник сканера.


| Param | Type | Description |
| --- | --- | --- |
| tokens | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |

<a name="Scanner+token"></a>

### scanner.token(pos) ⇒ <code>token</code>
Повертає тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>int</code> | Порядковий номер тега в масиві (індекс). |

<a name="Scanner+first"></a>

### scanner.first() ⇒ <code>token</code>
Повертає перший тег масива

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Scanner+last"></a>

### scanner.last() ⇒ <code>token</code>
Повертає останній тег масива

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Scanner+atLeft"></a>

### scanner.atLeft(token, count) ⇒ <code>token</code>
Повертає тег ліворуч від поточного тега

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token) ліворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | зміщення. |

<a name="Scanner+atRight"></a>

### scanner.atRight(token, count) ⇒ <code>token</code>
Повертає тег праворуч від поточного тега

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token) праворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | зміщення. |

<a name="Scanner+next"></a>

### scanner.next(token) ⇒ <code>token</code>
Повертає наступний від поточного тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token), наступний за поточним.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |

<a name="Scanner+prev"></a>

### scanner.prev(token) ⇒ <code>token</code>
Повертає попередній від поточного тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token), попередній від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |

<a name="Scanner+arroundLeft"></a>

### scanner.arroundLeft(token, count) ⇒ <code>token</code>
Повертає масив тегів ліворуч від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), ліворуч від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner+arroundRight"></a>

### scanner.arroundRight(token, count) ⇒ <code>token</code>
Повертає масив тегів праворуч від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), праворуч від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner+arround"></a>

### scanner.arround(token, count) ⇒ <code>token</code>
Повертає масив тегів навколо від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), навколо від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

## Modules

<dl>
<dt><a href="#module_parser">parser</a></dt>
<dd><p>Парсер текстів на українській мові.
Перетворює вхідний масив тегів у вихідний масив тегів з використанням граматичних правил.</p>
</dd>
<dt><a href="#module_scanner">scanner</a></dt>
<dd><p>Сканер масиву тегів.
Забезпечує двосторонню навігацію в масиві тегів</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Token">Token</a></dt>
<dd><p>Клас тега</p>
</dd>
<dt><a href="#Scanner">Scanner</a></dt>
<dd><p>Клас сканера</p>
</dd>
</dl>

<a name="module_parser"></a>

## parser
Парсер текстів на українській мові.
Перетворює вхідний масив тегів у вихідний масив тегів з використанням граматичних правил.

<a name="exp_module_parser--module.exports"></a>

### module.exports(data, grammar) ⇒ <code>Promise</code> ⏏
Повертає масив тегів, отриманих в результаті перетворення на основі граматичних правил.

**Kind**: Exported function  
**Returns**: <code>Promise</code> - Проміс, який буде повертати масив тегів.  
**Throws**:

- <code>ParserException</code> "Iteration limit unbounded", якщо кількість ітерацій перевищує довжину вхідного масиву тегів


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |
| grammar | <code>Array.&lt;Rule&gt;</code> | Граматика (масив правил). |

<a name="module_scanner"></a>

## scanner
Сканер масиву тегів.
Забезпечує двосторонню навігацію в масиві тегів

<a name="exp_module_scanner--module.exports"></a>

### module.exports(tokens) ⇒ [<code>Scanner</code>](#Scanner) ⏏
Повертає примірник [Scanner](#Scanner).

**Kind**: Exported function  
**Returns**: [<code>Scanner</code>](#Scanner) - примірник [Scanner](#Scanner)  

| Param | Type | Description |
| --- | --- | --- |
| tokens | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |

<a name="Token"></a>

## Token
Клас тега

**Kind**: global class  

* [Token](#Token)
    * [new Token(index, data, scanner)](#new_Token_new)
    * [.atLeft(count)](#Token+atLeft) ⇒ <code>token</code>
    * [.atRight(count)](#Token+atRight) ⇒ <code>token</code>
    * [.atIndex(pos)](#Token+atIndex) ⇒ <code>token</code>
    * [.next()](#Token+next) ⇒ <code>token</code>
    * [.prev()](#Token+prev) ⇒ <code>token</code>
    * [.arroundLeft(count)](#Token+arroundLeft) ⇒ <code>token</code>
    * [.arroundRight(count)](#Token+arroundRight) ⇒ <code>token</code>
    * [.arround(count)](#Token+arround) ⇒ <code>token</code>

<a name="new_Token_new"></a>

### new Token(index, data, scanner)
Створює примірник тега.


| Param | Type | Description |
| --- | --- | --- |
| index | <code>int</code> | Позиція в масиві. |
| data | <code>\*</code> | Значення тега. |
| scanner | [<code>Scanner</code>](#Scanner) | Посилання на [Scanner](#Scanner). |

<a name="Token+atLeft"></a>

### token.atLeft(count) ⇒ <code>token</code>
Повертає тег ліворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) ліворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | зміщення. |

<a name="Token+atRight"></a>

### token.atRight(count) ⇒ <code>token</code>
Повертає тег праворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) праворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | зміщення. |

<a name="Token+atIndex"></a>

### token.atIndex(pos) ⇒ <code>token</code>
Повертає тег на вказаній позиції

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token) на позиції {pos}.  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>int</code> | позиція. |

<a name="Token+next"></a>

### token.next() ⇒ <code>token</code>
Повертає наступний тег

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Token+prev"></a>

### token.prev() ⇒ <code>token</code>
Повертає попередній тег

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Token+arroundLeft"></a>

### token.arroundLeft(count) ⇒ <code>token</code>
Повертає масив тегів ліворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Token+arroundRight"></a>

### token.arroundRight(count) ⇒ <code>token</code>
Повертає масив тегів праворуч

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Token+arround"></a>

### token.arround(count) ⇒ <code>token</code>
Повертає масив тегів навколо

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>token</code> - -  Масив [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner"></a>

## Scanner
Клас сканера

**Kind**: global class  

* [Scanner](#Scanner)
    * [new Scanner(tokens)](#new_Scanner_new)
    * [.token(pos)](#Scanner+token) ⇒ <code>token</code>
    * [.first()](#Scanner+first) ⇒ <code>token</code>
    * [.last()](#Scanner+last) ⇒ <code>token</code>
    * [.atLeft(token, count)](#Scanner+atLeft) ⇒ <code>token</code>
    * [.atRight(token, count)](#Scanner+atRight) ⇒ <code>token</code>
    * [.next(token)](#Scanner+next) ⇒ <code>token</code>
    * [.prev(token)](#Scanner+prev) ⇒ <code>token</code>
    * [.arroundLeft(token, count)](#Scanner+arroundLeft) ⇒ <code>token</code>
    * [.arroundRight(token, count)](#Scanner+arroundRight) ⇒ <code>token</code>
    * [.arround(token, count)](#Scanner+arround) ⇒ <code>token</code>

<a name="new_Scanner_new"></a>

### new Scanner(tokens)
Створює примірник сканера.


| Param | Type | Description |
| --- | --- | --- |
| tokens | <code>Array.&lt;\*&gt;</code> | Вхідний масив тегів. |

<a name="Scanner+token"></a>

### scanner.token(pos) ⇒ <code>token</code>
Повертає тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>int</code> | Порядковий номер тега в масиві (індекс). |

<a name="Scanner+first"></a>

### scanner.first() ⇒ <code>token</code>
Повертає перший тег масива

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Scanner+last"></a>

### scanner.last() ⇒ <code>token</code>
Повертає останній тег масива

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token).  
<a name="Scanner+atLeft"></a>

### scanner.atLeft(token, count) ⇒ <code>token</code>
Повертає тег ліворуч від поточного тега

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token) ліворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | зміщення. |

<a name="Scanner+atRight"></a>

### scanner.atRight(token, count) ⇒ <code>token</code>
Повертає тег праворуч від поточного тега

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token) праворуч від поточного на {count} позиції.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | зміщення. |

<a name="Scanner+next"></a>

### scanner.next(token) ⇒ <code>token</code>
Повертає наступний від поточного тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token), наступний за поточним.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |

<a name="Scanner+prev"></a>

### scanner.prev(token) ⇒ <code>token</code>
Повертає попередній від поточного тег

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Примірник [token](token), попередній від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |

<a name="Scanner+arroundLeft"></a>

### scanner.arroundLeft(token, count) ⇒ <code>token</code>
Повертає масив тегів ліворуч від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), ліворуч від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner+arroundRight"></a>

### scanner.arroundRight(token, count) ⇒ <code>token</code>
Повертає масив тегів праворуч від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), праворуч від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

<a name="Scanner+arround"></a>

### scanner.arround(token, count) ⇒ <code>token</code>
Повертає масив тегів навколо від поточного

**Kind**: instance method of [<code>Scanner</code>](#Scanner)  
**Returns**: <code>token</code> - -  Масив [token](token), навколо від поточного.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>token</code> | поточний [token](token). |
| count | <code>int</code> | Розмір вікна. |

