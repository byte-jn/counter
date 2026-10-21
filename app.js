// Pixel-Art-Daten: Nur das Classic-Set bleibt aktiv.
let PIXEL_ART_DATA = null;
let PIXEL_MATRICES = {};
const pixelSvgCache = new Map();

async function loadPixelArt() {
    try {
        PIXEL_ART_DATA = {
            "version": 1,
            "spriteSize": [16, 16],
            "palette": {
                ".": "transparent",
                "K": "#20212b",
                "W": "#fff3d6",
                "B": "#3478f6",
                "C": "#46d9e8",
                "R": "#f04452",
                "Y": "#ffd34e",
                "G": "#49c66e",
                "O": "#f28c28",
                "P": "#9b65e8",
                "S": "#d4d9e5",
                "~": "#91a5bc"
            },
            "themes": {
                "classic": [
                    {
                        "name": "star",
                        "pixels": [
                            ".......Y........",
                            "......YYY.......",
                            "......YYY.......",
                            "..BBBBYYYBBBB...",
                            "...BBBBYBBB.....",
                            "....BBBBYB......",
                            ".....BBBB.......",
                            "....BBBBBBB.....",
                            "...BBBBBBBBB....",
                            "..BBBBBBBBBBB...",
                            "..BBB....BBB....",
                            ".BB........BB...",
                            "................",
                            "................",
                            "................",
                            "................"
                        ]
                    },
                    {
                        "name": "coin",
                        "pixels": [
                            ".....GGGGGG.....",
                            "...GGYYYYYYGG...",
                            "..GYYYYYYYYYYG..",
                            ".GYYYYYYYYYYYYG.",
                            ".GYYYGGYYGGYYYG.",
                            "GYYYGGYYGGYYYG..",
                            "GYYYYYYGGYYYYYG.",
                            "GYYYYYYGGYYYYYG.",
                            "GYYYGGYYGGYYYG..",
                            ".GYYYGGYYGGYYYG.",
                            ".GYYYYYYYYYYYYG.",
                            "..GYYYYYYYYYYG..",
                            "...GGYYYYYYGG...",
                            ".....GGGGGG.....",
                            "................",
                            "................"
                        ]
                    },
                    {
                        "name": "heart",
                        "pixels": [
                            "................",
                            "..RRR....RRR....",
                            ".RRRR..RRRR.....",
                            ".RRRRRRRRRRRR...",
                            "RRRRRRRRRRRRRR..",
                            "RRRRRRRRRRRRRR..",
                            "RRRRRRRRRRRRRR..",
                            "RRRRRRRRRRRRRR..",
                            "RRRRRRRRRRRRRR..",
                            ".RRRRRRRRRRRR...",
                            "..RRRRRRRRRR....",
                            "...RRRRRRRR.....",
                            "....RRRRRR......",
                            ".....RRR........",
                            "......R.........",
                            "................"
                        ]
                    },
                    {
                        "name": "gem",
                        "pixels": [
                            ".......C........",
                            "......CCC.......",
                            ".....CCCCC......",
                            "....CCWWCCC.....",
                            "...CCWWWWCCC....",
                            "..CCWWWWWWCCC...",
                            "..CCWWWWWWWWC...",
                            "..CCWWWWWWWWC...",
                            "..CCWWWWWWCCC...",
                            "...CCWWWWCCC....",
                            "....CCWWCCC.....",
                            ".....CCCCC......",
                            "......CCC.......",
                            ".......C........",
                            "................",
                            "................"
                        ]
                    },
                    {
                        "name": "mushroom",
                        "pixels": [
                            ".....RRRRRR.....",
                            "...RRRWWWWRRR...",
                            "..RRWWWWWWWWRR..",
                            ".RRWWRRWWRRWWRR.",
                            "RRWWRRRRRRRRWWRR",
                            "RRRRRRRRRRRRRRRR",
                            "..BBBBBBBBBBBB..",
                            "...BBKKBBBBKK...",
                            "...BBKKBBBBKK...",
                            "....BBBBBBBB....",
                            ".....BBBBBB.....",
                            ".....BB..BB.....",
                            ".....BB..BB.....",
                            "....BBBBBBBB....",
                            "................",
                            "................"
                        ]
                    }
                ]
            }
        };

        PIXEL_MATRICES = Object.fromEntries(
            Object.entries(PIXEL_ART_DATA.themes).map(([theme, items]) => [
                theme,
                items.map(item => item.pixels)
            ])
        );
    } catch (error) {
        console.error(error);

        PIXEL_ART_DATA = {
            palette: {
                ".": "transparent",
                "K": "#20212b",
                "W": "#fff3d6",
                "B": "#3478f6",
                "C": "#46d9e8",
                "R": "#f04452",
                "Y": "#ffd34e",
                "G": "#49c66e",
                "O": "#f28c28",
                "P": "#9b65e8",
                "S": "#d4d9e5",
                "~": "#91a5bc"
            },
            themes: {}
        };

        PIXEL_MATRICES = {};
    }
}

const PALETTE = [
    '#ef4444',
    '#f97316',
    '#f59e0b',
    '#10b981',
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899'
];

let counters = {};
let activeId = "";
let editingId = null;
let selectedColor = PALETTE[0];
let selectedPixelIdx = 0;

let primaryColor = '#3b82f6';
let isDarkMode = true;
let particlesEnabled = true;
let soundEnabled = true;

let stats = {
    totalClicks: 0,
    pageLoads: 0,
    createdCounters: 0,
    deletedCounters: 0,
    autoTriggersExecuted: 0
};

// Erstellt ein SVG aus einer Pixel-Matrix.
function getPixelSVG(matrix, color = "#ffffff", size = 24) {
    const paletteMap = PIXEL_ART_DATA?.palette || {};
    const key = `${matrix.join("|")}:${color}:${size}`;

    const cached = pixelSvgCache.get(key);
    if (cached) return cached;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const rects = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const symbol = matrix[r][c];

            if (symbol === ".") continue;

            const fill = paletteMap[symbol] || color;

            rects.push(
                `<rect x="${c}" y="${r}" width="1" height="1" fill="${fill}"/>`
            );
        }
    }

    const svg = `<svg viewBox="0 0 ${cols} ${rows}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" style="image-rendering:pixelated">${rects.join("")}</svg>`;

    if (pixelSvgCache.size > 300) {
        pixelSvgCache.clear();
    }

    pixelSvgCache.set(key, svg);
    return svg;
}

function getCounterPixelSVG(pixelIdx, color = "#ffffff", size = 24) {
    const classicMatrices = PIXEL_MATRICES.classic || [];
    if (classicMatrices.length === 0) return "";

    const numericIndex = Number.isFinite(Number(pixelIdx))
        ? Math.trunc(Number(pixelIdx))
        : 0;
    const safeIndex = Math.abs(numericIndex) % classicMatrices.length;

    return getPixelSVG(classicMatrices[safeIndex], color, size);
}

// SPEICHERVERWALTUNG
function setStorage(key, value) {
    const str = JSON.stringify(value);

    // localStorage bevorzugen, weil Cookies sehr wenig Speicherplatz haben.
    try {
        localStorage.setItem(key, str);
        return;
    } catch (e) {
        // Cookies nur als Ersatz verwenden, wenn localStorage nicht verfügbar ist.
    }

    try {
        const expires = new Date(
            Date.now() + 365 * 86400000
        ).toUTCString();

        document.cookie =
            `${key}=${encodeURIComponent(str)}; expires=${expires}; path=/; SameSite=Lax`;
    } catch (e) {
        console.error(`Speichern von "${key}" fehlgeschlagen.`, e);
    }
}

function getStorage(key) {
    // localStorage zuerst lesen, damit alte Cookies keine neuen Daten überschreiben.
    try {
        const ls = localStorage.getItem(key);

        if (ls !== null) {
            return JSON.parse(ls);
        }
    } catch (e) {}

    // Rückfall auf Cookies für Daten älterer Versionen.
    const prefix = `${key}=`;
    const cookie = document.cookie
        .split(';')
        .map(part => part.trim())
        .find(part => part.startsWith(prefix));

    if (cookie) {
        const value = cookie.slice(prefix.length);

        try {
            return JSON.parse(decodeURIComponent(value));
        } catch (e) {}
    }

    return null;
}

function initApp() {
    loadData();

    stats.pageLoads = (stats.pageLoads || 0) + 1;

    executePageLoadTriggers();
    recalculateTimeBasedCounters();
    startIntervalTriggers();

    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    applyPrimaryColor();
    lucide.createIcons();
    setupKeyboardShortcuts();
}

function loadData() {
    counters = getStorage('ce_counters') || {};
    activeId = getStorage('ce_active_id') || "";
    primaryColor = getStorage('ce_primary_color') || "#3b82f6";
    isDarkMode = getStorage('ce_darkmode') !== false;
    stats = getStorage('ce_stats') || stats;
    particlesEnabled = getStorage('ce_particles') !== false;
    soundEnabled = getStorage('ce_sound') !== false;

    if (Object.keys(counters).length === 0) {
        const defaultId = 'c_' + Date.now();

        counters[defaultId] = {
            id: defaultId,
            name: 'Standard Zähler',
            baseCount: 0,
            count: 0,
            trigger: 'none',
            pixelIdx: 0,
            color: PALETTE[5],
            lastResetTimestamp: Date.now()
        };

        stats.createdCounters = 1;
    }

    if (!activeId || !counters[activeId]) {
        activeId = Object.keys(counters)[0];
    }

    const particleToggle = document.getElementById('particleToggle');
    if (particleToggle) particleToggle.checked = particlesEnabled;

    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) soundToggle.checked = soundEnabled;
}

function saveData() {
    setStorage('ce_counters', counters);
    setStorage('ce_active_id', activeId);
    setStorage('ce_primary_color', primaryColor);
    setStorage('ce_darkmode', isDarkMode);
    setStorage('ce_stats', stats);
    setStorage('ce_particles', particlesEnabled);
    setStorage('ce_sound', soundEnabled);
}

// ZEITBASIERTE ZÄHLER
function recalculateTimeBasedCounters() {
    const now = Date.now();
    let updated = false;

    Object.values(counters).forEach(c => {
        if (
            c.trigger &&
            c.trigger !== 'none' &&
            c.trigger !== 'load'
        ) {
            const start = c.lastResetTimestamp || now;
            const elapsed = now - start;
            let increments = 0;

            if (c.trigger === '1s') {
                increments = Math.floor(elapsed / 1000);
            } else if (c.trigger === '1m') {
                increments = Math.floor(elapsed / 60000);
            } else if (c.trigger === '1d') {
                increments = Math.floor(elapsed / 86400000);
            } else if (c.trigger === '1y') {
                increments = Math.floor(elapsed / 31536000000);
            }

            const newTotal = (c.baseCount || 0) + increments;

            if (c.count !== newTotal) {
                c.count = newTotal;
                updated = true;
            }
        }
    });

    if (updated) saveData();
}

function handleRouting() {
    const hash = window.location.hash || '#/hub';

    if (hash.startsWith('#/c_')) {
        const id = hash.replace('#/', '');

        if (counters[id]) {
            activeId = id;
            saveData();
            showView('single');
            return;
        }
    }

    showView('hub');
}

function navigateTo(hash) {
    window.location.hash = hash;
}

function showView(viewName) {
    const hub = document.getElementById('hubView');
    const single = document.getElementById('singleView');
    const header = document.getElementById('hubHeader');

    if (viewName === 'single') {
        hub.classList.add('hidden');
        header.classList.add('hidden');
        single.classList.remove('hidden');
    } else {
        single.classList.add('hidden');
        hub.classList.remove('hidden');
        header.classList.remove('hidden');
    }

    renderUI();
}

function renderUI() {
    recalculateTimeBasedCounters();

    const activeCounter = counters[activeId];
    if (!activeCounter) return;

    document.getElementById('activeCounterName').innerText =
        activeCounter.name;

    document.getElementById('activeCounterName').style.color =
        activeCounter.color || primaryColor;

    document.getElementById('activeCountDisplay').innerText =
        activeCounter.count;

    document.getElementById('activeCounterPixel').innerHTML =
        getCounterSymbol(activeCounter, 64);

    const triggerBadge = document.getElementById('activeTriggerBadge');

    if (activeCounter.trigger && activeCounter.trigger !== 'none') {
        triggerBadge.classList.remove('hidden');
        triggerBadge.innerText = `⚡ Trigger: ${activeCounter.trigger}`;
    } else {
        triggerBadge.classList.add('hidden');
    }

    document.getElementById('pixelHeaderBadge').innerHTML =
        getCounterPixelSVG(0, primaryColor, 20);

    document.getElementById('brandPixel').innerHTML =
        getCounterPixelSVG(0, primaryColor, 24);

    renderHubGrid();
    renderStats();
}

function renderHubGrid() {
    const grid = document.getElementById('countersGrid');
    grid.innerHTML = '';

    Object.values(counters).forEach(c => {
        const isActive = c.id === activeId;
        const card = document.createElement('div');

        card.className = `p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group ${
            isActive
                ? 'bg-white/[0.08] border-white/30 shadow-2xl'
                : 'bg-white/[0.03] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.05]'
        }`;

        card.onclick = () => {
            activeId = c.id;
            saveData();
            navigateTo(`#/${c.id}`);
        };

        card.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 flex items-center justify-center">${getCounterSymbol(c, 28)}</div>
                    <span class="text-xs font-bold uppercase tracking-wider truncate max-w-[120px]" style="color: ${c.color || primaryColor}">${escapeHtml(c.name)}</span>
                </div>
                <div class="flex items-center gap-1">
                    <button onclick="event.stopPropagation(); openEditModal('${c.id}')" class="p-1 text-neutral-500 hover:text-white transition-colors" title="Einstellungen">
                        <i data-lucide="settings-2" class="w-3.5 h-3.5"></i>
                    </button>
                    <button onclick="event.stopPropagation(); deleteCounter('${c.id}')" class="p-1 text-neutral-500 hover:text-red-400 transition-colors" title="Löschen">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </div>

            <div class="my-6">
                <span class="font-mono-num text-5xl font-extrabold text-white">${c.count}</span>
            </div>

            <div class="flex items-center justify-between text-xs border-t border-white/[0.06] pt-3">
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-neutral-400 font-mono">
                    ${c.trigger && c.trigger !== 'none' ? 'Trigger: ' + c.trigger : 'Manuell'}
                </span>
                <button onclick="event.stopPropagation(); resetCounter('${c.id}')" class="p-1 text-neutral-500 hover:text-amber-400 transition-colors" title="Zurücksetzen">
                    <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    lucide.createIcons();
}

function renderStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;

    grid.innerHTML = `
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Klicks gesamt:</span> <strong class="text-white font-mono">${stats.totalClicks || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Seitenaufrufe:</span> <strong class="text-white font-mono">${stats.pageLoads || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Erstellte Zähler:</span> <strong class="text-white font-mono">${stats.createdCounters || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Gelöschte Zähler:</span> <strong class="text-white font-mono">${stats.deletedCounters || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Auto-Triggers:</span> <strong class="text-white font-mono">${stats.autoTriggersExecuted || 0}</strong></div>
    `;
}

function incrementActiveCounter(e) {
    if (e) e.stopPropagation();

    counters[activeId].count++;
    counters[activeId].baseCount =
        (counters[activeId].baseCount || 0) + 1;

    stats.totalClicks = (stats.totalClicks || 0) + 1;

    saveData();

    playBleepSound();

    if (particlesEnabled && e) {
        spawnParticle(e.clientX, e.clientY);
    }

    const card = document.getElementById('counterCard');

    card.classList.remove('animate-spring');
    void card.offsetWidth;
    card.classList.add('animate-spring');

    renderUI();
}

function createNewCounter() {
    const name = prompt('Name für neuen Zähler:', 'Neuer Zähler');

    if (!name || !name.trim()) return;

    const newId = 'c_' + Date.now();
    const randomColor =
        PALETTE[Math.floor(Math.random() * PALETTE.length)];

    counters[newId] = {
        id: newId,
        name: name.trim(),
        baseCount: 0,
        count: 0,
        trigger: 'none',
        pixelIdx: 0,
        color: randomColor,
        lastResetTimestamp: Date.now()
    };

    activeId = newId;

    stats.createdCounters = (stats.createdCounters || 0) + 1;

    saveData();
    renderUI();
}

function openEditModal(id) {
    editingId = id;

    const c = counters[id];
    if (!c) return;

    document.getElementById('editNameInput').value = c.name;
    document.getElementById('editValueInput').value = c.count;
    document.getElementById('editTriggerSelect').value =
        c.trigger || 'none';

    selectedColor = c.color || primaryColor;
    selectedPixelIdx = c.pixelIdx || 0;

    // Farbauswahl erstellen.
    const colorContainer = document.getElementById('colorPickerList');
    colorContainer.innerHTML = '';

    PALETTE.forEach(col => {
        const dot = document.createElement('div');

        dot.className =
            `color-dot ${col === selectedColor ? 'selected' : ''}`;

        dot.style.backgroundColor = col;

        dot.onclick = () => {
            selectedColor = col;

            document.querySelectorAll(
                '#colorPickerList .color-dot'
            ).forEach(d => d.classList.remove('selected'));

            dot.classList.add('selected');
        };

        colorContainer.appendChild(dot);
    });

    // GIF-URL-Eingabefeld bei Bedarf hinzufügen.
    let gifUrlContainer = document.getElementById('gifUrlContainer');

    if (!gifUrlContainer) {
        gifUrlContainer = document.createElement('div');
        gifUrlContainer.id = 'gifUrlContainer';
        gifUrlContainer.className = 'mb-4';

        gifUrlContainer.innerHTML = `
            <label for="gifUrlInput"
                class="block text-sm font-bold mb-2">
                Eigenes GIF als Zählersymbol (URL)
            </label>

            <input
                id="gifUrlInput"
                type="url"
                placeholder="https://example.com/animation.gif"
                class="w-full rounded-xl bg-white/5 border border-white/10
                    p-3 text-white"
            >

            <p class="text-xs text-neutral-400 mt-2">
                Füge einen direkten Link zu einem GIF oder Bild ein.
                Leeres Feld verwendet wieder das Pixel-Art-Symbol.
            </p>
        `;

        const pixelContainer =
            document.getElementById('pixelPickerList');

        pixelContainer.parentElement.insertBefore(
            gifUrlContainer,
            pixelContainer
        );
    }

    document.getElementById('gifUrlInput').value = c.gifUrl || '';

    // Classic-Symbole anzeigen.
    const pixelContainer = document.getElementById('pixelPickerList');
    pixelContainer.innerHTML = '';

    const classicMatrices = PIXEL_MATRICES.classic || [];

    classicMatrices.forEach((_, idx) => {
        const btn = document.createElement('button');

        btn.className =
            `p-2 rounded-xl flex items-center justify-center ${
                idx === selectedPixelIdx
                    ? 'bg-white/20 border border-white/40'
                    : 'hover:bg-white/10'
            }`;

        btn.innerHTML = getCounterPixelSVG(idx, selectedColor, 36);

        btn.title =
            PIXEL_ART_DATA?.themes?.classic?.[idx]?.name ||
            `Pixel-Art ${idx + 1}`;

        btn.setAttribute("aria-label", btn.title);

        btn.onclick = () => {
            selectedPixelIdx = idx;

            document.querySelectorAll(
                '#pixelPickerList button'
            ).forEach(b => {
                b.className =
                    'p-2 rounded-xl flex items-center justify-center hover:bg-white/10';
            });

            btn.className =
                'p-2 rounded-xl flex items-center justify-center bg-white/20 border border-white/40';
        };

        pixelContainer.appendChild(btn);
    });

    document.getElementById('editModal').classList.remove('hidden');
}

function saveEditModal() {
    if (!editingId || !counters[editingId]) return;

    const newName =
        document.getElementById('editNameInput').value.trim();

    const newVal = parseInt(
        document.getElementById('editValueInput').value,
        10
    );

    const newTrigger =
        document.getElementById('editTriggerSelect').value;

    const gifUrlInput = document.getElementById('gifUrlInput');
    const gifUrl = gifUrlInput ? gifUrlInput.value.trim() : '';

    if (gifUrl && !/^https?:\/\/\S+$/i.test(gifUrl)) {
        alert('Bitte gib eine gültige HTTP- oder HTTPS-URL ein.');
        return;
    }

    if (newName) {
        counters[editingId].name = newName;
    }

    const targetVal = isNaN(newVal) ? 0 : newVal;

    counters[editingId].count = targetVal;
    counters[editingId].baseCount = targetVal;
    counters[editingId].trigger = newTrigger;
    counters[editingId].color = selectedColor;
    counters[editingId].pixelIdx = selectedPixelIdx;
    counters[editingId].lastResetTimestamp = Date.now();
    counters[editingId].gifUrl = gifUrl;

    saveData();
    closeEditModal();
    renderUI();
}

function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
}

function deleteCounter(id) {
    if (Object.keys(counters).length <= 1) {
        alert('Es muss mindestens ein Zähler existieren.');
        return;
    }

    delete counters[id];

    stats.deletedCounters = (stats.deletedCounters || 0) + 1;

    if (activeId === id) {
        activeId = Object.keys(counters)[0];
    }

    saveData();
    renderUI();
}

function resetCounter(id) {
    if (counters[id]) {
        counters[id].count = 0;
        counters[id].baseCount = 0;
        counters[id].lastResetTimestamp = Date.now();

        saveData();
        renderUI();
    }
}

function applyPrimaryColor() {
    document.getElementById('btnNewCounter').style.backgroundColor =
        primaryColor;

    document.getElementById('btnSaveEdit').style.backgroundColor =
        primaryColor;

    // Farbauswahl für die App-Primärfarbe.
    const container = document.getElementById('primaryColorPicker');

    if (container) {
        container.innerHTML = '';

        PALETTE.forEach(col => {
            const dot = document.createElement('div');

            dot.className =
                `color-dot ${col === primaryColor ? 'selected' : ''}`;

            dot.style.backgroundColor = col;

            dot.onclick = () => {
                primaryColor = col;

                saveData();
                applyPrimaryColor();
                renderUI();
            };

            container.appendChild(dot);
        });
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    const body = document.getElementById('appBody');
    const box = document.getElementById('mainBox');
    const icon = document.getElementById('themeIcon');

    if (isDarkMode) {
        body.className = body.className.replace(
            'bg-neutral-200',
            'bg-[#050505]'
        );

        box.className = box.className.replace(
            'bg-white text-black',
            'bg-[#0e0e0e] text-neutral-200'
        );

        icon.setAttribute('data-lucide', 'moon');
    } else {
        body.className = body.className.replace(
            'bg-[#050505]',
            'bg-neutral-200'
        );

        box.className = box.className.replace(
            'bg-[#0e0e0e] text-neutral-200',
            'bg-white text-black'
        );

        icon.setAttribute('data-lucide', 'sun');
    }

    saveData();
    lucide.createIcons();
}

function executePageLoadTriggers() {
    Object.values(counters).forEach(c => {
        if (c.trigger === 'load') {
            c.count++;
            c.baseCount = (c.baseCount || 0) + 1;

            stats.autoTriggersExecuted =
                (stats.autoTriggersExecuted || 0) + 1;
        }
    });

    saveData();
}

function startIntervalTriggers() {
    const hasLiveTriggers = () =>
        Object.values(counters).some(c =>
            c.trigger === "1s" ||
            c.trigger === "1m" ||
            c.trigger === "1d" ||
            c.trigger === "1y"
        );

    setInterval(() => {
        if (!hasLiveTriggers()) return;

        recalculateTimeBasedCounters();
        renderUI();
    }, 1000);
}

function spawnParticle(x, y) {
    const container = document.getElementById('particleContainer');
    const p = document.createElement('div');

    p.className = 'particle';

    p.innerHTML = getCounterPixelSVG(
        counters[activeId].pixelIdx || 0,
        counters[activeId].color || primaryColor,
        32
    );

    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    container.appendChild(p);

    setTimeout(() => p.remove(), 600);
}

let audioContext = null;

function playBleepSound() {
    if (!soundEnabled) return;

    try {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return;

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const ctx = audioContext;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime;

        osc.type = "square";

        osc.frequency.setValueAtTime(
            440 + Math.random() * 200,
            now
        );

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.06
        );

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
    } catch (e) {}
}

function openSettingsModal() {
    applyPrimaryColor();

    document.getElementById('settingsModal')
        .classList.remove('hidden');
}

function closeSettingsModal() {
    document.getElementById('settingsModal')
        .classList.add('hidden');
}

function toggleParticleSetting(val) {
    particlesEnabled = val;
    saveData();
}

function toggleSoundSetting(val) {
    soundEnabled = val;
    saveData();
}

function wipeAllData() {
    if (!confirm('Wirklich ALLE Zähler und Statistiken löschen?')) return;

    // Lokale Daten und alte Cookie-Speicherungen entfernen.
    const storageKeys = [
        'ce_counters',
        'ce_active_id',
        'ce_primary_color',
        'ce_darkmode',
        'ce_stats',
        'ce_particles',
        'ce_sound',
        'ce_theme'
    ];

    storageKeys.forEach(key => {
        try {
            localStorage.removeItem(key);
        } catch (e) {}

        try {
            document.cookie = `${key}=; Max-Age=0; path=/; SameSite=Lax`;
        } catch (e) {}
    });

    window.location.reload();
}

function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            if (
                document.getElementById('singleView')
                    .classList.contains('hidden')
            ) {
                return;
            }

            e.preventDefault();

            if (!e.repeat) {
                incrementActiveCounter();
            }
        } else if (e.key === 'Escape') {
            closeSettingsModal();
            closeEditModal();
            navigateTo('#/hub');
        }
    });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function getCounterSymbol(counter, size = 32) {
    if (counter.gifUrl) {
        const url = counter.gifUrl.trim();

        if (/^https?:\/\/\S+$/i.test(url)) {
            return `<img
                src="${escapeHtml(url)}"
                alt="Zählersymbol"
                width="${size}"
                height="${size}"
                style="object-fit:contain; image-rendering:auto;"
                referrerpolicy="no-referrer"
                onerror="this.style.display='none'"
            >`;
        }
    }

    return getCounterPixelSVG(
        counter.pixelIdx || 0,
        counter.color || primaryColor,
        size
    );
}

loadPixelArt().finally(() => initApp());