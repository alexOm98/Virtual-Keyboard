document.body.innerHTML = `    <div class="wrap">
<div class="title">Virtual Keyboard</div>
<textarea class="texarr " autofocus onblur="this.focus()"></textarea>
<div class="keyboard">
    <div class="keyboard-row">
        <div class="key Backquote">
            <span class="ru-lang none">
                <span class="small">ё</span>
                <span class="big none">Ё</span>
                <span class="caps none">Ё</span>
                <span class="smallcaps none">ё</span>
            </span>
            <span class="en-lang">
                <span class="small" id='quote'></span>
                <span class="big none">~</span>
                <span class="caps none" id='quote2'></span>
                <span class="smallcaps none">~</span>
            </span>
        </div>
        <div class="key Digit1">
            <span class="ru-lang none">
                <span class="small">1</span>
                <span class="big none">!</span>
                <span class="caps none">1</span>
                <span class="smallcaps none">!</span>
                </span>
            </span>
            <span class="en-lang">
                <span class="small">1</span>
                <span class="big none">!</span>
                <span class="caps none">1</span>
                <span class="smallcaps none">!</span>
            </span>
        </div>
        <div class="key Digit2">
            <span class="ru-lang none">
                <span class="small">2</span>
                <span class="big none">"</span>
                <span class="caps none">2</span>
                <span class="smallcaps none">"</span>
            </span>
            <span class="en-lang">
                <span class="small">2</span>
                <span class="big none">@</span>
                <span class="caps none">2</span>
                <span class="smallcaps none">@</span>
            </span>
        </div>
        <div class="key Digit3">
            <span class="ru-lang none">
                <span class="small">3</span>
                <span class="big none">№</span>
                <span class="caps none">3</span>
                <span class="smallcaps none">№</span>
            </span>
            <span class="en-lang">
                <span class="small">3</span>
                <span class="big none">#</span>
                <span class="caps none">3</span>
                <span class="smallcaps none">#</span>
            </span>
        </div>
        <div class="key Digit4">
            <span class="ru-lang none">
                <span class="small">4</span>
                <span class="big none">;</span>
                <span class="caps none">4</span>
                <span class="smallcaps none">;</span>
            </span>
            <span class="en-lang">
                <span class="small">4</span>
                <span class="big none">$</span>
                <span class="caps none">4</span>
                <span class="smallcaps none">$</span>
            </span>
        </div>
        <div class="key Digit5">
            <span class="ru-lang none">
                <span class="small">5</span>
                <span class="big none">%</span>
                <span class="caps none">5</span>
                <span class="smallcaps none">%</span>
            </span>
            <span class="en-lang">
                <span class="small">5</span>
                <span class="big none">%</span>
                <span class="caps none">5</span>
                <span class="smallcaps none">%</span>
            </span>
        </div>
        <div class="key Digit6">
            <span class="ru-lang none">
                <span class="small">6</span>
                <span class="big none">:</span>
                <span class="caps none">6</span>
                <span class="smallcaps none">:</span>
            </span>
            <span class="en-lang">
                <span class="small">6</span>
                <span class="big none">^</span>
                <span class="caps none">6</span>
                <span class="smallcaps none">^</span>
            </span>
        </div>
        <div class="key Digit7">
            <span class="ru-lang none">
                <span class="small">7</span>
                <span class="big none">?</span>
                <span class="caps none">7</span>
                <span class="smallcaps none">?</span>
            </span>
            <span class="en-lang">
                <span class="small">7</span>
                <span class="big none">&</span>
                <span class="caps none">7</span>
                <span class="smallcaps none">&</span>
            </span>
        </div>
        <div class="key Digit8">
            <span class="ru-lang none">
                <span class="small">8</span>
                <span class="big none">*</span>
                <span class="caps none">8</span>
                <span class="smallcaps none">*</span>
            </span>
            <span class="en-lang">
                <span class="small">8</span>
                <span class="big none">*</span>
                <span class="caps none">8</span>
                <span class="smallcaps none">*</span>
            </span>
        </div>
        <div class="key Digit9">
            <span class="ru-lang none">
                <span class="small">9</span>
                <span class="big none">(</span>
                <span class="caps none">9</span>
                <span class="smallcaps none">(</span>
            </span>
            <span class="en-lang">
                <span class="small">9</span>
                <span class="big none">(</span>
                <span class="caps none">9</span>
                <span class="smallcaps none">(</span>
            </span>
        </div>
        <div class="key Digit0">
            <span class="ru-lang none">
                <span class="small">0</span>
                <span class="big none">)</span>
                <span class="caps none">0</span>
                <span class="smallcaps none">)</span>
            </span>
            <span class="en-lang">
                <span class="small">0</span>
                <span class="big none">)</span>
                <span class="caps none">0</span>
                <span class="smallcaps none">)</span>
            </span>
        </div>
        <div class="key Minus">
            <span class="ru-lang none">
                <span class="small">-</span>
                <span class="big none">_</span>
                <span class="caps none">-</span>
                <span class="smallcaps none">_</span>
            </span>
            <span class="en-lang">
                <span class="small">-</span>
                <span class="big none">_</span>
                <span class="caps none">-</span>
                <span class="smallcaps none">_</span>
            </span>
        </div>
        <div class="key Equal">
            <span class="ru-lang none">
                <span class="small">=</span>
                <span class="big none">+</span>
                <span class="caps none">=</span>
                <span class="smallcaps none">+</span>
            </span>
            <span class="en-lang">
                <span class="small">=</span>
                <span class="big none">+</span>
                <span class="caps none">=</span>
                <span class="smallcaps none">+</span>
            </span>
        </div>
        <div class="key Backspace">
            <span class="ru-lang none">
                <span class="small">Backspace</span>
                <span class="big none">Backspace</span>
                <span class="caps none">Backspace</span>
                <span class="smallcaps none">Backspace</span>
            </span>
            <span class="en-lang">
                <span class="small">Backspace</span>
                <span class="big none">Backspace</span>
                <span class="caps none">Backspace</span>
                <span class="smallcaps none">Backspace</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="key Tab">
            <span class="ru-lang none">
                <span class="small">Tab</span>
                <span class="big none">Tab</span>
                <span class="caps none">Tab</span>
                <span class="smallcaps none">Tab</span>
            </span>
            <span class="en-lang">
                <span class="small">Tab</span>
                <span class="big none">Tab</span>
                <span class="caps none">Tab</span>
                <span class="smallcaps none">Tab</span>
            </span>
        </div>
        <div class="key KeyQ">
            <span class="ru-lang none">
                <span class="small">й</span>
                <span class="big none">Й</span>
                <span class="caps none">Й</span>
                <span class="smallcaps none">й</span>
            </span>
            <span class="en-lang">
                <span class="small">q</span>
                <span class="big none ">Q</span>
                <span class="caps none">Q</span>
                <span class="smallcaps none">q</span>
            </span>
        </div>
        <div class="key KeyW">
            <span class="ru-lang none">
                <span class="small">ц</span>
                <span class="big none">Ц</span>
                <span class="caps none">Ц</span>
                <span class="smallcaps none">ц</span>
            </span>
            <span class="en-lang">
                <span class="small">w</span>
                <span class="big none">W</span>
                <span class="caps none">W</span>
                <span class="smallcaps none">w</span>
            </span>
        </div>
        <div class="key KeyE">
            <span class="ru-lang none">
                <span class="small">у</span>
                <span class="big none">У</span>
                <span class="caps none">У</span>
                <span class="smallcaps none">у</span>
            </span>
            <span class="en-lang">
                <span class="small">e</span>
                <span class="big none">E</span>
                <span class="caps none">E</span>
                <span class="smallcaps none">e</span>
            </span>
        </div>
        <div class="key KeyR">
            <span class="ru-lang none">
                <span class="small">к</span>
                <span class="big none">К</span>
                <span class="caps none">К</span>
                <span class="smallcaps none">к</span>
            </span>
            <span class="en-lang">
                <span class="small">r</span>
                <span class="big none">R</span>
                <span class="caps none">R</span>
                <span class="smallcaps none">r</span>
            </span>
        </div>
        <div class="key KeyT">
            <span class="ru-lang none">
                <span class="small">е</span>
                <span class="big none">Е</span>
                <span class="caps none">Е</span>
                <span class="smallcaps none">е</span>
            </span>
            <span class="en-lang">
                <span class="small">t</span>
                <span class="big none">T</span>
                <span class="caps none">T</span>
                <span class="smallcaps none">t</span>
            </span>
        </div>
        <div class="key KeyY">
            <span class="ru-lang none">
                <span class="small">н</span>
                <span class="big none">Н</span>
                <span class="caps none">Н</span>
                <span class="smallcaps none">н</span>
            </span>
            <span class="en-lang">
                <span class="small">y</span>
                <span class="big none">Y</span>
                <span class="caps none">Y</span>
                <span class="smallcaps none">y</span>
            </span>
        </div>
        <div class="key KeyU">
            <span class="ru-lang none">
                <span class="small">г</span>
                <span class="big none">Г</span>
                <span class="caps none">Г</span>
                <span class="smallcaps none">г</span>
            </span>
            <span class="en-lang">
                <span class="small">u</span>
                <span class="big none">U</span>
                <span class="caps none">U</span>
                <span class="smallcaps none">u</span>
            </span>
        </div>
        <div class="key KeyI">
            <span class="ru-lang none">
                <span class="small">ш</span>
                <span class="big none">Ш</span>
                <span class="caps none">Ш</span>
                <span class="smallcaps none">ш</span>
            </span>
            <span class="en-lang">
                <span class="small">i</span>
                <span class="big none">I</span>
                <span class="caps none">I</span>
                <span class="smallcaps none">i</span>
            </span>
        </div>
        <div class="key KeyO">
            <span class="ru-lang none">
                <span class="small">щ</span>
                <span class="big none">Щ</span>
                <span class="caps none">Щ</span>
                <span class="smallcaps none">щ</span>
            </span>
            <span class="en-lang">
                <span class="small">o</span>
                <span class="big none">O</span>
                <span class="caps none">O</span>
                <span class="smallcaps none">o</span>
            </span>
        </div>
        <div class="key KeyP">
            <span class="ru-lang none">
                <span class="small">з</span>
                <span class="big none">З</span>
                <span class="caps none">З</span>
                <span class="smallcaps none">з</span>
            </span>
            <span class="en-lang">
                <span class="small">p</span>
                <span class="big none">P</span>
                <span class="caps none">P</span>
                <span class="smallcaps none">p</span>
            </span>
        </div>
        <div class="key BracketLeft">
            <span class="ru-lang none">
                <span class="small">х</span>
                <span class="big none">Х</span>
                <span class="caps none">Х</span>
                <span class="smallcaps none">х</span>
            </span>
            <span class="en-lang">
                <span class="small">[</span>
                <span class="big none">{</span>
                <span class="caps none">[</span>
                <span class="smallcaps none">{</span>
            </span>
        </div>
        <div class="key BracketRight">
            <span class="ru-lang none">
                <span class="small">ъ</span>
                <span class="big none">Ъ</span>
                <span class="caps none">Ъ</span>
                <span class="smallcaps none">ъ</span>
            </span>
            <span class="en-lang">
                <span class="small">]</span>
                <span class="big none">}</span>
                <span class="caps none">]</span>
                <span class="smallcaps none">}</span>
            </span>
        </div>
        <div class="key Backslash">
            <span class="ru-lang none">
                <span class="small">\\</span>
                <span class="big none">/</span>
                <span class="caps none">\\</span>
                <span class="smallcaps none">/</span>
            </span>
            <span class="en-lang">
                <span class="small">\\</span>
                <span class="big none">|</span>
                <span class="caps none">\\</span>
                <span class="smallcaps none">|</span>
            </span>
        </div>
        <div class="key Delete">
            <span class="ru-lang none">
                <span class="small">Delete</span>
                <span class="big none">Delete</span>
                <span class="caps none">Delete</span>
                <span class="smallcaps none">Delete</span>
            </span>
            <span class="en-lang">
                <span class="small">Delete</span>
                <span class="big none">Delete</span>
                <span class="caps none">Delete</span>
                <span class="smallcaps none">Delete</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="key CapsLock">
            <span class="ru-lang none">
                <span class="small">Caps Lock</span>
                <span class="big none">Caps Lock</span>
                <span class="caps none">Caps Lock</span>
                <span class="smallcaps none">Caps Lock</span>
            </span>
            <span class="en-lang">
                <span class="small">Caps Lock</span>
                <span class="big none">Caps Lock</span>
                <span class="caps none">Caps Lock</span>
                <span class="smallcaps none">Caps Lock</span>
            </span>
        </div>
        <div class="key KeyA">
            <span class="ru-lang none">
                <span class="small">ф</span>
                <span class="big none">Ф</span>
                <span class="caps none">Ф</span>
                <span class="smallcaps none">ф</span>
            </span>
            <span class="en-lang">
                <span class="small">a</span>
                <span class="big none">A</span>
                <span class="caps none">A</span>
                <span class="smallcaps none">a</span>
            </span>
        </div>
        <div class="key KeyS">
            <span class="ru-lang none">
                <span class="small">ы</span>
                <span class="big none">Ы</span>
                <span class="caps none">Ы</span>
                <span class="smallcaps none">ы</span>
            </span>
            <span class="en-lang">
                <span class="small">s</span>
                <span class="big none">S</span>
                <span class="caps none">S</span>
                <span class="smallcaps none">s</span>
            </span>
        </div>
        <div class="key KeyD">
            <span class="ru-lang none">
                <span class="small">в</span>
                <span class="big none">В</span>
                <span class="caps none">В</span>
                <span class="smallcaps none">в</span>
            </span>
            <span class="en-lang">
                <span class="small">d</span>
                <span class="big none">D</span>
                <span class="caps none">D</span>
                <span class="smallcaps none">d</span>
            </span>
        </div>
        <div class="key KeyF">
            <span class="ru-lang none">
                <span class="small">а</span>
                <span class="big none">А</span>
                <span class="caps none">А</span>
                <span class="smallcaps none">а</span>
            </span>
            <span class="en-lang">
                <span class="small">f</span>
                <span class="big none">F</span>
                <span class="caps none">F</span>
                <span class="smallcaps none">f</span>
            </span>
        </div>
        <div class="key KeyG">
            <span class="ru-lang none">
                <span class="small">п</span>
                <span class="big none">П</span>
                <span class="caps none">П</span>
                <span class="smallcaps none">п</span>
            </span>
            <span class="en-lang">
                <span class="small">g</span>
                <span class="big none">G</span>
                <span class="caps none">G</span>
                <span class="smallcaps none">g</span>
            </span>
        </div>
        <div class="key KeyH">
            <span class="ru-lang none">
                <span class="small">р</span>
                <span class="big none">Р</span>
                <span class="caps none">Р</span>
                <span class="smallcaps none">р</span>
            </span>
            <span class="en-lang">
                <span class="small">h</span>
                <span class="big none">H</span>
                <span class="caps none">H</span>
                <span class="smallcaps none">h</span>
            </span>
        </div>
        <div class="key KeyJ">
            <span class="ru-lang none">
                <span class="small">о</span>
                <span class="big none">О</span>
                <span class="caps none">О</span>
                <span class="smallcaps none">о</span>
            </span>
            <span class="en-lang">
                <span class="small">j</span>
                <span class="big none">J</span>
                <span class="caps none">J</span>
                <span class="smallcaps none">j</span>
            </span>
        </div>
        <div class="key KeyK">
            <span class="ru-lang none">
                <span class="small">л</span>
                <span class="big none">Л</span>
                <span class="caps none">Л</span>
                <span class="smallcaps none">л</span>
            </span>
            <span class="en-lang">
                <span class="small">k</span>
                <span class="big none">K</span>
                <span class="caps none">K</span>
                <span class="smallcaps none">k</span>
            </span>
        </div>
        <div class="key KeyL">
            <span class="ru-lang none">
                <span class="small">д</span>
                <span class="big none">Д</span>
                <span class="caps none">Д</span>
                <span class="smallcaps none">д</span>
            </span>
            <span class="en-lang">
                <span class="small">l</span>
                <span class="big none">L</span>
                <span class="caps none">L</span>
                <span class="smallcaps none">l</span>
            </span>
        </div>
        <div class="key Semicolon">
            <span class="ru-lang none">
                <span class="small">ж</span>
                <span class="big none">Ж</span>
                <span class="caps none">Ж</span>
                <span class="smallcaps none">ж</span>
            </span>
            <span class="en-lang">
                <span class="small">;</span>
                <span class="big none">:</span>
                <span class="caps none">;</span>
                <span class="smallcaps none">:</span>
            </span>
        </div>
        <div class="key Quote">
            <span class="ru-lang none">
                <span class="small">э</span>
                <span class="big none">Э</span>
                <span class="caps none">Э</span>
                <span class="smallcaps none">э</span>
            </span>
            <span class="en-lang">
                <span class="small">'</span>
                <span class="big none">"</span>
                <span class="caps none">'</span>
                <span class="smallcaps none">"</span>
            </span>
        </div>
        <div class="key Enter">
            <span class="ru-lang none">
                <span class="small">Enter</span>
                <span class="big none">Enter</span>
                <span class="caps none">Enter</span>
                <span class="smallcaps none">Enter</span>
            </span>
            <span class="en-lang">
                <span class="small">Enter</span>
                <span class="big none">Enter</span>
                <span class="caps none">Enter</span>
                <span class="smallcaps none">Enter</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="key ShiftLeft">
                <span class="ru-lang none">
                <span class="small">Shift</span>
                <span class="big none">Shift</span>
                <span class="caps none">Shift</span>
                <span class="smallcaps none">Shift</span>
            </span>
            <span class="en-lang">
                <span class="small ">Shift</span>
                <span class="big none">Shift</span>
                <span class="caps none">Shift</span>
                <span class="smallcaps none">Shift</span>
            </span>
        </div>
        <div class="key KeyZ">
            <span class="ru-lang none">
                <span class="small">я</span>
                <span class="big none">Я</span>
                <span class="caps none">Я</span>
                <span class="smallcaps none">я</span>
            </span>
            <span class="en-lang">
                <span class="small">z</span>
                <span class="big none">Z</span>
                <span class="caps none">Z</span>
                <span class="smallcaps none">z</span>
            </span>
        </div>
        <div class="key KeyX">
             <span class="ru-lang none">
                <span class="small">ч</span>
                <span class="big none">Ч</span>
                <span class="caps none">Ч</span>
                <span class="smallcaps none">ч</span>
            </span>
            <span class="en-lang">
                <span class="small">x</span>
                <span class="big none">X</span>
                <span class="caps none">X</span>
                <span class="smallcaps none">x</span>
            </span>
        </div>
        <div class="key KeyC">
            <span class="ru-lang none">
                <span class="small">с</span>
                <span class="big none">С</span>
                <span class="caps none">С</span>
                <span class="smallcaps none">с</span>
            </span>
            <span class="en-lang">
                <span class="small">c</span>
                <span class="big none">C</span>
                <span class="caps none">C</span>
                <span class="smallcaps none">c</span>
            </span>
        </div>
        <div class="key KeyV">
            <span class="ru-lang none">
                <span class="small">м</span>
                <span class="big none">М</span>
                <span class="caps none">М</span>
                <span class="smallcaps none">м</span>
            </span>
            <span class="en-lang">
                <span class="small">v</span>
                <span class="big none">V</span>
                <span class="caps none">V</span>
                <span class="smallcaps none">v</span>
            </span>
        </div>
        <div class="key KeyB">
            <span class="ru-lang none">
                <span class="small">и</span>
                <span class="big none">И</span>
                <span class="caps none">И</span>
                <span class="smallcaps none">и</span>
            </span>
            <span class="en-lang">
                <span class="small">b</span>
                <span class="big none">B</span>
                <span class="caps none">B</span>
                <span class="smallcaps none">b</span>
            </span>
        </div>
        <div class="key KeyN">
            <span class="ru-lang none">
                <span class="small">т</span>
                <span class="big none">Т</span>
                <span class="caps none">Т</span>
                <span class="smallcaps none">т</span>
            </span>
            <span class="en-lang">
                <span class="small">n</span>
                <span class="big none">N</span>
                <span class="caps none">N</span>
                <span class="smallcaps none">n</span>
            </span>
        </div>
        <div class="key KeyM">
            <span class="ru-lang none">
                <span class="small">ь</span>
                <span class="big none">Ь</span>
                <span class="caps none">Ь</span>
                <span class="smallcaps none">ь</span>
            </span>
            <span class="en-lang">
                <span class="small">m</span>
                <span class="big none">M</span>
                <span class="caps none">M</span>
                <span class="smallcaps none">m</span>
            </span>
        </div>
        <div class="key Comma">
            <span class="ru-lang none">
                <span class="small">б</span>
                <span class="big none">Б</span>
                <span class="caps none">Б</span>
                <span class="smallcaps none">б</span>
            </span>
            <span class="en-lang">
                <span class="small">,</span>
                <span class="big none"><</span>
                <span class="caps none">,</span>
                <span class="smallcaps none"><</span>
            </span>
        </div>
        <div class="key Period">
            <span class="ru-lang none">
                <span class="small">ю</span>
                <span class="big none">Ю</span>
                <span class="caps none">Ю</span>
                <span class="smallcaps none">ю</span>
            </span>
            <span class="en-lang">
                <span class="small">.</span>
                <span class="big none">></span>
                <span class="caps none">.</span>
                <span class="smallcaps none">></span>
            </span>
        </div>
        <div class="key Slash">
            <span class="ru-lang none">
                <span class="small">.</span>
                <span class="big none">,</span>
                <span class="caps none">.</span>
                <span class="smallcaps none">,</span>
            </span>
            <span class="en-lang">
                <span class="small">/</span>
                <span class="big none">?</span>
                <span class="caps none">/</span>
                <span class="smallcaps none">?</span>
            </span>
        </div>
        <div class="key ArrowUp">
            <span class="ru-lang none">
                <span class="small">▲</span>
                <span class="big none">▲</span>
                <span class="caps none">▲</span>
                <span class="smallcaps none">▲</span>
            </span>
            <span class="en-lang">
                <span class="small">▲</span>
                <span class="big none">▲</span>
                <span class="caps none">▲</span>
                <span class="smallcaps none">▲</span>
            </span>
        </div>
        <div class="key ShiftRight">
            <span class="ru-lang none">
                <span class="small">Shift</span>
                <span class="big none">Shift</span>
                <span class="caps none">Shift</span>
                <span class="smallcaps none">Shift</span>
            </span>
            <span class="en-lang">
                <span class="small">Shift</span>
                <span class="big none">Shift</span>
                <span class="caps none">Shift</span>
                <span class="smallcaps none">Shift</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="key ControlLeft">
            <span class="ru-lang none">
                <span class="small">Ctrl</span>
                <span class="big none">Ctrl</span>
                <span class="caps none">Ctrl</span>
                <span class="smallcaps none">Ctrl</span>
            </span>
            <span class="en-lang">
                <span class="small">Ctrl</span>
                <span class="big none">Ctrl</span>
                <span class="caps none">Ctrl</span>
                <span class="smallcaps none">Ctrl</span>
            </span>
        </div>
        <div class="key MetaLeft">
            <span class="ru-lang none">
                <span class="small">Win</span>
                <span class="big none">Win</span>
                <span class="caps none">Win</span>
                <span class="smallcaps none">Win</span>
            </span>
            <span class="en-lang">
                <span class="small">Win</span>
                <span class="big none">Win</span>
                <span class="caps none">Win</span>
                <span class="smallcaps none">Win</span>
            </span>
        </div>
        <div class="key AltLeft">
            <span class="ru-lang none">
                <span class="small">Alt</span>
                <span class="big none">Alt</span>
                <span class="caps none">Alt</span>
                <span class="smallcaps none">Alt</span>
            </span>
            <span class="en-lang">
                <span class="small">Alt</span>
                <span class="big none">Alt</span>
                <span class="caps none">Alt</span>
                <span class="smallcaps none">Alt</span>
            </span>
        </div>
        <div class="key Space">
            <span class="ru-lang none">
                <span class="small"></span>
                <span class="big none"></span>
                <span class="caps none"></span>
                <span class="smallcaps none"></span>
            </span>
            <span class="en-lang">
                <span class="small"></span>
                <span class="big none"></span>
                <span class="caps none"></span>
                <span class="smallcaps none"></span>
            </span>
        </div>
        <div class="key AltRight">
            <span class="ru-lang none">
                <span class="small">Alt</span>
                <span class="big none">Alt</span>
                <span class="caps none">Alt</span>
                <span class="smallcaps none">Alt</span>
            </span>
            <span class="en-lang">
                <span class="small">Alt</span>
                <span class="big none">Alt</span>
                <span class="caps none">Alt</span>
                <span class="smallcaps none">Alt</span>
            </span>
        </div>
        <div class="key ControlRight">
            <span class="ru-lang none">
                <span class="small">Ctrl</span>
                <span class="big none">Ctrl</span>
                <span class="caps none">Ctrl</span>
                <span class="smallcaps none">Ctrl</span>
            </span>
            <span class="en-lang">
                <span class="small">Ctrl</span>
                <span class="big none">Ctrl</span>
                <span class="caps none">Ctrl</span>
                <span class="smallcaps none">Ctrl</span>
            </span>
        </div>
        <div class="key ArrowLeft">
            <span class="ru-lang none">
                <span class="small">◄</span>
                <span class="big none">◄</span>
                <span class="caps none">◄</span>
                <span class="smallcaps none">◄</span>
            </span>
            <span class="en-lang">
                <span class="small">◄</span>
                <span class="big none">◄</span>
                <span class="caps none">◄</span>
                <span class="smallcaps none">◄</span>
            </span>
        </div>
        <div class="key ArrowDown">
            <span class="ru-lang none">
                <span class="small">▼</span>
                <span class="big none">▼</span>
                <span class="caps none">▼</span>
                <span class="smallcaps none">▼</span>
            </span>
            <span class="en-lang">
                <span class="small">▼</span>
                <span class="big none">▼</span>
                <span class="caps none">▼</span>
                <span class="smallcaps none">▼</span>
            </span>
        </div>
        <div class="key ArrowRight">
            <span class="ru-lang none">
                <span class="small">►</span>
                <span class="big none">►</span>
                <span class="caps none">►</span>
                <span class="smallcaps none">►</span>
            </span>
            <span class="en-lang">
                <span class="small">►</span>
                <span class="big none">►</span>
                <span class="caps none">►</span>
                <span class="smallcaps none">►</span>
            </span>
        </div>
    </div>
    
</div>
<p class="description">Клавиатура создана в операционной системе Windows.</p>
<p class="description">Для переключения языка нажмите: левый Сtrl +  левый Alt.</p>
</div>`;
document.getElementById('quote').innerHTML = '`';
document.getElementById('quote2').innerHTML = '`';
const allKeys = document.querySelectorAll('.key');
const textArea = document.querySelector('.texarr');
const small = document.querySelectorAll('.small');
const big = document.querySelectorAll('.big');
const caps = document.querySelectorAll('.caps');
const smallCaps = document.querySelectorAll('.smallcaps');
const keyCaspLock = document.querySelector('.CapsLock');
const allRu = document.querySelectorAll('.ru-lang');
const allEn = document.querySelectorAll('.en-lang');
let lang = 'en';
class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
  }

  find(element) {
    return this.arr.includes(element);
  }

  emptify() {
    while (this.arr.length > 0) {
      this.arr.pop();
    }
    return this.arr;
  }
}
const stack = new Stack();
for (let i = 0; i < allKeys.length; i += 1) {
  allKeys[i].addEventListener('click', () => {
    if (allKeys[i].innerText === 'Backspace') {
      textArea.setRangeText(
        '',
        textArea.selectionStart - 1,
        textArea.selectionStart,
        'end',
      );
    } else if (allKeys[i].innerText === 'Enter') {
      textArea.setRangeText(
        '\n',
        textArea.selectionStart,
        textArea.selectionStart,
        'end',
      );
    } else if (allKeys[i].innerText === 'Tab') {
      textArea.setRangeText(
        '     ',
        textArea.selectionStart,
        textArea.selectionStart,
        'end',
      );
    } else if (allKeys[i].innerText === 'Delete') {
      textArea.setRangeText(
        '',
        textArea.selectionStart,
        textArea.selectionStart + 1,
        'end',
      );
    } else if (allKeys[i].innerText === '') {
      textArea.setRangeText(
        ' ',
        textArea.selectionStart,
        textArea.selectionStart,
        'end',
      );
    } else if (allKeys[i].innerText === 'Win' || allKeys[i].innerText === 'Ctrl' || allKeys[i].innerText === 'Alt') {
      textArea.value += '';
    } else if (allKeys[i].innerText === 'Caps Lock') {
      if (keyCaspLock.classList.contains('is-active')) {
        keyCaspLock.classList.remove('is-active');
        for (let j = 0; j < small.length; j += 1) {
          small[j].style.display = 'block';
          big[j].style.display = 'none';
          caps[j].style.display = 'none';
          smallCaps[j].style.display = 'none';
        }
      } else {
        keyCaspLock.classList.add('is-active');
        for (let j = 0; j < small.length; j += 1) {
          small[j].style.display = 'none';
          big[j].style.display = 'none';
          caps[j].style.display = 'block';
          smallCaps[j].style.display = 'none';
        }
      }
    } else {
      textArea.setRangeText(
        `${allKeys[i].innerText}`,
        textArea.selectionStart,
        textArea.selectionStart,
        'end',
      );
    }
  });
  allKeys[i].addEventListener('mousedown', () => {
    if (allKeys[i].innerText !== 'Caps Lock') {
      allKeys[i].classList.add('is-active');
    }
  });
  allKeys[i].addEventListener('mouseup', () => {
    if (allKeys[i].innerText !== 'Caps Lock') {
      allKeys[i].classList.remove('is-active');
    }
  });
}
document.addEventListener('keydown', (event) => {
  const lSE = ['`', '2', '3', '4', '6', '7', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
  const lSEC = ['`', '2', '3', '4', '6', '7', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
  const lSES = ['~', '@', '#', '$', '^', '&', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];
  const lSECS = ['~', '@', '#', '$', '^', '&', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];

  const lSR = ['ё', '2', '3', '4', '6', '7', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
  const lSRC = ['Ё', '2', '3', '4', '6', '7', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.'];
  const lSRS = ['Ё', '"', '№', ';', ':', '?', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','];
  const lSRCS = ['ё', '"', '№', ';', ':', '?', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','];
  const allSymbolsKeys = [...lSE, ...lSEC, ...lSES, ...lSECS, ...lSR, ...lSRC, ...lSRS, ...lSRCS];
  if (event.code === 'Tab') {
    event.preventDefault();
    textArea.setRangeText(
      '     ',
      textArea.selectionStart,
      textArea.selectionStart,
      'end',
    );
  }
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }
  stack.push(event.code);
  if (stack.find('ControlLeft') && event.code === 'AltLeft') {
    if (lang === 'en') {
      for (let i = 0; i < allRu.length; i += 1) {
        allRu[i].style.display = 'block';
        allEn[i].style.display = 'none';
      }
      lang = 'ru';
    } else {
      for (let i = 0; i < allEn.length; i += 1) {
        allRu[i].style.display = 'none';
        allEn[i].style.display = 'block';
      }
      lang = 'en';
    }
  }
  if (stack.find('AltLeft') && event.code === 'ControlLeft') {
    if (lang === 'en') {
      for (let i = 0; i < allRu.length; i += 1) {
        allRu[i].style.display = 'block';
        allEn[i].style.display = 'none';
      }
      lang = 'ru';
    } else {
      for (let i = 0; i < allEn.length; i += 1) {
        allRu[i].style.display = 'none';
        allEn[i].style.display = 'block';
      }
      lang = 'en';
    }
  }
  if (event.code === 'CapsLock') {
    if (keyCaspLock.classList.contains('is-active')) {
      keyCaspLock.classList.remove('is-active');
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'block';
        big[i].style.display = 'none';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'none';
      }
    } else {
      keyCaspLock.classList.add('is-active');
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'none';
        caps[i].style.display = 'block';
        smallCaps[i].style.display = 'none';
      }
    }
  } else document.querySelector(`.${event.code}`).classList.add('is-active');

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (document.querySelector('.CapsLock').classList.contains('is-active')) {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'none';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'block';
      }
    } else {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'block';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'none';
      }
    }
  }
  if (allSymbolsKeys.includes(event.key)) {
    const letter = document.querySelector(`.${event.code}`).innerText;
    event.preventDefault();
    textArea.setRangeText(
      letter,
      textArea.selectionStart,
      textArea.selectionStart,
      'end',
    );
  }
});
document.addEventListener('keyup', (event) => {
  stack.emptify();
  if (event.code !== 'CapsLock') {
    document.querySelector(`.${event.code}`).classList.remove('is-active');
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (document.querySelector('.CapsLock').classList.contains('is-active')) {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'none';
        caps[i].style.display = 'block';
        smallCaps[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'block';
        big[i].style.display = 'none';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'none';
      }
    }
  }
});
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    if (lang === 'en') {
      for (let i = 0; i < allRu.length; i += 1) {
        allRu[i].style.display = 'none';
        allEn[i].style.display = 'block';
      }
    } else {
      for (let i = 0; i < allEn.length; i += 1) {
        allRu[i].style.display = 'block';
        allEn[i].style.display = 'none';
      }
    }
  }
}
window.addEventListener('load', getLocalStorage);
